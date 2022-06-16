import React from "react"
import'./login.css'

const login =()=>{
    return(
        <div className="user">
            <h1 > login</h1>
            <div className="acessarApp"> <hi>acessar Site</hi>
            </div>
               <div className="loginInputemail">
                <input
                type="text"
                 placeholder="Digite o seu Email"
                 />
                 <div className="senhaInput">
                    <input
                    type="text"
                    placeholder="Digite o sua senha"
                    />

                 </div>

             </div> 

             </div>
             
    ) 
}

export default login