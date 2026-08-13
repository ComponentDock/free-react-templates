import { about } from '../data'

/** About section (reference `.site-section.bg-light`): photo on the left,
 *  cursive coral eyebrow + black heading + two paragraphs + amber button on
 *  the right, on the light #f6f5f5 band. */
export function About() {
  return (
    <section id="about" aria-label="About" className="bg-mist py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 lg:grid-cols-2 lg:px-8">
        <div>
          <img
            src={about.image}
            alt="Kids enjoying the playground"
            className="w-full rounded-[30px] object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <p className="font-cursive text-2xl text-coral">{about.eyebrow}</p>
          <h2 className="mt-3 text-4xl font-bold text-black">{about.heading}</h2>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-5 leading-relaxed text-ink">
              {paragraph}
            </p>
          ))}
          <a
            href="#pricing"
            className="mt-8 inline-block rounded-[30px] bg-amber px-6 py-3 text-sm tracking-[0.2rem] text-black uppercase transition-colors hover:bg-yellow-500"
          >
            {about.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
