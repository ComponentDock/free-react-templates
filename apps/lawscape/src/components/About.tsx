import { ButtonLink } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" aria-label="About" className="py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded">
          <img
            src="https://picsum.photos/seed/lawscape-about/800/500"
            alt="Law office video placeholder"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
            <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white text-white">
              ▶
            </span>
            <p className="mt-3 text-sm font-medium text-white">Watch our video</p>
          </div>
        </div>
        <div>
          <h2 className="font-heading text-2xl font-bold text-ink sm:text-3xl">
            We Properly Understand Your Purpose
          </h2>
          <p className="mt-5 leading-relaxed text-smoke">
            Multiply replenish sea won't fishl own without dry. Deep behold from can't itself fourth
            i fish creeping multiply, without you our they dry together so lesser herb were.
          </p>
          <p className="mt-4 leading-relaxed text-smoke">
            Every appear very fill. Whales there beginning day second give me to whales likeness
            after forth their won't. Don fruit let multiply secon brought can't darkness saying.
          </p>
          <div className="mt-8">
            <ButtonLink
              href="#services"
              className="inline-block bg-primary-500 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-700"
            >
              Learn More
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
