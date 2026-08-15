import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[640px] items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/id/1042/1600/900)' }}
    >
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-4 py-40 text-center sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold leading-none text-white md:text-7xl lg:text-8xl">
          Physical activity
        </h2>
        <h2 className="mt-2 text-5xl font-bold leading-none text-white md:text-7xl lg:text-8xl">
          enhances <span className="text-brand">positive energy!</span>
        </h2>
        <ButtonLink
          href="#"
          className="mt-10 rounded-none bg-brand px-10 py-5 text-lg font-bold text-[#353535] hover:bg-primary-400"
        >
          Join the Gym
        </ButtonLink>
      </div>
    </section>
  )
}
