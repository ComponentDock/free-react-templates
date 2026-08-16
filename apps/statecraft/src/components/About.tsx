import { aboutThumbnails } from '../data'

/** "Who We Are" cream section: uppercase serif label, long headline with a
 *  supporting paragraph on the right, and two office thumbnails below. */
export function About() {
  return (
    <section id="about" className="bg-cream py-[100px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <span className="font-serif text-base uppercase tracking-wide text-olive">
              Who We Are
            </span>
            <h2 className="mt-5 max-w-xl text-4xl font-bold leading-[1.2] text-ink lg:text-[46px]">
              We increase our clients&apos; topline by optimizing their growth strategies,
              marketing, pricing and sales.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed">
              Why we&apos;ve been working with Objectivity since 2013? Because they build a
              relationship that&apos;s based on trust. Over the years they&apos;ve proven that their
              delivery is fast and stable.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              Because they build a relationship that&apos;s based on trust. Over the years
              they&apos;ve proven that their delivery is fast and stable.
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {aboutThumbnails.map((thumb) => (
            <img
              key={thumb.src}
              src={thumb.src}
              alt={thumb.alt}
              className="h-64 w-full object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
