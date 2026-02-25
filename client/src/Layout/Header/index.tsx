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
          <button className="flex w-37.5 h-12 px-2 py-3 items-center justify-center gap-3.5 border-0 bg-[#6200EE] text-white font-poppins text-[16px] outline-0 font-normal leading-6 rounded-[50px]">
            Contact me
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
