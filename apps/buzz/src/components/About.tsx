import { Clock } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="bg-paper py-20 transition-colors dark:bg-gray-900 lg:py-[120px]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2">
        <div className="relative">
          <img
            src="https://picsum.photos/seed/buzz-about/640/720"
            alt="Barber styling a client in the studio"
            className="aspect-[8/9] w-full rounded-md object-cover"
          />
          <div
            className="absolute -bottom-4 -left-4 h-24 w-24 rounded-md border-4 border-brand/40 bg-white"
            aria-hidden="true"
          />
        </div>
        <div>
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            About Us
          </h2>
          <p className="mt-6 leading-relaxed text-mist dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="mt-6 leading-relaxed text-mist dark:text-gray-400">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Quis ipsum suspendisse ultrices gravida.
          </p>
          <div className="mt-8 flex items-center gap-4 border-l-4 border-brand bg-white px-6 py-4 shadow-sm dark:bg-gray-950">
            <Clock className="h-6 w-6 shrink-0 text-brand" aria-hidden="true" />
            <p className="text-sm font-bold uppercase tracking-widest text-ink dark:text-white">
              Opening Hour:{' '}
              <span className="font-normal normal-case text-mist dark:text-gray-400">
                10:00 am - 10:00 pm
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
