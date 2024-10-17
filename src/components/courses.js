import React from "react";
import './courses.css';
import { useState } from "react";
import Dynamiccourse from "./dynamiccourse";
import Dynamicvideo from "./dynamicvideo";
import Mobilecourses from './mobilecourses'

function Index() {

    const [hidden1, setHidden1] = useState(true);
    const [hidden2, setHidden2] = useState(true);
    const [hidden3, setHidden3] = useState(true);

const callme = () => {
    alert("mouse enter")
}

// ("#hideonhover1").on("hover", function(){
//     alert("hovered")
// })
    return (
        <>
        <div class="text-center flex flex-col justify-center items-center space-y-4">
                        <h1 class="text-3xl lg:text-6xl font-semibold leading-9 text-center text-gray-800 mt-16">NTMGS Courses</h1>
                        {/* <p class="text-base leading-6 md:leading-4 text-center text-gray-600">Dive deep into the world of fashion with our lastest blogs updates.</p> */}
        </div>


            <div className="max-sm:hidden container w-3/5 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 ">
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div  onMouseEnter={() => setHidden1(false)} onMouseLeave={() => setHidden1(true)}  >
                
                {hidden1 ? <Dynamiccourse imgurl="/Pageant.png" imgtitle="Pageant Training" /> : <Dynamicvideo vidurl="https://www.youtube.com/embed/2FHn9HYTLac?si=zcFY7k3eRbH1Sw2_" /> } 

                </div>


                

                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div  onMouseEnter={() => setHidden2(false)} onMouseLeave={() => setHidden2(true)} >
                
                {hidden2 ? <Dynamiccourse imgurl="/modelneeraj.png" imgtitle="Model Training" /> : <Dynamicvideo vidurl="https://www.youtube.com/embed/xsQI_4AqSzY?si=vTPZZOATJJEFSHKO" /> } 


               

                </div>


               
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
              
              
                <div  onMouseEnter={() => setHidden3(false)} onMouseLeave={() => setHidden3(true)}  > 
                
                {hidden3 ? <Dynamiccourse imgurl="/portmodelnew.png" imgtitle="Portfolio Shoot" /> : <Dynamicvideo vidurl="https://www.youtube.com/embed/ThnsDXU9_3w?si=6uZUJUqmBCGB5Xn7" /> } 

                

                </div>

                

                

                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
               
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
              
              
               

            </div>

            <Mobilecourses />


            <br />
        </>
    );
}
export default Index;
