import React, { useEffect, useState } from "react"
// import article from '../images/Imgvetements/chemise-noire-mot-ultra-an-dessus.jpg'
import axios from 'axios'

const ArticlesPresentation=()=>{
    const [article,setArticle]=useState('')

    useEffect(()=>{
        axios({
            method:'get',
            url:"http://localhost:3000/app/shan-ecommerce/article/acticle",
            whithCredentials:true
        }).then((res)=>{
            console.log(res);
            setArticle(res.data[0].Image)
        }).catch((err)=>{
            console.log(err);
        })
    },[])
    return(
        <div className="containerIconAffiche">
            <div className=" IconAffichecontainer">
                <img src={article} alt="article" className="IconAfficheImg" />
                <p className="IconAfficheElements">T-Shirts</p>
            </div>

            <div className=" IconAffichecontainer">
                <img src={article} alt="article" className="IconAfficheImg" />
                <p className="IconAfficheElements">Chemises</p>
            </div>

            <div className=" IconAffichecontainer">
                <img src={article} alt="article" className="IconAfficheImg" />
                <p className="IconAfficheElements">Chaussures</p>
            </div>

            <div className=" IconAffichecontainer">
                <img src={article} alt="article" className="IconAfficheImg" />
                <p className="IconAfficheElements">Robes</p>
            </div>
            
        </div>
    )
} 

export default ArticlesPresentation