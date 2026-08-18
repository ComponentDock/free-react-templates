import { NEWS } from '../data'

export function News() {
  return (
    <section id="blog" aria-label="Recent news" className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-serif text-4xl font-normal text-ink md:text-5xl">Recent News</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {NEWS.map((item) => (
            <article key={item.title} className="group">
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  loading="lazy"
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="pt-6">
                <span className="text-sm font-medium uppercase tracking-widest text-brand">
                  {item.eyebrow}
                </span>
                <h3 className="mt-3 font-serif text-2xl font-normal leading-snug text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-base font-light leading-relaxed text-body">{item.blurb}</p>
                <a
                  href="#blog"
                  className="mt-4 inline-block border-b-2 border-brand pb-0.5 font-medium text-ink transition-colors hover:text-brand"
                >
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
