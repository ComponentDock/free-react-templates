import { ButtonLink } from '@free-react-templates/ui'

const heroImage = 'https://picsum.photos/seed/cargonaut-hero/1600/900'

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <img
        src={heroImage}
        alt="Freight containers moving through a port at dusk"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 -z-10 bg-navy/50" aria-hidden="true" />
      <div className="mx-auto flex min-h-[700px] max-w-6xl flex-col items-center justify-center px-4 py-40 text-center">
        <p className="text-lg font-normal text-white">For Personal &amp; Business</p>
        <h1 className="mt-8 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
          Global Logistic Service For Business
        </h1>
        <ButtonLink
          href="#services"
          className="mt-8 rounded-none bg-brand px-10 py-4 text-base font-medium text-white hover:border hover:border-brand hover:bg-transparent hover:text-brand"
        >
          Our Services
        </ButtonLink>
      </div>
    </section>
  )
}
