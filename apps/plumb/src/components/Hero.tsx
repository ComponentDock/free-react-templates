import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative flex min-h-[600px] items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://picsum.photos/seed/plumb-hero/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Far far away, behind the word mountains, far from the countries
          <span className="block"> Vokalia and Consonantia</span>
        </h1>
        <div className="mt-10">
          <ButtonLink
            href="#contact"
            className="inline-block rounded-full bg-primary-400 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-500"
          >
            Let&apos;s get started
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
