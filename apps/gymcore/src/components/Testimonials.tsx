import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Jessica Adams',
    quote:
      'Joining Gymcore was the best decision I ever made. The trainers are incredible and the community keeps me motivated every single day.',
    stars: 5,
  },
  {
    name: 'David Park',
    quote:
      'I have tried many gyms before but Gymcore is different. The personalized approach and variety of classes makes every workout exciting.',
    stars: 5,
  },
  {
    name: 'Maria Santos',
    quote:
      'The yoga and wellness programs here transformed my life. I feel stronger, more flexible, and more confident than ever before.',
    stars: 5,
  },
]

export function Testimonials() {
  return (
    <section
      className="py-20"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://picsum.photos/seed/gymcore-testimonial-bg/1920/800)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center text-3xl font-semibold uppercase text-white md:text-4xl">
          What Our Members Say
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-3 flex gap-1">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mb-4 text-sm leading-relaxed text-gray-200">&ldquo;{t.quote}&rdquo;</p>
              <p className="text-sm font-semibold text-brand">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
