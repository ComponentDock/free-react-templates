import { TESTIMONIALS } from '../data'

/* Testimonials: five white quote cards (radius 5px, soft shadow) with a
   quote paragraph, 80px circular photo, name and position. The original
   carousel renders as a static grid in the recreation. */
export function Testimonials() {
  return (
    <section className="bg-white py-[6em]">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="text-[12px] font-semibold uppercase tracking-[2px] text-brand">Testimonial</p>
        <h2 className="mt-2 text-[28px] font-medium text-black md:text-[38px]">Happy Clients</h2>

        <div className="mt-12 grid gap-6 text-left md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <figure
              key={testimonial.seed}
              className="rounded-[5px] bg-white p-6 shadow-[0_5px_21px_-14px_rgba(0,0,0,0.14)]"
            >
              <blockquote className="text-black/60">{testimonial.quote}</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <img
                  src={`https://picsum.photos/seed/${testimonial.seed}/160/160`}
                  alt=""
                  className="h-20 w-20 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-[20px] font-medium text-black">{testimonial.name}</p>
                  <p className="text-[16px] text-[#cccccc]">{testimonial.position}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
