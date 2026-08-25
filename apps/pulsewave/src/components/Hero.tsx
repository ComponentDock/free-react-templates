import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './BrandIcons'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[800px] items-center overflow-hidden bg-gradient-to-br from-brand to-accent-lavender"
    >
      <div className="absolute inset-0 z-0 bg-black/10" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 lg:px-[88px]">
        <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl">
          Boost Personal Productivity
        </h1>
        <p className="mb-8 max-w-xl text-lg text-white/80">
          A small river named Duden flows by their place and supplies it with the necessary
          regelialia.
        </p>
        <div className="mb-12 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="inline-block rounded-full bg-white px-8 py-3 font-semibold text-brand transition-colors hover:bg-white/90"
          >
            Start A Project
          </a>
          <div className="text-sm text-white/80">
            <span className="block">Call us for any inquiry</span>
            <span className="text-base font-semibold text-white">+01 2345 5678 910</span>
          </div>
        </div>
        <ul className="flex gap-4">
          {[
            { Icon: FacebookIcon, label: 'Facebook' },
            { Icon: TwitterIcon, label: 'Twitter' },
            { Icon: InstagramIcon, label: 'Instagram' },
            { Icon: LinkedinIcon, label: 'LinkedIn' },
          ].map(({ Icon, label }) => (
            <li key={label}>
              <a
                href="#"
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-full text-white transition-colors hover:bg-accent-blue"
              >
                <Icon className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
