import { ButtonLink } from '@free-react-templates/ui'
import { Play } from 'lucide-react'

const heading = 'We Believe that Interior beautifies the Total Architecture'

export function About() {
  return (
    <>
      <section id="about" className="bg-paper py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <img
            src="https://picsum.photos/seed/bulkapp-interior-1/560/420"
            alt="BulkApp interior dashboard"
            className="w-full rounded-lg object-cover shadow-lg"
          />
          <div>
            <h2 className="font-display text-3xl font-semibold leading-tight text-gray-900 dark:text-white">
              {heading}
            </h2>
            <p className="mt-5 leading-relaxed text-muted">
              Inappropriate behavior is often laughed off as &ldquo;boys will be boys,&rdquo; yet
              women face higher conduct standards especially in the workplace. BulkApp helps teams
              set the bar — with a clean interior that beautifies the total architecture of your
              workflow.
            </p>
            <ButtonLink
              href="#pricing"
              className="mt-8 rounded-md bg-gradient-to-r from-brand-start to-brand-end text-white hover:opacity-90"
            >
              See Details
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-gray-950">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <h2 className="font-display text-3xl font-semibold leading-tight text-gray-900 dark:text-white">
              {heading}
            </h2>
            <p className="mt-5 leading-relaxed text-muted">
              It won&rsquo;t be a bigger problem to find one video game lover in your neighbor.
              Since the introduction of Virtual Game, it has been achieving great heights so far as
              its popularity and technological advancement are concerned.
            </p>
            <ButtonLink
              href="#pricing"
              className="mt-8 rounded-md bg-gradient-to-r from-brand-start to-brand-end text-white hover:opacity-90"
            >
              See Details
            </ButtonLink>
          </div>

          <div className="relative order-1 lg:order-2">
            <img
              src="https://picsum.photos/seed/bulkapp-video/560/420"
              alt="BulkApp product tour video thumbnail"
              className="w-full rounded-lg object-cover shadow-lg"
            />
            <a
              href="#home"
              aria-label="Play the BulkApp video"
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-primary-600 shadow-lg transition-transform hover:scale-110">
                <Play className="ml-0.5 h-7 w-7" aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
