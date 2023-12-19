import React, { useEffect, useState } from 'react'
import RouterApp from './routers/routerApp'
import { UtilisateurContext } from './context/utilisateur'
import axios from 'axios'



const App=()=> {
  
  const [userId,setUserId]=useState(null)

  useEffect(()=>{
    const verifytoken=async()=>{
      try {
        await axios({
          method:"get",
          url:'http://localhost:3000/veryfieuser/jwt',
          withCredentials:true
        }).then((response)=>{
          // console.log(response)
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
