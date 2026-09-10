import { ButtonLink } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" aria-label="About" className="bg-card-bg">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-20">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-heading sm:text-3xl">
            Brief Information About Lightwell
          </h2>
          <p className="text-sm leading-relaxed text-ink">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <ButtonLink
            href="#features"
            onClick={(e) => e.preventDefault()}
            className="inline-block rounded-full border-2 border-brand px-8 py-3 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
          >
            View More
          </ButtonLink>
        </div>

        <div>
          <img
            src="https://picsum.photos/seed/lightwell-2/600/400"
            alt="About Lightwell"
            className="h-auto w-full rounded-lg object-cover shadow-lg"
            width={600}
            height={400}
          />
        </div>
      </div>
    </section>
  )
}
