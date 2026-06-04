import {useState} from "react"

import LeadForm from "./components/LeadForm"
import LeadList from "./components/LeadList"

function App(){

  const [refresh,setRefresh]=useState(false)

  return(

    <div className="app">

      <h1>Client Lead Management System</h1>

      <LeadForm
        refresh={refresh}
        setRefresh={setRefresh}
      />

      <LeadList refresh={refresh}/>

      <footer>
        © 2026 Client Lead Management System | Developed By Himesh Kumar Dwivedi
      </footer>

    </div>

  )

}

export default App