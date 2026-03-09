import Link from "next/link";

const works1 = [
  { id: 1, image: "/work1.jpeg", link: "https://www.behance.net/gallery/241562149/BDA-Social-Media-Posts" },
  { id: 2, image: "/work2.jpeg", link: "https://www.behance.net/gallery/239608411/Codexpert-LAB-Brandbook-Guideline" },
  { id: 3, image: "/work3.jpeg", link: "https://www.behance.net/gallery/239010281/Codexpert-Website-DESIGN" },
];

const works2 = [
  { id: 4, image: "/work4.jpeg", link: "https://www.behance.net/gallery/238719503/Sustainera-Social-Media-Post" },
  { id: 5, image: "/work5.jpeg", link: "https://www.behance.net/gallery/237512521/BDA-Website-Design" },
  { id: 6, image: "/work6.jpeg", link: "https://www.behance.net/gallery/237120785/Sustainera-Landing-Page" },
];

const works3 = [
  { id: 7, image: "/work7.jpeg", link: "https://www.behance.net/gallery/236829693/Bir-Muhasib-Logo-Design" },
  { id: 8, image: "/work8.jpeg", link: "https://www.behance.net/gallery/236829337/Codexpert-LAB-Social-Media-Posts" },
  { id: 9, image: "/work9.jpeg", link: "https://www.behance.net/gallery/236829189/Bir-Muhasib-Social-Media-Posts" } ,
];

const MyWorks = () => {
  return (
    <div className="max-w-[1312px] flex flex-col gap-[36px] mx-auto mt-[176px] px-[64px]">
      <h2 className="text-white text-center font-bold text-[56px] leading-[64px] font-poppins ">
        My Work
      </h2>
      <div className="flex flex-col items-center gap-[44px] justify-center">
        <div className="flex flex-wrap items-center justify-center gap-[72px]">
          {works1.map((work) => (
            <Link
              key={work.id}
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[270px] h-[258px] rounded-[30px] bg-no-repeat bg-cover bg-center bg-gray-300 border border-[#27272A] hover:border-[#D1FE4E] transition-all overflow-hidden group"
              style={{ backgroundImage: `url('${work.image}')` }}
            >
              <div className="w-full h-full transition-transform duration-500 group-hover:scale-110"></div>
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-[72px]">
          {works2.map((work) => (
            <Link
              key={work.id}
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[270px] h-[258px] rounded-[30px] bg-no-repeat bg-cover bg-center bg-gray-300 border border-[#27272A] hover:border-[#D1FE4E] transition-all overflow-hidden group"
              style={{ backgroundImage: `url('${work.image}')` }}
            >
              <div className="w-full h-full transition-transform duration-500 group-hover:scale-110"></div>
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-[72px]">
          {works3.map((work) => (
            <Link
              key={work.id}
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[270px] h-[258px] rounded-[30px] bg-no-repeat bg-cover bg-center bg-gray-300 border border-[#27272A] hover:border-[#D1FE4E] transition-all overflow-hidden group"
              style={{ backgroundImage: `url('${work.image}')` }}
            >
              <div className="w-full h-full transition-transform duration-500 group-hover:scale-110"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyWorks;
