import { KitLink } from './KitButton'

const SUBTITLE =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iure possimus cum illum ab accusantium, aliquid, delectus tempora.'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-[80vh] min-h-[420px] items-center justify-center bg-cover bg-center px-6"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/modkit-hero/1920/1080)' }}
    >
      <div
        className="absolute inset-0 opacity-80"
        style={{ backgroundImage: 'var(--gradient-hero)' }}
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-white md:text-[3.5rem] md:leading-[1.1]">
          Modkit UI Kit.
        </h1>
        <p className="mt-4 text-[1.25rem] text-white/90">{SUBTITLE}</p>
        <p className="mt-8">
          <KitLink
            href="#start"
            color="info"
            variant="solid"
            size="md"
            className="rounded px-4 py-3"
          >
            See Here
          </KitLink>
        </p>
      </div>
    </section>
  )
}
