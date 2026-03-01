import React from "react";

const studentImages = [
    "/t1.jpeg",
    "/t2.jpeg",
    "/t3.jpeg",
    "/t4.jpeg",
    "/t5.jpeg",
    "/t6.jpeg",
    "/t7.jpeg",
    "/t8.jpeg",
    "/t9.jpeg",
    "/t10.jpeg",
    "/t11.jpeg",
    "/t12.jpeg",
    "/t13.jpeg",
    "/t14.jpeg",
    "/t15.jpeg",
];

const content = [...studentImages, ...studentImages, ...studentImages]; 
const duplicatedImages = [...content, ...content]; 

const StudentSliderSection = () => {
    return (
        <section className="bg-[#090909] py-20 overflow-hidden">

            <div className="relative w-full overflow-hidden flex group">
                <div className="flex animate-marquee gap-6 hover:[animation-play-state:paused] w-max">
                    {duplicatedImages.map((img, i) => (
                        <div
                            key={i}
                            className="w-[280px] h-[350px] md:w-[320px] md:h-[400px] rounded-[32px] overflow-hidden flex-shrink-0 relative group/card cursor-pointer"
                        >
                            <img
                                src={img}
                                alt={`Student moment ${i}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover/card:bg-transparent transition-colors duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StudentSliderSection;
