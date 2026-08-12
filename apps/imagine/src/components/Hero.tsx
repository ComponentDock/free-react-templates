const HERO_IMAGE = 'https://picsum.photos/seed/imagine-grow/1920/1080'

/* Hero recreated from the source's banner: a full-width cover photo with a
   black 0.4 overlay, content right-aligned on wide viewports (centered on
   mobile): a thin 72px headline with bold spans and a gradient pill CTA. */

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative flex min-h-[700px] items-center justify-end overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${HERO_IMAGE})` }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 text-center lg:px-8 lg:text-right">
        <h1 className="text-4xl font-thin leading-[1em] text-white lg:text-[4.5rem]">
          We Provide <br />
          <span className="font-bold">Solutions</span> that <br />
          Brings <span className="font-bold">Joy</span>
        </h1>
        <a
          href="#service"
          className="mt-10 inline-flex items-center rounded-full bg-gradient-to-r from-brand-start to-brand-end px-9 py-3 text-sm font-medium uppercase tracking-wider text-white transition-colors hover:from-brand-end hover:to-brand-start"
        >
          Hire Us Now!
        </a>
      </div>
    </section>
  )
}
