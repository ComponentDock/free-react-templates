import { Mic } from 'lucide-react'
import { Reveal } from './Reveal'

export function Host() {
  return (
    <section id="about" className="bg-gray-900 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative mx-auto max-w-sm">
              <img
                src="https://picsum.photos/seed/airwave-host/600/750"
                alt="Alex Morgan, host of Airwave"
                className="aspect-[4/5] w-full rounded-2xl border border-gray-800 object-cover"
                loading="lazy"
              />
              <span className="absolute -bottom-4 -right-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg shadow-primary-600/25">
                <Mic className="h-6 w-6" aria-hidden="true" />
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="text-sm font-bold uppercase tracking-wider text-primary-500">
              About the Host
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Meet Your Host
            </h2>
            <p className="mt-3 text-lg font-bold text-gray-300">Alex Morgan</p>
            <p className="mt-4 text-sm leading-relaxed text-gray-400 sm:text-base">
              Serial entrepreneur, angel investor, and storyteller. Alex has built and exited two
              companies, backed more than 30 startups as an angel, and now sits down with the people
              building the future to unpack what really moves the needle.
            </p>
            <blockquote className="mt-6 border-l-4 border-primary-500 pl-4 text-lg font-semibold italic text-gray-200">
              &ldquo;Every founder has a story worth sharing.&rdquo;
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
