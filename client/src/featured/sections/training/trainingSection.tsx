const TrainingSection = () => {
  return (
    <section className="  py-20 px-6">
      <div className=" max-w-[1440px] mx-auto flex gap-3 items-center">
        <div className="relative w-[532px] flex justify-center">

          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
            alt="main"
            className="w-[420px] h-[600px] object-cover rounded-3xl"
          />


          <img
            src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28"
            alt="overlay"
            className="absolute -left-12 bottom-14 w-[340px] h-[240px] object-cover rounded-2xl shadow-xl"
          />


          <div
            className="absolute bottom-[65px] left-2/5 -translate-x-1/2 translate-y-1/3
                          w-[200px] h-[200px] rounded-full
                          bg-[#6200EE]
                          flex items-center justify-center
                          text-white text-3xl font-semibold shadow-2xl"
          >
            1,485+
          </div>
        </div>


        <div className="w-[755px]">

          <div className="flex items-center gap-3 mb-6">
            <span className="w-3 h-3 rounded-full bg-purple-600"></span>
            <p className="text-white text-[18px] font-mukta leading-7">About Company</p>
          </div>

          <h2 className="text-[56px] font-normal text-[#D1FE4E] font-mukta  leading-16 mb-6">
            We Are The Best Online Payment Gateway <br /> Agency
          </h2>

          <p className="text-white text-[18px] font-mukta font-normal mb-10 leading-]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea.
          </p>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                👥
              </div>
              <div>
                <h4 className="text-lime-400 font-semibold mb-1">
                  Trusted Partner
                </h4>
                <p className="text-gray-400 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                ⚡
              </div>
              <div>
                <h4 className="text-lime-400 font-semibold mb-1">
                  Fastpace Platform
                </h4>
                <p className="text-gray-400 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                📈
              </div>
              <div>
                <h4 className="text-lime-400 font-semibold mb-1">
                  Tested Reliability
                </h4>
                <p className="text-gray-400 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
