import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Michael Fox',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    avatar: 'https://picsum.photos/seed/ministry-person1/100/100',
  },
  {
    name: 'Mike Shawn',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    avatar: 'https://picsum.photos/seed/ministry-person2/100/100',
  },
  {
    name: 'Mark Smith',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    avatar: 'https://picsum.photos/seed/ministry-person3/100/100',
  },
  {
    name: 'Kyle Meyer',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    avatar: 'https://picsum.photos/seed/ministry-person4/100/100',
  },
]

export function Testimony() {
  return (
    <section className="py-16 bg-hero-overlay relative">
      <div className="absolute inset-0 bg-hero-overlay/80" />
      <div className="relative z-10 max-w-[1300px] mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-white/70 text-sm font-medium uppercase tracking-wider">
            Testimony
          </span>
          <h2 className="text-3xl font-normal text-white mt-2">Transform Lives</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="flex items-start gap-4 p-6 bg-white/5 rounded-lg">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover shrink-0"
              />
              <div>
                <Quote className="w-5 h-5 text-brand mb-2" aria-hidden="true" />
                <p className="text-white/80 text-sm leading-relaxed mb-2">{t.text}</p>
                <p className="text-white font-medium text-sm">{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
