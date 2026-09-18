import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Greenfield has transformed our approach to sustainable farming. Their products are top-notch.',
    name: 'John Smith',
    position: 'Farm Owner',
    image: 'https://picsum.photos/seed/person1/100/100',
  },
  {
    quote: 'Excellent service and truly organic produce. We have been loyal customers for years.',
    name: 'Sarah Johnson',
    position: 'Restaurant Owner',
    image: 'https://picsum.photos/seed/person2/100/100',
  },
  {
    quote: 'The quality of their dairy products is unmatched. Highly recommended for every family.',
    name: 'Michael Brown',
    position: 'Nutritionist',
    image: 'https://picsum.photos/seed/person3/100/100',
  },
] as const

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left — heading */}
          <div className="flex flex-col justify-center">
            <p className="mb-2 font-display text-2xl text-brand">Testimonials</p>
            <h2 className="mb-4 text-3xl font-bold text-ink">What Our Clients Say</h2>
            <p className="mb-6 leading-relaxed text-mist">
              Our clients trust us for delivering the highest quality agricultural products and
              services. Here is what they have to say about their experience with Greenfield.
            </p>
            <div className="flex items-center gap-4">
              <p className="text-4xl font-bold text-brand">500+</p>
              <p className="text-sm text-mist">
                Happy Clients
                <br />
                Worldwide
              </p>
            </div>
          </div>

          {/* Right — testimonial cards */}
          <div className="space-y-6">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-lg border border-divider bg-paper p-6">
                <Quote size={24} className="mb-3 text-brand" />
                <p className="mb-4 leading-relaxed text-mist">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <img src={t.image} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-ink">{t.name}</p>
                    <p className="text-sm text-mist">{t.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
