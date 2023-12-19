import React from 'react'
// import artileReduxe from '../../../images/Imgvetements/chemise/chemise-noire-mot-ultra-an-dessus.jpg'
const Articlespro=(props)=>{
    return(
        <div className="border w-72 h-94 rounded rounded-t-lg text-black cursor-pointer shadow hover:shadow-yellow-900 hover:transition-[0.1s]">
                    <div className="p-2">
                        <h1 className='font-bold'>{props.Titre1}</h1>
                        <p className="text-sm">{props.Titre2}</p>
                    </div>
                    <span className="bg-red-600 text-neutral-100 p-1">{"jusqu'a"} {props.pourcentage}</span>  
                    <img src={props.Image} alt="sneakers" className="w-72 object-cover" />
                    <p className=' text-center'>appeler</p>
       </div>
    )
}

export default Articlespro