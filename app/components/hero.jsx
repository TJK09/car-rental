import Image from "next/image";
import car from "@/public/Car-img.png";

const Hero = () => {
  return (
    <div className="relative m-10 h-[600px] rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 overflow-hidden flex items-center px-20">
      
      
      <div className="text-white max-w-xl z-10">
        <h1 className="text-[60px] font-bold mb-6">
          Experience the road like never before
        </h1>
        <p className="mb-6 text-[16px]">
          Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique.
        </p>
        <button className="bg-orange-500 px-6 py-3 rounded-2xl">
          View all cars
        </button>
      </div>

      {/* Car Image */}
      <Image
        src={car}
        alt="car"
        className="absolute bottom-0 right-40 object-contain blur-sm"
      />

      {/* Booking Card */}
      <div className="flex flex-col justify-center items-center ml-auto bg-white rounded-2xl p-8 w-[350px] z-10 shadow-xl">
        <h2 className="text-[30px] font-semibold mb-6">Book your car</h2>
        

      </div>

    </div>
  );
};

export default Hero;