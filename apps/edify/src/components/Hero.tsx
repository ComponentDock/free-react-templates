/* Hero recreated from the source's slider-area: full-width background
   image with a dark overlay, left-aligned white headline + subtext, and
   an orange "Join for Free" button beside an illustration on wide
   viewports (stacks below on narrow ones). */

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-r from-grad-a to-grad-b">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pb-32 lg:pt-40">
        <div className="text-center lg:text-left">
          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Online learning platform
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/90 lg:mx-0">
            Build skills with courses, certificates, and degrees online from world-class
            universities and companies
          </p>
          <a
            href="#join"
            className="mt-9 inline-block rounded bg-accent px-10 py-4 font-semibold text-white transition-colors hover:bg-brand-deep"
          >
            Join for Free
          </a>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img
            src="https://picsum.photos/seed/edify-hero/640/520"
            alt="Student learning online"
            className="w-full max-w-md rounded-3xl object-cover shadow-2xl lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  )
}
