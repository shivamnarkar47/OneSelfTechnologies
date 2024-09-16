import { useState } from 'react'
import { ModeToggle } from './mode-toggle';
import { useTheme } from './theme-provider';
import { Link } from 'react-router-dom';
import BoxReveal from './magicui/box-reveal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [menuOne, setMenuOne] = useState(false);
  const { theme } = useTheme();
  return (
    <section className='fixed z-30 w-full bg-white flex items-center dark:bg-black  justify-between border'>
      <nav className="font-inter mx-auto h-auto w-full max-w-screen-2xl lg:relative lg:top-0">
        <div className="flex flex-col px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-4 xl:px-20">
          <BoxReveal boxColor={theme == 'dark' ? '#fff' : '#111'} duration={0.5}>
            <Link to="/"
             
            >
              Logo
            </Link>
          </BoxReveal>
          <div
            className={`mt-14 flex flex-col space-y-8 lg:mt-0 lg:flex lg:flex-row lg:space-x-1 lg:space-y-0 ${isOpen ? "" : "hidden"}`}
          >

            <BoxReveal boxColor={theme == 'dark' ? '#fff' : '#111'} duration={0.5}>
              <Link
                to="/about"
                className="font-inter rounded-lg lg:px-6 lg:py-4 lg: lg:hover:text-gray-500 dark:lg:hover:text-gray-400"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                About
              </Link>
            </BoxReveal>

            <BoxReveal boxColor={theme == 'dark' ? '#fff' : '#111'} duration={0.5}>
              <Link
                to="/services"
                className="font-inter rounded-lg lg:px-6 lg:py-4 lg: lg:hover:text-gray-500 dark:lg:hover:text-gray-400"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Services
              </Link>
            </BoxReveal>

            <BoxReveal boxColor={theme == 'dark' ? '#fff' : '#111'} duration={0.5}>
              <Link
                to="/Contact"
                className="font-inter rounded-lg lg:px-6 lg:py-4  lg:hover:text-gray-500 dark:hover:text-gray-400"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Contact
              </Link>
            </BoxReveal>


          </div>
          <div
            className={`flex flex-col space-y-8 lg:flex items-center justify-center  lg:flex-row lg:space-x-3 lg:space-y-0 ${isOpen ? "" : "hidden"}`}>
            <ModeToggle />

          </div>
          <button
            className="absolute right-5 lg:hidden "
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {
              theme != "dark" ?
                (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.75 12H20.25"
                      stroke="#160042"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M3.75 6H20.25"
                      stroke="#160042"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M3.75 18H20.25"
                      stroke="#160042"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                )
                :
                (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.75 12H20.25"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M3.75 6H20.25"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M3.75 18H20.25"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                )
            }
          </button>
        </div>
      </nav>
    </section>
  );
}

export default Navbar
