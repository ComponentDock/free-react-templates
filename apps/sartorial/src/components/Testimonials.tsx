import { Quote } from 'lucide-react'

const testimonials = [
  {
    text: 'The attention to detail is extraordinary. Every stitch speaks of craftsmanship. My bespoke suit fits like nothing I have ever worn before.',
    name: 'James Mitchell',
    role: 'Business Executive',
  },
  {
    text: 'From the first consultation to the final fitting, the experience was seamless. They truly understand the art of dressing well.',
    name: 'Robert Chen',
    role: 'Entrepreneur',
  },
]

export function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <span className="font-script text-3xl text-brand">Client Feedback</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink md:text-4xl">
            What Our Clients Say
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <div key={t.name} className="relative rounded-sm border border-gray-100 p-8">
              <Quote size={32} className="mb-4 text-brand/30" />
              <p className="mb-6 italic leading-relaxed text-mist">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-4">
                <img
                  src={`https://picsum.photos/seed/${t.name.toLowerCase().replace(' ', '')}/64/64`}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-display text-sm font-bold text-ink">{t.name}</div>
                  <div className="text-xs text-mist">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
