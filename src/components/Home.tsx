import GridDotBackgrounds from "@/components/ui/GridDotBackgrounds"
import WordPullUp from "./magicui/word-pull-up"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"
import { ChevronRight } from "lucide-react"
import BoxReveal from "./magicui/box-reveal"
import { useTheme } from "./theme-provider"
const Home = () => {
  const { theme } = useTheme();
  return (
    <div className="md:h-auto h-full">
      <GridDotBackgrounds>
        <div className="flex items-center flex-col justify-center min-h-[80vh] ">

          <header>
            {/* Container */}
            <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
              <div className="mx-auto max-w-3xl flex items-center justify-center flex-col text-center">
                {/* Title */}
                <WordPullUp
                  words="Deliver  with  Trust."
                  className="md:text-8xl text-4xl p-10 break-normal border-b-gray-300 dark:border-b-gray-700 gap-3 font-bold text-black dark:text-white"
                />
                <p className="mb-6 text-sm text-gray-500 sm:text-xl lg:mb-8">
                  Say goodbye to payment headaches with SecurePay! Our easy-to-use
                  payment platform makes it simple for businesses and individuals to
                  send and receive payments quickly and securely.
                </p>
                {/* Button */}
                <Link
                  to="/services"
                  className="mr-6 flex w-fit items-center  rounded-md bg-black dark:bg-white dark:text-black px-8 py-4 text-center font-semibold text-white lg:mr-8"
                >
                  Check out Services <ChevronRight className="ml-4"/>
                </Link>
              </div>
            </div>
          </header>
        </div>
      </GridDotBackgrounds>
      <GridDotBackgrounds>
        <div className="flex items-center flex-col justify-center h-[90vh]">
          <BoxReveal boxColor={theme === "dark" ? "#fff" : "#111"}>

            <header>
              {/* Hero Container */}
              <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
                {/* Component */}
                <div className="grid items-center justify-items-start gap-8 sm:gap-20 lg:grid-cols-2">
                  {/* Hero Content */}
                  <div className="flex flex-col">
                    {/* Hero Title */}
                    <h1 className="mb-4 text-4xl font-bold md:text-6xl dark:text-white text-black">
                      The Services You Want Without Wasting Time.
                    </h1>
                    <p className="mb-6 max-w-lg text-sm text-gray-500 sm:text-xl md:mb-10 lg:mb-12">
                      We deliver efficiently by streamlining processes and using agile methods, ensuring timely, high-quality solutions without unnecessary delays.
                    </p>
                    {/* Hero Button */}
                    <div className="flex items-center">
                      <Link
                        to="#"
                      >
                        <Button className="font-bold text-lg tracking-tighter">
                          Let's Talk <ChevronRight />
                        </Button>
                      </Link>
                    </div>
                  </div>
                  {/* Hero Image */}
                  <img
                    src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className="inline-block h-full w-full max-w-2xl rounded-xl"
                  />
                </div>
              </div>
            </header>

          </BoxReveal>

        </div>
      </GridDotBackgrounds>
      <GridDotBackgrounds>

        <section>

          <BoxReveal boxColor={theme === "dark" ? "#fff" : "#111"}>
            {/* Container */}
            <div className="mx-auto max-w-5xl px-5 py-16 md:px-10 md:py-20">
              {/* Heading Container */}
              <div className="mx-auto mb-8 text-center md:mb-12 lg:mb-16">
                {/* Heading */}
                <h2 className="text-3xl md:text-5xl dark:text-white text-black font-bold">
                  Simple &amp; Affordable Pricing
                </h2>
                {/* Subheading */}
                <p className="mt-5 text-gray-500">30 days money-back guarantee</p>
              </div>
              {/* Content */}
              <div className="] mx-auto mb-8 grid grid-cols-[1.25fr] gap-4 rounded-md bg-gray-100 dark:bg-black dark:text-white px-16 py-12 md:mb-12 md:grid-cols-[1.25fr_0.25fr_0.75fr] lg:px-20">
                {/* List Feature */}
                <div className="grid h-full grid-cols-1 gap-4 sm:grid-cols-2 text-black dark:text-white">
                  <div className="flex items-center">
                    <img
                      src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9453a6e6cf6e_Vector%20(2).svg"
                      alt=""
                      className="mr-4 inline-block h-4 w-4 dark:invert"
                    />
                    <p className="max-sm:text-sm">Premium Designs</p>
                  </div>
                  <div className="flex items-center">
                    <img
                      src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9453a6e6cf6e_Vector%20(2).svg"
                      alt=""
                      className="mr-4 inline-block h-4 w-4 dark:invert"
                    />
                    <p className="max-sm:text-sm">Regular updates</p>
                  </div>
                  <div className="flex items-center">
                    <img
                      src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9453a6e6cf6e_Vector%20(2).svg"
                      alt=""
                      className="mr-4 inline-block h-4 w-4 dark:invert"
                    />
                    <p className="max-sm:text-sm">Better Services</p>
                  </div>
                  <div className="flex items-center">
                    <img
                      src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9453a6e6cf6e_Vector%20(2).svg"
                      alt=""
                      className="mr-4 inline-block h-4 w-4 dark:invert"
                    />
                    <p className="max-sm:text-sm">Lifetime Access</p>
                  </div>
                  <div className="flex items-center">
                    <img
                      src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9453a6e6cf6e_Vector%20(2).svg"
                      alt=""
                      className="mr-4 inline-block h-4 w-4 dark:invert"
                    />
                    <p className="max-sm:text-sm">Early bird price</p>
                  </div>
                  <div className="flex items-center">
                    <img
                      src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9453a6e6cf6e_Vector%20(2).svg"
                      alt=""
                      className="mr-4 inline-block h-4 w-4 dark:invert"
                    />
                    <p className="max-sm:text-sm">Premium Support</p>
                  </div>
                </div>
                {/* Vertical Divider */}
                <div className="mx-auto h-full border border-l-1px"></div>
                {/* Price */}
                <div>
                  <h2 className="mb-4 text-3xl font-bold md:text-5xl text-center dark:text-white text-black">
                    $99<span className="text-sm font-light sm:text-sm">/month</span>
                  </h2>
                  <Button
                    className="inline-block w-full rounded-md bg-black px-6 py-3 text-center font-semibold text-white dark:bg-white dark:text-black"
                  >
                    Get started
                  </Button>
                </div>
              </div>
            </div>
          </BoxReveal>
        </section>
      </GridDotBackgrounds>
      <GridDotBackgrounds>

        <BoxReveal boxColor={theme === "dark" ? "#fff" : "#111"}>
          <section>
            {/* Container */}
            <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
              {/* Component */}
              <div className="bg-gray-100 dark:bg-black p-8 text-center sm:p-10 rounded-lg md:p-16">

                {/* Title */}
                <h2 className="mb-4 text-3xl font-bold dark:text-white text-black md:text-5xl">
                  Join our Community
                </h2>
                <p className="mx-auto mb-6 max-w-2xl text-sm text-gray-500 sm:text-base md:mb-5 lg:mb-12">
                  From tailored digital solutions and expert platform development to robust, scalable systems, we partner with you every step of the way. <br/>Subscribe now to stay updated on our latest innovations and success stories!                </p>
                <div className="mx-auto mb-4 flex max-w-lg justify-center">
                  <form
                    name="email-form"
                    method="get"
                    className="flex w-full flex-col gap-3 sm:flex-row"
                  >
                    <input
                      type="email"
                      className="h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-gray-500"
                      placeholder="Enter your email"
                    />
                    <input
                      type="submit"
                      value="Notify me"
                      className="cursor-pointer rounded-md bg-black px-6 py-2 font-semibold text-white"
                    />
                  </form>
                </div>
              </div>
            </div>
          </section>
        </BoxReveal>
      </GridDotBackgrounds>
    </div>
  )
}

export default Home
