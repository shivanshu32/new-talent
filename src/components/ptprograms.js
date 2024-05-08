import React from "react";
function Index() {
    return (
        <div className="flex flex-wrap sm:flex-no-wrap items-center justify-between w-full bg-gray-100 h-auto">
            
            <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-16 pt-6 gap-8">
              
                <div className="p-2 items-center text-center justify-between rounded border-black bg-white  dark:border-gray-700 border-solid border-2 h-auto" > 
                <h1 className="text-xl font-bold">Personalized Coaching from Tarun Rajput  </h1>
                
                <h1 className="text-xl font-bold mt-4">₹ 40,000 </h1>
                </div>
              
                <div className="p-2 items-center text-center justify-between  rounded border-black bg-white  dark:border-gray-700 border-solid border-2 h-auto" >
                <h1 className="text-xl font-bold pl-12 pr-12">
Access to exclusive resources and materials to help you prepare </h1>
                
                <h1 className="text-xl font-bold mt-4">₹ 20,000 </h1>
                </div>
               
                <div className="p-2 items-center text-center justify-between rounded border-black bg-white  dark:border-gray-700 border-solid border-2 h-auto" >
                <h1 className="text-xl font-bold">Personal Branding Course</h1>
                
                <h1 className="text-xl font-bold mt-4">₹ 25,000 </h1>
                </div>


                <div className="p-2 items-center text-center justify-between rounded border-black bg-white  dark:border-gray-700 border-solid border-2 h-auto" > 
                <h1 className="text-xl font-bold">Image Presentation & Makeup Classes </h1>
                
                <h1 className="text-xl font-bold mt-4">₹ 25,000 </h1>
                </div>
              
                <div className="p-2 items-center text-center justify-between  rounded border-black bg-white  dark:border-gray-700 border-solid border-2 h-auto" >
                <h1 className="text-xl font-bold pl-12 pr-12">Portfolio Shoot 3 Looks</h1>
                
                <h1 className="text-xl font-bold mt-4">₹ 60,000 </h1>
                </div>
               
                <div className="p-2 items-center text-center justify-between rounded border-black bg-white  dark:border-gray-700 border-solid border-2 h-auto" >
                <h1 className="text-xl font-bold">Lifetime Access to NTMGS Community</h1>
                
                <h1 className="text-xl font-bold mt-4">₹ 10,000 </h1>
                </div>

                {/* third row */}


            </div>


            <div className="container w-1/3 mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 pt-6 gap-8">
              
              <div className="p-2 items-center text-center justify-between rounded border-black bg-black text-white  dark:border-gray-700 border-solid border-2 h-auto" > 
              <h1 className="text-xl font-bold">Join the NTMGS community today and get access to all 6 programs for just</h1>
              
              
              </div>

              <div className="p-2 items-center text-center justify-between rounded border-black  text-black  dark:border-gray-700 border-solid  h-auto" > 
              <h1 className="text-xl font-bold"><span className="line-through mr-4">₹ 180,000</span>   <span className="text-4xl">₹ 55,000</span></h1>
             
            
              </div>

              <div className="p-2 mr-32 ml-32 mb-16 items-center text-center justify-between rounded border-black bg-black text-white  dark:border-gray-700 border-solid border-2 h-auto" > 
              <h1 className="text-xl font-bold">Book Your Slot Now</h1>
              
              
              </div>

              
            
            </div>



            


            

        </div>
    );
}
export default Index;
