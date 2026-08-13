/** Full-height hero: laptop photo under a translucent blue overlay with a
 *  centered subheading, headline, subtext, and green CTA. */
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[750px] items-center justify-center overflow-hidden"
    >
      <img
        src="https://picsum.photos/seed/skyward-hero/1920/1080"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-primary-600/80" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 py-40 text-center">
        <p className="text-sm font-semibold tracking-[4px] text-white uppercase">Web Hosting</p>
        <h1 className="mt-4 text-4xl leading-tight font-light text-white sm:text-[54px] sm:leading-[1.2]">
          Best Web Hosting For Your Website
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
          Get best speed for your website. Don't lose more clients
        </p>
        <a
          href="#domain"
          className="mt-10 inline-flex items-center justify-center rounded-[5px] border border-accent-500 bg-accent-500 px-8 py-4 text-base font-medium text-white shadow-[0_15px_30px_-12px_rgba(0,0,0,0.2)] transition-colors hover:border-accent-600 hover:bg-accent-600"
        >
          Get Started Now
        </a>
      </div>
    </section>
  )
}
