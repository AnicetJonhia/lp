import { useEffect } from 'react';

const CursorFollower = () => {
  useEffect(() => {
    const cursorFollower = document.querySelector('.cursor-follower');

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      if (cursorFollower) {
        cursorFollower.style.left = `${clientX}px`;
        cursorFollower.style.top = `${clientY}px`;
      }
    };

    // Suivre le mouvement de la souris
    document.addEventListener('mousemove', handleMouseMove);

    // Agrandir au survol des éléments
    const elementsToGrow = document.querySelectorAll('button, .hover-grow');
    elementsToGrow.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        if (cursorFollower) {
          cursorFollower.style.width = '50px';
          cursorFollower.style.height = '50px';
        }
      });

      el.addEventListener('mouseleave', () => {
        if (cursorFollower) {
          cursorFollower.style.width = '30px';
          cursorFollower.style.height = '30px';
        }
      });
    });

    // Nettoyer l'effet lorsque le composant est démonté
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      elementsToGrow.forEach((el) => {
        el.removeEventListener('mouseenter', () => {});
        el.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return <div className="cursor-follower" />;
};

export default CursorFollower;
