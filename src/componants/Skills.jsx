import {useState} from 'react';

const skills =[
  { name: 'Java',         icon: '/java-icon.svg',       level: 90, category: 'Backend'  },
  { name: 'JavaScript',  icon: '/javascript-icon.svg',     level: 85, category: 'Frontend'  },
  { name: 'Python',       icon: '/python-icon.svg',         level: 88, category: 'Backend'  },
  { name: 'Node.js',      icon: '/nodejs-icon.svg',         level: 80, category: 'Backend'  },
  { name: 'React',        icon: '/react-icon.svg',          level: 85, category: 'Frontend' },
  { name: 'HTML',      icon: '/html-icon.svg',         level: 90, category: 'Frontend' },
  { name: 'CSS',       icon: '/css-icon.svg',          level: 80, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: '/tailwind-icon.svg',       level: 90, category: 'Frontend' },
  { name: 'Bootstrap',    icon: '/bootstrap-icon.svg',            level: 82, category: 'Frontend'    },
  { name: 'Spring Boot',    icon: '/springboot-icon.svg',      level: 80, category: 'Backend'    },
  { name: 'SQL',          icon: '/sql-icon.svg',            level: 75, category: 'Backend'    },
  { name: 'Git',          icon: '/git-icon.svg',            level: 92, category: 'DevOps'   },
  { name: 'REST API',     icon: '/restapi-icon.svg',        level: 88, category: 'Backend'  },
]

const categories = ['All', 'Backend', 'Frontend', 'AI/ML',];

function Skills() {
    const [activeTab, setActiveTab] = useState('All'); 

    const filtered= activeTab=='All' ?skills : skills.filter(skill => skill.category===activeTab);

    return (
        <section id="skills" className="bg-[#E7ECEF] py-12 sm:py-15 px-6 md:px-10 lg:px-16">
            <div className="max-w-8xl mx-auto">
                <div className="mb-10">
                    <p className="text-sm font-medium tracking-widest text-[#6096BA] uppercase mb-2">
                    What I Work With
                    </p>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#274C77] mb-3">
                    Architecture{" "}
                    <span className="text-[#6096BA]">Stack</span>
                    </h2>

                    <p className="text-[#6096BA] text-base max-w-xl">
                    Technologies and tools I use to build production-grade systems
                    </p>

                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
                    {categories.map( (cat) => (
                        <button key={cat} onClick={ () => setActiveTab(cat)} className={`px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-sm font-medium border transition-all duration-300 cursor-pointer ${activeTab==cat ? 'bg-[#274C77] text-white border-[#274C77]' : 'bg-white text-[#6096BA] border-[#A3CEF1] hover:border-[#274C77] hover:text-[#274C77]' }`}>
                            {cat}   
                        </button>
                    ) )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                    {filtered.map( (skill) => (
                        <div key={skill.name} className=" bg-white border border-[#A3CEF1] rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition-all duration-300 group">
                            <div className="w-11 h-11 rounded-lg bg-[#F1F4F6] border border-[#A3CEF1] flex items-center justify-center flex-shrink-0  group-hover:border-[#274C77] transition-all duration-300">
                                <img src ={skill.icon} alt={skill.name} className="w-8 h-8 object-contain"></img>
                            </div>
                        
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-semibold text-[#274C77] truncate"> {skill.name} </span>
                                    <span className="text-xs text-[#6096BA] flex-shrink-0 ml-2"> {skill.level}% </span>
                                </div>

                                <div className="w-full h-1.5 bg-[#E7ECEF] rounded-full">
                                    <div className="h-1.5 rounded-full bg-gradient-to-r from-[#274C77] to-[#6096BA]" style={{ width: `${skill.level}%` }}>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="border-t border-[#A3CEF1] pt-8">
                    <p className="text-sm text-[#6096BA] mb-4 font-medium"> Also Familiar With </p>

                    <div className="flex flex-wrap gap-2">
                    {
                        ['TypeScript', 'C++', 'Angular', 'GitHub', 'Prompt Engineering' ,'DSA' ,'OOPS'].map((tech) => (
                            <span key={tech} className="bg-[#F1F4F6] border border-[#A3CEF1] text-[#6096BA] text-xs sm:text-sm font-medium px-3 py-1 rounded-full">
                                {tech}
                            </span>
                        ))
                    }
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Skills;
