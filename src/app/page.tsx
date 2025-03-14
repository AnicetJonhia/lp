"use client";

import Navbar from "@/components/navigation/Navbar";
import Home from "@/components/sections/Home";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";


export default function HomePage() {


  return (
    <div>

        <Navbar />
        <main  >
            <Home />
            <About />
            <Services />
            <Contact />
            <Footer />
        </main>

    </div>
  );
}
