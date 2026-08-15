import { ABOUT_HEADING, FEATURED_WORKS } from '../data'
import { cn } from '@free-react-templates/ui'

/* Featured works — asymmetric masonry grid of six portfolio tiles (each
   with an image, a "Website" category tag and a designer credit) with an
   About split heading + pill CTA below (the reference's heading + CTA
   block after the grid). */
export function FeaturedWorks() {
  return (
    <section id="portfolio" aria-label="Featured works" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {FEATURED_WORKS.map((work, index) => (
            <article
              key={work.title}
              className={cn(
                'group relative overflow-hidden rounded-sm',
                'sm:col-span-1',
                work.tall ? 'sm:row-span-2 sm:aspect-[3/4]' : 'sm:aspect-[4/3]',
                work.wide ? 'lg:col-span-8' : 'lg:col-span-4',
                work.tall && 'lg:row-span-2',
                index === 5 && 'lg:col-span-12 lg:aspect-[21/6]',
              )}
            >
              <img
                src={work.image}
                alt={`${work.title} portfolio preview`}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink">
                Website
              </span>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-xl font-semibold text-white">{work.title}</h3>
                <p className="mt-1 text-sm text-white/80">{work.designer}</p>
              </div>
            </article>
          ))}
        </div>

        <div id="about" className="mx-auto mt-20 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold leading-tight text-ink md:text-4xl">
            {ABOUT_HEADING}
          </h2>
          <a
            href="#contact"
            className="mt-8 inline-block rounded-full bg-sky px-7 py-3 text-sm font-semibold uppercase tracking-wider text-[#212529] transition-colors hover:bg-[#56caeb]"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
