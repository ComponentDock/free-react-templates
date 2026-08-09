import { ButtonLink } from '@free-react-templates/ui'

export function Welcome() {
  return (
    <section
      id="welcome"
      className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-[120px]"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <img
            src="https://picsum.photos/seed/shear-welcome/640/720"
            alt="Close-up of a barber giving a clean shave"
            className="aspect-[8/9] w-full rounded-lg object-cover"
          />
          <div className="absolute -bottom-6 left-6 rounded-lg bg-brand px-6 py-4 text-white shadow-lg">
            <span className="block text-4xl font-black leading-none">3</span>
            <span className="mt-1 block text-sm font-semibold uppercase tracking-wide">
              years in excellent service
            </span>
          </div>
        </div>
        <div className="text-center lg:text-left">
          <h2 className="font-display text-3xl font-bold text-brand sm:text-4xl">
            Welcome To Shear!
          </h2>
          <p className="mt-6 leading-relaxed text-mist dark:text-gray-400">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
          <div className="mt-8">
            <ButtonLink href="#services" className="rounded-full px-8 uppercase tracking-wide">
              Learn More
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
