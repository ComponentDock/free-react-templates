import { ABOUT_IMAGE } from '../data'

/* About (source: section.about_history_area.section_gap — split section with
   the "About Us Our History Mission & Vision" heading, a paragraph, a dark
   "Request Custom Price" button and a background photo). */
export function About() {
  return (
    <section id="about" className="bg-white py-[120px]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
        <div className="lg:pr-[60px]">
          <h2 className="text-[30px] font-semibold leading-[40px] text-ink sm:text-[36px] sm:leading-[45px]">
            About Us Our History Mission &amp; Vision
          </h2>
          <p className="mt-6 text-[14px] leading-[24px] text-smoke">
            Women in the fine arts, like women in every other department of life, have always been
            expected to conduct themselves in a manner that would bring credit to the profession.
            Yet a woman who paints pictures or writes books should not be required to do so at the
            cost of her femininity.
          </p>
          <a
            href="#booking"
            className="mt-8 inline-block bg-ink px-[29px] py-[14px] text-[14px] font-medium uppercase text-white transition-colors hover:bg-night"
          >
            Request Custom Price
          </a>
        </div>
        <div className="overflow-hidden rounded-[10px]">
          <img
            src={ABOUT_IMAGE}
            alt="The Hostelry hotel grounds"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
