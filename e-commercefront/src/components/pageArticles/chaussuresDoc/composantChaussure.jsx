import React from "react"
// import Article2 from "../../../images/Imgvetements/chaussure/newarribochaussure.jpeg"
// import {PaymentOperation, RandomGenerator} from '@hachther/mesomb-browser';
// import {Link} from "react-router-dom"
const ComposantChaussureApp=(props)=>{
    
    // const handlerPaiement=async()=>{
    //     const payment = new PaymentOperation({applicationKey: 'f7ff8a75fa4f3c3447a985bc1e6affc46a23b190', accessKey: 'e6efe6d4-15cc-4dbc-be70-34dd57a11be3', secretKey: '91546915-9b70-4f24-9f37-cbfb80b6f131'});
    //     const response = await payment.makeDeposit({amount: 1500, service: 'ORANGE', receiver: '698397075', nonce: RandomGenerator.nonce()});
    //     console.log(response.isOperationSuccess());
    //     console.log(response.isTransactionSuccess());
    // }

    // const handlerPaiement=async(e)=>{
    //     if(e.target.id=='10000'){
    //         console.log('https://hter.link/BxSb6')
    //     }else{
    //         console.log("error");
    //     }
    //     onClick={handlerPaiement} id="10000" 
    // }


    //ici L'API fonctionne bien en mode developpement 

    // const handlerPaiement = async () => {
    //     try {
    //         const payment = new PaymentOperation({ applicationKey:'f7ff8a75fa4f3c3447a985bc1e6affc46a23b190', accessKey:'e6efe6d4-15cc-4dbc-be70-34dd57a11be3', secretKey: '91546915-9b70-4f24-9f37-cbfb80b6f131' });
    //         const response = await payment.makeCollect({ amount: 100, service: 'ORANGE', payer: '400001020', nonce: RandomGenerator.nonce() });

    //         // Ajoutez une gestion plus avancée des résultats, par exemple, un message à l'utilisateur
    //         if (response.isOperationSuccess() && response.isTransactionSuccess()) {
    //             console.log('Paiement réussi!');
    //         } else {
    //             console.error('Échec du paiement:', response.getError());
    //         }
    //     } catch (error) {
    //         console.error('Erreur lors du paiement:', error);
    //     }
    // }
    return(
            <>
                        <div className="flex p-2 hover:border-b-[2px] hover:bg-yellow-600 hover:bg-opacity-60 hover:transition-[0.7s] ">
                            <img src={props.chaussureImg} alt="chaussure" className="w-[15rem] h-[11rem] mr-10 object-cover" />
                            <div className="flex items-center justify-items-center">
                                <div className="mr-44">
                                    <span className="flex text-sm">nom:<p className="ml-1">{props.nom}</p></span>
                                    <span className="flex text-sm">Type:<p className="ml-1">{props.type}</p></span>
                                <div className="w-[130%]">
                                    <span className="flex text-sm">Description:<p className="ml-1">{props.description}</p></span></div>
                                    {/* <span className="flex text-sm">Quantité:<p className="ml-1">{props.quanti}</p></span> */}
                                    <span className="flex text-sm">Prix:<p className="ml-1"></p>{props.prix}FCFA</span>
                                </div>
                                <div>
                                    {/* <button className="border-2 bg-neutral-50 p-1 px-2 text-base rounded hover:bg-black hover:text-white"><a href="https://hter.link/BxSb6" target="-blank"> acheter</a></button> */}
                                    
                                    {/* <button onClick={handlerPaiement} className="border-2 bg-neutral-50 p-1 px-2 text-base rounded hover:bg-black hover:text-white">acheter</button> */}

                                    <button className="border-2 bg-neutral-50 p-1 px-2 text-base rounded hover:bg-black hover:text-white"><a href={props.children}>acheter</a></button>

                                    {/* <Link to={"/paiement"}>
                                        <button className="border-2 bg-neutral-50 p-1 px-2 text-base rounded hover:bg-black hover:text-white"> acheter</button>
                                    </Link> */}

                                </div>
                            </div>
                        </div>
            </>
    )
} 

export default ComposantChaussureApp