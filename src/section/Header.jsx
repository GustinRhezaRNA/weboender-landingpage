import Button from '../components/Button';

const Header = () => {
  return (
    <header id="home">
      <div className="flex flex-col gap-10 h-[110vh] items-center  bg-[#034142] bg-[url('/assets/background1.png')] bg-cover bg-center w-full">
        <div className="h-1/2 pt-20 ">
          <h1 className=" text-white text-center md:text-6xl text-3xl font-bold pt-20">
            WEBOENDER <br />
            UIN MALANG <span className="text-[#FC5951]">{new Date().getFullYear()}</span>
          </h1>

          <p className="text-slate-300 text-center text-sm md:text-lg pt-10 md:px-1 px-3">
            Selamat datang di Komunitas Weboender UIN Malang! <br />
            Tempat mahasiswa untuk memperdalam pemahaman dan pengalaman mereka tentang web development.
          </p>

          <div className="flex gap-5 items-center justify-center pt-5 md:pt-10">
            <Button
              className="bg-[#0B7677] px-3 py-2 md:px-7 md:py-4 border-none rounded-md text-white font-bold text-md md:text-xl hover:bg-[#026c64] transition"
              text=" Join Us !"
            ></Button>
            <button
              className="flex items-center gap-2 transition-transform duration-300 hover:scale-110 hover:text-white"
              onClick={() => {
                window.open('https://www.youtube.com/@WeboenderCommunity', '_blank');
              }}
            >
              <img
                src="./assets/play-circle.svg"
                alt=""
                style={{ width: '30px', height: '30px' }}
                loading="lazy"
                className="transition-transform duration-300 hover:scale-125"
              />
              <p className="text-md md:text-xl text-[#7DC9CA] transition-colors duration-300 hover:text-white">Watch The Teaser</p>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
