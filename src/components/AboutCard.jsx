import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutCard = ({ imgSrc, name }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <motion.img
      ref={ref}
      src={imgSrc}
      alt={name}
      loading="lazy"
      className="w-full md:w-1/2 lg:w-1/3 rounded-lg object-cover"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    />
  );
};

export default AboutCard;
