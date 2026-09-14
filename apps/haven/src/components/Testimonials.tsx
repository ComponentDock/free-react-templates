import { Star } from 'lucide-react'

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <span className="text-sm font-bold uppercase tracking-widest text-primary-400">
          Testimonials
        </span>
        <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
          What Customers Say?
        </h2>

        <div className="mt-12">
          <p className="text-lg leading-relaxed text-body">
            &ldquo;After a construction project took longer than expected, my husband, my daughter
            and I needed a place to stay for a few nights. As a Chicago resident, we know a lot
            about our city, neighborhood and the types of housing options available and absolutely
            love our vacation at Haven Hotel.&rdquo;
          </p>

          <div className="mt-6 flex items-center justify-center gap-1">
            {[1, 2, 3, 4].map((i) => (
              <Star
                key={i}
                className="h-5 w-5 fill-primary-400 text-primary-400"
                aria-hidden="true"
              />
            ))}
            <Star className="h-5 w-5 fill-primary-400/50 text-primary-400" aria-hidden="true" />
          </div>

          <p className="mt-4 font-display text-lg font-semibold text-ink">— Alexander Vasquez</p>
        </div>
      </div>
    </section>
  )
}
