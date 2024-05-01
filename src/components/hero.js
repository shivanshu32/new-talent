export default function Hero ()  {
    return (
        <>
       <div class="relative  from-gray-100 to-gray-500 h-[70vh] text-white overflow-hidden">
  <div class="absolute inset-0">
    <img src="/hero2.png" alt="Background " class="object-cover ml-32 object-center" />
    <div class="absolute inset-0 bg-black opacity-20"></div>
  </div>
  
  <div class="flex flex-row items-center justify-end mr-48 h-full">
  <div class="relative z-10 flex flex-col justify-center mr-32 items-center h-full ">
  <img src="/ntmgslogo.png" alt="Background " />

  <br /><br />
    {/* <h1 class="text-5xl font-bold leading-tight mb-4">Welcome to Our Awesome Website</h1>
    <p class="text-lg text-gray-300 mb-8">Discover amazing features and services that await you.</p> */}
    <button class="bg-black text-gray-100 hover:bg-gray-700 py-2 px-6 text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Enroll Here</button>
  </div>
  </div>
</div>

        </>
    );
  };