import { Play } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function SplitTwo() {
  return (
    <section className="relative overflow-hidden bg-night py-24">
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Great Application Ever
          </h2>
          <p className="mt-6 leading-relaxed text-white/75">
            Watch how Appy turns a simple idea into a daily habit — a quick tour of the features
            your users will love.
          </p>
          <ButtonLink
            href="#features"
            className="mt-10 rounded-full bg-white px-10 text-primary-600 hover:bg-primary-50"
          >
            Learn More
          </ButtonLink>
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            aria-label="Play the Appy video"
            className="flex h-20 w-20 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-transform hover:scale-110"
          >
            <Play className="ml-1 h-8 w-8" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
