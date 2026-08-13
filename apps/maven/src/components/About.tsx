import { ArrowRight } from 'lucide-react'
import { about } from '../data'

/** Split about section (reference `.about_part`): image collage with an
 *  overlapping experience headline on the left, eyebrow + title + text +
 *  pink button on the right. */
export function About() {
  return (
    <section id="about" aria-label="About" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 lg:grid-cols-2 lg:px-8">
        <div className="relative">
          <img
            src={about.images.main}
            alt=""
            width={570}
            height={450}
            className="w-full object-cover"
            loading="lazy"
          />
          <img
            src={about.images.small}
            alt=""
            width={270}
            height={210}
            className="absolute -bottom-10 right-6 hidden w-64 border-8 border-white object-cover md:block"
            loading="lazy"
          />
          <h2 className="absolute -bottom-14 left-0 max-w-sm bg-white px-2 font-heading text-[42px] font-semibold leading-tight text-navy-deep">
            {about.experience}
          </h2>
        </div>

        <div className="pt-10 lg:pt-0">
          <p className="text-sm font-medium uppercase tracking-wider text-primary-600">
            {about.eyebrow}
          </p>
          <h2 className="mt-4 font-heading text-[42px] font-bold leading-tight text-navy-deep">
            {about.title}
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-gray-600">{about.text}</p>
          <a
            href="#services"
            className="mt-10 inline-flex items-center gap-3 rounded-[4px] bg-primary-600 px-[42px] py-[19.5px] text-sm font-medium uppercase text-white shadow-[0_10px_30px_0_rgba(190,0,88,0.35)] transition-colors hover:bg-primary-700"
          >
            {about.cta}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
