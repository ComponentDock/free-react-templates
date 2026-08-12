import { ABOUT_PARAGRAPHS, BRAND } from '../data'

/**
 * About — split section: heading + two paragraphs + red "Browse Services"
 * button on the left, large workout photo on the right.
 */
export function About() {
  return (
    <section id="about" className="overflow-hidden bg-white py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 lg:grid-cols-2 lg:px-8">
        <div className="lg:pl-8">
          <h2 className="text-4xl font-bold leading-tight text-ink lg:text-5xl lg:leading-tight">
            We are {BRAND}. A Dedicated Fitness Center Since 2004
          </h2>
          {ABOUT_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="mt-8 text-sm leading-relaxed text-body">
              {paragraph}
            </p>
          ))}
          <a
            href="#courses"
            className="mt-10 inline-block bg-brand px-10 py-3.5 text-sm font-medium uppercase tracking-wide text-white transition-all duration-300 hover:bg-ink"
          >
            Browse Services
          </a>
        </div>
        <div>
          <img src="https://picsum.photos/id/1027/800/900" alt="" className="w-full object-cover" />
        </div>
      </div>
    </section>
  )
}
