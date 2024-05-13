import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
import { PiGooglePhotosLogoDuotone } from "react-icons/pi";
import { LuVideo } from "react-icons/lu";
import { RiDiscountPercentLine } from "react-icons/ri";
import { LuContact } from "react-icons/lu";
import styles from "./Sidenav.module.css";

export default function Sidenav() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
        console.log("state");
    };

    return (
        <>
            <FiMenu
                size={30}
                onClick={handleNav}
                className={`absolute top-4 right-4 z-[99] md:hidden cursor-pointer`}
            />
            {nav && (
                <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
                    <a onClick={handleNav} href="#main" className={styles.link}>
                        <IoHomeOutline size={30} />
                        <span>Home</span>
                    </a>
                    <a onClick={handleNav} href="#photogallery" className={styles.link}>
                        <PiGooglePhotosLogoDuotone size={30} />
                        <span>Galerie Foto</span>
                    </a>
                    <a onClick={handleNav} href="#videogallery" className={styles.link}>
                        <LuVideo size={30} />
                        <span>Galerie Video</span>
                    </a>
                    <a onClick={handleNav} href="#offers" className={styles.link}>
                        <RiDiscountPercentLine size={30} />
                        <span>Oferte</span>
                    </a>
                    <a onClick={handleNav} href="#contact" className={styles.link}>
                        <LuContact size={30} />
                        <span>Contact</span>
                    </a>
                </div>
            )}
            <div className="md:block hidden fixed z-10 w-full ">
                <div className="flex flex-row justify-center items-center pr-4 pl-4 pt-2 pb-4 bg-gradient-to-b from-white from-[25%]">
                    <img src="logosite2.png" className="w-20 h-20 " />
                    <a href="#main" className="ml-6 text-xl p-4 hover:bg-[#f1f5f9] hover: ease-in duration-200 rounded-xl font-semibold">
                        <span className="text-[#313638] uppercase ">Acasa</span>
                    </a>
                    <a href="#photogallery" className="ml-6 p-4 text-xl hover:bg-[#f1f5f9] ease-in duration-200 rounded-xl font-semibold">
                        <span className="text-[#313638] uppercase" >Galerie Foto</span>
                    </a>
                    <a href="#videogallery" className="ml-6 p-4 text-xl hover:bg-[#f1f5f9] ease-in duration-200 rounded-xl font-semibold">
                        <span className="text-[#313638] uppercase">Galerie Video</span>
                    </a>
                    <a href="#offers" className="ml-6 p-4 text-xl hover:bg-[#f1f5f9] ease-in duration-200 rounded-xl font-semibold">
                        <span className="text-[#313638] uppercase">Oferte</span>
                    </a>
                    <a href="#contact" className="ml-6 p-4 text-xl hover:bg-[#f1f5f9] ease-in duration-200 rounded-xl font-semibold">
                        <span className="text-[#313638] uppercase">Contact</span>
                    </a>
                </div>
            </div>
        </>
    );
}
