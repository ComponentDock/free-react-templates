import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-primary-500 to-primary-400 px-4 pb-24 pt-40 sm:px-6 lg:pb-32 lg:pt-48"
    >
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            Another cool free template by the fine folks at colorlib
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/90">
            A clean, modern landing page to launch your next project — bold by name, bold by design.
          </p>
          <ButtonLink
            href="#contact"
            className="mt-10 rounded-full bg-night px-10 text-white hover:bg-ink"
          >
            Try it Free
          </ButtonLink>
        </div>

        <div className="flex justify-center">
          <img
            src="https://picsum.photos/seed/bold-hero/600/450"
            alt="Bold hero dashboard illustration"
            className="w-full max-w-md rounded-2xl border-4 border-white/20 object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
