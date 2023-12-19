import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import slider1 from "../images/Imgvetements/slide1Logo.jpg";
import slider2 from "../images/Imgvetements/hommehabitrouge.jpg";
import slider3 from "../images/Imgvetements/Logo3.jpg"
import slider4 from "../images/ImgPub/contactAssist.jpg"
import slider5 from "../images/Imgvetements/paire-chaussures-sport-generee-par-ai.jpg"
import slider6 from "../images/Imgvetements/portrait-homme-afro-americain-noir-elegant-au-chapeau-lunettes-fond-bleu.jpg"
// import Navbar from "../Navbar/navbarfile";
const SliderPub = () => {
  return (
    <>
      <div className="mx-3 font-Nunito portable:mx-1">
        <Carousel
          infiniteLoop={true}
            autoPlay={600}
            interval={4000}
            showStatus={false}
          
        >
          <div className="slideLogo text-left portable:w-[100%]">
            <img
              src={slider1}
              alt="logoimg"
              className="h-[550px] w-[100%] object-top object-cover portable:h-52"
            />

            <div className="">
              <div className="bg-teal-500 portable:bg-teal-400">
                <h1 className="text-2xl text-white p-2 capitalize ml-10 portable:text-sm ">
                  decouvrez les tendances du moment avec la nouvelle game
                  skrilanka
                </h1>
              </div>
              <div className="bg-teal-900 border-t-2 ">
                <h1 className=" text-white p-2 text-lg ml-10 portable:p-1 portable:text-sm">
                  decouvrez les tendances du moment avec la nouvelle game
                  skrilanka
                </h1>
                <div className="text-black pb-2 ml-12 portable:">
                  <button className="border bg-white mr-3 p-2 portable:p-1 portable:text-sm">
                    en savoir plus
                  </button>
                  <button className="border bg-white p-2 portable:p-1 portable:text-sm">acheter</button>
                </div>
              </div>
            </div>
          </div>

          <div className="portable:w-[100%]">
            <div className="h-96 ">
              
              <img
                src={slider2}
                alt="logoimg"
                className="h-[691px] w-[100%] object-top object-cover portable:h-[350px] portable:object-top "
              />

              <div className="relative z-20 -top-[700px] portable:-top-[355px] ">
              <div className="bg-red-600 w-[39%] p-10 portable:p-2 portable:bg-sky-900 ">
                <h1 className="presentationcarousel">
                  Regardez, essayez et santez vous bien
                </h1>
              </div>
              <div className="bg-red-200 w-[39%]  h-[30rem]  ">
                <h1 className="presentationcarousel2" >
                  Decouvrez la nouvelle game xpix pensez et cree pour vous
                </h1>
                <button className="text-white border-black bg-black p-2 text-xl m-10 portable:text-[9px] portable:p-0">lire plus</button>
              </div>
              </div>
              
            </div>
          </div>

          <div className="portable:w-[100%]">
            <div className="h-96">
              
              <img
                src={slider3}
                alt="logoimg"
                className="h-[691px] w-[100%] object-top object-cover"
              />

              <div className="relative z-20 -top-[700px]">
              <div className="presentationcarousel3">
                <h1 className="presentationcarousel">
                  changez et viser la taille qui vous correspond
                </h1>
              </div>
              <div className="bg-green-200 w-[39%]  h-[29.8rem] ">
                <h1 className="presentationcarousel2" >
                  Decouvrez la nouvelle game xpix pensez et cree pour vous
                </h1>
                <button className="text-white border-black bg-black p-2 text-xl m-10 ">lire plus</button>
              </div>
              </div>
              
            </div>
          </div>

          <div className="portable:w-[100%]">
            <div className="h-96">
              
              <img
                src={slider4}
                alt="logoimg"
                className="h-[691px] w-[100%] object-top object-cover"
              />

              <div className="relative z-20 -top-[700px] text-neutral-50">
              <div className="bg-blue-900 w-[39%] p-10">
                <h1 className="presentationcarousel">
                  Contactez nous en cas de besoin ou {"d'orientation"}!!
                </h1>
              </div>
              <div className="bg-blue-200 w-[39%]  h-[29.8rem]  ">
                <h1 className="presentationcarousel2" >
                  Decouvrez la nouvelle game xpix pensez et cree pour vous
                </h1>
                <button className="text-white border-black bg-black p-2 text-xl m-10">lire plus</button>
              </div>
              </div>
              
            </div>
          </div>

          <div className="portable:w-[100%]">
            <div className="h-96">
              
              <img
                src={slider5}
                alt="logoimg"
                className="h-[691px] w-[100%] object-top object-cover"
              />

              <div className="relative z-20 -top-[700px]">
              <div className="bg-black bg-opacity-20 h-[14rem] text-neutral-50 w-[39%] p-10">
                <h1 className="presentationcarousel">
                  Regardez, essayez et santez vous bien
                </h1>
              </div>
              <div className="bg-orange-600 opacity-70 w-[39%]  h-[29.8rem]  ">
                <h1 className="presentationcarousel2" >
                  Decouvrez la nouvelle game xpix pensez et cree pour vous
                </h1>
                <button className="text-white border-black bg-black p-2 text-xl m-10">lire plus</button>
              </div>
              </div>
              
            </div>
          </div>

          <div className="portable:w-[100%]">
            <div className="h-96">
              
              <img
                src={slider6}
                alt="logoimg"
                className="h-[691px] w-[100%] object-top object-cover"
              />

              <div className="relative z-20 -top-[700px] -right-[828px] ">
              <div className="bg-black h-[18rem] text-white w-[39%] p-10">
                <h1 className="presentationcarousel">
                  Regardez, essayez et santez vous bien
                </h1>
              </div>
              <div className="bg-neutral-100 w-[39%]  h-[25.8rem]  ">
                <h1 className="presentationcarousel2" >
                  Decouvrez la nouvelle game xpix pensez et cree pour vous
                </h1>
                <button className="text-white border-black bg-black p-2 text-xl m-10">lire plus</button>
              </div>
              </div>
              
            </div>
          </div>
        </Carousel>
      </div>

    </>
  );
};

export default SliderPub;
