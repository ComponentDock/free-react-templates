export function Intro() {
  return (
    <section id="about" className="px-[10%] py-[130px]">
      <div className="flex flex-col items-center gap-12 md:flex-row">
        <div className="md:w-5/12">
          <span className="mb-1 block text-xs uppercase tracking-wide text-beacon-body">
            Amazing studio
          </span>
          <h2 className="mb-10 text-2xl font-bold uppercase tracking-[6px] text-beacon-heading">
            We are so Creative
          </h2>
          <p className="mb-8 leading-relaxed">
            Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada feugiat.
            Praesent malesuada congue magna at finibus. In hac habitasse platea dictumst. Curabitur
            rhoncus auctor eleifend. Fusce venenatis diam urna, eu pharetra arcu varius ac.
          </p>
          <a
            href="#"
            className="inline-block min-w-[135px] border-y-2 border-beacon-heading bg-transparent px-4 py-4 text-center text-xs font-semibold uppercase tracking-wide text-beacon-heading transition-colors hover:bg-beacon-heading hover:text-white"
          >
            Read More
          </a>
        </div>
        <div className="md:w-7/12">
          <img
            src="https://picsum.photos/seed/beacon-intro/800/600"
            alt="Creative studio work"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
