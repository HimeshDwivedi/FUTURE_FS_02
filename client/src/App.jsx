import {BrowserRouter,Routes,Route} from "react-router-dom"

import Login from "./pages/Login"
import ProtectedRoute from "./components/ProtectedRoute"

import LeadForm from "./components/LeadForm"
import LeadList from "./components/LeadList"

import {useState} from "react"

function Dashboard(){

  const[refresh,setRefresh]=useState(false)

  const logout=()=>{
    localStorage.removeItem("token")
    window.location.href="/login"
  }

  return(
    <div>

      <nav className="navbar">
        <h2>CRM Dashboard</h2>

        <button onClick={logout}>
          Logout
        </button>
      </nav>

      <LeadForm setRefresh={setRefresh}/>

      <LeadList refresh={refresh}/>
    </div>
  )
}

function App(){

  return(
    <BrowserRouter>

      <Routes>

        <Route
          path="/login"
          element={<Login/>}
        />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App