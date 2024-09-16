import { IconBrandFacebook, IconBrandFacebookFilled, IconBrandInstagram, IconBrandWhatsapp } from "@tabler/icons-react"
import GridDotBackgrounds from "./ui/GridDotBackgrounds"

const Contact = () => {
  return (
    <GridDotBackgrounds>
          <section className="mt-10">
      <div className="px-5 py-16 md:px-10 md:py-20 ">
        <div className="mx-auto w-full max-w-7xl bg-gray-100 dark:bg-black/80 rounded-lg border px-4 py-32 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-5xl max-w-2xl mx-auto dark:text-white text-black">
            Lightning Fast Webflow Dev Made Easy
          </h2>
          <p className="mx-auto mb-6 max-w-xl text-sm text-gray-500 sm:text-base md:mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna
          </p>
          <div className="mx-auto">
            <ul className="flex flex-wrap justify-center gap-6 items-center">
              <li className="w-50">
                <a
                  href="http://wa.me/+918007029012"
                  className="flex items-center gap-4 rounded-full dark:bg-gray-300 text-white dark:text-black bg-black px-8 py-5 font-bold transition hover:text-gray-300"
                    target="_blank"
                >
                  <IconBrandWhatsapp/>
                  <p className=" text-sm sm:text-base">WhatsApp</p>
                </a>
              </li>
              <li className="w-50">
                <a
                  href="https://www.instagram.com/oneselftechnologies"
                  className="flex items-center gap-4 rounded-full dark:bg-gray-300 text-white dark:text-black bg-black px-8 py-5 font-bold transition hover:text-gray-300"
                    target="_blank"
                >
                  <IconBrandInstagram/>
                  <p className=" text-sm sm:text-base">Instagram</p>
                </a>
              </li>
              <li className="w-50">
                <a
                  href="https://www.facebook.com/profile.php?id=61564479072273&mibextid=ZbWKwL"
                  className="flex items-center gap-4 rounded-full dark:bg-gray-300 text-white dark:text-black bg-black px-8 py-5 font-bold transition hover:text-gray-300"
                    target="_blank"
                >
                  <IconBrandFacebookFilled/>
                  <p className=" text-sm sm:text-base">Facebook</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>    </GridDotBackgrounds>
  )
}

export default Contact
