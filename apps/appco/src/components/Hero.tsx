import { ButtonLink } from '@free-react-templates/ui'
import { Apple, Play } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-primary-50 via-white to-lavender dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400">
            Powerful app for better productivity
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-ink dark:text-white sm:text-5xl lg:text-6xl">
            Get things done with Appco
          </h1>
          <p className="mt-6 text-lg text-mist dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="#download" className="rounded-full px-8 py-4">
              Download
            </ButtonLink>
            <ButtonLink
              href="#video"
              variant="outline"
              className="rounded-full border-primary-300 px-8 py-4 text-primary-700 hover:bg-primary-50 dark:border-primary-800 dark:text-primary-300 dark:hover:bg-gray-800"
            >
              <Play className="h-4 w-4" aria-hidden="true" />
              Watch Demo
            </ButtonLink>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://picsum.photos/seed/appco-hero/1200/900"
            alt="Appco app on devices"
            className="h-full w-full rounded-3xl object-cover shadow-xl"
          />
          <div className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-2xl bg-white p-4 shadow-lg dark:bg-gray-800">
            <Apple className="h-8 w-8 text-primary-600" aria-hidden="true" />
            <div>
              <p className="text-xs text-mist dark:text-gray-400">Available on</p>
              <p className="text-sm font-semibold text-ink dark:text-white">
                App Store &amp; Google Play
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
