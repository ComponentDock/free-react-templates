import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Software Developer at TechNova',
    text: 'Careerly helped me land my dream job in just two weeks. The search filters made it so easy to find the perfect role.',
    avatar: 'https://picsum.photos/seed/careerly-avatar1/100/100',
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Manager at PrimeCo',
    text: 'As an employer, I found qualified candidates quickly. The platform is intuitive and the response rate is excellent.',
    avatar: 'https://picsum.photos/seed/careerly-avatar2/100/100',
  },
  {
    name: 'Emily Rodriguez',
    role: 'HR Director at SignalWave',
    text: 'Weve hired over 15 people through Careerly. Its become our go-to recruitment channel for all positions.',
    avatar: 'https://picsum.photos/seed/careerly-avatar3/100/100',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Testimonials</h2>
          <p className="text-gray-500">What our users say about Careerly</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 relative"
            >
              <Quote className="h-8 w-8 text-brand/20 absolute top-6 right-6" />
              <p className="text-gray-600 text-sm leading-relaxed mb-6 relative z-10">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
