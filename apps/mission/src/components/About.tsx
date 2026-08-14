import { about } from '../data'

/** About section on a light pink-gray background: photo with a centered red
 *  stat badge on the left, kicker + heading + paragraph on the right. */
export function About() {
  return (
    <section id="about" aria-label="About us" className="bg-mist py-20 lg:py-[120px]">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-6 lg:grid-cols-2">
        <div className="relative">
          <img src={about.image} alt="" className="h-[420px] w-full object-cover" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand px-8 py-9 text-center">
            <span className="block text-base text-white">{about.badgeCaption}</span>
            <span className="block font-sans text-[46px] leading-none text-white">
              {about.badgeStat}
            </span>
            <span className="block text-base text-white">{about.badgeFooter}</span>
          </div>
        </div>
        <div className="lg:pl-[37px]">
          <p className="mb-2 text-sm tracking-[2px] text-brand">{about.kicker}</p>
          <h2 className="font-serif text-3xl font-normal leading-[1.2] text-maroon lg:text-[46px] lg:leading-[56px]">
            {about.title}
          </h2>
          <p className="mt-3 text-base leading-7 text-ink">{about.paragraph}</p>
          <a
            href="#impact"
            onClick={(event) => event.preventDefault()}
            className="mt-8 inline-block bg-brand px-[44px] py-[18px] text-sm uppercase tracking-[3px] text-white transition-colors hover:bg-maroon"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
