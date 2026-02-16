import Image from "next/image"
import carImg from "@/public/carCard.png"
import gearShift from "@/public/gear-shift(1) 1.png"
import gasTank from "@/public/gas.png"
import airConditioner from "@/public/air-condition.png"


const carCard = () => {
  return (
    <>
    <div className="flex flex-col w-[400px] bg-[#FAFAFA] h-[500px] rounded-lg ml-[30px]">
        <div className="flex mt-[50px]">
            <Image src={carImg} alt="carImg" className="object-contain" />
        </div>
        <div className="flex justify-between items-center">
            <div className="flex flex-col ml-[25px]">
                <h1 className="text-[25px] font-bold">Mercedes</h1>
                <p className="text-[16px] text-[#000000]/60">Sedan</p>
            </div>
            <div className="flex flex-col mr-[25px]">
                <h1 className="text-[#5937e0] font-semibold ml-[20px]">$25</h1>
                <p className="text-[16px] text-[#000000]/60">per day</p>
            </div>
        </div>
        <div className="flex justify-evenly mt-[30px]">
            <Image src={gearShift} alt="gearShift" className="object-contain" /><p>Automatic</p>
            <Image src={gasTank} alt="gasTank" className="object-contain" /><p>PB95</p>
            <Image src={airConditioner} alt="airConditioner" className="object-contain" /><p>Air Conditioner</p>
        </div>
        <div className="flex justify-center items-center mt-[5px]">
            <button className="text-[16px] bg-[#5937E0] text-white rounded-lg w-[85%] mt-[20px] h-[50px] ">View Details</button>
        </div>
    </div>
    </>
  )
}

export default carCard