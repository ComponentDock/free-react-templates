import { ButtonLink } from '@free-react-templates/ui'
import { Download, Rocket } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-lavender via-white to-paper dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400">
            App &amp; SaaS Landing Page
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-navy dark:text-white sm:text-5xl lg:text-6xl">
            Promote your app with Applab
          </h1>
          <p className="mt-6 text-lg text-muted dark:text-gray-400">
            Get more users to promote your app with this template — a complete launch page for your
            next product.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="#download" className="rounded-full px-8 py-4">
              <Rocket className="h-4 w-4" aria-hidden="true" />
              Get Start Now
            </ButtonLink>
            <ButtonLink
              href="#download"
              variant="outline"
              className="rounded-full border-primary-300 px-8 py-4 text-primary-700 hover:bg-primary-50 dark:border-primary-800 dark:text-primary-300 dark:hover:bg-gray-800"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Now
            </ButtonLink>
          </div>
        </div>
        <img
          src="https://picsum.photos/seed/applab-hero/1200/900"
          alt="Applab app on devices"
          className="h-full w-full rounded-3xl object-cover shadow-xl"
        />
      </div>
    </section>
  )
}
