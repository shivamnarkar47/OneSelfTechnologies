import { Link } from "react-router-dom"
import GridDotBackgrounds from "./ui/GridDotBackgrounds"
import { ChevronRight } from "lucide-react"

const About = () => {
  return (

    <GridDotBackgrounds>
      <section className="mt-10 ">
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20 text-black dark:text-white">
          {/* Component */}
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
            {/* Content */}
            <div className="flex flex-col gap-8 lg:w-3/5">
              <h2 className="mb-8 text-3xl font-bold md:text-5xl">About us</h2>
              <p className="text-sm sm:text-base gap-y-4">

                We deliver cutting-edge web and application development services through:

<br/>
<br/>
                <ul className="list-disc clear-end font-thin">

                  <li><b className="font-bold underline">Innovative Digital Solutions</b>: Crafting custom solutions tailored to your unique needs.</li>
                  <li>Expertise Across Platforms: Specializing in both web and mobile applications for diverse industries.</li>
                  <li> End-to-End Development: Managing projects from initial concept through to final implementation.</li>
                  <li> Robust and Scalable Platforms: Building systems designed to grow with your business.</li>
                  <li>Collaborative Partnership: Working closely with you to ensure our solutions align with your goals.</li>

                </ul>
<br/>
               Our goal is to build powerful digital experiences that drive growth and enhance your business's potential.



              </p>
              <Link
                to="/services"
                className="w-fit flex rounded-md bg-black dark:bg-white dark:text-black px-6 py-3 text-center font-semibold text-white"
              >
                Check out Services <ChevronRight className="ml-3" />
              </Link>
              {/* Divider */} <div className="my-8 h-px w-full bg-black"></div>
              {/* Testimonials */}
            </div>
            {/* Image */}
            <img src="https://images.pexels.com/photos/842401/pexels-photo-842401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full rounded-md bg-gray-100 max-[991px]:h-[475px] lg:w-2/5"/>
          </div>
        </div>
      </section>
    </GridDotBackgrounds>
  )
}

export default About
