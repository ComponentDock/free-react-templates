import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center justify-center overflow-hidden bg-night"
      style={{ height: 'calc(100vh)' }}
    >
      <img
        src="https://picsum.photos/id/1041/1600/900"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 pb-16 pt-32 text-center">
        <h1 className="font-display text-4xl font-normal uppercase leading-tight tracking-[0.1em] text-white md:text-[4rem]">
          Turn On The Feeling With Music
        </h1>
        <ButtonLink href="#shows" className="mt-8 h-auto rounded px-8 py-3 text-base">
          Download Template
        </ButtonLink>
      </div>
    </section>
  )
}
