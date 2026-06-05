import {useState} from "react"
import axios from "axios"

function LeadForm({refresh,setRefresh}){

  const [formData,setFormData]=useState({
    name:"",
    email:"",
    source:""
  })

  const handleChange=(e)=>{

    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })

  }

  const handleSubmit=async(e)=>{

    e.preventDefault()

    await axios.post(
      "https://crm-backend-1zao.onrender.com/api/leads",
      formData
    )

    alert("Lead Added")

    setRefresh(!refresh)

    setFormData({
      name:"",
      email:"",
      source:""
    })

  }

  return(

    <form onSubmit={handleSubmit}>

      <input
        type="text"
        name="name"
        placeholder="Client Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Client Email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="source"
        placeholder="Lead Source"
        value={formData.source}
        onChange={handleChange}
        required
      />

      <button type="submit">
        Add Lead
      </button>

    </form>

  )

}

export default LeadForm