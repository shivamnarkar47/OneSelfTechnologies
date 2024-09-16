import { MagicCard } from "./magicui/magic-card"
import GridDotBackgrounds from "./ui/GridDotBackgrounds"

const data = [
  {
    title: "Website Development",
    desc: "Web development involves designing and building websites and web applications, focusing on both front-end (user interface) and back-end (server-side) technologies to ensure functionality, usability, and performance.",
    img: "https://images.unsplash.com/photo-1561883088-039e53143d73?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Application Development",
    desc: "Application development refers to creating software applications for specific platforms, such as mobile or desktop, involving coding, design, and testing to meet user needs and solve particular problems.",
    img: "https://images.unsplash.com/photo-1633250391894-397930e3f5f2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "ERP Software",
    desc: "ERP (Enterprise Resource Planning) software integrates various business processes into a unified system, streamlining operations, improving data accuracy, and enhancing decision-making by providing real-time insights and automating workflows across an organization.",
    img: "https://images.unsplash.com/photo-1581093808268-7a25a3625207?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Graphic Designing",
    desc: "Graphics designing involves creating visual content using typography, imagery, and color to communicate messages effectively. It encompasses designing logos, websites, advertisements, and more, focusing on aesthetics and functionality to engage and inform audiences.",
    img: "https://images.unsplash.com/photo-1519408469771-2586093c3f14?q=80&w=1902&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Digital Marketing",
    desc: "Digital marketing utilizes online platforms and tools to promote products and services. It includes strategies such as SEO, social media marketing, content creation, and email campaigns to reach and engage target audiences, drive traffic, and boost conversions.",
    img: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Online Internship",
    desc: "An online internship offers professional experience through virtual platforms, allowing students or recent graduates to gain practical skills and knowledge in their field. Interns work remotely on real projects, collaborating with teams via digital tools, and receive mentorship and feedback from industry professionals.",
    img: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
]

const Services = () => {
  return (
    <GridDotBackgrounds>
      <div className="w-full mt-10 h-full border">
        <div className=" px-6 py-10 mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Services</h1>
          </div>

          <hr className="my-4 border-gray-700 dark:border-gray-200" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {data.map((d) => {
              return (
                <MagicCard className="bg-white dark:bg-black md:p-8 p-5 border rounded-lg">
                  <img className="object-cover   object-center w-full h-64 rounded-lg lg:h-80" src={d.img} alt="" />

                  <div className="mt-8">

                    <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                      {d.title}
                    </h1>

                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                      {d.desc}
                    </p>
                  </div>
                </MagicCard>


              )
            })}


          </div>
        </div>
      </div>
    </GridDotBackgrounds>
  )
}

export default Services
