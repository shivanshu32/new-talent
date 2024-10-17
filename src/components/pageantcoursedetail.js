import React from "react";

const Banner8 = () => {
    return (
        <div className="mx-auto container py-12 px-6 xl:px-0 flex justify-center items-center flex-col">
            <div className="flex justify-between bg-gray-50 items-stretch flex-row">
                <div className="flex items-center bg-gray-800 justify-center">
                    <p className="transform flex flex-shrink-0 -rotate-90 text-2xl font-semibold tracking-wide leading-normal text-white">Course Details</p>
                </div>
                <div className="flex justify-center items-start flex-col xl:w-2/5 md:w-5/12 xl:px-7 px-6 md:px-0 md:py-0 py-5 m-4">
                    <div>
                        <p className="text-2xl xl:text-2xl font-semibold leading-9 text-gray-800">
COURSE DURATION</p>
                    </div>
                    <div className="xl:mt-4 mt-2">
                        <p className="text-base xl:text-xl leading-7 text-gray-600 pr-4">1 Year <br />
4 Online session before the course starts <br />
14 Days of Offline Camp <br />
8 Online sessions after the course <br />
2 Booster session before the audition</p>
                    </div>
                </div>

                <div className="flex justify-center items-start flex-col xl:w-2/5 md:w-5/12 xl:px-7  md:px-0 md:py-0 py-5">
                    <div>
                        <p className="text-2xl xl:text-2xl font-semibold leading-9 text-gray-800">
                        COURSE SCHEDULE</p>
                    </div>
                    <div className="xl:mt-4 mt-2">
                        <p className="text-base xl:text-xl leading-7 text-gray-600 pr-4">
                            <br />
                        Offline Classes Starting <br />
July 2024 <br /> <br />
Timings <br />
08:00- 17:00 <br />
<br />
                        </p>

                    </div>
                </div>


                <div className="flex justify-center items-start flex-col xl:w-2/5 md:w-5/12 xl:px-7 px-6 md:px-0 md:py-0 py-5">
                    <div>
                        <p className="text-2xl xl:text-2xl font-semibold leading-9 text-gray-800">
                        MEDIUM & FORMAT <br /> 
</p>
                    </div>
                    <div className="xl:mt-4 mt-2">
                        <p className="text-base xl:text-xl leading-7 text-gray-600 pr-4">
                        The course is an amalgamation of Theory sessions, Practical sessions. Intra-course assessments, and one-on-one counselling sessions.
<br /><br />Delivered in English & Hindi
</p>

                    </div>
                </div>

                {/* <div className="hidden md:block h-44 md:h-60 xl:h-72">
                    <img className="hidden h-full xl:block" src="https://i.ibb.co/xGZ4hRm/pexels-dmitry-zvolskiy-2082090-1.png" alt="pexels-dmitry-zvolskiy-2082090-1" />
                    <img className="xl:hidden h-full" src="https://i.ibb.co/KWgn5zQ/pexels-dmitry-zvolskiy-2082090-1-1.png" alt="pexels-dmitry-zvolskiy-2082090-1-1" />
                </div> */}
            </div>
            {/* <div className="md:hidden mt-6 w-full">
                <img src="https://i.ibb.co/xGZ4hRm/pexels-dmitry-zvolskiy-2082090-1.png" alt="pexels-dmitry-zvolskiy-2082090-1" className="w-full" />
            </div> */}
        </div>
    );
};

export default Banner8;
