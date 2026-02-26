const ContactSection = () => {
    return (
<section className="relative w-full py-20 px-6 overflow-hidden">

{/* Background */}
<div className="absolute inset-0">
  <div
    className="w-full h-full
    bg-[linear-gradient(135deg,rgba(173,70,255,0.20)_0%,rgba(246,51,154,0.20)_50%,rgba(255,105,0,0.20)_100%)]
    blur-[64px]"
  />
</div>

{/* Content */}
<div className="relative z-10 text-center">
  <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
    Let's create something amazing together
  </h2>

  <p className="text-[#AE8AA9] text-lg mb-8 max-w-2xl mx-auto">
    Ready to bring your vision to life? Get in touch and let's discuss
    your next project.
  </p>

  <button
    className="px-8 py-3 rounded-full 
    bg-[#7F0CDA]
    text-white font-normal 
    hover:scale-105 transition duration-300"
  >
    Contact me
  </button>
</div>

</section>
    );
  };
  
  export default ContactSection;
