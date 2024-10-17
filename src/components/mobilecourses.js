import React from "react";
import { Link } from 'react-router-dom';

function Index() {
  return (
    <>
      <div className="bg-gray-800 md:hidden">
        <div className="lg:max-w-[1280px] md:max-w-[744px] max-w-[375px] mx-auto bg-white lg:px-10 md:px-6  py-10 relative">
          <div>
            
          <Link to="/pageant-training"  className="cursor-pointer">
            <div className="relative  w-full">
               
                <div className="w-full mx-16">
                <img
                src="/Pageant.png"
                alt="leaves"
                className="mt-6 lg:block md:hidden hidden"
              />
              <img
                src="/Pageant.png"
                alt="leaves"
                className="lg:hidden md:block hidden mt-6"
              />
              <img
                src="/Pageant.png"
                alt
                className="md:hidden block mt-6"
              />
              </div>

               
             
              <div className="bg-gradient-to-r from-[#000000]/20 to-[#000000]/30 py-3 px-3 absolute bottom-0 w-full backdrop-blur-xl">
                <div className="flex justify-between">
                  <div>
                    <p className="text-5xl font-medium leading-none text-white">
                     Pageant Training
                    </p>
                    {/* <p className="text-base font-semibold leading-none text-white mt-2">
                      $12.00
                    </p> */}
                  </div>
                  {/* <div>
                    <p className="text-base font-medium leading-none text-white">
                      Review:
                    </p>
                    <div className="flex gap-2 mt-2  ">
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/star-g.png"
                        alt
                        className="cursor-pointer"
                      />
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/star-g.png"
                        alt
                        className="cursor-pointer"
                      />
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/star-g.png"
                        alt
                        className="cursor-pointer"
                      />
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/star-g.png"
                        alt
                        className="cursor-pointer"
                      />
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/staaar_g.png"
                        alt
                        className="cursor-pointer"
                      />
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            </Link>
            <div className="md:flex gap-8 justify-center mt-2">
            <Link to="/model-training"  className="cursor-pointer">
              <div className="relative w-full">
              <div className="w-full mx-16">
                <img
                  src="/modelneeraj.png"
                  alt="leaves"
                  className="mt-6 lg:block md:hidden hidden"
                />
                <img
                  src="/modelneeraj.png"
                  alt="leaves"
                  className="lg:hidden md:block hidden mt-6"
                />
                <img
                  src="/modelneeraj.png"
                  alt="leaves"
                  className="md:hidden block mt-6"
                />
                </div>
                <div className="bg-gradient-to-r from-[#000000]/20 to-[#000000]/30 py-3 px-3 absolute bottom-0 w-full backdrop-blur-xl">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-5xl font-medium leading-none text-white">
                       Model Training
                      </p>
                      {/* <p className="text-base font-semibold leading-none text-white mt-2">
                        $15.000
                      </p> */}
                    </div>
                    {/* <div>
                      <p className="text-base font-medium leading-none text-white">
                        Review:
                      </p>
                      <div className="flex gap-2 mt-2">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/star-g.png"
                          alt
                          className="cursor-pointer"
                        />
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/star-g.png"
                          alt
                          className="cursor-pointer"
                        />
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/star-g.png"
                          alt
                          className="cursor-pointer"
                        />
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/star-g.png"
                          alt
                          className="cursor-pointer"
                        />
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/staaar_g.png"
                          alt
                          className="cursor-pointer"
                        />
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              </Link>
              <Link to="/portfolio"  className="cursor-pointer">
              <div className="relative text-center w-full">
            
              <div className="w-full mx-16">
             
                <img
                  src="/portmodelnew.png"
                  alt="leaves"
                  className="mt-6 lg:block md:hidden hidden"
                />
                <img
                  src="/portmodelnew.png"
                  alt="leaves"
                  className="lg:hidden md:block hidden mt-6"
                />
                <img
                  src="/portmodelnew.png"
                  alt="leaves"
                  className="md:hidden block mt-6"
                />
                </div>
                <div className="bg-gradient-to-r from-[#000000]/20 to-[#000000]/30 py-3 px-3 absolute bottom-0 w-full backdrop-blur-xl">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-5xl text-center font-medium leading-none text-white">
                        Portfolio Shoot
                      </p>
                      {/* <p className="text-base font-semibold leading-none text-white mt-2">
                        $30.00
                      </p> */}
                    </div>
                    {/* <div>
                      <p className="text-base font-medium leading-none text-white">
                        Review:
                      </p>
                      <div className="flex gap-2 mt-2">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/star-g.png"
                          alt
                          className="cursor-pointer"
                        />
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/star-g.png"
                          alt
                          className="cursor-pointer"
                        />
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/star-g.png"
                          alt
                          className="cursor-pointer"
                        />
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/star-g.png"
                          alt
                          className="cursor-pointer"
                        />
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/staaar_g.png"
                          alt
                          className="cursor-pointer"
                        />
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
