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
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-center">TARUN RAJPUT</h2>
                        <p className="text-md text-left mt-14 text-gray-600 text-left tracking-wide font-thin text-xl  "><span className="text-4xl">He</span> is
a professional Indian
model (GROOMING EXPERT, EDUCATOR,
SHOW DIRECTOR, FASHION
CHOREOGRAPHER) and the founder of
New Talent Modeling Grooming
School.

</p> <br />
                        <p className="text-md text-left text-gray-600 text-left tracking-wide font-thin text-xl  ">After starting his career nearly a
decade ago, Tarun Rajput has
emerged as a respected figure in the
fashion industry, known for his
creativity and dedication. With
collaborations with renowned
designers, his influence has reshaped
contemporary trends and left a lasting
impact on haute couture.</p>
                        </div>
                    </div>
                    <div className="md:w-2/5 w-full">
                        {/* Remove class [ h-24 ] when adding a card block */}
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                        <div className="rounded  " >
                        <img src="/tarunrajput.png" alt="Background" class="object-cover object-left" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Index;
