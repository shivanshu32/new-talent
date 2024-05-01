import React from "react";
function Index() {
    return (
        <>
            <div className="container pt-6 mx-auto">
                <div className="flex flex-wrap">
                <div className="md:w-1/5 w-full">
                        {/* Remove class [ h-24 ] when adding a card block */}
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                        <div className="rounded  " >
                        <img src='/model4.png' className="w-full h-full" />
                        </div>
                    </div>
                    <div className="md:w-3/5 w-full pb-6 ">
                        {/* Remove class [ h-24 ] when adding a card block */}
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                        <div className="rounded mt-16 p-8" >
                        
<h1 role="heading" className="lg:text-4xl text-3xl font-bold  leading-tight text-gray-800">
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
                    <div className="md:w-1/5 w-full">
                    <div className="rounded relative " >
                        <img src='/model1.png' className="w-full h-full left-0" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Index;
