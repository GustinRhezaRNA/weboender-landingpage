import { FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex justify-center items-center py-10 px-4 bg-[#034142]"
    >
      <div className="w-full max-w-5xl bg-[#107A7B] bg-[url('/assets/bg-contact.png')] bg-contain bg-center bg-no-repeat w-full text-white p-8 rounded-3xl relative flex flex-col md:flex-row items-center md:items-start">
        {/* Bagian Kiri - Text */}
        <div className="flex-1">
          <h3 className="text-sm uppercase">Contact Us</h3>
          <h2 className="text-3xl font-bold mt-2">
            Do you need help? <br /> contact us
          </h2>
        </div>

        <div className="flex-1 mt-6 md:mt-0 space-y-4">
          <div className="flex items-center max-w-[400px] bg-white text-[#163D2A] justify-between  rounded-full px-6 py-3 shadow-md">
            <span className="text-xl ">
              <FaEnvelope />
            </span>
            <p className="ml-4 font-bold text-lg">weboendercommunity@gmail.com</p>
          </div>

          <div className="flex items-center  max-w-[400px] justify-between bg-white text-[#163D2A] rounded-full px-6 py-3 shadow-md">
            <span className="text-xl rotate-90">
              <FaPhone />
            </span>
            <p className="ml-4 font-bold text-lg">+62 858-5674-1328</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
