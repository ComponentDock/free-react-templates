import { newsItems } from '../data'

export function News() {
  return (
    <section id="news-section" aria-label="News and Events" className="py-24">
      <div className="mx-auto max-w-[1170px] px-4">
        <h2 className="text-center font-heading text-3xl font-light uppercase text-black md:text-4xl">
          News & Events
        </h2>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {newsItems.map((item) => (
            <article key={item.image} className="h-entry">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="aspect-[8/5] w-full object-cover"
              />
              <p className="mt-5 text-sm text-muted-2">{item.meta}</p>
              <h3 className="mt-3 font-heading text-xl font-light uppercase text-black">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-body">{item.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
