import { ABOUT, IMAGES } from '../data'

/* About — the two-column about section: heading, two paragraphs and a
   dark-text "Read More" button on the left, a 5px-rounded photo on the
   right; the 200px top padding clears the floating features card. */
export function About() {
  return (
    <section id="about" aria-label="About" className="bg-gray-100 pb-[100px] pt-[200px]">
      <div className="mx-auto grid max-w-[1170px] items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-[30px] font-bold leading-[1.3] text-heading lg:text-[38px]">
            {ABOUT.heading}
          </h2>
          {ABOUT.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-6 text-sm leading-[1.8] text-body">
              {paragraph}
            </p>
          ))}
          <a href="#services" className="fancy-btn fancy-btn-dark mt-[40px]">
            {ABOUT.readMoreLabel}
          </a>
        </div>
        <div>
          <img
            src={IMAGES.about}
            alt="The Flair studio team at work"
            className="w-full rounded-[5px] object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
