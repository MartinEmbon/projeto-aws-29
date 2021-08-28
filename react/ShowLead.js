import React, {useState, useEffect} from "react"
import axios from "axios";
import { useCssHandles } from "vtex.css-handles"

import "./showLead.css"

const CSS_HANDLES = [
    "listContainer",
    "listTitle",
    "listTable",
    "btnLeads"]


const showLead = () => {
    const handles = useCssHandles(CSS_HANDLES)    

    const [leads,setLeads]=useState(null)

    useEffect(()=>{
        axios.get('https://89xudou1d2.execute-api.sa-east-1.amazonaws.com/prod/leads')  
        .then((response)=>{
            console.log(response.data.leads) 
            setLeads(response.data.leads)
        })
    },[])
  
    return(
        <div className={`${handles.listContainer}`}>        
        <h2 className={`${handles.listTitle}`}>Lista de Leads</h2>
        {!leads ? ("Verificando leads existentes..."):(
            <table className={`${handles.listTable}`}>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Tipo (Prospecto ou Cliente</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        leads.map((lead,index)=>(
                            <tr key={index}>
                                <td>{lead.email}</td>
                                <td>{index}</td>
                            </tr>                            
                        ))                        
                    }            
                </tbody>
            </table>
            )}        
        </div>
    )
  
    showLead.schema = {
        title: 'editor.showLead.title',
        description: 'editor.showLed.description',
        type: 'object',
        properties: {},
      }

}

export default showLead
    
/*
const handleSubmit = (e) =>{
      e.preventDefault()
      axios.get('https://89xudou1d2.execute-api.sa-east-1.amazonaws.com/prod/leads')
      .then((response)=>{
           const datab = response.data.leads;           
           const databList=datab.map(field=><h2>{field}</h2>)
           console.log(datab)
      })
      .catch(function (error) {
          console.log(error);
      });
              
          }
  

{amigos.map((amigo,index)=> <li key={index}>{amigo}</li>)}
*/