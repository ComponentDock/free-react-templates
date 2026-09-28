import { ABOUT_TEXT } from '../data'

/**
 * About — two-column section: heading + paragraph text + signature image.
 * Source: .about_area.
 */
export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="block text-sm font-medium uppercase tracking-widest text-brand">
              About Us
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-heading md:text-4xl">
              Burger Bachelor Restaurant
            </h2>
            <p className="mt-6 leading-relaxed text-body">{ABOUT_TEXT}</p>
            <img
              src="https://picsum.photos/seed/griddle-signature/200/60"
              alt="Signature"
              className="mt-6 h-12 w-auto"
            />
          </div>
          <div className="relative">
            <img
              src="https://picsum.photos/seed/griddle-about/600/400"
              alt="About Griddle restaurant"
              loading="lazy"
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
