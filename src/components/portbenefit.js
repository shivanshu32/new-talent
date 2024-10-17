import React from "react";
function Index() {
    return (
        <>
            <div className="container pt-12 mb-4 h-screen mx-auto">
                <div className="flex flex-row grid-cols-2 ">
                <div className=" w-full h-96">
                        {/* Remove class [ h-24 ] when adding a card block */}
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                        <div className="rounded  " >
                        <img src='/westmodel4.png' className="object-cover object-center w-full" alt="model" />
                        </div>
                    </div>
                    <div className="w-full pb-6 ">
                        {/* Remove class [ h-24 ] when adding a card block */}
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                        <div className="rounded mt-32 p-8" >
                        
<h1  className="lg:text-4xl text-4xl font-bold text-center  leading-tight text-gray-800">
GUIDED PORTFOLIO SHOOT
                        </h1>
                        



                       <p className="mt-16 text-xl text-justify">
                       A modelling portfolio serves as a stepping stone for aspiring models looking to break into the industry. As a result, it is critical for models to create an appealing portfolio in order to boost their chances of being recruited. Because your portfolio is similar to your resume, you must strive to show verstality & freshness.
                       </p>
                        


                        </div>
                    </div>
                    {/* <div className="w-full">
                    <div className="rounded relative " >
                        <img src='/westmodel4.png' className="object-cover object-center w-full" alt="model" />
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
}
export default Index;
