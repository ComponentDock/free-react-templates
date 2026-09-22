import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-surface"
      data-testid="hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/justly-hero/1920/1080)' }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <p className="font-heading text-brand text-lg uppercase tracking-[0.3em] mb-4">
          Hi, I'm Justly
        </p>
        <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl font-bold text-white uppercase mb-8">
          Fitness Coach
        </h1>
        <ButtonLink
          href="#courses"
          className="inline-flex border-2 border-brand text-brand px-8 py-3 font-heading text-sm uppercase tracking-[0.3em] hover:bg-brand hover:text-white transition-colors"
        >
          My Courses
        </ButtonLink>
      </div>
    </section>
  )
}
