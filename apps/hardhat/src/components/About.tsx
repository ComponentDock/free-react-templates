import { Button } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" aria-label="About" className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <div className="relative mb-6">
            <span className="pointer-events-none absolute -left-2 -top-4 font-display text-5xl font-bold uppercase text-gray-100 select-none sm:text-6xl">
              About us
            </span>
            <h2 className="relative font-display text-3xl font-bold uppercase tracking-wide text-navy sm:text-4xl">
              Who we are
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-smoke">
            Heaven fruitful doesn't over lesser days appear creeping seasons so behold bearing days
            open. Heaven fruitful third. Appear creeping seasons so behold bearing days open. Heaven
            fruitful third over lesser days appear.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-smoke">
            Creeping seasons so behold bearing days open. Heaven fruitful third over lesser days
            appear creeping seasons so behold bearing days open.
          </p>
          <Button className="mt-8 rounded bg-brand px-8 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark">
            Read More
          </Button>
        </div>

        <div className="relative">
          <img
            src="https://picsum.photos/seed/hardhat-about/600/400"
            alt="Construction team at work"
            className="w-full rounded-lg object-cover"
            loading="lazy"
          />
          <div className="absolute -bottom-4 -left-4 flex h-20 w-20 items-center justify-center rounded bg-brand text-center text-white shadow-lg">
            <span className="font-display text-2xl font-bold leading-tight">
              1994
              <br />
              <span className="text-xs font-normal">Since</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
