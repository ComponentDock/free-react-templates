import { Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Racky Henderson',
    position: 'Father',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    avatar: 'https://picsum.photos/seed/getawaypad-person1/80/80',
  },
  {
    name: 'Henry Dee',
    position: 'Businesswoman',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    avatar: 'https://picsum.photos/seed/getawaypad-person2/80/80',
  },
  {
    name: 'Mark Huff',
    position: 'Businessman',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    avatar: 'https://picsum.photos/seed/getawaypad-person3/80/80',
  },
  {
    name: 'Rodel Golez',
    position: 'Entrepreneur',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    avatar: 'https://picsum.photos/seed/getawaypad-person4/80/80',
  },
]

export function Testimonials() {
  return (
    <section className="bg-light-bg py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-center text-2xl font-semibold">Happy Clients &amp; Feedbacks</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="flex gap-4">
              <div
                className="h-16 w-16 shrink-0 rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url('${t.avatar}')` }}
              />
              <div>
                <Quote size={20} className="mb-2 text-brand" />
                <p className="mb-3 text-sm leading-relaxed text-text-body">{t.text}</p>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-text-body">{t.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
