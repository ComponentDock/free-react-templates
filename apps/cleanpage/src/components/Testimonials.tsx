import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Garreth Smith',
    position: 'Marketing Manager',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    seed: 'cleanpage-person-1',
  },
  {
    name: 'Garreth Smith',
    position: 'Interface Designer',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    seed: 'cleanpage-person-2',
  },
  {
    name: 'Garreth Smith',
    position: 'UI Designer',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    seed: 'cleanpage-person-3',
  },
]

export function Testimonials() {
  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-widest text-brand">
            Testimony
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink md:text-4xl">
            My satisfied customer says
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-sans text-mist">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.seed} className="rounded-lg bg-white p-8 text-center shadow-sm">
              <div
                className="mx-auto mb-6 h-20 w-20 rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url(https://picsum.photos/seed/${t.seed}/100/100)` }}
              />
              <div className="mb-4 text-brand">
                <Quote size={24} className="mx-auto" />
              </div>
              <p className="mb-6 font-sans text-sm leading-relaxed text-mist">{t.quote}</p>
              <p className="font-display text-base font-semibold text-ink">{t.name}</p>
              <p className="font-sans text-xs text-mist">{t.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
