"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen pt-24 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Nous Contacter</h2>
        <p className="text-lg text-gray-600 mb-12">
          N'hésitez pas à nous contacter pour toute question ou demande d'information.
        </p>

        {/* Grid Contact */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Infos de contact */}
          <div className="text-left space-y-6">
            <div className="flex items-center space-x-4">
              <Phone className="text-primary w-6 h-6" />
              <span className="text-lg text-gray-700">+33 1 23 45 67 89</span>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="text-primary w-6 h-6" />
              <span className="text-lg text-gray-700">contact@exemple.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-primary w-6 h-6" />
              <span className="text-lg text-gray-700">123, Rue Exemple, Paris</span>
            </div>
          </div>

          {/* Formulaire de contact */}
          <form className="bg-white p-6 rounded-lg shadow-lg space-y-4">
            <Input type="text" placeholder="Votre Nom" required />
            <Input type="email" placeholder="Votre Email" required />
            <Textarea placeholder="Votre Message" rows={4} required />
            <Button type="submit" className="w-full cursor-pointer bg-primary text-white">
              Envoyer
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
