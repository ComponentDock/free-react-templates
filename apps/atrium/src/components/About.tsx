import { ButtonLink } from '@free-react-templates/ui'

const points = [
  'Residential and commercial architecture',
  'Interior planning, detailing, and finishes',
] as const

export function About() {
  return (
    <section id="about" className="bg-white py-24 dark:bg-gray-950 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <img
            src="https://picsum.photos/seed/atrium-about/800/900"
            alt="Architectural model of a building"
            className="h-full w-full object-cover"
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-10 py-8 text-center shadow-lg">
            <span className="block text-7xl font-bold text-ink">25</span>
            <span className="mt-1 block text-xs font-normal uppercase tracking-[0.2em] text-mist">
              Years of Experience
            </span>
          </div>
        </div>

        <div>
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-line dark:text-white/50">
            About Us
          </span>
          <h2 className="mt-4 text-4xl font-medium leading-tight text-ink sm:text-5xl dark:text-white">
            Architectural Plan Design and Build
          </h2>
          <div className="mt-8 h-0.5 w-[90px] bg-ink dark:bg-white" aria-hidden="true" />
          <p className="mt-8 max-w-lg font-serif text-base leading-relaxed text-mist dark:text-white/70">
            From concept to completion, we design buildings that balance beauty, function, and
            longevity — always in tune with the place they call home.
          </p>
          <ul className="mt-8 space-y-3">
            {points.map((point) => (
              <li
                key={point}
                className="flex items-center gap-4 text-base font-normal text-mist dark:text-white/70"
              >
                <span
                  className="h-3.5 w-3.5 shrink-0 rounded-full bg-[#02c856]"
                  aria-hidden="true"
                />
                {point}
              </li>
            ))}
          </ul>
          <ButtonLink
            href="#services"
            className="mt-10 h-auto rounded-none border border-ink bg-white px-11 py-[18px] text-sm font-normal uppercase tracking-[0.2em] text-ink hover:bg-ink hover:text-white dark:border-white/60 dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-ink"
          >
            About Us
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
