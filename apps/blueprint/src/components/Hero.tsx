import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="overflow-hidden bg-gradient-to-br from-primary-400 to-accent-400"
    >
      <div className="mx-auto max-w-6xl px-4 pb-24 pt-20 text-center sm:px-6 lg:pt-28">
        <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
          Take on your biggest projects and goals
        </h1>
        <p className="mt-6 text-lg text-white/90">with Blueprint&apos;s high quality features</p>
        <div className="mt-10 flex justify-center">
          <ButtonLink
            href="#pricing"
            className="rounded-full bg-mint-400 px-10 py-4 font-semibold text-white shadow-lg transition-colors hover:bg-mint-500"
          >
            Get premium
          </ButtonLink>
        </div>

        <div className="mt-16 flex justify-center">
          <img
            src="https://picsum.photos/seed/blueprint-hero/880/560"
            alt="Blueprint app dashboard preview"
            className="h-auto w-full max-w-4xl rounded-xl shadow-2xl"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
