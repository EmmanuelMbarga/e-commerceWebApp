import React from 'react'
const TitrePageApp=(props)=>{
    return(
        <>
             {/* <div className="mt-0 my-20 w-[100%] relative flex items-center justify-center bg-gradient-to-r from-orange-600 to-yellow-200"> */}
                <div className='w-[40%]'>
                    <h1 className="text-5xl text-center ">{props.Titre1}</h1>
                    <h2 className="text-base text-center">{props.Titre2}</h2>
                </div>
                <img src={props.Image} className='w-[600px]'/>
             {/* </div> */}
        </>
      
    )
} 

export default TitrePageApp