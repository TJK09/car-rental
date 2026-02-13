import Image from "next/image";
import Hero from "./components/hero";
import locationImg from "@/public/location.png"
import CarImg from "@/public/location-car.png"
import walletImg from "@/public/wallet.png"

export default function Home() {
  return (
    <>
      <Hero />

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
    </>
  );
}
