"use client";
import Section from "@/components/Section";
import Image from "next/image";
import { useState } from "react";

const Home = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`${theme}`}>
      <Section theme="light" setTheme={setTheme}>
        <div className="flex-1 flex flex-col justify-center  lg:max-w-6xl lg:mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8">
            <div className="flex flex-col gap-8 justify-center ">
              <h1 className="text-5xl xl:text-7xl font-bold text-black dark:text-white">
                Magic keyboard, Apple Pencil, Endless Possibilities.
              </h1>

              <p className="text-lg font-semibold text-zinc-400">
                <span className="text-black dark:text-white">
                  Pr accessories,
                </span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laudantium magnam quia, nisi excepturi nulla nihil ipsam!
                Doloremque, libero tenetur quidem quaerat quam ipsa.
              </p>
            </div>
            <div>
              <div className="relative w-full h-[48rem] ">
                <Image
                  src={"/assets/section1_img.png"}
                  fill
                  alt="section"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section theme="dark" setTheme={setTheme}>
        <div className="flex-1 flex flex-col justify-center  lg:max-w-6xl lg:mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8">
          <div>
              <div className="relative w-full h-[48rem] ">
                <Image
                  src={"/assets/section2_img.jpg"}
                  fill
                  alt="section"
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col gap-8 justify-center ">
              <h1 className="text-5xl xl:text-7xl font-bold text-black dark:text-white">
                Wifi 6e and 5G for fast communicate
              </h1>

              <p className="text-lg font-semibold text-zinc-400">
                <span className="text-black dark:text-white">
                  Pr accessories,
                </span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laudantium magnam quia, nisi excepturi nulla nihil ipsam!
                Doloremque, libero tenetur quidem quaerat quam ipsa.
              </p>
            </div>
            
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;
