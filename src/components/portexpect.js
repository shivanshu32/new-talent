import React from "react";
function Index() {
    return (
        <>
            <div className="container pt-12 h-screen mx-auto">
                <div className="flex flex-row grid-cols-3 ">

                
                    <div className="w-full pb-6 ">
                        {/* Remove class [ h-24 ] when adding a card block */}
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                        <div className="rounded mt-16 p-8" >
                        
<h1  className="lg:text-4xl text-4xl font-bold text-center  leading-tight text-gray-800">
WHAT TO EXPECT?
                        </h1>
                        



                       <p className="mt-8 text-xl text-justify">
                       Once you book a shoot with us, the first order of business is a one-on-one consultation with Model Mentor Tarun Rajput wherein the mood of your shoot will be decided according to your goals and aspirations. 
                       </p>
                       <p className="mt-4 text-xl text-justify">
On the day of your shoot, a team of expert stylists, MUAs and Photographers gather to bring to life the Moodboard that has been prepared beforehand to ensure a smooth and stress-free shoot experience. 
</p>
                       <p className="mt-4 text-xl text-justify">
Your only tasks are to follow the instructions given to you before the shoot, and then some during the shoot as Tarun guides you through movements, expressions, and poses.
​ </p>
                       <p className="mt-4 text-xl text-justify">
Since this is an end-to-end service, we select the best shots out of your entire shoot, get them edited, and share with you to be added as-is to your digital portfolio.
                       </p>
                        


                        </div>
                    </div>
                    <div className=" w-full">
                        {/* Remove class [ h-24 ] when adding a card block */}
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                        <div className="rounded  " >
                        <img src='/westmodel5.png' className="object-cover object-center w-full" />
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}
export default Index;
