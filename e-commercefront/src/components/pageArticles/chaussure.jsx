import React, { useEffect,useState } from "react";
import ComposantChaussureApp from "./chaussuresDoc/composantChaussure";
import Composantprix from "./chaussuresDoc/composantprix";
import Prix from "./chaussuresDoc/prix";
import Pointurechaussure from "./chaussuresDoc/pointure";
// import Pubchaussure from "./chaussuresDoc/pub"
import TitrePageApp from "../TitreApp/titre";
// import Lienchaussure from "./chaussuresDoc/lienchaussure"
import chaussureLogo from "../../images/ImgPub/fille-en-jaune.png";
import SliderPub from "./chaussuresDoc/slidePub";
import axios from "axios";
// import FouterApp from "../../Fouter/fouter"

const ChaussureApp = () => {
    const [chaussure1,setChauchaussure1]=useState('')
    const [chaussurecategorie1,setChauchaussurecategorie1]=useState('')
    const [chaussureNom1,setChauchaussureNom1]=useState('')
    const [chaussure1Prix,setChauchaussure1Prix]=useState('')
    const [chaussure1description,setChauchaussure1description]=useState('')

    const [chaussure2,setChauchaussure2]=useState('')
    const [chaussurecategorie2,setChauchaussurecategorie2]=useState('')
    const [chaussureNom2,setChauchaussureNom2]=useState('')
    const [chaussure2Prix,setChauchaussure2Prix]=useState('')
    const [chaussure2description,setChauchaussure2description]=useState('')

    const [chaussure3,setChauchaussure3]=useState('')
    const [chaussurecategorie3,setChauchaussurecategorie3]=useState('')
    const [chaussureNom3,setChauchaussureNom3]=useState('')
    const [chaussure3Prix,setChauchaussure3Prix]=useState('')
    const [chaussure3description,setChauchaussure3description]=useState('')

    const [chaussure4,setChauchaussure4]=useState('')
    const [chaussurecategorie4,setChauchaussurecategorie4]=useState('')
    const [chaussureNom4,setChauchaussureNom4]=useState('')
    const [chaussure4Prix,setChauchaussure4Prix]=useState('')
    const [chaussure4description,setChauchaussure4description]=useState('')

    const [chaussure5,setChauchaussure5]=useState('')
    const [chaussurecategorie5,setChauchaussurecategorie5]=useState('')
    const [chaussureNom5,setChauchaussureNom5]=useState('')
    const [chaussure5Prix,setChauchaussure5Prix]=useState('')
    const [chaussure5description,setChauchaussure5description]=useState('')

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3000/app/shan-ecommerce/article/acticle",
      whithCredentials: true,
    })
      .then((res) => {
        console.log(res);
        setChauchaussure1(res.data[3].Image)
        setChauchaussureNom1(res.data[3].nom)
        setChauchaussure1Prix(res.data[3].prix)
        setChauchaussure1description(res.data[3].description)
        setChauchaussurecategorie1(res.data[3].cathegorie)

        setChauchaussure2(res.data[4].Image)
        setChauchaussureNom2(res.data[4].nom)
        setChauchaussure2Prix(res.data[4].prix)
        setChauchaussure2description(res.data[4].description)
        setChauchaussurecategorie2(res.data[4].cathegorie)

        setChauchaussure3(res.data[5].Image)
        setChauchaussureNom3(res.data[5].nom)
        setChauchaussure3Prix(res.data[5].prix)
        setChauchaussure3description(res.data[5].description)
        setChauchaussurecategorie3(res.data[5].cathegorie)

        setChauchaussure4(res.data[6].Image)
        setChauchaussureNom4(res.data[6].nom)
        setChauchaussure4Prix(res.data[6].prix)
        setChauchaussure4description(res.data[6].description)
        setChauchaussurecategorie4(res.data[6].cathegorie)

        setChauchaussure5(res.data[7].Image)
        setChauchaussureNom5(res.data[7].nom)
        setChauchaussure5Prix(res.data[7].prix)
        setChauchaussure5description(res.data[7].description)
        setChauchaussurecategorie5(res.data[7].cathegorie)
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <div>
      <div className="mt-0 my-20 w-[100%] relative flex items-center justify-center bg-gradient-to-r from-orange-600 to-yellow-200">
        <TitrePageApp
          Image={chaussureLogo}
          Titre1="Le coin des bonnes chaussures !!"
          Titre2="Retrouve les meilleurs paires de baskets qui illumineront ton quotidient"
        />
      </div>

      <div className="mb-[12rem] flex ">
        <div className="w-[14%] ml-2 border-[1px] border-yellow-600 ">
          <h1 className="border-b-[1px] border-yellow-600 text-center  h-80 pt-36 text-2xl">
            Prix TTC
          </h1>
          <Composantprix />
          <Prix min="10k" max="20k" />
          <Prix min="30k" max="40k" />
          <Prix min="70k" max="90k" />

          <div>
            <h1 className="text-center">Taille</h1>
            {/* <Composantprix/> */}
            <Pointurechaussure pointure="10''- 20''" />
            <Pointurechaussure pointure="20''- 30''" />
            <Pointurechaussure pointure="30''- 40''" />
            <Pointurechaussure pointure="50''- 60''" />
            <Pointurechaussure pointure="70''- 100''" />
          </div>

          {/* <div > */}
          {/* <h1 className="border-t-2 text-center">pub partenaire</h1> */}
          {/* <Composantprix/> */}
          {/* <Pubchaussure/> */}
          {/* </div> */}
        </div>

        <div className="w-[71%] border-[1px] border-yellow-600 ">
          <SliderPub />
          <div className="h-[500px] border-y-[1px] p-2 bg-neutral-100 border-yellow-600 overflow-y-scroll ">
            <ComposantChaussureApp
              chaussureImg={chaussure1}
              nom={chaussureNom1}
              type={chaussurecategorie1}
              description={chaussure1description}
              quanti=""
              prix={chaussure1Prix}
            >
              https://hter.link/BxSb6
            </ComposantChaussureApp>
            <ComposantChaussureApp
              chaussureImg={chaussure2}
              nom={chaussureNom2}
              type={chaussurecategorie2}
              description={chaussure2description}
              quanti=""
              prix={chaussure2Prix}
            >
              https://hter.link/jxmhN
            </ComposantChaussureApp>
            <ComposantChaussureApp 
              chaussureImg={chaussure3}
              nom={chaussureNom3}
              type={chaussurecategorie3}
              description={chaussure3description}
              quanti=""
              prix={chaussure3Prix}>

              </ComposantChaussureApp>
              <ComposantChaussureApp 
              chaussureImg={chaussure4}
              nom={chaussureNom4}
              type={chaussurecategorie4}
              description={chaussure4description}
              quanti=""
              prix={chaussure4Prix}>
              </ComposantChaussureApp>
                <ComposantChaussureApp 
                chaussureImg={chaussure5}
                nom={chaussureNom5}
                type={chaussurecategorie5}
                description={chaussure5description}
                quanti=""
                prix={chaussure5Prix}/>
                        {/* <ComposantChaussureApp nom="Aribo" type="Nike" description="Lorem ipsum dolor sit." quanti="36" prix="1200"/> */}
                        {/* <ComposantChaussureApp nom="Aribo" type="Nike" description="Lorem ipsum dolor sit." quanti="36" prix="1200"/> */}
                        {/* <ComposantChaussureApp nom="Aribo" type="Nike" description="Lorem ipsum dolor sit." quanti="36" prix="1200"/> */}
                        {/* <ComposantChaussureApp nom="Aribo" type="Nike" description="Lorem ipsum dolor sit." quanti="36" prix="1200"/> */}
                        {/* <ComposantChaussureApp nom="Aribo" type="Nike" description="Lorem ipsum dolor sit." quanti="36" prix="1200"/> */}
                        {/* <ComposantChaussureApp nom="Aribo" type="Nike" description="Lorem ipsum dolor sit." quanti="36" prix="1200"/> */}
                        {/* <ComposantChaussureApp nom="Aribo" type="Nike" description="Lorem ipsum dolor sit." quanti="36" prix="1200"/> */}
          </div>
          {/* <Lienchaussure/> */}
        </div>

        <div className="w-[12%] border-[1px] border-yellow-600">
          <div className="h-36 text-center">
            <h1 className="border-b-[1px] border-yellow-600 text-xl text-yellow-600">
              pub
            </h1>
          </div>
        </div>
      </div>
      {/* <FouterApp/> */}
    </div>
  );
};

export default ChaussureApp;
