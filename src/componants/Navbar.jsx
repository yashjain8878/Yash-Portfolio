import {useState, useRef, useEffect} from 'react';

const NAV_LINKS = [
  {href: '#home', label: 'Home'},
  {href: '#about', label: 'About'},
  {href: '#skills', label: 'Skills'},
  {href: '#projects', label: 'Projects'},
  {href: '#experience', label: 'Experience'},
  {href: '#contact', label: 'Contact'},
]

function Navbar(){
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navRef = useRef(null);

 useEffect( () =>{
    const sections = document.querySelectorAll('section');

    const handleScroll= ()=>{
      let currentSection ='home';

      sections.forEach((section)=>{
        const sectionTop=section.offsetTop;
      
        if(window.scrollY>=sectionTop-150){
          currentSection=section.getAttribute('id');
        }  
      });
      setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
 }, []);

 const toggleMenu =() =>{
    setIsOpen((prev) => {
      console.log(prev);
      return !prev;
    });
 }
  const closeMenu = () => setIsOpen(false);
  useEffect( () =>{
    if(!isOpen) return;

    const handleClickOutSide = (event) =>{
      if(navRef.current && !navRef.current.contains(event.target)){
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutSide);

    return () =>document.removeEventListener('mousedown' , handleClickOutSide);
  }, [isOpen]);


  return(
    <nav ref={navRef} className='sticky top-0 z-50 bg-[#E7ECEF] shadow-sm border-b border-gray-200'>
      <div className='max-w-8xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between'>
        <a href='#home' className='text-xl sm:text-2xl font-bold text-[#274C77] border-l-4 border-[#0088FF] pl-2 rounded-lg cursor-pointer'>
        Yash Jain
        </a>

        <div className='hidden lg:flex items-center gap-1 px-2 py-2 rounded-full text-lg'>
          {NAV_LINKS.map( (link) =>{
              return(
                <a key={link.href}  href= {link.href} 
                className={`px-4 py-2 text-base font-medium cursor-pointer transition-all rounded-sm ${  activeSection === link.href.substring(1) ? "text-[#274C77] border-b-2 border-[#274C77]": "text-[#8B8C89] hover:text-[#274C77]" }`} >

                {link.label}
                </a>
              )
          })}
        </div>

        <a className='hidden lg:block bg-[#274C77] text-white px-5 py-2 rounded-md text-lg font-medium hover:bg-[#6096BA] transition-all' href='#contact'>
          Hire Me
        </a>

<div  className='lg:hidden flex items-center gap-2'>
  <button
    onClick={toggleMenu}
    className="lg:hidden text-[#274C77] p-2"
    aria-label="Toggle Menu"
    aria-expanded={isOpen}
  >
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      {isOpen ? (
        <path d="M6 6l12 12M18 6L6 18" />
      ) : (
        <path d="M4 6h16M4 12h16M4 18h16" />
      )}
    </svg>
  </button>
  </div>
      </div>


      {isOpen && (
        
          <div className='lg:hidden flex flex-col items-start gap-1 px-6 pb-4 bg-[#E7ECEF] border-t border-gray-200'  >
            {NAV_LINKS.map((link) =>{
              return(
                <a key={link.href} href={link.href} onClick={closeMenu} className='w-full py-2 text-base font-medium text-[#274C77] hover:text-[#6096BA] transition-all'>
                  {link.label }
                  
                </a>
              )
            })}

            <a className=' block w-full mt-2 bg-[#274C77] text-white px-5 py-2.5 rounded-md text-base font-medium hover:bg-[#6096BA] transition-all text-center' href='#contact' onClick={closeMenu}>
              Hire Me
            </a>
          </div>
        )}
    </nav>
  );
}

export default Navbar;