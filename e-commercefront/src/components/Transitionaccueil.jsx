import React from 'react'
import logo from "../images/RETOUCHESLOGO/10.png"


const TransitionApp=()=>{
    return(
        <>
        <div className='my-24 mx-3'>
            <div className='border-b-[3px] border-yellow-900 flex items-center justify-items-center'>
                <h1 className='text-4xl p-4 text-blue-900'>Bienvenu chez Austin Shop</h1>
                <img src={logo} alt='logo' className='w-36'/>
            </div>
            <div>
                <h1 className='text-2xl p-2 ml-7 text-yellow-900'>Que voulez vous ?</h1>
            </div>
        </div>
            
        </>
    )
} 

export default TransitionApp