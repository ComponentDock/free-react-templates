import { ButtonLink } from '@free-react-templates/ui'

export function CallToAction() {
  return (
    <section
      id="contact"
      className="relative bg-cover bg-center py-24"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/reelcraft-cta/1920/600)' }}
    >
      <div className="absolute inset-0 bg-surface/90" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold leading-snug text-white sm:text-4xl lg:text-5xl">
            Fresh Ideas, Fresh Moments Giving Wings to your Stories.
          </h2>
          <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-white/50">
            INC5000, Best places to work 2031
          </p>
          <ButtonLink
            href="#contact"
            className="mt-8 inline-flex border border-white/30 bg-transparent px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:border-brand hover:bg-brand hover:text-white"
          >
            Start your stories
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
