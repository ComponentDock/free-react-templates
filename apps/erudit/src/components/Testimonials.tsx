import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Dave Henderson',
    avatar: 'https://picsum.photos/seed/erudit-person1/100/100',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.',
    name: 'Sarah Johnson',
    avatar: 'https://picsum.photos/seed/erudit-person2/100/100',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    name: 'James Wilson',
    avatar: 'https://picsum.photos/seed/erudit-person3/100/100',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    name: 'Emily Davis',
    avatar: 'https://picsum.photos/seed/erudit-person4/100/100',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.',
    name: 'Michael Brown',
    avatar: 'https://picsum.photos/seed/erudit-person5/100/100',
  },
]

export function Testimonials() {
  return (
    <section className="relative py-16 overflow-hidden">
      <img
        src="https://picsum.photos/seed/erudit-test-bg/1600/600"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-sky-900/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-10">What Our Students Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-lg p-5 text-center shadow-md">
              <Quote className="text-sky-500 mx-auto mb-3" size={28} />
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{t.quote}</p>
              <div className="flex items-center justify-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <span className="text-sm font-semibold text-gray-900">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
