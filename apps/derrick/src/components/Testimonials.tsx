import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Dennis Green',
    role: 'Civil Engineer',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    seed: 'derrick-person-1',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Project Manager',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    seed: 'derrick-person-2',
  },
  {
    name: 'James Wilson',
    role: 'Site Supervisor',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    seed: 'derrick-person-3',
  },
]

interface TestimonialsProps {
  className?: string
}

export function Testimonials({ className }: TestimonialsProps) {
  return (
    <section id="about" className={`py-20 ${className ?? ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Love using Derrick</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="text-center p-8 bg-white rounded-lg shadow-sm border border-gray-100"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6">
                <img
                  src={`https://picsum.photos/seed/${t.seed}/150/150`}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <Quote className="text-brand-500 mx-auto mb-4" size={24} />
              <p className="text-gray-600 mb-6 leading-relaxed">{t.text}</p>
              <div className="font-semibold text-gray-900">{t.name}</div>
              <div className="text-sm text-gray-500">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
