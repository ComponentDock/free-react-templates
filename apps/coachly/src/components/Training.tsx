import { BookOpen } from 'lucide-react'

const TRAINING_ITEMS = [
  { title: 'Life Planning', desc: 'Strategic planning for personal growth' },
  { title: 'Career Coaching', desc: 'Navigate your professional journey' },
  { title: 'Mindfulness', desc: 'Cultivate awareness and presence' },
  { title: 'Relationship Skills', desc: 'Build stronger connections' },
  { title: 'Goal Setting', desc: 'Set and achieve meaningful goals' },
  { title: 'Stress Management', desc: 'Techniques for inner calm' },
]

export function Training() {
  return (
    <section id="training" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">Our Training</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {TRAINING_ITEMS.map((item) => (
            <div key={item.title} className="flex gap-5">
              <BookOpen className="h-12 w-12 flex-shrink-0 text-[#3a4971]" />
              <div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
