import ActivityCard from '../components/ActivityCard';

const Activities = () => {
  return (
    <section
      id="activities"
      className="min-h-screen md:min-h-[110vh] py-20 flex flex-col justify-center items-center bg-[#034142] "
    >
      <div className="text-center items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold">
          Our <br />
          Activities
        </h1>
        <p className="pt-5 text-slate-300 text-sm md:text-lg px-5">Mau tahu kegiatan apa saja yang kami adakan? Yuk simak di bawah ini!</p>
        <img
          className="mx-auto"
          src="/assets/title-decor.png"
          loading="lazy"
          alt=""
        />
      </div>
      <div className="flex flex-col md:flex-row gap-10 w-full md::w-[80vw] mx-auto my-10 p-3 justify-center items-center">
        <ActivityCard
          imgSrc="/assets/studyclub.jpg"
          name="Study Club"
          desc="Belajar bersama komunitas Weboender tentang fundamental pemrograman web"
        />
        <ActivityCard
          imgSrc="/assets/upgrade.jpg"
          name="Upgrading Community Administrator"
          desc="Upgrading skills pengurus komunitas Weboender dalam pemrograman web lanjutan"
        />
        <ActivityCard
          imgSrc="/assets/bootcamp.jpg"
          name="Bootcamp"
          desc="Belajar framework pemrograman web secara intensif dengan pendekatan project-based learning. Pengalaman langsung didampingi oleh mentor berpengalaman."
        />
      </div>
    </section>
  );
};

export default Activities;
