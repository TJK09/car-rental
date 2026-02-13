"use client"

import Image from "next/image"
import logo from "@/public/logo.png"
import PhoneIcon from '@mui/icons-material/Phone';
import phone from "@/public/Phone.png"


const navbar = () => {
  return (
    <div className="flex justify-between items-center mt-4">
        <div className="flex  ml-6 gap-4">
            <Image src={logo} alt="logo" className="object-contain" />
            <h1 className=" text-[20px] font-bold mt-2">Car Rental</h1>
        </div>
        <div className="flex">
            <ul className="flex gap-8 text-[18px] font-semibold mt-5">
                <li className="hover:text-[#5937E0]">Home</li>
                <li className="hover:text-[#5937E0]">Vehicles</li>
                <li className="hover:text-[#5937E0]">Details</li>
                <li className="hover:text-[#5937E0]">About Us</li>
                <li className="hover:text-[#5937E0]">Contact Us</li>
            </ul>
        </div>
        <div className="flex gap-2 mr-10">
            <div className=" flex justify-center items-center  bg-[#5937E0] w-12 h-12 rounded-full"><Image src={phone} alt="phone"/> </div>
            <div className="flex flex-col">
                <h1 className="text-[16px]">Need Help?</h1>
                <h1 className="text-[16px] font-bold">+923180905262</h1>
            </div>
        </div>
    </div>
  )
}

export default navbar