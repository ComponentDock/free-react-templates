import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-32 pb-20 transition-colors dark:bg-gray-950 lg:pt-40 lg:pb-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-12 text-center lg:flex-row lg:text-left">
          <div className="flex-1">
            <h1 className="font-display text-4xl font-bold leading-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              Travel More To Discover Yourself
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Discover breathtaking destinations, create unforgettable memories, and explore the
              world with our expertly crafted travel packages. Your next adventure awaits.
            </p>
            <ButtonLink
              href="#packages"
              className="mt-8 inline-flex rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Get Started
            </ButtonLink>
          </div>
          <div className="flex-1">
            <img
              src="https://picsum.photos/seed/dune-hero/600/400"
              alt="Scenic travel destination with mountains and lake"
              className="w-full rounded-2xl object-cover shadow-lg"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
