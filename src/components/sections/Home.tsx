"use client";
import Image from "next/image";
import homeImg from "@/assets/images/home.png";
import {Button } from "@/components/ui/button";
import { CornerRightDown } from "@deemlol/next-icons";
import Link from "next/link";


const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-24"
    >
      <div className="mx-auto flex flex-col-reverse md:flex-row items-center">

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Lorem Ipsum Dolor
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
                      <Link href="#contact">
            <Button className="cursor-pointer">Nous contacter</Button>
          </Link>

          <Link href="#about">
            <Button variant="outline" className="cursor-pointer">
              <span className="mr-2">En Savoir Plus</span> <CornerRightDown />
            </Button>
          </Link>
          </div>
        </div>

        <div className="flex-1">
          <Image
            src={homeImg}
            alt="Image d'accueil"
            className="w-full h-auto object-cover"
            priority
          />
        </div>

      </div>
    </section>
  );
};

export default Home;
