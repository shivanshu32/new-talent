import React from "react";
// import { useRef } from "react";
const Index = () => {
    // let form = useRef(null);
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const form_data = new FormData(form.current);
    //     let payload = {};
    //     form_data.forEach(function (value, key) {
    //         payload[key] = value;
    //     });
    //     // console.log("payload", payload);
    //     // Place your API call here to submit your payload.
    // };
    return (
        <div>
            <div>
                <form  className="container mx-auto bg-white shadow rounded">
                    <div>
                        <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5">
                            <div className="flex items-center w-11/12 mx-auto">
                                <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">Register Here</p>
                                <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                        <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="w-11/12 mx-auto">
                            <div className="container mx-auto">
                                <div className="my-8 mx-auto xl:w-full xl:mx-0">
                                    <div className="xl:flex lg:flex md:flex flex-wrap justify-between">
                                        <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                            <label htmlFor="FirstName" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                               Name
                                            </label>
                                            <input type="text" name="firstName" required id="FirstName" className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100" placeholder />
                                        </div>
                                        <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                            <label htmlFor="LastName" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                               Age
                                            </label>
                                            <input type="text" id="LastName" name="lastName" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100" placeholder />
                                        </div>
                                        <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                            <label htmlFor="email2" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                Email
                                            </label>
                                            <div className="relative">
                                                <div className="absolute text-gray-600 dark:text-gray-400 flex items-center px-4 border-r h-full">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <rect x={3} y={5} width={18} height={14} rx={2} />
                                                        <polyline points="3 7 12 13 21 7" />
                                                    </svg>
                                                </div>
                                                <input id="email2" name="email" required className="w-full bg-transparent text-gray-800 dark:text-gray-100 focus:outline-none focus:border focus:border-indigo-700 font-normal py-3 flex items-center pl-16 text-sm  rounded border shadow" placeholder />
                                            </div>
                                            
                                        </div>
                                        <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                            <label htmlFor="StreetAddress" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                               Contact Number
                                            </label>
                                            <input type="text" id="StreetAddress" name="streetAddress" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100" placeholder />
                                        </div>
                                        <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                            <label htmlFor="StreetAddress" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                City
                                            </label>
                                            <input type="text" id="StreetAddress" name="streetAddress" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100" placeholder />
                                        </div>
                                        <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                            <label htmlFor="Country" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                Tell Us About Yourself
                                            </label>
                                            <input type="text" id="Country" name="country" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100" placeholder />
                                        </div>
                                    </div>
                                  
                                   
                                </div>
                            </div>
                        </div>
                        <div className="w-full py-4 sm:px-12 px-4 bg-gray-100 dark:bg-gray-700 mt-6 flex justify-end rounded-bl rounded-br">
                            {/* <button className="btn text-sm focus:outline-none text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-500 py-2 px-6 mr-4 rounded hover:bg-gray-200 transition duration-150 ease-in-out">Restore</button> */}
                            <button className="bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm focus:outline-none" type="submit">
                                Register Now
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            ;
        </div>
    );
};
export default Index;
