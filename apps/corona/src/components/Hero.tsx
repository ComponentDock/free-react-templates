/* Hero (source: .home-banner-area — full-cover violet background image,
   white Playfair headline + paragraph on the left, flat illustration on
   the right, sweeping white wave at the bottom edge). The image background
   is approximated with the brand gradient over a violet cover; the
   illustration is a seeded placeholder. */
export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[linear-gradient(120deg,#6a11cb_0%,#7c32ff_45%,#c738d8_100%)]"
    >
      <div className="mx-auto flex max-w-[1140px] flex-col items-center gap-12 px-[15px] pb-40 pt-[250px] lg:flex-row">
        <div className="lg:w-1/2">
          <h1 className="font-display text-[42px] font-black leading-[1.2] text-white lg:text-[54px]">
            Take the first step
            <br />
            to learn with us
          </h1>
          <p className="mt-8 max-w-[460px] text-[15px] leading-7 text-white/90">
            Join thousands of curious minds exploring the universe of knowledge — from deep-space
            photography to coding — with courses crafted by expert mentors who make every lesson a
            journey.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img
            src="https://picsum.photos/seed/corona-hero/500/500"
            alt="Two students learning together"
            className="w-full max-w-[460px] rounded-lg shadow-2xl"
            loading="eager"
          />
        </div>
      </div>
      {/* Sweeping white wave separating the hero from the feature strip. */}
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 h-[120px] w-full"
        aria-hidden="true"
      >
        <path
          d="M0,64 C240,120 480,120 720,80 C960,40 1200,0 1440,64 L1440,120 L0,120 Z"
          fill="#ffffff"
        />
      </svg>
    </section>
  )
}
