import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" aria-label="Hero" className="relative overflow-hidden bg-[#1d2124]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/counsel-hero/1920/1080)' }}
      />
      <div className="relative mx-auto flex min-h-[80vh] max-w-6xl items-center px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="font-display text-lg font-medium uppercase tracking-widest text-primary-500">
            We are here to help!
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Experience . Innovation . Excellence
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-300">
            We provide trusted legal services with a commitment to excellence. Our team of
            experienced attorneys is dedicated to protecting your rights and interests.
          </p>
          <div className="mt-10">
            <ButtonLink
              href="#contact"
              className="rounded-md bg-primary-500 px-9 py-3.5 font-semibold text-white shadow-lg transition-colors hover:bg-primary-600"
            >
              Request a Free Consultation
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
