import { Star } from 'lucide-react'

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-3">
            <img
              src="https://picsum.photos/seed/retreat-testi1/400/300"
              alt="Hotel exterior"
              className="rounded w-full object-cover h-48"
              loading="lazy"
            />
            <img
              src="https://picsum.photos/seed/retreat-testi2/400/300"
              alt="Hotel room interior"
              className="rounded w-full object-cover h-48"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-brand text-sm tracking-widest uppercase mb-2">Testimonials</p>
            <h2 className="text-3xl font-bold text-body mb-6">Our Guests Love Us</h2>
            <blockquote className="text-muted leading-relaxed mb-6 italic">
              &ldquo;An absolutely wonderful stay. The rooms are beautifully appointed, the staff is
              incredibly attentive, and the amenities exceeded all our expectations. We will
              definitely be returning for our next vacation.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand text-brand" />
                ))}
              </div>
              <div>
                <p className="font-semibold text-body">Sarah Mitchell</p>
                <p className="text-sm text-muted">— Frequent Guest</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
