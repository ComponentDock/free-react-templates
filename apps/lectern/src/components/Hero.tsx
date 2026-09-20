import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(2,0,49,0.55), rgba(2,0,49,0.7)), url(https://picsum.photos/seed/lectern-hero/1600/900)',
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-32">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand">
            Award Winning University
          </p>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            An investment in knowledge pays the best interest.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85">
            Education is not just about going to school and getting a degree. It&apos;s about
            widening your knowledge and absorbing the truth about life. Knowledge is power.
          </p>
          <div className="mt-10">
            <ButtonLink
              href="#courses"
              className="inline-flex items-center rounded bg-brand px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-orange-600"
            >
              Get Started
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
