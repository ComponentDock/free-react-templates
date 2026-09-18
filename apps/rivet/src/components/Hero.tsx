import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/rivet-1/1200/600)' }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center px-4">
        <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          Creating A Brighter Future
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200">
          We are a trusted construction and development company dedicated to building exceptional
          spaces that inspire and endure.
        </p>
        <ButtonLink href="#contact" variant="primary" className="bg-brand hover:bg-brand-dark">
          Get A Quote
        </ButtonLink>
      </div>
    </section>
  )
}
