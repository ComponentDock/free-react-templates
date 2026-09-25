import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-gray-800 bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/dossier-hero/1920/1080)',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 px-4 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">Howdy, I'm Alex Morgan</h1>
        <p className="mb-8 text-lg text-gray-300 md:text-xl">
          A Product Designer working at a top tech company.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <ButtonLink
            href="#about"
            className="rounded-full bg-leaf-400 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-leaf-500"
          >
            More On Me
          </ButtonLink>
          <ButtonLink
            href="#contact"
            className="rounded-full border-2 border-white px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-gray-900"
          >
            Hire Me
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
