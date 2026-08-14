import { about } from '../data'

/** About / experience section (source: section.about-area.about1, bg
 *  #121212): left column with the "HOW WE MAKE USER EXPERIENCES" heading and
 *  a coral email link with a 144px underline; right column with the Dali
 *  quote, the attribution and the "05 YEARS OF DIGITAL EXPERIENCE" stat. */
export function About() {
  return (
    <section id="about" className="bg-ink py-[65px] text-white lg:py-[195px]">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-[15px] lg:grid-cols-2 lg:gap-10 lg:px-[30px]">
        <div>
          <h2 className="mb-12 max-w-md font-heading text-[30px] font-bold leading-[1.5] text-white lg:text-[50px]">
            {about.title}
          </h2>
          <a
            href={`mailto:${about.email}`}
            className="relative inline-block pb-2 text-lg font-light text-brand after:absolute after:bottom-0 after:left-0 after:h-px after:w-[144px] after:bg-brand"
          >
            {about.email}
          </a>
        </div>

        <div>
          <h3 className="mb-[35px] text-lg font-normal leading-[1.5] text-white">{about.quote}</h3>
          <p className="relative mb-[25px] pl-[147px] text-muted">
            <span className="block uppercase">{about.name}</span>
            <span
              className="absolute left-[147px] top-3 h-px w-[60px] bg-muted"
              aria-hidden="true"
            />
            {about.role}
          </p>
          <div className="mt-10 flex items-end">
            <span className="font-heading text-[90px] font-bold leading-none text-white">
              {about.years}
            </span>
            <p className="pl-[30px] font-heading text-lg font-medium uppercase leading-[1.4] text-white">
              {about.yearsLabel[0]}
              <br />
              {about.yearsLabel[1]}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
