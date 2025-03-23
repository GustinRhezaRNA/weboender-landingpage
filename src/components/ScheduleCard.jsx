import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ScheduleCard = ({ number, title, description }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 }); 

  return (
    <motion.div
      ref={ref}
      className="bg-white shadow-lg rounded-lg p-6 w-[300px] text-black"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: number * 0.2 }}
    >
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-[#034142] text-white flex items-center justify-center rounded-full text-lg font-bold">
          {number}
        </div>
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-700 mt-2">{description}</p>
    </motion.div>
  );
};

export default ScheduleCard;
