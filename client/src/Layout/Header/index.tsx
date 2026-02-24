import Image from "next/image";

const Header = () => {
  return (
    <header className=" relative px-16.25 py-10 ">
      <nav className="  flex items-center justify-between">
        <div className="w-18 h-18 rounded-full overflow-hidden shrink-0 relative z-999">
          <Image
            src="https://thumbs.dreamstime.com/b/portrait-young-blonde-hair-woman-shirt-formalwear-thumb-up-like-symbol-promoting-linkedin-profile-isolated-beige-color-311675446.jpg"
            alt="logo"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex items-center gap-28.75">
          <ul className="flex items-center gap-16.25 text-white font-poppins text-[24px] font-semibold leading-8">
            <li>About us</li>
            <li>Services</li>
            <li>Training</li>
          </ul>
          <button className="flex w-37.5 h-12 px-2 py-3 items-center justify-center gap-3.5 border-0 bg-[#6200EE] text-white font-poppins text-[16px] font-normal leading-6 rounded-[50px]">
            Contact me
          </button>
        </div>
      </nav>
      <div>
        <div
          className="
    absolute
    w-[369.582px] h-[365.188px]
    top-[-101.1049px]
    left-[-202.7122px]
    rounded-full
    blur-[50px]
  "
          style={{
            transform: "rotate(-90.184deg)",
            background:
              "linear-gradient(180deg, #F22FB0 0%, rgba(245, 138, 37, 0) 71.87%)",
          }}
        />
        <div
          className="absolute top-[-82.5365px] left-[-172.8273px]"
          style={{
            width: "505.095px",
            height: "499.09px",
            transform: "rotate(-90.184deg)",
            borderRadius: "505.095px",
            background:
              "linear-gradient(180deg, #FF7BBA 0%, rgba(148, 111, 255, 0.46) 100%)",
            filter: "blur(100px)",
          }}
        />
        <div
          className="
         absolute
        top-[-192.0001px]
        -left-91.25
        bg-cover
    w-182.5
    h-231.75
    rotate-[-90.184deg]
    bg-[url('/Texture.png')]
    mix-blend-overlay
  "
        />
      </div>
    </header>
  );
};

export default Header;
