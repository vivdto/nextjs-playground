"use client";
import Image from "next/image";
import cursor from "../assets/icon1.png";
import lightning from "../assets/icon2.png";
import { motion } from "framer-motion";
import profilepic from "../assets/profilepic.png";

const Hero = () => {
    return (
        <div className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom, #000, #2B1942_35%, #8F5C55_60%, #DBAF6E_80%)]">
            <div className="text-center">
                <h1 className="text-5xl font-bold text-[#98B4C3]">Hello World, I am</h1>
                <h1 className="text-5xl text-[#E48A57]">Vivashwat Thakur</h1>
            </div>

            <motion.div
                className="absolute left-[250px] top-[170px]"
                drag
            >
                <Image
                    src={cursor}
                    height={190}
                    width={190}
                    alt="cursor"
                    className=""
                    draggable="false"
                />
            </motion.div>

            <motion.div
                className="absolute left-[220px] top-[20px]"
                drag
            >
                <Image
                    src={lightning}
                    height={120}
                    width={120} // fixed width to make it more balanced
                    alt="lightning"
                    className=""
                    draggable="false"
                />
            </motion.div>

            <p className="text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80">I'm a </p>

            <Image
                src={profilepic}
                alt="profile picture"
                className="h-auto w-auto mx-auto"
            />
        </div>
    );
};

export default Hero;
