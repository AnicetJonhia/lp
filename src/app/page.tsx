"use client";
import React from "react"
import Navbar from "@/components/navigation/Navbar";

export default function HomePage() {

  return (
      <div>

<div className={"fixed top-0 left-0 w-full z-100  shadow-lg"}>  <Navbar/></div>

  <section id="home" className="min-h-screen">
    <h2>Acceuil</h2>
    <p>Contenu de la section Acceuil</p>
  </section>

  <section id="about" className="min-h-screen">
    <h2>A propos</h2>
    <p>Contenu de la section A propos</p>
  </section>

  <section id="services" className="min-h-screen">
    <h2>Services</h2>
    <p>Contenu de la section Services</p>
  </section>

  <section id="contact" className="min-h-screen">
    <h2>Nous Contacter</h2>
    <p>Contenu de la section Nous Contacter</p>
  </section>
        </div>
  )
}







