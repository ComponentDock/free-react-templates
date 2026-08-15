export function Lookbook() {
  return (
    <section aria-label="Lookbook" className="py-[100px]">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-4 lg:grid-cols-2">
        <div className="lg:pt-[105px]">
          <h2 className="font-display text-5xl font-bold leading-tight text-brand md:text-[60px]">
            2019 <span className="block">#lookbook</span>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-secondary-2">
            Fusce urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vestibulum
            malesuada aliquet libero viverra cursus. Aliquam erat volutpat. Morbi id dictum quam, ut
            commodo lorem. In at nisi nec arcu porttitor aliquet vitae at dui.
          </p>
          <a
            href="#"
            className="mt-8 inline-block rounded-full bg-accent px-10 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand"
          >
            See More
          </a>
        </div>
        <div className="relative overflow-hidden">
          <img
            src="https://picsum.photos/seed/vogue-lookbook/900/1200"
            alt="Fashion lookbook editorial photo"
            loading="lazy"
            className="aspect-[3/4] w-full object-cover"
          />
          <span
            aria-hidden="true"
            className="absolute bottom-8 right-8 font-display text-2xl uppercase tracking-[0.4em] text-white/50"
          >
            fashion
          </span>
        </div>
      </div>
    </section>
  )
}
