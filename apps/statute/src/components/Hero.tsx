import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden bg-dark-bg"
      style={{ minHeight: '600px' }}
    >
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/statute-hero/1920/1080"
          alt="Law firm office"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-28 text-center sm:px-6 lg:py-40">
        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Attorneys Fighting For Your Freedom
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-200">
          We provide expert legal representation with decades of experience. Our team of dedicated
          attorneys is committed to protecting your rights and fighting for the justice you deserve.
        </p>
        <div className="mt-8">
          <ButtonLink
            href="#contact"
            className="inline-block rounded bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
          >
            Make an Appointment
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
