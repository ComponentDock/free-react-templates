import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Garreth Smith',
    role: 'Marketing Manager',
    image: 'https://picsum.photos/seed/archway-person1/100/100',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Sarah Johnson',
    role: 'Interface Designer',
    image: 'https://picsum.photos/seed/archway-person2/100/100',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Michael Brown',
    role: 'UI Designer',
    image: 'https://picsum.photos/seed/archway-person3/100/100',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Emily Davis',
    role: 'Web Developer',
    image: 'https://picsum.photos/seed/archway-person4/100/100',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'James Wilson',
    role: 'System Analyst',
    image: 'https://picsum.photos/seed/archway-person5/100/100',
  },
] as const

export function Testimonials() {
  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-ink sm:text-4xl">
            Our satisfied customer says
          </h2>
          <p className="mx-auto max-w-2xl text-[#6c757d]">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-lg bg-white p-6 shadow-sm">
              <Quote className="mb-4 h-8 w-8 text-brand/40" aria-hidden="true" />
              <p className="mb-6 text-[#6c757d] italic">{t.quote}</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-ink">{t.name}</p>
                  <p className="text-sm text-[#6c757d]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
