import { testimonials } from '../data'

/** Parallax background section with dark overlay and 3 blockquote
 *  testimonial cards. */
export function Testimonials() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-fixed py-[120px]"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/flavor-testimonials/1600/900)',
      }}
    >
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold">Our Customer Says</h1>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.author}
              className="rounded-[10px] bg-white/10 p-8 backdrop-blur-sm"
            >
              <p className="font-light leading-relaxed text-white/90 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <cite className="mt-4 block text-sm font-semibold not-italic">
                — {testimonial.author}
              </cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
