import ScheduleCard from '../components/ScheduleCard';

const Schedule = () => {
  return (
    <section
      id="schedule"
      className="min-h-screen md:h-[110vh] py-20 flex flex-col justify-center items-center bg-[#034142] bg-[url('/assets/bg-schedule.png')] bg-contain bg-center bg-no-repeat w-full"
    >
      <div className="text-center items-center lg:mt-0 mt-10">
        <h1 className="text-white text-4xl md:text-6xl font-bold">Schedule</h1>
        <p className="pt-5 text-slate-300 text-sm md:text-lg px-5">Jadwal kegiatan kami akan selalu diupdate di sini. Yuk simak jadwal terbaru kami!</p>
        <img
          className="mx-auto"
          src="/assets/title-decor.png"
          alt=""
          loading="lazy"
        />
      </div>

      <div className="w-2/3 max-w-6xl mx-auto my-10 p-4 md:p-6 rounded-[40px] flex flex-wrap items-center justify-center">
        <div className="flex flex-wrap justify-center md:justify-around gap-3 mt-5 md:mt-0">
          <ScheduleCard
            number="1"
            title="Study Club"
            description="Diadakan tiap semester ganjil, kegiatan ini diadakan seminggu sekali setelah IT Incubation untuk para member Weboender."
          />
          <ScheduleCard
            number="2"
            title="Upgrading Administrator"
            description="Diadakan tiap semester ganjil, kegiatan ini diadakan seminggu sekali setelah IT Incubation untuk para pengurus Weboender."
          />
          <ScheduleCard
            number="3"
            title="Bootcamp"
            description="Diadakan tiap semester genap, kegiatan ini diadakan selama 3 hari berturut-turut untuk para peminat pembelajaran framework web."
          />
        </div>
      </div>
    </section>
  );
};

export default Schedule;
