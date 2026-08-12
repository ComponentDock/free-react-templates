import { TESTIMONIALS } from '../data'

/* testimonial — two stacked slides (the original owl carousel), each with a
   portrait image, a quote and the author attribution. */
export function Testimonial() {
  return (
    <section className="bg-tint py-28 dark:bg-ink">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-black text-brand">Testimonial</h2>
        <div className="mt-10 space-y-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <figure
              key={index}
              className="flex flex-col items-center gap-6 rounded-lg bg-white p-8 shadow-sm dark:bg-white/5 sm:flex-row"
            >
              <img
                src={testimonial.image}
                alt=""
                loading="lazy"
                className="h-28 w-28 rounded-full object-cover"
              />
              <blockquote className="text-center sm:text-left">
                <p className="leading-relaxed text-muted">{testimonial.quote}</p>
                <figcaption className="mt-3 font-bold text-brand">{testimonial.author}</figcaption>
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
