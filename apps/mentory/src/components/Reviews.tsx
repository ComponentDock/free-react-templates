import { Star } from 'lucide-react'
import { reviews } from '../data'

function Stars() {
  return (
    <div className="mt-2 flex gap-1 text-star" aria-label="4 out of 5 stars">
      {[0, 1, 2, 3].map((i) => (
        <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
      ))}
      <Star className="h-4 w-4" aria-hidden="true" />
    </div>
  )
}

export function Reviews() {
  return (
    <section id="testimonials" className="site-section bg-light">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-4 max-w-[700px] text-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase">Testimonials</p>
          <h2 className="mt-2 text-[30px] font-bold text-brand">Student Reviews</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="rounded-[7px] border-b-4 border-brand bg-white p-[30px] shadow-[0_15px_30px_rgba(0,0,0,0.1)]"
            >
              <h3 className="text-[1.25rem] font-normal">{review.title}</h3>
              <Stars />
              <blockquote className="mt-4 mb-4 leading-relaxed text-body">
                “{review.quote}”
              </blockquote>
              <div className="flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt=""
                  className="h-[50px] w-[50px] rounded-full object-cover"
                />
                <div>
                  <span className="block font-bold text-black">{review.name}</span>
                  <span className="block text-[#ccc]">{review.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
