import { Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6  ">
      <div className="max-w-6xl mx-auto text-center">
        {/* Réseaux sociaux */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook className="w-6 h-6 text-white hover:text-primary transition-colors" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 text-white hover:text-primary transition-colors" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} MonEntreprise. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
