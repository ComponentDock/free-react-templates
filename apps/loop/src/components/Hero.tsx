import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center justify-center bg-cover bg-center bg-no-repeat pt-20"
      style={{
        backgroundImage:
          'linear-gradient(rgba(16,42,67,0.7), rgba(16,42,67,0.8)), url(https://picsum.photos/seed/loop-hero/1600/900)',
      }}
    >
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h1 className="mb-4 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
          We are pretty <span className="text-coral-400">Awesome</span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-navy-200">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts.
        </p>
        <ButtonLink
          href="#services"
          variant="primary"
          className="rounded-full bg-coral-400 px-8 py-3 text-white hover:bg-coral-500"
        >
          Our Services
        </ButtonLink>
      </div>
    </section>
  )
}
