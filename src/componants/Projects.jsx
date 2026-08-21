function Project() {
  const projects = [
    {
      title: "E-rangoli - Indian Art, Craft & Culture Marketplace",
      tech: ["HTML", "CSS", "JAVASCRIPT"],
      description: "A marketplace connecting Indian artisans with buyers, built with secure checkout and order tracking.",
      image: "/E-rangoli.png",
      live: "https://www.erangoli.com/",
      github: "https://github.com/yashjain8878"
    },
    {
      title: "Hotel Booking System",
      tech: ["Tailwind CSS", "HTML", "REACT"],
      description: "A hotel reservation platform with real-time room availability and seamless booking management.",
      image: "/hotelBooking.png",
      live: "https://example.com/project2",
      github: "https://github.com/yashjain8878"
    },
    {
      title: "Nirmaankara Real Estate & Construction Services Platform",
      tech: ["HTML", "CSS", "JAVASCRIPT", "JQuery"],
      description: "A property listing and construction services platform with search filters and inquiry management.",
      image: "/Nirmaankara.png",
      live: "https://nirmaankara.com/",
      github: "https://github.com/yashjain8878"
    },
  ];

  const stats = [
    { num: "109", label: "SOLVED", color: "text-[#274C77]" },
    { num: "52", label: "EASY",   color: "text-green-500" },
    { num: "54", label: "MEDIUM", color: "text-yellow-500" },
    { num: "3", label: "HARD",   color: "text-red-500" },
  ];

  return (
    <section id="projects" className="py-10 sm:py-14 px-6 md:px-10 lg:px-16 bg-[#E7ECEF]">
      <div className="max-w-8xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#274C77] mb-1">
              My Projects
            </h2>
            <p className="text-[#6096BA] text-sm">
              Production-grade systems built with modularity and scale in mind.
            </p>
          </div>

          <a
            href="https://github.com/yashjain8878"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-[#A3CEF1] bg-white px-5 py-2.5 rounded-lg text-[#274C77] text-sm font-medium hover:bg-[#274C77] hover:text-white hover:border-[#274C77] transition-all duration-300 self-start"
          >
            Explore Repositories
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="w-5 h-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-10">
          {projects.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-xl hover:shadow-md transition-all duration-300 flex flex-col h-full overflow-hidden"
            >
              {/* Image frame — subtle minimal border around the picture */}
              <div className="p-3 pb-0">
                <div className="rounded-lg border border-[#E2EAF0] overflow-hidden bg-[#F8FAFC]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-48 sm:h-56 md:h-60 w-full object-cover"
                  />
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-[#274C77] mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-4 flex-1">
                  {card.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {card.tech.map((item) => (
                    <span
                      key={item}
                      className="bg-[#F1F4F6] border border-[#A3CEF1] text-[10px] px-2.5 py-1 rounded-sm text-[#274C77] font-semibold tracking-wide"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={card.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-[#274C77] text-white text-sm font-medium py-2.5 rounded-md text-center hover:bg-[#6096BA] transition-all duration-300"
                  >
                    Live Demo
                  </a>

                  <a
                    href={card.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 border border-[#A3CEF1] text-[#274C77] text-sm font-medium py-2.5 rounded-md text-center hover:bg-[#274C77] hover:text-white hover:border-[#274C77] transition-all duration-300 flex items-center justify-center gap-1.5"
                  >
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    Github
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-sm border border-[#F1F4F6] shadow-sm p-6 sm:p-8 md:p-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-10">

            <div className="lg:w-64 flex-shrink-0">
              <h3 className="text-xl sm:text-2xl font-bold text-[#274C77] mb-2">
                Problem Solved on LeetCode
              </h3>

              <p className="text-[#6096BA] text-xs leading-relaxed mb-5">
                Continuous algorithmic challenge resolution and logic optimization.
              </p>
            </div>

            <div className="flex-1 w-full border-t lg:border-t-0 lg:border-l border-[#E2EAF0] pt-6 lg:pt-0 lg:pl-10">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-[#F8FAFC] border border-[#E2EAF0] rounded-xl p-4 text-center"
                  >
                    <div className={`text-2xl sm:text-3xl font-bold mb-1 ${stat.color}`}>
                      {stat.num}
                    </div>
                    <div className="text-xs text-gray-400 font-medium tracking-widest">
                      {stat.label}
                    </div>
                    <div className="mt-3 h-0.5 rounded-md bg-[#A3CEF1] opacity-50"></div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Project;