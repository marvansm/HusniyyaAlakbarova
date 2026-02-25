import AboutMeSection from "../sections/home/AboutMe";
import BannerSection from "../sections/home/BannerSection";
import BrandSection from "../sections/home/brands";
import ContactMe from "../sections/home/Contact-me";
import MyWorks from "../sections/home/MyWorks";
import StudentSection from "../sections/home/Students";

const Homethemplate = () => {
  return (
    <div>
      <BannerSection />
      <AboutMeSection />
      <MyWorks />
      <BrandSection />
      <StudentSection />
      <ContactMe />
    </div>
  );
};

export default Homethemplate;
