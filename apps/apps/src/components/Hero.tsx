import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-night px-4 pb-24 pt-40 sm:px-6 lg:pb-32 lg:pt-48"
    >
      <img
        src="https://picsum.photos/seed/apps-hero/1600/900"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-night via-night/80 to-night/40" />

      <div className="relative mx-auto max-w-3xl text-center">
        <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
          The Best App in the Universe
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-white/80">
          Inappropriate behavior is often laughed off as &ldquo;boys will be boys&rdquo; — Apps
          raises the standard for conduct, clarity, and care in every interaction.
        </p>
        <ButtonLink
          href="#service"
          className="mt-10 h-[42px] rounded-full bg-gradient-to-r from-primary-500 to-azure px-10 text-white hover:from-primary-600 hover:to-primary-400"
        >
          Load More Item
        </ButtonLink>
      </div>
    </section>
  )
}
