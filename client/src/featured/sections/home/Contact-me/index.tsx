const ContactMe = () => {
  return (
    <div className="mt-[118px] px-[64px] ">
      <div className="flex items-center justify-center flex-col gap-[16px] px-[86px] self-stretch pb-[36px]">
        <h2 className="text-white text-center text-[38px] leading-[48px] font-bold font-poppins self-stretch">
          Contact me
        </h2>
        <p className="text-white text-center text-[18px] leading-[28px] font-normal font-mukta h-[85px] self-stretch ">
          Lorem ipsum dolor sit amet consectetur. In ipsum ac pharetra aenean
          sed imperdiet feugiat vitae purus. Urna in tortor ac porttitor tortor{" "}
          <br />
          volutpat mollis tempus.
        </p>
      </div>
      <div className="flex items-center justify-center flex-col gap-[42px] h-[301px]">
        <div className="flex flex-col items-center  w-[377px]  gap-[18px]">
          <div className="flex h-[48px] px-[16px] py-[8px] justify-center items-center gap-[16px] self-stretch rounded-[50px] border border-[#929292]">
            <input
              type="text"
              className="text-[#929292] font-mukta text-[16px] leading-[24px] font-normal outline-0 border-0 w-full"
              placeholder="Name surname"
            />
          </div>
          <div className="flex h-[48px] px-[16px] py-[8px] justify-center items-center gap-[16px] self-stretch rounded-[50px] border border-[#929292]">
            <input
              type="text"
              className="text-[#929292] font-mukta text-[16px] leading-[24px] font-normal outline-0 border-0 w-full"
              placeholder="Phone or e-mail"
            />
          </div>
          <div className="flex h-[48px] px-[16px] pl-[24px] py-[8px] justify-between items-center gap-[16px] self-stretch rounded-[50px]   border border-[#929292]">
            <h2 className="text-[#F3F2FE] font-mukta text-[16px] leading-[24px] font-normal">
              Service
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19.92 15.05L13.4 8.53001C12.63 7.76001 11.37 7.76001 10.6 8.53001L4.07996 15.05"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <button className="flex w-[150px] h-[56px] px-[8px] py-[16px] justify-center items-center gap-[14px] flex-shrink-0 rounded-[50px] bg-[#5900D9] text-white font-poppins text-[16px] leading-[24px] font-normal">
          Send message
        </button>
      </div>
    </div>
  );
};

export default ContactMe;
