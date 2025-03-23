import AboutCard from '../components/AboutCard';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen md:h-[110vh] py-20 flex flex-col justify-center items-center bg-[#034142] w-full"
    >
      <div className="text-center items-center lg:mt-0 mt-10">
        <h1 className="text-white text-4xl md:text-6xl font-bold">About Us</h1>
        <p className="pt-5 text-slate-300 text-sm md:text-lg px-5">
          Kami adalah komunitas yang bertujuan untuk membantu mahasiswa memperdalam pemahaman mereka tentang web development. <br />
          Kami berkomitmen untuk membuka pintu peluang bagi pertumbuhan dan eksplorasi di dunia teknologi digital. <br />
          Bergabunglah dengan kami untuk menyatukan tekad dan bersama-sama membentuk masa depan digital yang lebih baik!
        </p>
        <img
          className="mx-auto"
          src="/assets/title-decor.png"
          loading="lazy"
          alt=""
        />
      </div>
      <div className="w-2/3 max-w-6xl mx-auto my-10 bg-[#107A7B] p-4 md:p-6 rounded-[40px] flex flex-wrap  ">
        <div className="flex flex-wrap justify-center md:justify-around gap-3 mt-5 md:mt-0">
          <AboutCard
            imgSrc="/assets/visi1.jpg"
            name={'visi'}
          />
          <AboutCard
            imgSrc="/assets/misi1.jpg"
            name={'misi'}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
