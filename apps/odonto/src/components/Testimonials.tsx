import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'John Johnson',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
  {
    name: 'Leah Tylor',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
  {
    name: 'Mary Johnson',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
  {
    name: 'Beatrice Schwarzenegger',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
]

export function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Happy Customers</h2>
          <p className="text-gray-600 mt-2">Result of our Treatment and Work</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-gray-50 rounded-xl p-6">
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm mb-4">{t.text}</p>
              <h4 className="font-bold text-gray-900">{t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
