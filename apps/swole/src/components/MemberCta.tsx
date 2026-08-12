/**
 * MemberCta — dark "Many more Features are Waiting!" call-to-action: full-
 * width background photo with a black 50% overlay, centered white heading +
 * line + red "Become a Member" button.
 */
export function MemberCta() {
  return (
    <section className="relative overflow-hidden bg-black py-24 text-center lg:py-32">
      <img
        src="https://picsum.photos/id/1074/1600/900"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/50" />
      <div className="relative mx-auto max-w-3xl px-4">
        <h2 className="text-4xl font-bold text-white lg:text-5xl">
          Many more Features are Waiting!
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-white">
          Join Swole today and unlock every class, every coach, and a community that trains as hard
          as you do.
        </p>
        <a
          href="#contact"
          className="mt-10 inline-block bg-brand px-10 py-3.5 text-sm font-medium uppercase tracking-wide text-white transition-all duration-300 hover:bg-ink"
        >
          Become a Member
        </a>
      </div>
    </section>
  )
}
