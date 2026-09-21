import { Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Sarah Johnson',
    role: 'Bride',
    text: 'The wedding photos exceeded all our expectations. Every moment was captured with such beauty and emotion.',
    avatar: 'https://picsum.photos/seed/bokeh-avatar1/80/80',
  },
  {
    name: 'Michael Chen',
    role: 'Real Estate Agent',
    text: 'Professional, punctual, and the property photos were stunning. Our listings sell faster now.',
    avatar: 'https://picsum.photos/seed/bokeh-avatar2/80/80',
  },
  {
    name: 'Emma Davis',
    role: 'Fashion Designer',
    text: 'The fashion shoot was incredible. The attention to detail and creative direction was outstanding.',
    avatar: 'https://picsum.photos/seed/bokeh-avatar3/80/80',
  },
]

export function Testimonials() {
  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h3 className="font-heading text-3xl font-bold text-heading">
            Happy <span className="text-brand">Clients</span> Say
          </h3>
          <p className="mt-2 font-body text-body-text">What our clients think about our work.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="rounded-lg bg-white p-8 text-center shadow-sm">
              <img
                src={t.avatar}
                alt={t.name}
                className="mx-auto mb-4 h-16 w-16 rounded-full object-cover"
                loading="lazy"
              />
              <div className="mb-3 flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand text-brand" />
                ))}
              </div>
              <p className="mb-4 font-body text-sm leading-relaxed text-body-text italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <h5 className="font-heading text-base font-bold text-heading">{t.name}</h5>
              <p className="font-body text-xs text-body-text">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
