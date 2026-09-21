import { Star } from 'lucide-react'

export function SignatureDish() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text side */}
          <div>
            <p className="font-body text-sm uppercase tracking-[0.3em] text-muted">Something new</p>
            <h2 className="font-display mt-3 text-4xl text-ink md:text-5xl">Our Signature Dish</h2>

            {/* Star rating */}
            <div className="mt-4 flex gap-1" aria-label="5 out of 5 stars">
              {[1, 2, 3, 4, 5].map((n) => (
                <Star
                  key={n}
                  className="h-5 w-5 fill-accent-400 text-accent-400"
                  aria-hidden="true"
                />
              ))}
            </div>

            {/* Dish name + price */}
            <div className="mt-6 flex items-start justify-between gap-4">
              <span className="font-body text-lg font-bold text-ink">
                Pork Tenderloin marinated in Green Pepper
              </span>
              <span className="shrink-0 font-body text-2xl font-bold text-primary-400">$20</span>
            </div>

            {/* Ingredient list */}
            <ul className="mt-4 flex flex-wrap gap-3 font-body text-sm text-body">
              {['Pork', 'Tenderloin', 'Green Pepper', 'Veggies'].map((item) => (
                <li key={item} className="rounded-full border border-primary-200 px-3 py-1">
                  {item}
                </li>
              ))}
            </ul>

            {/* Order button */}
            <a
              href="#menu"
              className="mt-8 inline-block rounded-[7px] border-2 border-primary-400 px-8 py-3 font-body text-sm font-bold uppercase tracking-wider text-primary-400 transition-colors hover:bg-primary-400 hover:text-white"
            >
              Order Now
            </a>
          </div>

          {/* Image side */}
          <div className="overflow-hidden rounded-sm">
            <img
              src="https://picsum.photos/seed/venuepoint-signature/800/600"
              alt="Our signature pork tenderloin dish"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
