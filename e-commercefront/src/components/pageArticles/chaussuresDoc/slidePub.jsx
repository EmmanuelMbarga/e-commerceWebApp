import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import paire from '../../../images/RETOUCHESLOGO/10.png'
const SliderPub=()=>{
    return(
        <Carousel
            infiniteLoop={true}
            autoPlay={600}
            // interval={4000}
            showStatus={false}
            showThumbs={false}
            >
            <div className="bg-[url('./images/ImgPub/jordan.png')] h-60 bg-cover bg-left bg-no-repeat w-[400px] absolute ">
                <h1 className="relative left-[58%] text-purple-800 text-8xl top-10 z-50 italic " >Air Nike x force</h1>
            </div>

            <div className="bg-[url('./images/ImgPub/chaussure-zoom-copie.png')] h-60 bg-cover bg-left bg-no-repeat  w-[400px]">
                <h1 className="relative left-[80%] text-red-700 text-8xl top-10 z-50 italic" >free</h1>
                
            </div>
            {/* <div>
                <img src={paire} alt="paire" className="h-[300px] w-[10px] object-cover " />
            </div> */}
        </Carousel>
        
    )
}

export default SliderPub