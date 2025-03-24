export default function Button({ text, func, className }) {
    return (
      <button
        onClick={func}
        className={`px-6 py-3 rounded-md border-white border-[1px] bg-[#0B7677] whiteShadow duration-200 ${className}`}
      >
        <p className="text-white font-bold text-md md:text-xl">{text}</p>
      </button>
    );
  }
  