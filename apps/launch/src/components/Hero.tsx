import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-primary-500 via-primary-600 to-blue-700 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
          Promote Your Products by Colorlib
        </h1>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-blue-100">
          Showcase your product with a stunning, fast landing page. Far far away, behind the word
          mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink
            href="#features"
            className="rounded-full bg-white px-10 py-3.5 text-primary-600 hover:bg-blue-50"
          >
            See Features
          </ButtonLink>
          <ButtonLink
            href="#pricing"
            className="rounded-full border border-white/60 bg-transparent px-10 py-3.5 text-white hover:bg-white/10 dark:border-white/60 dark:text-white"
          >
            Pricing
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
