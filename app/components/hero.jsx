"use client"

import Image from "next/image";
import carImg from "@/public/Car-img.png"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { RoundedCorner } from "@mui/icons-material";


const Hero = () => {

    const [car, setCar] = useState("")
    const [rentalPlace, setRentalPlace] = useState("")
    const [returnPlace, setReturnPlace] = useState("")

    const handleChange = (e) => {
        setCar(e.target.value)
        setRentalPlace(e.target.value)
        setReturnPlace(e.target.value)
    }

  return (
    <div className="relative m-10 h-[800px] rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 overflow-hidden flex items-center px-20">
      
      
      <div className="text-white max-w-xl z-10">
        <h1 className="text-[60px] font-bold mb-6">
          Experience the road like never before
        </h1>
        <p className="mb-6 text-[16px]">
          Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique.
        </p>
        <button className="bg-[#FF9E0C] px-6 py-3 rounded-2xl hover:bg-[#FF9E0C]/80 ">
          View all cars
        </button>
      </div>

      {/* Car Image */}
      <Image
        src={carImg}
        alt="car"
        className="absolute bottom-0 right-40 object-contain blur-sm"
      />

      {/* Booking Card */}
      <div className="flex flex-col justify-center items-center ml-auto bg-white rounded-2xl p-8 w-[350px] z-10 shadow-xl">
        <h2 className="text-[30px] font-semibold mb-6">Book your car</h2>
         <Box sx={{ minWidth: 300 }}>
            <FormControl fullWidth>
                <InputLabel>Car Type</InputLabel>
                <Select
                value={car}
                label="Car Type"
                onChange={handleChange}
                >
                <MenuItem value="Hatchback">HatchBack</MenuItem>
                <MenuItem value="Sedan">Sedan</MenuItem>
                <MenuItem value="Offroader">Offroader</MenuItem>
                </Select>
            </FormControl>
            </Box>

            <Box sx={{ minWidth: 300, marginTop: "20px" }}>
            <FormControl fullWidth>
                <InputLabel>Place of Rental</InputLabel>
                <Select
                value={rentalPlace}
                label="Place of Rental"
                onChange={handleChange}
                >
                <MenuItem value="Office">Office</MenuItem>
                <MenuItem value="Home">Home</MenuItem>
                <MenuItem value="Market">Market</MenuItem>
                </Select>
            </FormControl>
            </Box>

            <Box sx={{ minWidth: 300, marginTop: "20px" }}>
            <FormControl fullWidth>
                <InputLabel>Place of Return</InputLabel>
                <Select
                value={returnPlace}
                label="Place of Return"
                onChange={handleChange}
                >
                <MenuItem value="Office">Office</MenuItem>
                <MenuItem value="Home">Home</MenuItem>
                <MenuItem value="Market">Market</MenuItem>
                </Select>
            </FormControl>
            </Box>

            <label className="mt-[20px] text-[15px] font-bold">Rental Date</label>
            <input type="date" name="date" id="" className="w-[300px] border-1 rounded border-gray-300 h-[50px] p-[10px] hover:border-black" placeholder="Rental Date" />

            <label className="mt-[20px] text-[15px] font-bold">Return Date</label>
            <input type="date" name="date" id="" className="w-[300px] border-1 rounded border-gray-300 h-[50px] p-[10px] hover:border-black" placeholder="Rental Date" />

            <button className="bg-[#FF9E0C] rounded-[12px] w-[300px] mt-[20px] text-white h-[30px] hover:bg-[#ff9e0c]/80 h-[40px]">Book Now</button>


      </div>

    </div>
  );
};

export default Hero;