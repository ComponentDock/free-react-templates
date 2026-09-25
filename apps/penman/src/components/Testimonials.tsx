import { Quote } from 'lucide-react'

const testimonials = [
  {
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Roger Scott',
    position: 'Marketing Manager',
    avatar: 'penman-av1',
  },
  {
    text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.',
    name: 'Roger Scott',
    position: 'Marketing Manager',
    avatar: 'penman-av2',
  },
  {
    text: 'Separately they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden.',
    name: 'Roger Scott',
    position: 'Marketing Manager',
    avatar: 'penman-av3',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-gray-900 py-20">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/penman-testi/1600/800)' }}
      />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-semibold uppercase tracking-widest text-primary-400">
            Testimonial
          </span>
          <h2 className="text-3xl font-bold text-white">Kinds Words From Customers</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <Quote className="mb-4 text-primary-400" size={24} />
              <p className="mb-6 leading-relaxed text-gray-300">{t.text}</p>
              <div className="flex items-center gap-3">
                <img
                  src={`https://picsum.photos/seed/${t.avatar}/50/50`}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-gray-400">{t.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
