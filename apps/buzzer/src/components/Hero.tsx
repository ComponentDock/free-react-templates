import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white py-20 lg:py-32 dark:bg-gray-950"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative z-10">
          <h1 className="text-4xl font-medium leading-tight text-ink dark:text-white lg:text-6xl">
            <span className="text-accent">Entrepreneur.</span> Investor. Marketing Extraordinaire.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-slate dark:text-gray-400">
            We help businesses grow by leveraging the most engaging technology and innovative
            strategies to build trust fast.
          </p>
          <ButtonLink
            href="#services"
            className="mt-8 inline-flex rounded-full bg-brand px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
          >
            Explore Our Services
          </ButtonLink>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <img
            src="https://picsum.photos/seed/buzzer-hero/600/700"
            alt="Business professional portrait"
            className="w-full max-w-md rounded-2xl object-cover shadow-xl lg:max-w-lg"
            width={600}
            height={700}
          />
        </div>
      </div>
    </section>
  )
}
