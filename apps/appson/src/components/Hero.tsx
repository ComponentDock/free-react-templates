import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-primary-400 to-primary-600 px-4 pb-24 pt-40 sm:px-6 lg:pb-32 lg:pt-48"
    >
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            Perfect Landing Page
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/90">
            The Best Template For Your Mobile App To Showcase And Acquire New Customers All around
            the globe.
          </p>
          <ButtonLink
            href="#download"
            className="mt-10 rounded-full bg-night px-10 text-white hover:bg-ink"
          >
            Download Now
          </ButtonLink>
        </div>

        <div className="flex justify-center">
          <img
            src="https://picsum.photos/seed/appson-phone/600/900"
            alt="Appson app phone mockup"
            className="h-72 w-auto rounded-[2.5rem] border-4 border-white/20 object-cover shadow-2xl sm:h-96"
          />
        </div>
      </div>
    </section>
  )
}
