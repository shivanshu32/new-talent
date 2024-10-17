import React from "react";
function Index() {
    return (
        <>
            <div className="container pt-6 mx-auto">
                <div className="flex flex-wrap">
                <div className="md:w-2/5 w-full">
                        {/* Remove class [ h-24 ] when adding a card block */}
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                        <div className="rounded  " >
                        <img src="/hero.png" alt="Background" class="object-cover object-left" />
                        </div>
                    </div>
                    <div className="md:w-3/5 w-full flex md:pb-0 md:pr-6">
                        {/* Remove class [ h-24 ] when adding a card block */}
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                        <div className="rounded border-gray-300 text-center p-32 dark:border-gray-700 w-full " >
                        {/* <h2 className="text-4xl lg:text-5xl font-extrabold text-center">TARUN RAJPUT</h2> */}
                        <p className="text-md text-left mt-14 text-gray-600 text-left tracking-wide font-thin text-xl  "><span className="text-4xl">Tarun's</span>  journey is an inspiration to aspiring models worldwide,
showcasing the transformative power of dedication and talent in
the pursuit of one's passion.</p> <br />
                        <p className="text-md text-left text-gray-600 text-left tracking-wide font-thin text-xl  ">Tarun Rajput's legacy as a model mentor is not just defined by the models he has nurtured, but by the indelible mark he has left on the industry as a whole. </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}
export default Index;
