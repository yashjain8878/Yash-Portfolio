function Experience() {
  const experience = [
    {
      role: "Frontend Developer",
      company: "Wingherry Technology Pvt. Ltd.",
      location: "Hyderabad, India (Remote)",
      period: "July 2025 – Present",
      current: true,
      bullets: [
        "Enhanced responsive, user-friendly web interfaces using HTML, CSS, JavaScript, React, and modern UI frameworks.",
        "Collaborated with design, backend, and product teams to translate requirements into high-quality frontend features.",
        "Improved UI/UX stability by identifying, debugging, and resolving interface issues across web applications.",
      ],
    },
    {
      role: "Java Developer Intern",
      company: "Curio Infotech Pvt. Ltd.",
      location: "Gwalior, India",
      period: "July 2023 – Aug 2023",
      current: false,
      bullets: [
        "Created a Student Attendance Management System as part of a Java internship.",
        "Implemented modules for student registration, attendance tracking, and report generation using Core Java and OOP principles.",
      ],
    },
  ];

  return (
    <section id="experience" className="bg-[#E7ECEF] py-10 sm:py-14 px-6 md:px-10 lg:px-16">
      <div className="max-w-8xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#274C77] text-center mb-10 sm:mb-14">
          My{" "}
          <span className="text-[#6096BA]">Experience</span>
        </h2>

        <div className="flex flex-col max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <div key={exp.role} className="flex gap-3 sm:gap-6">

              {/* Timeline marker */}
              <div className="flex flex-col items-center flex-shrink-0">
                {exp.current ? (
                  <span className="relative flex h-4 w-4 mt-1 z-10">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#274C77] opacity-40"></span>
                    <span className="relative inline-flex h-4 w-4 rounded-full bg-[#274C77] border-2 border-white shadow-md"></span>
                  </span>
                ) : (
                  <div className="w-4 h-4 rounded-full border-2 border-[#274C77] bg-[#E7ECEF] mt-1 flex-shrink-0 z-10"></div>
                )}
                {index < experience.length - 1 && (
                  <div className="w-0.5 bg-[#A3CEF1] flex-1 my-2"></div>
                )}
              </div>

              {/* Card */}
              <div className="flex-1 pb-6 sm:pb-8 min-w-0">
                <div className={`bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow-sm border transition-all duration-300 hover:shadow-md ${
                  exp.current ? "border-[#A3CEF1]" : "border-[#E2EAF0]"
                }`}>

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-1">
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#274C77] break-words">
                        {exp.role}
                      </h3>
                      <p className="text-[#6096BA] font-semibold text-xs sm:text-sm mt-0.5 break-words">
                        {exp.company}
                      </p>
                    </div>

                    {/* Status / period badges — always stacked, never side-by-side */}
                    <div className="flex flex-col items-start sm:items-end gap-2 flex-shrink-0">
                      {exp.current && (
                        <span className="inline-flex items-center gap-1.5 bg-green-50 border border-green-200 text-green-700 text-[10px] sm:text-[11px] font-semibold px-2.5 sm:px-3 py-1 rounded-full whitespace-nowrap">
                          <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500"></span>
                          </span>
                          Currently Working
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs text-[#274C77] bg-[#F1F4F6] border border-[#A3CEF1] px-2.5 sm:px-3 py-1 rounded-full font-medium whitespace-nowrap">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0">
                          <rect x="3" y="4" width="18" height="18" rx="2" />
                          <path d="M16 2v4M8 2v4M3 10h18" />
                        </svg>
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-gray-400 mb-4 sm:mb-5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1116 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className="break-words">{exp.location}</span>
                  </div>

                  <ul className="flex flex-col gap-2.5">
                    {exp.bullets.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-[#6096BA] leading-relaxed">
                        <span className="text-[#274C77] flex-shrink-0 mt-0.5 text-xs">▷</span>
                        <span className="break-words">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;