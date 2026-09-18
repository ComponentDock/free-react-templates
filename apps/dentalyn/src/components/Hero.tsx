import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://picsum.photos/seed/dentalyn-hero/1600/900)',
      }}
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h1 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          We Believe Everyone Should Have Easy Access To Great Dental Care
        </h1>
        <p className="mb-10 text-lg text-white/90">
          As a leading industry innovator, Dentalyn is opening up exciting new opportunities for
          dental professionals, investors, employees &amp; suppliers. Contact us to find out what we
          have to offer you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <ButtonLink
            href="#about"
            className="rounded-md bg-primary-400 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
          >
            Get Started
          </ButtonLink>
          <ButtonLink
            href="#contact"
            className="rounded-md border-2 border-white px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-gray-900"
          >
            Contact Us
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
