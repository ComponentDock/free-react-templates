import { ButtonLink } from '@free-react-templates/ui'

export function Cta() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-[120px]">
      <img
        src="https://picsum.photos/seed/shear-cta/1920/700"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold uppercase text-white sm:text-4xl">
          Quality Haircut
        </h2>
        <p className="mt-4 text-white/80">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
        </p>
        <div className="mt-8">
          <ButtonLink href="#contact" className="rounded-full px-8 uppercase tracking-wide">
            Contact Us Now
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
