import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ActivityCard = ({ imgSrc, name, desc }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col w-64 rounded-xl overflow-hidden shadow-lg bg-white"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="relative">
        <img
          src={imgSrc}
          alt={name}
          className="w-full h-80 object-cover"
          loading="lazy"
        />
      </div>

      <div className="bg-[#0F7475] text-white p-4 h-44">
        <h2 className="text-lg font-bold pt-1">{name}</h2>
        <p className="text-sm text-gray-300 pt-1">{desc}</p>
      </div>
    </motion.div>
  );
};

export default ActivityCard;
