import { Play } from 'lucide-react'

export function About() {
  return (
    <section className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-[120px]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-black leading-tight text-ink dark:text-white lg:text-4xl">
            We Believe that Interior beautifies the Total Architecture
          </h2>
          <p className="mt-6 leading-relaxed text-mist dark:text-gray-400">
            Inappropriate behavior is often laughed off as "boys will be boys," women face higher
            conduct standards — especially in the workplace. That's why our barbershop is built on
            respect, comfort, and craft.
          </p>
          <p className="mt-4 leading-relaxed text-mist dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <a
            href="#service"
            className="mt-8 inline-flex items-center gap-3 rounded-[25px] bg-gradient-to-r from-brand to-brand-dark px-9 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
          >
            See Details
          </a>
        </div>
        <div className="relative">
          <img
            src="https://picsum.photos/seed/crewcut-about/600/500"
            alt="Barber shop interior"
            className="w-full rounded-2xl object-cover"
          />
          <button
            type="button"
            aria-label="Play video"
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-r from-brand to-brand-dark text-white shadow-lg transition-transform hover:scale-110"
          >
            <Play className="h-6 w-6 fill-current" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
