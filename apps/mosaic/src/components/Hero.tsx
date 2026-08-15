/* Hero — full-viewport brand-gradient band (45deg pink #ee76ad → peach
   #efac78) with a subtle dot-network pattern overlay (CSS radial
   gradient, standing in for the reference's particles canvas), centered
   headline with an emphasized word, a short paragraph, and a ghost
   pill CTA that scrolls to the featured works. */
export function Hero() {
  return (
    <section
      id="home"
      aria-label="Home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[linear-gradient(45deg,#ee76ad_0%,#efac78_100%)] px-4 pt-24"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />
      <div className="relative max-w-3xl text-center">
        <h1 className="text-4xl font-extralight leading-tight text-white md:text-6xl">
          We love to create <span className="font-bold text-white">Beautiful</span> websites
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts. Separated they live in Bookmarksgrove.
        </p>
        <a
          href="#portfolio"
          className="mt-10 inline-block rounded-full border border-white bg-transparent px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}
