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
import appBtn from "@/public/appStoreBtn.png"
import googlePlayBtn from "@/public/googlePlayBtn.png"
import Iphone from "@/public/iPhone 14 Pro - Silver - Portrait.png"


export default function Home() {


      function StatCard({
          icon,
          value,
          label,
        }: {
          icon: any;
          value: string;
          label: string;
        }) {
          return (
            <div className="flex w-full max-w-[240px] items-center gap-4 rounded-xl bg-white p-4 shadow-md transition-transform duration-300 hover:scale-105">
              <Image src={icon} alt={label} className="h-12 w-12 object-contain" />
              <div className="text-left">
                <h2 className="text-xl font-bold text-black">{value}</h2>
                <p className="text-sm font-semibold text-black/60">{label}</p>
              </div>
            </div>
          );
        }
  
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

      <section className="relative bg-[#5937E0] h-[486px] mx-4 md:mx-10 rounded-2xl overflow-hidden mt-[50px]">

      {/* Background Image */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Image
          src={CarBgImg}
          alt="Car in Background"
          className="w-full h-full object-contain opacity-40"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 md:px-16 text-center gap-6">

        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Facts in Numbers
        </h1>

        <p className="max-w-2xl text-sm md:text-base font-semibold text-white/90">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quos
          tempore quod, aliquam vel qui sunt corrupti sed? Ducimus alias ut nisi
          blanditiis. Dolorem non, at vitae delectus dolores tempora.
        </p>

        {/* Stats */}
        <div className="mt-10 flex w-full flex-wrap justify-center gap-6 md:gap-10">

          <StatCard icon={carBg} value="540+" label="Cars" />
          <StatCard icon={heartBg} value="20k+" label="Customers" />
          <StatCard icon={calenderBg} value="25+" label="Years" />
          <StatCard icon={milesBg} value="20m+" label="Miles" />

        </div>
      </div>
    </section>

    <section className="grid grid-cols-2 mt-[20px] gap-10">
      <div className="flex flex-col gap-10 mx-20 w-[540px] h-[370px] mt-[100px]">
        <h1 className="text-[50px] font-bold mt-[20px]">Download Mobile App</h1>
        <p className="text-[16px] font-semibold text-[#000000]/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo sunt magni commodi eaque aliquid odio facere expedita maxime optio, aut excepturi. Dolorem nam reprehenderit iusto dignissimos voluptatem ad a!</p>
        <div className="flex gap-5"><button><Image src={appBtn} alt="App Store Button" /></button>
        <button><Image src={googlePlayBtn} alt="Google Play Button" /></button></div>
      </div>
      
      <div className="relative flex items-center justify-center py-20">
        <div className="relative z-0 translate-x-0 -translate-y-6 scale-95 opacity-90">
          <Image src={Iphone} alt="Iphone 14" className="object-contain"/>
        </div>
        <div className="relative z-10 -translate-x-10 overflow-hidden bg-white rounded-[60px] shadow-lg">
          <Image src={Iphone} alt="Iphone 14" className="object-cover drop-shadow-2xl" />
        </div>
      </div>
    </section>
    </>
  );
}
