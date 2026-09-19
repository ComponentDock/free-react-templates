import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Roger Scott',
    role: 'Marketing Manager',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    name: 'Sarah Chen',
    role: 'Sommelier',
    text: 'The quality of spirits here is unmatched. Every bottle I have ordered has been carefully curated and delivered with care.',
  },
  {
    name: 'James Wilson',
    role: 'Restaurant Owner',
    text: 'An exceptional collection of fine beverages. The customer service team is knowledgeable and always ready to help.',
  },
]

export function Testimonials() {
  return (
    <section className="relative py-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/seed/cellarly-testimony/1920/600')" }}
      />
      <div className="absolute inset-0 bg-dark/80" />
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-medium uppercase tracking-wider text-brand">
            Testimonial
          </span>
          <h2
            className="text-3xl font-bold text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Happy Clients
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand/20 text-brand">
                <Quote size={20} />
              </div>
              <p className="mb-6 text-sm leading-relaxed text-gray-200">{t.text}</p>
              <div className="flex items-center gap-3">
                <img
                  src={`https://picsum.photos/seed/${t.name.replace(' ', '')}/80/80`}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
