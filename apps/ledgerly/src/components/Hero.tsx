import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section className="relative bg-navy-900">
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 to-navy-800 opacity-90" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:py-28">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl font-light leading-tight text-white sm:text-5xl">
            Take a step into the <span className="font-semibold text-gold-500">Crypto World</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-300">
            Discover the future of digital currency. Fast, secure, and transparent blockchain
            solutions for everyone.
          </p>
          <ButtonLink href="#features" className="mt-8 inline-block">
            Read More
          </ButtonLink>
        </div>
        <div className="flex-1 text-center">
          <img
            src="https://picsum.photos/seed/ledgerly-coin/400/400"
            alt="Cryptocurrency illustration"
            className="mx-auto w-full max-w-sm rounded-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
