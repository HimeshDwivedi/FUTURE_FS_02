import {useEffect,useState} from "react"
import axios from "axios"

function LeadList({refresh}){

  const [leads,setLeads]=useState([])

  const [search,setSearch]=useState("")

  useEffect(()=>{

    fetchLeads()

  },[refresh])

  const fetchLeads=async()=>{

    const res=await axios.get(
      "http://localhost:5000/api/leads"
    )

    setLeads(res.data)

  }

  const updateLead=async(id,data)=>{

    await axios.put(
      `http://localhost:5000/api/leads/${id}`,
      data
    )

    fetchLeads()

  }

  const deleteLead=async(id)=>{

    await axios.delete(
      `http://localhost:5000/api/leads/${id}`
    )

    fetchLeads()

  }

  const filteredLeads=leads.filter((lead)=>

    lead.name
    .toLowerCase()
    .includes(search.toLowerCase())

    ||

    lead.source
    .toLowerCase()
    .includes(search.toLowerCase())

  )

  const sourceCounts={}

  leads.forEach((lead)=>{

    sourceCounts[lead.source]=
    (sourceCounts[lead.source]||0)+1

  })

  return(

    <div className="lead-container">

      <input
        className="search-input"
        type="text"
        placeholder="Search by client or source"
        value={search}
        onChange={(e)=>
          setSearch(e.target.value)
        }
      />

      <div className="stats">

        {
          Object.entries(sourceCounts).map(
            ([source,count])=>(

            <div
              className="stat-card"
              key={source}
            >

              <h3>{source}</h3>

              <p>{count} Leads</p>

            </div>

          ))
        }

      </div>

      <h2>Client Leads</h2>

      <div className="lead-grid">

        {
          filteredLeads.map((lead)=>(

            <div
              className="lead-card"
              key={lead._id}
            >

              <h3>{lead.name}</h3>

              <p>{lead.email}</p>

              <p>
                <strong>Source:</strong>
                {" "}
                {lead.source}
              </p>

              <textarea
                placeholder="Notes"
                value={lead.notes}
                onChange={(e)=>
                  updateLead(
                    lead._id,
                    {notes:e.target.value}
                  )
                }
              ></textarea>

              <select
                value={lead.status}
                onChange={(e)=>
                  updateLead(
                    lead._id,
                    {status:e.target.value}
                  )
                }
              >

                <option>New</option>
                <option>Contacted</option>
                <option>Converted</option>

              </select>

              <button
                className="delete-btn"
                onClick={()=>
                  deleteLead(lead._id)
                }
              >
                Delete
              </button>

            </div>

          ))
        }

      </div>

    </div>

  )

}

export default LeadList