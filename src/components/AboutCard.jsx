import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const AboutCard = ({ imgSrc, name }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleOrientation = (event) => {
      const { beta, gamma } = event; // beta: miring depan/belakang, gamma: miring kiri/kanan
      setRotation({
        x: beta ? beta / 10 : 0, // Batasin rotasi agar smooth
        y: gamma ? gamma / 10 : 0,
      });
    };

    window.addEventListener('deviceorientation', handleOrientation);

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  return (
    <motion.img
      src={imgSrc}
      alt={name}
      loading="lazy"
      className="w-full md:w-1/2 lg:w-1/3 rounded-lg object-cover"
      style={{ transformOrigin: 'center' }}
      animate={{
        rotateX: rotation.x,
        rotateY: rotation.y,
      }}
      transition={{ type: 'spring', stiffness: 100, damping: 10 }}
    />
  );
};

export default AboutCard;
