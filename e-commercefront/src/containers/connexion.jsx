import axios from "axios"
import React, { useState } from "react"


const ConnexionApp=()=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const handleconnexion=(e)=>{
        e.preventDefault()

        const erreuremail=document.querySelector('.ErrorEmail')
        const erreurpassword=document.querySelector('.Errorpassword')
        axios({
            method:'post',
            url:"http://localhost:3000/app/shan-ecommerce/connexion",
            withCredentials:true,
            data:{
                email,
                password,
            }
        }).then((res)=>{
            console.log(res);
            window.location="/"
        }).catch((err)=>{
            erreuremail.innerHTML=err.response.data.errConnexion.email;
            erreurpassword.innerHTML=err.response.data.errConnexion.password;
        })
    }
    return(
        <div>
                <h1 className="titleform">Connexion</h1>
                <form onSubmit={handleconnexion} className="mt-6">

                <div>
                    <label htmlFor="email">entrez votre Email</label>
                    <br/>
                    <input type="email" name="email" id="email" className="formcontainer" onChange={(e)=>{
                        setEmail(e.target.value)
                    }} value={email}/>
                </div>
                <p className="ErrorEmail"></p>
                <br/>

                <div>
                    <label htmlFor="password">mot de passe</label>
                    <br/>
                    <input type="password" name="password" id="password" className="formcontainer" onChange={(e)=>{
                        setPassword(e.target.value)
                    }} value={password}/>
                </div>
                <p className="Errorpassword"></p>
                

                <input type="submit" value={"se connecter"} className="Btnconnexion"/>
            </form>
        </div>
    )
} 


export default ConnexionApp