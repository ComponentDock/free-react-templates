import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" aria-label="Hero" className="relative overflow-hidden bg-dark-bar">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/lawscape-hero/1920/1080)' }}
      />
      <div className="absolute inset-0 bg-[rgba(2,4,23,0.70)]" />
      <div className="relative mx-auto flex min-h-[500px] max-w-6xl items-center justify-center px-4 sm:min-h-[600px] sm:px-6 lg:min-h-[800px]">
        <div className="max-w-2xl text-center">
          <h1 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            We Well Understand Your Intention
          </h1>
          <div className="mt-10">
            <ButtonLink
              href="#contact"
              className="inline-block bg-primary-500 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-700"
            >
              Make an Appointment
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
