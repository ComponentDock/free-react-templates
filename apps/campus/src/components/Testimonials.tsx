import { testimonials, testimonialsHeading, testimonialsLabel } from '../data'

export function Testimonials() {
  return (
    <section
      aria-label={testimonialsLabel}
      className="relative bg-cover bg-center py-24"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/campus-testimonials/1920/900)' }}
    >
      <div className="absolute inset-0 bg-black/90" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold leading-snug text-white md:text-[34px]">
          {testimonialsHeading}
        </h2>
        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2">
          {testimonials.map((item) => (
            <figure key={item.seed} className="flex gap-6">
              <img
                src={`https://picsum.photos/seed/${item.seed}/110/110`}
                alt=""
                className="h-[55px] w-[55px] shrink-0 rounded-full border-2 border-transparent object-cover transition-colors hover:border-accent"
              />
              <blockquote>
                <h3 className="text-lg font-medium text-white">{item.quoteTitle}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/85">{item.quote}</p>
                <figcaption className="mt-3 text-[15px] text-white">
                  {item.name}
                  <span className="text-accent">, {item.role}</span>
                </figcaption>
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
