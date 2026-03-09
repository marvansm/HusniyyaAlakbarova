const TrainingSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-[1440px] mx-auto flex gap-3 ">
        <div className="relative w-[532px] flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
            alt="main"
            className="w-[420px] h-[600px] object-cover rounded-[40px]"
          />

          <img
            src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28"
            alt="overlay"
            className="absolute -left-14 bottom-52 w-[340px] h-[240px] object-cover rounded-2xl shadow-xl"
          />

          <div
            className="absolute bottom-[196px] left-2/5 -translate-x-1/2 translate-y-1/3
                       w-[200px] h-[200px] rounded-full
                       bg-[#6200EE]
                       flex items-center justify-center
                       text-white text-3xl font-semibold shadow-2xl"
          >
            1,485+
          </div>
        </div>

        <div className="w-[755px] font-mukta">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 ">
              <div className="w-8 h-8 rounded-full border border-[#6200EE] flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-[#6200EE]"></span>
              </div>
              <p className="text-white text-[18px] font-mukta leading-7">
              About Company
            </p>
            </div>

        

            <h2 className="text-[56px] font-normal text-[#D1FE4E] font-mukta leading-16">
              We Are The Best Online Payment Gateway <br /> Agency
            </h2>

            <p className="text-white text-[18px] font-mukta font-normal mb-10 leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex gap-5">
              <div className="w-14 h-14 bg-white rounded-[14px] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M18.6668 24.5V22.1667C18.6668 20.929 18.1752 19.742 17.3 18.8668C16.4248 17.9917 15.2378 17.5 14.0002 17.5H7.00016C5.76249 17.5 4.5755 17.9917 3.70033 18.8668C2.82516 19.742 2.3335 20.929 2.3335 22.1667V24.5"
                    stroke="#8133F1"
                    strokeWidth="2.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.6665 3.64941C19.6672 3.90885 20.5535 4.49322 21.1861 5.31082C21.8188 6.12842 22.1621 7.13295 22.1621 8.16675C22.1621 9.20054 21.8188 10.2051 21.1861 11.0227C20.5535 11.8403 19.6672 12.4246 18.6665 12.6841"
                    stroke="#8133F1"
                    strokeWidth="2.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M25.6665 24.4999V22.1666C25.6657 21.1326 25.3216 20.1282 24.6881 19.311C24.0546 18.4938 23.1677 17.9101 22.1665 17.6516"
                    stroke="#8133F1"
                    strokeWidth="2.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.5002 12.8333C13.0775 12.8333 15.1668 10.744 15.1668 8.16667C15.1668 5.58934 13.0775 3.5 10.5002 3.5C7.92283 3.5 5.8335 5.58934 5.8335 8.16667C5.8335 10.744 7.92283 12.8333 10.5002 12.8333Z"
                    stroke="#8133F1"
                    strokeWidth="2.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-[#D9FE6B] font-normal text-[24px] leading-8 mb-1">
                  Trusted Partner
                </h4>
                <p className="text-white text-[18px]">
                Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore elus.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-[56px] h-[56px] bg-white rounded-[14px] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M4.66674 16.3334C4.44596 16.3341 4.22951 16.2722 4.04252 16.1548C3.85553 16.0375 3.70568 15.8694 3.61038 15.6703C3.51508 15.4711 3.47825 15.249 3.50416 15.0298C3.53006 14.8105 3.61765 14.6031 3.75674 14.4317L15.3067 2.53169C15.3934 2.43169 15.5114 2.36411 15.6416 2.34005C15.7717 2.31599 15.9061 2.33688 16.0228 2.39928C16.1394 2.46169 16.2314 2.56191 16.2836 2.68349C16.3358 2.80507 16.3452 2.94078 16.3101 3.06836L14.0701 10.0917C14.004 10.2685 13.9818 10.4586 14.0054 10.6459C14.029 10.8331 14.0977 11.0118 14.2055 11.1667C14.3133 11.3216 14.4571 11.448 14.6246 11.535C14.792 11.6221 14.978 11.6673 15.1667 11.6667H23.3334C23.5542 11.6659 23.7706 11.7278 23.9576 11.8452C24.1446 11.9626 24.2945 12.1306 24.3898 12.3298C24.4851 12.5289 24.5219 12.751 24.496 12.9703C24.4701 13.1895 24.3825 13.3969 24.2434 13.5684L12.6934 25.4684C12.6068 25.5684 12.4887 25.6359 12.3586 25.66C12.2285 25.6841 12.0941 25.6632 11.9774 25.6008C11.8607 25.5384 11.7687 25.4381 11.7165 25.3166C11.6643 25.195 11.655 25.0593 11.6901 24.9317L13.9301 17.9084C13.9961 17.7316 14.0183 17.5414 13.9947 17.3542C13.9711 17.167 13.9025 16.9882 13.7946 16.8334C13.6868 16.6785 13.543 16.5521 13.3756 16.465C13.2082 16.3779 13.0221 16.3327 12.8334 16.3334H4.66674Z"
                    stroke="#8133F1"
                    strokeWidth="2.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-[#D9FE6B] font-normal text-[24px] leading-8 mb-1">
                  Fastpace Platform
                </h4>
                <p className="text-white text-[18px]">
                Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore elus.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-[56px] h-[56px] bg-white rounded-[14px] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M18.6665 8.16675H25.6665V15.1667"
                    stroke="#8133F1"
                    strokeWidth="2.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M25.6668 8.16675L15.7502 18.0834L9.91683 12.2501L2.3335 19.8334"
                    stroke="#8133F1"
                    strokeWidth="2.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-[#D9FE6B] font-normal text-[24px] leading-8 mb-1">
                  Tested Reliability
                </h4>
                <p className="text-white text-[18px]">
                Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore elus.
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
