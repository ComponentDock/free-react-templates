import { Headphones, MessageCircle } from 'lucide-react'

const features = [
  {
    icon: Headphones,
    title: 'Ask our Customer Service',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: MessageCircle,
    title: 'Visit our Blog',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
]

export function Features() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((f) => (
            <a
              key={f.title}
              href="#"
              className="flex items-start gap-4 p-6 rounded-lg hover:bg-light transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-light group-hover:bg-brand/10 flex items-center justify-center flex-shrink-0 transition-colors">
                <f.icon size={24} className="text-brand" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-heading mb-2">{f.title}</h3>
                <p className="text-sm text-muted">{f.text}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
