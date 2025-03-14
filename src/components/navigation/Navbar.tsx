"use client";

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Menu, Triangle } from "@deemlol/next-icons";

const Navbar = () => {
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState(false);


  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeSheet = () => {
    setIsSheetOpen(false);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const activeId = `#${entry.target.id}`;
            setActiveSection(activeId);
            window.history.pushState(null, "", activeId);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
      <header
          className={`flex  w-full gap-4 items-center px-4 md:px-6 fixed top-0 left-0 z-50 bg-background ${
              isScrolled ? "shadow-lg h-18" : "h-24"
          }`}
      >
        <Link href="#" className="mr-6 flex flex-1" prefetch={false}>
          <Triangle className="h-6 w-6"/>
          <span className={"ml-2"}>LP</span>
        </Link>
        <nav className="ml-auto hidden lg:flex gap-6">
          <CustomLink href="#home" isActive={activeSection === "#home"}>
            Acceuil
          </CustomLink>
          <CustomLink href="#about" isActive={activeSection === "#about"}>
            A propos
          </CustomLink>
          <CustomLink href="#services" isActive={activeSection === "#services"}>
            Services
          </CustomLink>
          <CustomLink
              className="border-2 border-primary"
              href="#contact"
              isActive={activeSection === "#contact"}
          >
            Nous Contacter
          </CustomLink>
        </nav>
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6"/>
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="flex flex-col gap-6 p-4">
              <div className="flex flex-col gap-2">
                <Link href="#" className="gap-2 ml-4 items-center flex" prefetch={false}>
                  <Triangle className="h-6 w-6"/>
                  <span className="sr-only">LP</span>
                </Link>
              </div>

              <div className="grid gap-2 flex items-center py-6">
                <CustomLink href="#home" onClick={closeSheet} isActive={activeSection === "#home"}>
                  Acceuil
                </CustomLink>
                <CustomLink href="#about" onClick={closeSheet} isActive={activeSection === "#about"}>
                  A propos
                </CustomLink>
                <CustomLink href="#services" onClick={closeSheet} isActive={activeSection === "#services"}>
                  Services
                </CustomLink>
              </div>

              <div className="flex flex-col gap-2">
                <CustomLink
                    className="border-2 border-primary  "
                    href="#contact"
                    onClick={closeSheet}
                    isActive={activeSection === "#contact"}
                >
                  Nous Contacter
                </CustomLink>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </header>
  );
};

type CustomLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  isActive?: boolean;
};

const CustomLink = ({ href, children, className = "", onClick, isActive }: CustomLinkProps) => {
  return (
    <Link
      href={href}
      onClick={onClick ? (e) => { onClick(); } : undefined}
      className={`
        inline-flex h-9 w-max items-center justify-center rounded-lg px-4 py-2 font-medium transition-colors
        hover:bg-muted hover:text-foreground   
        disabled:pointer-events-none disabled:opacity-50
        dark:hover:bg-muted-foreground dark:hover:text-primary-foreground 
        ${isActive ? " focus:outline-none  text-muted-foreground  text-md" : "text-sm "}
        ${className}
      `}
      prefetch={false}
    >
      {children}
    </Link>
  );
};

export default Navbar;
