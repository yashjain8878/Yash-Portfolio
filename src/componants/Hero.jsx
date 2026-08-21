function Hero(){
  return (
    <section id="home" className ="bg-[#E7ECEF] py-16 sm:py-20 lg:py-25 px-6 md:px-10 lg:px-16">
      <div className="max-w-8xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-12">
         <div className=" flex-1 flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="inline-flex items-center gap-2 bg-white border border-[#A3CEF1] rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[green]"></span>
            <span className="text-sm text-[#6096BA] font-medium">Available for work · Software Developer</span> 
          </div>

           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#274C77] leading-tight mb-4">
            Hii, I'm <span className="text-[#6096BA]">Yash Jain</span><br />
            I Build Modern <br />
            Web Application
          </h1>

           <p className="text-[#6096BA] text-base sm:text-lg max-w-lg mb-8 leading-relaxed">
            Building responsive and scalable applications with Java, Spring Boot, React, and modern web technologies.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mb-10">
            <a className=" bg-[#274C77] text-white px-5 sm:px-6 py-3 rounded-lg font-medium hover:bg-[#6096BA] cursor-pointer transition-all" type="download" href="YashResume.pdf" download>
              Download Resume
              <img src=".Container.svg" alt="Download Icon" className="inline-block w-4 h-4 ml-2" />
            </a>

            <a href="#projects" className="border-2 border-[#A3CEF1] px-5 sm:px-6 py-3 rounded-lg font-medium hover:bg-[#274C77] hover:text-white cursor-pointer transition-all">
              View Projects
            </a>

            <a href="https://github.com/yashjain8878" target="blank" className="w-9 h-9 rounded-full border-2 border-[#A3CEF1] flex items-center justify-center text-[#274C77] hover:bg-[#274C77] hover:text-white transition-all duration-300">
              <img src="./public/githubIcon.png" alt="GitHub Icon" className="w-6 h-6" />
            </a>

             <a href="https://www.linkedin.com/in/yash-jain-626837268/" target="blank" className="w-9 h-9 rounded-full border-2 border-[#A3CEF1] flex items-center justify-center text-[#274C77] hover:bg-[#274C77] hover:text-white transition-all duration-300">
              <img src="./public/Linkdinicon.svg" alt="LinkedIn Icon" className="w-6 h-6" />
            </a>

          </div>
         </div>

         <div className="flex-shrink-0">
          <div className="relative w-56 h-64 sm:w-72 sm:h-80 lg:w-84 lg:h-94 rounded-2xl bg-white border-4 lg:border-7 border-[#6096BA] flex items-center justify-center shadow-2xl">
            <img
              src="YashJain-blue.png"
              className="w-full h-full object-cover px-1 py-1 absolute top-0 left-0 rounded-xl"
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;