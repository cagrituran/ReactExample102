import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import { control } from "./Control";



function Dashboard() {
    const navigate = useNavigate()
    const [search, setSearch] = useState('')

  useEffect(() => {
    const status = control()
    if (status === undefined){
        navigate('/')
    }
    },[])
  useEffect(() => {
    console.log(search)
    
  },[search])
  
 
  
  return (
    <>
    <NavBar></NavBar>
    <div>Dashboard</div>
    <input onChange={(evt)=>setSearch(evt.target.value) } className="form-control" placeholder="search..."></input>
    <div>{search}</div>
    </>
  )
}

export default Dashboard