import { ButtonLink } from '@free-react-templates/ui'

export function SplitOne() {
  return (
    <section className="bg-mist py-24 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="flex justify-center">
          <img
            src="https://picsum.photos/seed/appy-split-1/600/500"
            alt="Appy split illustration one"
            className="h-72 w-full max-w-md rounded-2xl object-cover shadow-xl"
          />
        </div>

        <div>
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Great Application Ever
          </h2>
          <p className="mt-6 leading-relaxed text-muted dark:text-gray-400">
            Appy brings together speed, clarity, and polish — a landing experience that makes your
            app look as good as it works.
          </p>
          <ButtonLink href="#features" className="mt-10 rounded-full px-10">
            Learn More
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
