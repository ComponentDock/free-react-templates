import { Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae neque libero. Vivamus vel interdum massa. Mauris ut felis vel diam pretium eleifend.',
    name: 'Natalie Smith',
    title: 'Client in California',
    avatar: 'https://picsum.photos/seed/manor-avatar1/100/100',
  },
  {
    text: 'Excellent service from start to finish. The team helped us find our dream home within our budget. Highly recommended for anyone looking for real estate.',
    name: 'James Wilson',
    title: 'Client in Miami',
    avatar: 'https://picsum.photos/seed/manor-avatar2/100/100',
  },
  {
    text: 'Professional, responsive, and truly caring. They made the entire process smooth and stress-free. We could not be happier with our new property.',
    name: 'Sarah Johnson',
    title: 'Client in Dublin',
    avatar: 'https://picsum.photos/seed/manor-avatar3/100/100',
  },
]

export function Testimonials() {
  return (
    <section className="relative py-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/manor-testimonials/1920/600)' }}
      />
      <div className="absolute inset-0 bg-navy-800/80" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <div className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-white">clients testimonials</h2>
          <span className="text-sm text-gray-300">See our best offers</span>
        </div>

        <div className="space-y-12">
          {TESTIMONIALS.map((t) => (
            <div key={t.name}>
              <div className="mb-4 flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-coral-400 text-coral-400" />
                ))}
              </div>
              <p className="mb-6 text-lg leading-relaxed text-gray-200 italic">"{t.text}"</p>
              <img
                src={t.avatar}
                alt={t.name}
                className="mx-auto mb-3 h-16 w-16 rounded-full border-2 border-coral-400 object-cover"
                loading="lazy"
              />
              <div className="font-heading font-semibold text-white">{t.name}</div>
              <div className="text-sm text-gray-400">{t.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
