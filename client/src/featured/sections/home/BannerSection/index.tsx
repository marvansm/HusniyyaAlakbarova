import Image from "next/image";

const BannerSection = () => {
  return (
    <div className=" w-full  px-[97px] py-10">
      <div className="grid grid-cols-2 justify-between items-center ">
        <div>
          <div className="greeting mb-[16px]">
            <h2 className="font-mukta text-[30px] font-medium text-white leading-[44px]">
              Hi I am{" "}
            </h2>
            <h3 className="text-[#FD6F00] text-[38px] font-semibold leading-[48px] font-poppins">
              Husniyya Alakbarova
            </h3>
          </div>
          <div className="w-[705px] flex flex-col gap-[16px] ">
            <h2 className="text-[#D1FE4E] text-[64px] font-poppins font-bold leading-[74px]">
              Graphic Designer
            </h2>
            <h2 className="text-[#D1FE4E] text-[64px] font-poppins font-bold leading-[74px] text-center">
              UX/UI Designer{" "}
            </h2>
            <h2 className="text-[#D1FE4E] text-[64px] font-poppins font-bold leading-[74px] text-right">
              Instructor
            </h2>
          </div>
          <button className=" mt-[42px] flex w-37.5 h-12 px-2 py-3 items-center justify-center gap-3.5 border-0 bg-[#6200EE] text-white font-poppins text-[16px] font-normal leading-6 rounded-[50px]">
            Contact me
          </button>
        </div>
        <div className="justify-self-end avatar w-[472px] shrink-0 h-[472px] rounded-[472px] border-[4px] border-[rgba(250,78,77,0.5)] bg-white shadow-[0_6px_6px_0_rgba(0,0,0,0.47)] relative overflow-hidden">
          <Image src="https://images.pexels.com/photos/32279573/pexels-photo-32279573.jpeg" alt="Avatar" fill />
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
