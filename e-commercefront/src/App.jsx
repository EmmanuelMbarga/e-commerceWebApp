import React, { useEffect, useState } from 'react'
import RouterApp from './routers/routerApp'
import { UtilisateurContext } from './context/utilisateur'
import axios from 'axios'

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import axios from "axios"
// import './App.css'
// import logo from "../src/ImgPub/concept-marketing-medias-sociaux-pour-marketing-applications.jpg"
// import { useEffect, useState } from "react"


const App=()=> {
  // const [image1,setImage1]=useState()

  // useEffect(()=>{

  //   axios({
  //     method:"get",
  //     url:'http://localhost:3000/app/shan-ecommerce/article/acticle',
  //     withCredentials:true
  //   }).then((res)=>{
  //     // image.innerHTML=res.data[0].Image;
  //     setImage1(res.data[0].Image )
  //   })
  //   .catch((err)=>{
  //     console.log(err);
  //   })
  // },[])
       // {/* <div>
      //     <img src={image1} />
      //     <img src={logo}/>
      // </div> */}
  const [userId,setUserId]=useState(null)

  useEffect(()=>{
    const verifytoken=async()=>{
      try {
        await axios({
          method:"get",
          url:'http://localhost:3000/veryfieuser/jwt',
          withCredentials:true
        }).then((response)=>{
          console.log(response);
          setUserId(response.data)
        })
          
      } catch (error) {
        console.log(error);
        
      }
    }

    verifytoken()
  },[])

  return (
    <UtilisateurContext.Provider value={userId}>
        <RouterApp/>
        

    </UtilisateurContext.Provider>
  )
}

export default App
