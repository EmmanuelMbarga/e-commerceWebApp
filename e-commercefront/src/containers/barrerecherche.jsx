// import React, {useState} from "react"
// import { Link } from "react-router-dom"

// const Searchbar=()=>{
//     const datas=["la Beac","Billets Et Pièces"]

//     const [valeur,setValeur]=useState("")
//     const handlerchange=(e)=>{
//         setValeur((e.target.value))
//     }


//     return(
//     <div class="flex justify-end">
//         <div>
//           <input type="text" value={valeur} onChange={handlerchange} id="search" name="search" class="border border-slate-900 "/>
//           {/* <button><span>rechercher</span></button> */}
//          <ul>
//             { valeur &&
//             datas.filter((element)=>element.includes(valeur))
//             .map((element,index)=>
//                 <li key={index}><Link to={element}>{element}</Link></li>)}
//          </ul>
//          </div>
//     </div>
//   )
// }

// export default Searchbar;