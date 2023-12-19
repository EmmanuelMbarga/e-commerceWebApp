import React, { useEffect, useState } from "react"
// import article2 from '../images/ImgPub/imgPub3.jpg'
import {Link} from "react-router-dom"
import axios from 'axios'
import { UtilisateurContext } from "../context/utilisateur"
import { useContext } from "react"
// import Profilpage from "../pages/profil"
// import InscriptionApp from "./Inscription"




const ArticlesPresentation=()=>{
    const userId=useContext(UtilisateurContext)
    // const [isloading,setIsloading]=useState()
    const [article1,setArticle1]=useState('')
    const [article2,setArticle2]=useState('')
    const [article3,setArticle3]=useState('')

    // const handlechick=(e)=>{
    //     console.log(e);
    // }

    useEffect(()=>{
        // setIsloading(article2)
        axios({
            method:'get',
            url:"http://localhost:3000/app/shan-ecommerce/article/acticle",
            whithCredentials:true
        }).then((res)=>{
            // console.log(res);
            setArticle1(res.data[0].Image)
            setArticle2(res.data[1].Image)
            setArticle3(res.data[2].Image)
        }).catch((err)=>{
            console.log(err);
        })
    },[])
    return(
            <>
            <div className="containerIconAffiche">
            {/* <div className=" IconAffichecontainer">
                {isloading ? (<img src={isloading} className="IconAfficheImg"/>) :(
                    <>
                        <img src={article} alt="article" className="IconAfficheImg" />
                    </>
                )
                
                }
                <p className="IconAfficheElements">T-Shirts</p>
            </div> */}
                {userId ? (
                    <>
                        <Link to={"/app/T-shirts"}>
                        <div className=" IconAffichecontainer">
                            <img src={article1} alt="article" className="IconAfficheImg" />
                            <p className="IconAfficheElements">T-shirts</p>
                        </div>
                        </Link>

                        <Link to={"/app/chaussures"}>
                        <div className=" IconAffichecontainer">
                            <img src={article2} alt="article" className="IconAfficheImg" />
                            <p className="IconAfficheElements">Chaussures</p>
                        </div>
                        </Link>

                        <Link to={"/app/Robes"}>
                        <div className=" IconAffichecontainer">
                            <img src={article3} alt="article" className="IconAfficheImg" />
                            <p className="IconAfficheElements">Robes</p>
                        </div>
                        </Link>
                    </>
                ) : (
                    <>
                        <Link to={"/authentification-App"}>
                        <div className=" IconAffichecontainer">
                            <img src={article1} alt="article" className="IconAfficheImg" />
                            <p className="IconAfficheElements">T-shirts</p>
                        </div>
                        </Link>

                        <Link to={"/authentification-App"}>
                        <div className=" IconAffichecontainer">
                            <img src={article2} alt="article" className="IconAfficheImg" />
                            <p className="IconAfficheElements">Chaussures</p>
                        </div>
                        </Link>

                        <Link to={"/authentification-App"}>
                        <div className=" IconAffichecontainer">
                            <img src={article3} alt="article" className="IconAfficheImg" />
                            <p className="IconAfficheElements">Robes</p>
                        </div>
                        </Link>
                    </>
                )}
                
                
                
                
                
            
        </div>
        </>
    )
} 

export default ArticlesPresentation