import { stories } from '../data'

export function Stories() {
  return (
    <section id="blog" className="flex flex-col bg-ink lg:flex-row">
      <div className="relative lg:w-1/2">
        <img
          src={stories.image}
          alt={stories.imageAlt}
          className="h-[420px] w-full object-cover sm:h-[560px] lg:h-[832px]"
        />
        <div className="absolute top-1/2 left-1/2 mx-auto w-[275px] -translate-x-1/2 -translate-y-1/2 bg-brand px-[37px] py-[35px] text-center">
          <p className="font-display text-[120px] font-extrabold leading-none text-ink">
            {stories.years}
          </p>
          <p className="mt-2 text-lg text-ink">{stories.yearsLabel}</p>
        </div>
      </div>
      <div className="flex items-center px-6 py-16 lg:w-1/2 lg:px-16 lg:py-0">
        <div className="w-full">
          <h2 className="font-display text-3xl font-bold text-white sm:text-[44px]">
            {stories.title}
          </h2>
          <div className="mt-[55px] flex flex-col gap-8 sm:flex-row">
            {stories.items.map((item) => (
              <article key={item.title} className="sm:w-1/2">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="h-[200px] w-full object-cover"
                />
                <h3>
                  <a
                    href="#blog"
                    className="mt-4 inline-block text-2xl font-bold text-white transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  >
                    {item.title}
                  </a>
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white">{item.description}</p>
                <p className="mt-2 text-base text-cream/50">{item.meta}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
