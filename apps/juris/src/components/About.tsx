import { ABOUT } from '../data'

export function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 px-4 lg:grid-cols-2">
        <div className="relative mx-auto w-full max-w-md lg:mx-0">
          <img
            src={ABOUT.image}
            alt="Portrait of the firm's managing partner"
            className="w-full rounded-tl-[140px] object-cover"
            loading="lazy"
          />
          <div className="absolute -bottom-5 -right-5 bg-brand px-7 py-6 text-white">
            <span className="block text-6xl font-black leading-none">{ABOUT.badgeNumber}</span>
            <span className="mt-1 block max-w-[7ch] text-lg leading-tight">{ABOUT.badgeLabel}</span>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-4xl font-normal leading-tight text-ink md:text-[46px]">
            {ABOUT.heading}
          </h2>
          <p className="mt-6 text-base font-light leading-relaxed text-body">{ABOUT.blurb}</p>
          <div className="mt-8 border-l-4 border-brand pl-4">
            <p className="font-serif text-2xl text-ink">{ABOUT.signature}</p>
            <p className="mt-1 text-sm text-body">{ABOUT.signatureRole}</p>
          </div>
          <a
            href={ABOUT.readMoreHref}
            className="mt-9 inline-block border-b-2 border-brand pb-1 font-medium text-ink transition-colors hover:text-brand"
          >
            {ABOUT.readMore}
          </a>
        </div>
      </div>
    </section>
  )
}
