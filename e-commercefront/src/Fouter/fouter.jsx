import React from 'react'
import Logowhatsapp from "../images/RETOUCHESLOGO/Fichier 2.png"
import LogoIn from "../images/RETOUCHESLOGO/Fichier 9.png"
import Logospotify from "../images/RETOUCHESLOGO/Fichier 11.png"
import Logotelegram from "../images/RETOUCHESLOGO/Fichier 22.png"

const FouterApp=()=>{

   
    return(
    <div className='bg-neutral-700 text-white border-t-2 border-yellow-700'>
       <h1 className='text-center p-2 text-2xl border-b-2 border-white py-7'> Vous avez déjà trouvé ? Alors, achetez votre produit directement sur la boutique .</h1>
       <div>
            <p className='my-2 mx-20 text-sm  border-b-2 w-[70rem] py-3'>Pays/Région :  Cameroun</p>
        </div>
    <div className='flex px-20 items-center justify-items-center my-10'>  
        <div className='text-sm mr-16'>  
            <p className='my-2'>Qui sommes-nous</p>
            <p className='my-2'>Relations avec les investisseurs</p>
            <p className='my-2'>Acheter en ligne</p>
        </div>
        <div className='text-sm mr-[20rem]'>
            <p className='my-2'>Enregistrer votre produit</p>
            <p className='my-2'>Restez connecté</p>

        </div>

        <div className='justify-between'>
            <div className='w-28'>
                <h2>Nos reseaux</h2>
            </div>
            <div className='flex w-12 pt-3'>
            <img src={Logowhatsapp} alt='reseau'/>
            <img src={LogoIn} alt='reseau' className='mx-2'/>
            <img src={Logospotify} alt='reseau'/>
            <img src={Logotelegram} alt='reseau'className='mx-2'/>
            </div>
            
        </div>
        
    </div>
    <div className=' mx-20 border-t-2 w-[70rem] border-white'>
            <p className=' text-xs py-4'>{"Rappels| Accessibilité| Index Egalité Professionnelle| Confidentialité| Publicité & cookies| Droits relatifs à vos données personnelles| Conditions d'utilisation| Garantie consommateur légale| Déclaration de garantie limitée. , L.P. Les informations contenues dans le présent document peuvent être modifiées à tout moment et sans préaviss"}</p>
            <p className='text-center py-10'>{"©2023 by EmmanuelMbarga "}</p>
        </div>

    </div>
    )
    
} 

export default FouterApp