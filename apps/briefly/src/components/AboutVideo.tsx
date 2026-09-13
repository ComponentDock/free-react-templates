import { ButtonLink } from '@free-react-templates/ui'
import { Play } from 'lucide-react'

export function AboutVideo() {
  return (
    <section id="about" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-lg bg-charcoal">
          <img
            src="https://picsum.photos/seed/briefly-about/600/400"
            alt="Law firm office"
            className="h-full w-full object-cover opacity-60"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              type="button"
              aria-label="Play video"
              className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-400 text-white shadow-lg transition-transform hover:scale-110"
            >
              <Play className="ml-1 h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div>
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Get to Know Project Estimate?
          </h2>
          <p className="mt-6 leading-relaxed text-smoke dark:text-gray-400">
            There is a moment in the life of any aspiring astronomer that it is time to buy that
            first telescope. It&apos;s exciting to think about setting up your own viewing station
            whether that is on the deck.
          </p>
          <div className="mt-8">
            <ButtonLink
              href="#services"
              className="inline-block rounded bg-gradient-to-r from-primary-400 to-salmon-400 px-7 py-3 text-sm font-semibold text-white transition-all hover:from-primary-500 hover:to-salmon-500"
            >
              Learn More
            </ButtonLink>
          </div>
          <blockquote className="mt-10 border-l-4 border-primary-400 pl-4 text-sm leading-relaxed text-smoke dark:text-gray-400">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor
              incididunt labore dolore magna aliqua enim minim veniam quis nostrud.
            </p>
            <footer className="mt-3 flex items-center gap-3">
              <img
                src="https://picsum.photos/seed/briefly-author/48/48"
                alt=""
                className="h-10 w-10 rounded-full"
                loading="lazy"
              />
              <div>
                <cite className="not-italic font-semibold text-ink dark:text-white">
                  Marvel Maison
                </cite>
                <p className="text-xs text-smoke dark:text-gray-500">Chief Executive, Amazon</p>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
