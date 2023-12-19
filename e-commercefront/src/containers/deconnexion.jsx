import React from "react"
import axios from "axios"
import cookie from "js-cookie"

const DeconnexionApp=()=>{

    const handledeconnect=async()=>{
        const cookieDelete=(key)=>{
            cookie.remove(key,{expires:1})
        }

        await axios({
            method:"get",
            url:'http://localhost:3000/app/shan-ecommerce/deconnexion',
            withCredentials:true
        }).then((res)=>{
            console.log(res);
            cookieDelete("jwt")
        }).then((err)=>{
            console.log(err);
        })
    }

    return(
        <div className="cursor-pointer">
            <h1 onClick={handledeconnect} className="portable:text-[9px]">deconnexion</h1>
        </div>
    )
}

export default DeconnexionApp