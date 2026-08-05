import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="bg-violet py-16 sm:py-24 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            We provide best IT solution
          </h1>
          <p className="mt-5 max-w-xl leading-relaxed text-gray-300">
            Naxly brings the power of data science and artificial intelligence to every business —
            from analytics and automation to secure, scalable infrastructure.
          </p>
          <ButtonLink href="#contact" className="mt-9 rounded-full px-10 py-3.5">
            Get Free Quote
          </ButtonLink>
        </div>
        <img
          src="https://picsum.photos/seed/itkol-hero/640/560"
          alt="Itkol IT solution preview"
          className="mx-auto w-full max-w-md rounded-xl shadow-xl"
        />
      </div>
    </section>
  )
}
