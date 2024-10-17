import React from "react";
function Index() {
    return (
        <>
            <div className="container pt-6  ml-16 mr-16">
                <div className="flex flex-wrap ">
                    <div className="md:w-3/5 w-full flex md:pb-0 md:pr-6">
                        {/* Remove class [ h-24 ] when adding a card block */}
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                        <div className="rounded border-gray-300 text-center p-32 dark:border-gray-700 w-full " >
                        {/* <h2 className="text-4xl lg:text-5xl font-extrabold text-center">PAGEANT TRAINING PROGRAM</h2> */}
                        <p className="text-md text-left mt-14 text-gray-600 text-left tracking-wide font-thin text-xl  ">Welcome to the Pageant Training Program at New Talent Models Grooming School, where dreams take center stage and stars are born! Our program is meticulously crafted to empower aspiring pageant contestants with the skills, confidence, and grace needed to shine in the spotlight. Led by industry experts and seasoned professionals, our comprehensive curriculum covers everything from runway etiquette to interview techniques, ensuring each participant is fully equipped to dazzle judges and captivate audiences. Through personalized coaching sessions, mock pageants, and exclusive workshops, we cultivate poise, presence, and polish in every student, nurturing their unique talents and refining their natural beauty. </p> <br />
                        {/* <p className="text-md text-left text-gray-600 text-left tracking-wide font-thin text-xl  ">Tarun Rajput's legacy as a model mentor is not just defined by the models he has nurtured, but by the indelible mark he has left on the industry as a whole. </p> */}
                        </div>
                    </div>
                    <div className="md:w-2/5 w-full">
                        {/* Remove class [ h-24 ] when adding a card block */}
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                        <div className="rounded  " >
                        <img src="/PageantHero.png" alt="Background" class="object-cover object-left" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Index;
