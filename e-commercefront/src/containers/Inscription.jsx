import React, { useState } from "react"
import axios from 'axios'
import ConnexionApp from "./connexion"

const InscriptionApp=()=>{

    const [nom,setNom]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [controlpassword,setControlpassword]=useState('')
    const [prenom,setPrenom]=useState('')
    const [successFom,setSuccessForm]=useState()
    //les erreurs
    const nomerror=document.querySelector('.ErrorName')
    const prenomerror=document.querySelector('.ErrorPrenom')
    const emailerror=document.querySelector('.ErrorEmail')
    const passworderror=document.querySelector('.Errorpassword')
    const passworderrorConfirm=document.querySelector('.ErrorConfirmpassword')
    const checkerror=document.querySelector('.Errorchek')
    const checkbox=document.getElementById('checkebox')
    

    const handleconnect=async(e)=>{
        passworderrorConfirm.innerHTML=""
        checkerror.innerHTML=""

        e.preventDefault()
        if (password !== controlpassword || checkbox.checked==false) {
            if (password !== controlpassword) {
                passworderrorConfirm.innerHTML='le mot de passe ne correspond pas'
            }
            if (checkbox.checked==false) {
                checkerror.innerHTML="veuillez accepter les conditions générales"
            }
        } else{
            await axios({
                method:"post",
                url:"http://localhost:3000/app/shan-ecommerce/enregistrer",
                withCredentials:true,
                data:{
                    nom,
                    prenom,
                    email,
                    password
                }
            }).then((res)=>{
                console.log(res);
                setSuccessForm(res.data)
            }).catch((err)=>{
                // console.log(err);
                nomerror.innerHTML=err.response.data.errorUser.nom;
                prenomerror.innerHTML=err.response.data.errorUser.prenom;
                emailerror.innerHTML=err.response.data.errorUser.email;
                passworderror.innerHTML=err.response.data.errorUser.password;
            })
        }



    }

    return(
        <>
        {successFom ? (
            <>
                <ConnexionApp/>
                <div className="relative mt-64 p-2">
                    <p className="text-green-600 absolute -left-52">inscription reussie!!</p>
                </div>
            </>
        ) : (
            <div>
            <h1 className="titleform">Inscription</h1>
            <form onSubmit={handleconnect} className="mt-6">

                <div>
                    <label htmlFor="nom">entrez votre nom</label>
                    <br/>
                    <input type="text" name="nom" id="nom" className="formcontainer" onChange={(e)=>{
                        setNom(e.target.value)
                    }} value={nom}/>
                </div>
                <p className="ErrorName"></p>
                <br/>

                <div>
                    <label htmlFor="Prenom">entrez votre Prenom</label>
                    <br/>
                    <input type="text" name="Prenom" id="Prenom" className="formcontainer" onChange={(e)=>{
                        setPrenom(e.target.value)
                    }} value={prenom}/>
                </div>
                <p className="ErrorPrenom"></p>
                <br/>


                <div>
                    <label htmlFor="email">entrez votre email</label>
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
                <br/>

                <div>
                    <label htmlFor="passwordConf">confirmer le mot de passe</label>
                    <br/>
                    <input type="password" name="password" id="passwordConf" className="formcontainer" onChange={(e)=>{
                        setControlpassword(e.target.value)
                    }} value={controlpassword}/>
                </div> 
                <p className="ErrorConfirmpassword"></p>
                <br/>

                <div className=" flex justify-items-center text-[9px]">
                        <input type="checkbox" name="checkebox" id="checkebox" className="border mr-2"/>
                        <label htmlFor="checkebox text-center ">{"j'accepte"} les conditions générales et la politique de confidentialité de ce site </label>
                </div>
                <p className="Errorchek"></p>


                <input type="submit" value={"s'inscrire"} className="Btnconnexion"/>
            </form>
        </div>
        )}
         
    </>
       
    )
} 


export default InscriptionApp