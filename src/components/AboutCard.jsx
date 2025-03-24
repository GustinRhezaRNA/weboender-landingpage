import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AboutCard = ({ imgSrc, name }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [permissionGranted, setPermissionGranted] = useState(false);

  const requestPermission = async () => {
    if (
      typeof DeviceMotionEvent !== "undefined" &&
      typeof DeviceMotionEvent.requestPermission === "function"
    ) {
      const permission = await DeviceMotionEvent.requestPermission();
      if (permission === "granted") {
        setPermissionGranted(true);
      }
    } else {
      setPermissionGranted(true); // Untuk Android yang nggak perlu izin manual
    }
  };

  useEffect(() => {
    if (!permissionGranted) return;

    const handleOrientation = (event) => {
      const { beta, gamma } = event; // beta: depan/belakang, gamma: kiri/kanan
      setRotation({
        x: beta ? beta / 5 : 0, // Kurangi agar tidak terlalu agresif
        y: gamma ? gamma / 5 : 0,
      });
    };

    window.addEventListener("deviceorientation", handleOrientation);

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, [permissionGranted]);

  return (
    <div className="flex flex-col items-center">
      {!permissionGranted && (
        <button
          onClick={requestPermission}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg mb-4"
        >
          Enable Gyroscope
        </button>
      )}

      <motion.img
        src={imgSrc}
        alt={name}
        loading="lazy"
        className="w-full md:w-1/2 lg:w-1/3 rounded-lg object-cover shadow-lg"
        style={{ transformOrigin: "center" }}
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      />
    </div>
  );
};

export default AboutCard;
