import Image from "next/image"
import carImg from "@/public/carCard.png"


const carCard = () => {
  return (
    <>
    <div className="flex flex-col w-[400px] bg-[#FAFAFA] h-[500px]">
        <div className="flex">
            <Image src={carImg} alt="carImg" className="object-contain" />
        </div>
        <div className="flex justify-around items-center">
            <div className="flex flex-col">
                <h1>Mercedes</h1>
                <p>Sedan</p>
            </div>
            <div className="flex flex-col">
                <h1>$25</h1>
                <p>Per Day</p>
            </div>
        </div>
        <div className="flex justify-evenly">
            <p>Automatic</p>
            <p>PB95</p>
            <p>Air Conditioner</p>
        </div>
        <div className="flex">
            <button className="text-[16px] bg-[#5937E0] text-white rounded-lg w-full mt-[10px]">View Details</button>
        </div>
    </div>
    </>
  )
}

export default carCard