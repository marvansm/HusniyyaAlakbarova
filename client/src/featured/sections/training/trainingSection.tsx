
const TrainingSection = () => {
  return (
    
 
    <section className=" bg-black py-20 px-6">
      <div className=" max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-16 items-center">

       
        <div className="relative flex justify-center">

          {/* Main Image */}
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
            alt="main"
            className="w-[420px] h-[520px] object-cover rounded-3xl"
          />

          {/* Small Overlay Image */}
          <img
            src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28"
            alt="overlay"
            className="absolute -left-10 bottom-16 w-[250px] h-[180px] object-cover rounded-2xl shadow-xl"
          />

          {/* Purple Circle */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3
                          w-40 h-40 rounded-full
                          bg-gradient-to-br from-purple-600 to-indigo-700
                          flex items-center justify-center
                          text-white text-3xl font-semibold shadow-2xl">
            1,485+
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div>

          {/* Small Label */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-3 h-3 rounded-full bg-purple-600"></span>
            <p className="text-gray-400">About Company</p>
          </div>

          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl font-semibold text-lime-400 leading-tight mb-6">
            We Are The Best Online Payment Gateway Agency
          </h2>

          {/* Paragraph */}
          <p className="text-gray-400 mb-10 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>

          {/* FEATURES */}
          <div className="space-y-8">

            {/* Item 1 */}
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

            {/* Item 2 */}
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

            {/* Item 3 */}
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



  )
}

export default TrainingSection
