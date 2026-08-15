import { aboutHeading, aboutImage, aboutImageAlt, aboutParagraphs } from '../data'

/** Two-column about split: heading + copy + photo. */
export function About() {
  return (
    <section id="about" className="bg-white pt-28 pb-24">
      <div className="mx-auto grid max-w-[1250px] items-center gap-12 px-4 lg:grid-cols-2">
        <div>
          <h2 className="mb-6 text-[28px] font-semibold text-ink md:text-[40px]">{aboutHeading}</h2>
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph} className="mb-4 text-body">
              {paragraph}
            </p>
          ))}
        </div>
        <img src={aboutImage} alt={aboutImageAlt} className="w-full rounded-lg object-cover" />
      </div>
    </section>
  )
}
