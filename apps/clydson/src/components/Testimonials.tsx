import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Roger Scott',
    role: 'Marketing Manager',
    seed: 'clydson-person-1',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Sarah Johnson',
    role: 'Product Designer',
    seed: 'clydson-person-2',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Mike Chen',
    role: 'Frontend Developer',
    seed: 'clydson-person-3',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-white/70 text-sm uppercase tracking-widest font-medium">
            Testimonies
          </span>
          <h2 className="text-3xl font-bold mt-2 mb-4">What client says about?</h2>
          <p className="text-white/70 max-w-xl mx-auto">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/10 backdrop-blur rounded-lg p-6">
              <Quote size={24} className="text-white/40 mb-4" />
              <p className="text-white/90 mb-6 leading-relaxed">{t.quote}</p>
              <div className="flex items-center gap-3">
                <img
                  src={`https://picsum.photos/seed/${t.seed}/50/50`}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-white/60 text-sm">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
