import React, {useState} from "react"
import axios from "axios";
import { useCssHandles } from "vtex.css-handles"

import "./index.css"

const CSS_HANDLES = ["arrow","inputFormat","leftText","container", "emailInput","formStyle","btnSend"]


const leadInput = () => {
   
   const [email,setEmail]=useState("")
  
   const handles = useCssHandles(CSS_HANDLES)    
  
  const handleSubmit = e => {
    e.preventDefault();
  //  email.value=""
    const data = {      
      email
    };
    axios
      .post("https://89xudou1d2.execute-api.sa-east-1.amazonaws.com/prod/lead", data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
      
window.location = "/"
  };

   
   
    return (
        
        <div className={`${handles.container}`}>
            <div className={`${handles.leftText}`}>
                <h3>Amazon News</h3>
                <p>Sign up for the latest news, facts, analysis, and original stories about Amazon delivered to you.</p>
            </div>
        
        <div className={`${handles.inputFormat}`}>

        <form className={`${handles.formStyle}`} onSubmit={handleSubmit}>          
        
        <input
          type="email" name="email"
            className={`${handles.emailInput}`}
            placeholder="Enter email" value={email}
            onChange={(e)=>setEmail(e.target.value)} required
          />          
          <button
          className={`${handles.btnSend}`}
          type="submit">&#8594;</button>
                 
        </form>
        <p>The Google Privacy Policy and Terms of Service apply.  Privacy Policy | Opt out anytime</p>
        </div>  
      </div>
    )
}

export default leadInput