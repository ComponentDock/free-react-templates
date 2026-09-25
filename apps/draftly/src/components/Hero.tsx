import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center bg-gray-900 bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/draftly-hero/1920/1080)',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20">
        <div className="max-w-xl">
          <span className="mb-4 block text-sm font-light uppercase tracking-widest text-gray-400">
            Hello! This is Draftly
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Creative <span className="text-brand-500">UI/UX</span> Designer &amp; Developer
          </h1>
          <div className="flex flex-wrap gap-4">
            <ButtonLink
              href="#contact"
              className="rounded bg-brand-500 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
            >
              Hire me
            </ButtonLink>
            <ButtonLink
              href="#about"
              className="rounded border-2 border-brand-500 px-8 py-3 text-sm font-semibold text-brand-500 transition-colors hover:bg-brand-500 hover:text-white"
            >
              Download CV
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
