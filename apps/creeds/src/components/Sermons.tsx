import { sermons } from '../data'

export function Sermons() {
  return (
    <section className="bg-section py-[100px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-heading">Sermons This Week</h2>
          <p className="mt-4 text-muted">
            Did not find your Package? Feel free to ask us. We&apos;ll make it for you.
          </p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {sermons.map((sermon) => (
            <article key={sermon.title} className="overflow-hidden bg-white shadow-sm">
              <img src={sermon.image} alt="" className="h-52 w-full object-cover" loading="lazy" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-heading">{sermon.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{sermon.text}</p>
                <p className="mt-4 text-xs uppercase tracking-wide text-brand">{sermon.meta}</p>
                <a
                  href="#"
                  className="mt-5 inline-block border border-[#eeeeee] px-6 py-2 text-xs font-medium uppercase text-heading transition-colors hover:border-brand hover:bg-brand hover:text-white"
                >
                  View More Details
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
