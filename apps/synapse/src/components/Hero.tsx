import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-primary-500 py-24 sm:py-32">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(135deg, #62ddff 0%, #3bacf0 45%, #4dabff 100%)',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h1 className="font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
          Mass People Oriented Software
        </h1>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-primary-100">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink
            href="#pricing"
            className="rounded-full bg-white px-9 py-3.5 text-primary-600 hover:bg-primary-50"
          >
            Get Started
          </ButtonLink>
          <ButtonLink
            href="#screenshots"
            className="rounded-full border-2 border-white/70 bg-transparent px-9 py-3.5 text-white hover:bg-white/10"
          >
            Download
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
