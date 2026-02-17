import Image from "next/image";
import Hero from "./components/hero";
import locationImg from "@/public/location.png"
import CarImg from "@/public/location-car.png"
import walletImg from "@/public/wallet.png"
import infoblockImg from "@/public/InfoblockImg.png"
import CarCard from "./components/carCard";
import { ChevronRight } from "@mui/icons-material";
import CarBgImg from "@/public/bg-carImg.png"
import carBg from "@/public/car-bg.png"
import heartBg from "@/public/heart.png"
import calenderBg from "@/public/calender-bg.png"
import milesBg from "@/public/Miles-bg.png"



export default function Home() {
  return (
    <>
      <Hero />

      {/* Info Section */}
      <div className="grid grid-cols-3 mt-[20px] mx-[50px]">
        <div className="flex flex-col justify-center items-center gap-5">
          <Image src={locationImg} alt="location" className="object-cover" />
          <h1 className="text-[24px] font-semibold">Availability</h1>
          <p className="text-[16px] text-center w-[500px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae hic aperiam impedit quia magnam a nobis, libero ducimus?</p>
        </div>

        <div className="flex flex-col justify-center items-center gap-5">
          <Image src={CarImg} alt="Car" className="object-cover" />
          <h1 className="text-[24px] font-semibold">Comfort</h1>
          <p className="text-[16px] text-center w-[500px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae hic aperiam impedit quia magnam a nobis, libero ducimus?</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <Image src={walletImg} alt="Wallet" className="object-cover" />
          <h1 className="text-[24px] font-semibold">Savings</h1>
          <p className="text-[16px] text-center w-[500px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae hic aperiam impedit quia magnam a nobis, libero ducimus?</p>
        </div>
      </div>

      {/* Info Block */}

      <div className="grid grid-cols-2">

        <div className="flex mt-[100px] ml-[150px]">
          <Image src={infoblockImg} alt="Block img" />
         </div>

        <div className="flex flex-col mt-[100px] ml-[150px]">
          <div className="flex gap-5">
            <h1 className="bg-[#5937E0] rounded-full w-10 h-10 flex items-center justify-center text-[16px] font-bold text-white">1</h1>
            <h1 className="text-[20px] font-semibold mt-2">Erat at semper </h1>
          </div>
          <div className="flex">
            <p className="text-[16px] mt-5 w-[500px]">Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem fermentum a donec ante in venenatis. Risus tortor adipiscing eget enim.</p>
          </div>

          <div className="flex gap-5 mt-[20px]">
            <h1 className="bg-[#5937E0] rounded-full w-10 h-10 flex items-center justify-center text-[16px] font-bold text-white">2</h1>
            <h1 className="text-[20px] font-semibold mt-2">Urna nec vivamus risus duis arcu  </h1>
          </div>
          <div className="flex">
            <p className="text-[16px] mt-5 w-[500px]">Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem fermentum a donec ante in venenatis. Risus tortor adipiscing eget enim.</p>
          </div>


          <div className="flex gap-5 mt-[20px]">
            <h1 className="bg-[#5937E0] rounded-full w-10 h-10 flex items-center justify-center text-[16px] font-bold text-white">3</h1>
            <h1 className="text-[20px] font-semibold mt-2">Lobortis euismod imperdiet tempus  </h1>
          </div>
          <div className="flex">
            <p className="text-[16px] mt-5 w-[500px]">Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem fermentum a donec ante in venenatis. Risus tortor adipiscing eget enim.</p>
          </div>

          <div className="flex gap-5 mt-[20px]">
            <h1 className="bg-[#5937E0] rounded-full w-10 h-10 flex items-center justify-center text-[16px] font-bold text-white">4</h1>
            <h1 className="text-[20px] font-semibold mt-2">Cras nulla aliquet nam eleifend amet et </h1>
          </div>
          <div className="flex">
            <p className="text-[16px] mt-5 w-[500px]">Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem fermentum a donec ante in venenatis. Risus tortor adipiscing eget enim.</p>
          </div>


        </div>
      </div>


      <div className="flex flex-col ">

        <div className="flex items center justify-between m-[100px]">
          <h1 className="text-[30px] font-bold ">CHOOSE THE CAR THAT SUITS YOU!</h1>
          <h1 className="text-[16px] font-bold mt-[25px]">View All<ChevronRight /></h1>
        </div>

        <div className="grid grid-cols-3 grid-rows-2 gap-10">
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
        </div>
      </div>

      <div className="flex relative bg-[#5937E0]  h-[486px] m-10 rounded-lg ">
        <div className="absolute flex items-center justify-center">
          <Image src={CarBgImg} alt="Car in Background" className="object-contain opacity-50" />
        </div>
        <div className="flex flex-col z-10">
        <div className="flex justify-center items-center">
          <h1 className="text-[50px] font-bold text-white">Facts in Numbers</h1>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[16px] font-semibold text-white w-[600px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae quos tempore quod, aliquam vel qui sunt corrupti sed? Ducimus alias ut nisi blanditiis. Dolorem non, at vitae delectus dolores tempora.</p>
        </div>
        <div className="flex gap-20 ml-[120px] items-center ">
          <div className="flex items-center cars bg-white w-[240px] h-[100px] rounded-lg gap-3">
            <Image src={carBg} alt="Car BG"  className="object-contain ml-[10px]"/>
            <div className="flex flex-col"><h1 className="text-[24px] font-semibold">540+</h1>
            <p className="text-[16px] text-[#000000]/50 font-semibold">Cars</p></div>
          </div>
          <div className="flex items-center cars bg-white w-[240px] h-[100px] rounded-lg gap-3">
            <Image src={heartBg} alt="Heart BG" className="object-contain ml-[10px]" />
            <div className="flex flex-col"><h1 className="text-[24px] font-semibold">20k+</h1>
            <p className="text-[16px] text-[#000000]/50  font-semibold">Customer</p></div>
          </div>
          <div className="flex items-center cars bg-white w-[240px] h-[100px] rounded-lg gap-3">
            <Image src={calenderBg} alt="Calender BG" className="object-contain ml-[10px]" />
            <div className="flex flex-col"><h1 className="text-[24px] font-semibold">25+</h1>
            <p className="text-[16px] text-[#000000]/50 font-semibold">Years</p></div>
          </div>
          <div className="flex items-center cars bg-white w-[240px] h-[100px] rounded-lg gap-3">
            <Image src={milesBg} alt="Miles BG" className="object-contain ml-[10px]" />
            <div className="flex flex-col"><h1 className="text-[24px] font-semibold">20m+</h1>
            <p className="text-[16px] text-[#000000]/50 font-semibold">Miles</p></div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
