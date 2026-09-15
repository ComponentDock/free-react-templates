import { ButtonLink } from '@free-react-templates/ui'

export function ProfessionalServices() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.50), rgba(0,0,0,0.50)), url(https://picsum.photos/seed/cosyhaus-pro/1600/500)',
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <span className="mb-3 inline-block font-display text-sm font-medium uppercase tracking-[0.25em] text-white/80">
              Our Professional Services
            </span>
            <h2 className="font-display text-3xl font-bold uppercase leading-snug tracking-wide text-white sm:text-4xl">
              We will create modern
              <br />
              and first class interior.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-300">
              Aorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore.
            </p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
            </p>
          </div>
          <ButtonLink
            href="#services"
            className="shrink-0 rounded-lg border-2 border-brand bg-brand px-8 py-3 font-display text-sm font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-brand-dark hover:border-brand-dark"
          >
            Discover More About Us
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
