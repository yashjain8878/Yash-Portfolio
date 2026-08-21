function About() {
  return (
    <section
      id="about"
      className="bg-[#F8FAFB] py-16 sm:py-20 lg:py-25 px-6 md:px-10 lg:px-16"
    >
      <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
        <div className="relative flex-shrink-0 w-full lg:w-[520px]">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop"
            alt="coding-workshop"
            className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
          />

          <div className="absolute -top-6 right-4 sm:-right-4 sm:translate-x-1/3 bg-white rounded-lg shadow-xl px-5 py-4 text-center border border-[#A3CEF1] w-32 h-32 sm:w-35 sm:h-35 flex flex-col items-center justify-center">
            <p className="text-xs sm:text-sm font-bold text-[#274C77] leading-snug">
              Meticulous
              <br />
              Systems <br />
              Thinking
            </p>
          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#274C77] leading-tight mb-6">
            Engineering with <span className="text-[#6096BA]">Reliability</span>
          </h2>

          <p className="text-[#6096BA] text-base leading-relaxed mb-8">
            I’m a full-stack developer focused on building reliable backend
            services with Java and Spring Boot, along with responsive and modern
            interfaces using React. I enjoy turning ideas into clean, practical
            applications with a strong focus on performance, usability, and
            maintainable code.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#F1F4F6] border border-[#A3CEF1] rounded-lg p-5 hover:shadow-md transition-all duration-300">
              <div className="w-9 h-9 flex items-center justify-center mb-3">
                <img src="/Icon.svg" alt="Scalable Core" />
              </div>
              <h3 className="font-bold text-[#274C77] text-sm mb-1">
                Modern Frontend
              </h3>
              <p className="text-xs text-[#6096BA]">
                React & Tailwind CSS
              </p>
            </div>

            <div className="bg-[#F1F4F6] border border-[#A3CEF1] rounded-lg p-5 hover:shadow-md transition-all duration-300">
              <div className="w-9 h-9 flex items-center justify-center mb-3">
                <img src="/Icon (1).svg" alt="AI Integration" />
              </div>
              <h3 className="font-bold text-[#274C77] text-sm mb-1">
               Reliable Backend
              </h3>
              <p className="text-xs text-[#6096BA]">Java & Spring Boot</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
