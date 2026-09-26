export default function Intro() {
  return (
    <section id="about" className="bg-white px-6 py-24 lg:px-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="mb-3 block text-sm font-semibold uppercase tracking-widest text-accent">
            Amazing Studio
          </span>
          <h2 className="mb-6 text-3xl font-bold text-ink-700 md:text-4xl">We Are So Creative</h2>
          <p className="mb-8 leading-relaxed text-ink-400">
            Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada feugiat.
            Praesent malesuada congue magna at finibus. In hac habitasse platea dictumst. Curabitur
            rhoncus auctor eleifend. Fusce venenatis diam urna, eu pharetra arcu varius ac.
          </p>
          <a
            href="#"
            className="inline-block border-y-2 border-ink-700 px-10 py-3 text-sm font-semibold uppercase tracking-wide text-ink-700 transition hover:bg-ink-700 hover:text-white"
          >
            Read More
          </a>
        </div>
        <div className="lg:col-span-7">
          <img
            src="https://picsum.photos/seed/snaplens-intro/800/500"
            alt="Studio workspace"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
