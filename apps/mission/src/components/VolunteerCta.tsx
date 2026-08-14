import { volunteerCta } from '../data'

/** "Become a Volunteer" CTA band: photo backdrop under a solid red centered
 *  block with heading, paragraph, and two outline buttons. */
export function VolunteerCta() {
  return (
    <section
      aria-label="Become a volunteer"
      className="bg-cover bg-center py-[120px] lg:py-[185px]"
      style={{ backgroundImage: `url(${volunteerCta.image})` }}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="bg-brand px-8 py-14 text-center lg:px-[95px] lg:py-[68px]">
          <h2 className="font-serif text-3xl font-normal text-white lg:text-[46px]">
            {volunteerCta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-[640px] text-base leading-7 text-[#e5e5e5]">
            {volunteerCta.paragraph}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {volunteerCta.buttons.map((label) => (
              <a
                key={label}
                href="#contact"
                onClick={(event) => event.preventDefault()}
                className="inline-block border border-white bg-transparent px-[44px] py-3 capitalize text-white transition-colors hover:bg-white hover:text-brand"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
