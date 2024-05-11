import React from "react";
function Index() {
    return (
        <>
        <div class="text-center flex flex-col justify-center items-center space-y-4">
                        <h1 class="text-3xl lg:text-6xl font-semibold leading-9 text-center text-gray-800 mt-16">NTMGS Courses</h1>
                        {/* <p class="text-base leading-6 md:leading-4 text-center text-gray-600">Dive deep into the world of fashion with our lastest blogs updates.</p> */}
        </div>


            <div className="container w-3/5 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 ">
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="shadow-[rgba(0,0,15,0.5)_10px_0px_0px_0px] ml-2 z-10 bg-gray-100 rounded-t-full border-gray-300 rounded-lg  " >
                    <div className="w-full h-full mt-4 flex items-center justify-center dark:bg-gray-900">
                    <img src="/Pageant.png" alt="Background " class="object-cover mt-10 object-center" />
                
                </div>

                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="shadow-[rgba(0,0,15,0.5)_10px_0px_0px_0px] ml-2 z-10 bg-gray-100 rounded-t-full border-gray-300   " >
                <div className="w-full h-full mt-4 flex items-center justify-center dark:bg-gray-900">
                <img src="/modelneeraj.png" alt="Background " class="object-cover mt-10 object-center" />
                
                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
              
              
                <div className="shadow-[rgba(0,0,15,0.5)_10px_0px_0px_0px] ml-2 z-10  bg-gray-100 rounded-t-full border-gray-300  " > 
                <div className="w-full h-full mt-4 flex items-center justify-center dark:bg-gray-900">
                <img src="/Portfolio.png" alt="Background " class="object-cover mt-10 object-center" />
                </div>
                </div>

                <div className="shadow-[rgba(0,0,15,0.5)_10px_5px_4px_0px] -mt-40 ml-2 bg-gray-100 rounded border-gray-300   h-80" >
                <div className="w-full h-full flex items-center justify-center dark:bg-gray-900">
                <p className="w-2/4 text-4xl font-bold leading-normal text-center text-gray-800 mt-36 dark:text-gray-100">Pageant Training</p>
                </div>
                
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="shadow-[rgba(0,0,15,0.5)_10px_5px_4px_0px] -mt-40 ml-2 bg-gray-100 rounded border-gray-300  h-80" >
                <div className="w-full h-full flex items-center justify-center dark:bg-gray-900">
                <p className="w-2/4 text-4xl font-bold leading-normal text-center text-gray-800 mt-36 dark:text-gray-100">Model Training</p>
                </div>
                
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
              
              
                <div className="shadow-[rgba(0,0,15,0.5)_10px_5px_4px_0px] -mt-40 ml-2 bg-gray-100 rounded border-gray-300   h-80" > 
                <div className="w-full h-full flex items-center justify-center dark:bg-gray-900">
                <p className="w-2/4 text-4xl font-bold leading-normal text-center text-gray-800 mt-36 dark:text-gray-100">Portfolio Shoot</p>
                    </div>
                </div>

            </div>
            <br />
        </>
    );
}
export default Index;
