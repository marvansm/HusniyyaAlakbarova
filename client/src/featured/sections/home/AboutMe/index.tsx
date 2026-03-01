const AboutMeSection = () => {
  return (
    <div className="relative mt-[48px] px-[86px]">
      <div className="relative z-10">
        <h2 className="text-white text-center font-bold text-[56px] leading-[64px] font-poppins pb-[46px]">
          About me
        </h2>

        <div className="grid grid-cols-12 gap-[124px]">
          <div className="col-span-6 flex justify-center items-center">
            <div className="w-[473px] h-[352px] rounded-3xl bg-[url('https://images.pexels.com/photos/32279573/pexels-photo-32279573.jpeg')] bg-cover bg-center bg-no-repeat bg-gray-300"></div>
          </div>
          <div className="col-span-6">
            <div className="w-[548px] flex flex-col gap-[16px] items-start">
              <p className="text-[#D4D4D8] text-[24px] leading-[32px] font-medium font-mukta">
                Hi, I’m **Husniyya Alakbarova** — a Graphic and UX/UI Designer,
                as well as a passionate Instructor. I started this journey as a
                student with no background in design, just curiosity and
                consistency. Over time, I built my own career from home, step by
                step, and today I help others do the same.
              </p>
              <p className="text-[#9F9FA9] text-[24px] leading-[32px] font-medium font-mukta">
                For the past 3 years, I’ve been working with over 500 students
                and collaborating with brands to build meaningful digital
                experiences. To me, design is not just about visuals — it’s
                about helping people express their ideas clearly and
                confidently. <br />
                “Design changed my life — now I help others do the same.”
              </p>
            </div>
          </div>
        </div>

        <div className="w-full gap-[42px] flex items-center justify-center mt-[62px]">
          <button className="flex w-[218px] py-[22px] px-[18px] flex-col items-center shrink-0 rounded-[24px] border border-[#27272A] bg-[#18181B]">
            <p className="text-[#D1FE4E] text-center text-[30px] leading-[44px] font-semibold font-poppins">
              5+
            </p>
            <h2 className="text-zinc-500 text-center text-[22px] leading-[32px] font-medium font-mukta">
              Years Exp.
            </h2>
          </button>
          <button className="flex w-[218px] py-[22px] px-[18px] flex-col items-center shrink-0 rounded-[24px] border border-[#27272A] bg-[#18181B]">
            <p className="text-[#F22FB0] text-center text-[30px] leading-[44px] font-semibold font-poppins">
              50+
            </p>
            <h2 className="text-zinc-500 text-center text-[22px] leading-[32px] font-medium font-mukta">
              Projects
            </h2>
          </button>
          <button className="flex w-[218px] py-[22px] px-[18px] flex-col items-center shrink-0 rounded-[24px] border border-[#27272A] bg-[#18181B]">
            <p className="text-[#FF6900] text-center text-[30px] leading-[44px] font-semibold font-poppins">
              30+
            </p>
            <h2 className="text-zinc-500 text-center text-[22px] leading-[32px] font-medium font-mukta">
              Clients
            </h2>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
