"use client";
import { useEffect } from "react";

const CursorFollower = () => {
  useEffect(() => {
    const numDots = 7; // Nombre de points
    const dots = Array.from({ length: numDots }, (_, i) => {
      const dot = document.createElement("div");
      dot.className = `cursor-dot dot-${i}`;
      document.body.appendChild(dot);
      return dot;
    });

    let positions = Array(numDots).fill({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    let target = { x: positions[0].x, y: positions[0].y };

    const handleMouseMove = (e: MouseEvent) => {
      target = { x: e.clientX, y: e.clientY };
    };

    document.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      positions.forEach((pos, index) => {
        setTimeout(() => {
          const speed = 0.6 - index * 0.025; 
          positions[index] = {
            x: pos.x + (target.x - pos.x) * speed,
            y: pos.y + (target.y - pos.y) * speed,
          };

          dots[index].style.left = `${positions[index].x}px`;
          dots[index].style.top = `${positions[index].y}px`;
        }, index * 30); // Décalage temporel entre chaque point
      });

      requestAnimationFrame(animate);
    };

    animate(); // Lancer l'animation

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      dots.forEach((dot) => dot.remove());
    };
  }, []);

  return null;
};

export default CursorFollower;
