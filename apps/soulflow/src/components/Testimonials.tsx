import { Star } from 'lucide-react'

const items = [
  {
    name: 'Sarah Johnson',
    role: 'Yoga Practitioner',
    text: 'Soulflow has completely transformed my practice. The instructors are incredibly knowledgeable and supportive.',
    avatar: 'https://picsum.photos/seed/soulflow-av1/100/100',
  },
  {
    name: 'Michael Chen',
    role: 'Meditation Student',
    text: 'The mindfulness workshops changed how I approach daily stress. Highly recommended for anyone seeking inner peace.',
    avatar: 'https://picsum.photos/seed/soulflow-av2/100/100',
  },
  {
    name: 'Emily Davis',
    role: 'Fitness Enthusiast',
    text: 'The variety of classes and the welcoming community make Soulflow a standout studio. I look forward to every session.',
    avatar: 'https://picsum.photos/seed/soulflow-av3/100/100',
  },
]

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
            What People Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.name} className="bg-white rounded-lg p-8 shadow-sm text-center">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-soulflow-teal text-soulflow-teal" />
                ))}
              </div>
              <p className="text-gray-600 text-sm italic mb-4">{item.text}</p>
              <p className="font-bold text-gray-900">{item.name}</p>
              <p className="text-gray-500 text-sm">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
