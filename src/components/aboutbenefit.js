import React from "react";
function Index() {
    return (
        <>
            <div className="hidden lg:block  container pt-36 mx-auto">
                <div className="flex flex-wrap">
                <div className="md:w-1/3 w-full">
                        {/* Remove class [ h-24 ] when adding a card block */}
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                        <div className="rounded  " >
                        <img src='/westmodel11.png' className="object-cover object-center w-full" alt="model" />
                        </div>
                    </div>
                    <div className="md:w-1/3 w-full pb-6 ">
                        {/* Remove class [ h-24 ] when adding a card block */}
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                        <div className="rounded " >
                        
<h1  className="lg:text-4xl text-3xl font-bold  leading-tight text-gray-800">
                            WHO CAN BENEFIT FROM OUR COURSES
                        </h1>
                        



                        <ul className="mt-16 list-disc">
                            <li className="mb-4 text-xl"> Aspiring models </li>
                            <li className="mb-4 text-xl"> Working models looking to achieve international standards </li>
                            <li className="mb-4 text-xl"> Candidates looking to find their niche be it plus size/petite/fitness/commercial/ runway model</li>
                            <li className="mb-4 text-xl"> Anyone who wishes to improve their overall personality and communication</li>
                            <li className="mb-4 text-xl"> Pageant Aspirants</li>
                            <li className="mb-4 text-xl"> Budding Actors</li>
                        </ul>
                        


                        </div>
                    </div>
                    <div className="md:w-1/3 w-full">
                    <div className="rounded relative " >
                        <img src='/westmodel3.png' className="object-cover object-center w-full" alt="model" />
                        </div>
                    </div>
                </div>
            </div>


            {/* small screen starts */}
            <div className=" xl:hidden container  mx-auto">
                <div className="flex flex-wrap">
                <div className="md:w-1/3 w-full">
                        {/* Remove class [ h-24 ] when adding a card block */}
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                        <div className="rounded  " >
                        <img src='/westmodel4.png' className="object-cover w-1/2 object-center" alt="model" />
                        </div>
                    </div>
                    <div className="md:w-1/3 w-full pb-6 ">
                        {/* Remove class [ h-24 ] when adding a card block */}
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                        <div className="rounded " >
                        
<h1  className=" -mt-32 ml-40 text-center text-2xl font-bold  leading-tight text-gray-800">
                            WHO CAN BENEFIT FROM OUR COURSES
                        </h1>
                        



                        <ul className="mt-16 ml-8 list-disc">
                            <li className="mb-4 text-xl"> Aspiring models </li>
                            <li className="mb-4 text-xl"> Working models looking to achieve international standards </li>
                            <li className="mb-4 text-xl"> Candidates looking to find their niche be it plus size/petite/fitness/commercial/ runway model</li>
                            <li className="mb-4 text-xl"> Anyone who wishes to improve their overall personality and communication</li>
                            <li className="mb-4 text-xl"> Pageant Aspirants</li>
                            <li className="mb-4 text-xl"> Budding Actors</li>
                        </ul>
                        


                        </div>
                    </div>
                    <div className="md:w-1/3 w-full">
                    <div className="rounded relative " >
                        <img src='/westmodel3.png' className="object-cover absolute right-0  w-1/2 object-center " alt="model" />
                        </div>
                    </div>
                </div>
            </div>
            {/* small screen ends */}
        </>
    );
}
export default Index;
