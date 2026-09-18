import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center justify-center bg-cover bg-center bg-no-repeat py-20"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/squadly-hero/1600/900)' }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl">
          Lease The Right Equipment For Your Job
        </h1>
        <p className="mb-8 text-lg text-gray-200">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts. Separated they live in Bookmarksgrove.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <ButtonLink
            href="#contact"
            className="rounded bg-primary-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-primary-600"
          >
            Contact us
          </ButtonLink>
          <ButtonLink
            href="#contact"
            className="rounded border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-gray-900"
          >
            Request A Quote
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
