"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";

// Images (à remplacer par tes propres images)
import service1 from "@/assets/images/services/service1.png";
import service2 from "@/assets/images/services/service2.png";
import service3 from "@/assets/images/services/service3.png";
import service4 from "@/assets/images/services/service4.png";

const servicesData = [
  {
    id: 1,
    title: "Service 1",
    image: service1,
    shortDesc: "Description courte du service 1.",
    fullDesc:
      "Description complète du service 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
  },
  {
    id: 2,
    title: "Service 2",
    image: service2,
    shortDesc: "Description courte du service 2.",
    fullDesc:
      "Description complète du service 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
  },
  {
    id: 3,
    title: "Service 3",
    image: service3,
    shortDesc: "Description courte du service 3.",
    fullDesc:
      "Description complète du service 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
  },
  {
    id: 4,
    title: "Service 4",
    image: service4,
    shortDesc: "Description courte du service 4.",
    fullDesc:
      "Description complète du service 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
  },
];

const Services = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <section id="services" className="min-h-screen pt-24 px-6 bg-muted-foreground/10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Nos Services</h2>
        <p className="text-lg text-gray-600 mb-12">
          Découvrez nos services professionnels adaptés à vos besoins.
        </p>

        {/* Grid des services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <Card key={service.id} className="shadow-lg rounded-lg max-h-[500px]">
              <CardHeader>
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardTitle className="text-xl text-gray-800 mt-3">
                  {service.title}
                </CardTitle>
              </CardHeader>

         <CardContent className="flex flex-col justify-between">
            <p className="flex-grow text-foreground">
              {expanded === service.id ? service.fullDesc : service.shortDesc}
            </p>
            <Button
              variant="outline"
              className="mt-4 w-full cursor-pointer"
              onClick={() => toggleExpand(service.id)}
            >
              {expanded === service.id ? "Voir moins" : "Voir plus"}
            </Button>
          </CardContent>

            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
