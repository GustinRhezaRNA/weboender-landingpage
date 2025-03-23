

const CTA = () => {
  return (
    <section
      id="join"
      className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-[#034142] via-[#1E5656] to-[#034142] px-4  "
    >
      <h1 className="text-white text-4xl md:text-6xl font-bold">Wanna Be Our Member ?</h1>
      <p className="pt-5 text-slate-300 text-lg md:text-xl px-5">Click Button Below</p>
      <a
        className="sm:w-1/5 mt-6 px-6 py-3 bg-[#0B7677] bg-contain bg-no-repeat text-white text-2xl font-bold rounded-md shadow-2xl hover:bg-[#026c64] transition text-center"
        href="https://bit.ly/opmemweboender24"
        target="_blank"
      >
        Register
      </a>
    </section>
  );
};

export default CTA;
