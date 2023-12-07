import React from 'react'

const FouterApp=()=>{

   
    return(
    <div className='bg-neutral-700 text-white border-t-2 border-yellow-700'>
       <h1 className='text-center p-2 text-xl border-b-2 border-white'> Vous avez déjà trouvé ? Alors, achetez votre produit directement sur la boutique .</h1>
    <div className='flex px-20'>
        <div className='text-sm mr-16'>
            <p className='my-2'>Pays/Région :  Cameroun</p>
            <p className='my-2'>Qui sommes-nous</p>
            <p className='my-2'>Relations avec les investisseurs</p>
            <p className='my-2'>Acheter en ligne</p>
        </div>
        <div className='text-sm'>
            <p className='my-2'>Enregistrer votre produit</p>
            <p className='my-2'>Restez connecté</p>

        </div>
        
    </div>
    <div className=' mx-6'>
            <p className='mt-10 text-xs'>{"Rappels| Accessibilité| Index Egalité Professionnelle| Confidentialité| Publicité & cookies| Droits relatifs à vos données personnelles| Conditions d'utilisation| Garantie consommateur légale| Déclaration de garantie limitée. , L.P. Les informations contenues dans le présent document peuvent être modifiées à tout moment et sans préaviss"}</p>
            <p className='text-center py-10'>{"©2023 by EmmanuelMbarga "}</p>
        </div>

    </div>
    )
    
} 

export default FouterApp