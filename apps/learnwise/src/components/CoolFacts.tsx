import { BookOpen, Star, Calendar, Globe } from 'lucide-react'

const facts = [
  { icon: BookOpen, value: '1912', label: 'Success Stories' },
  { icon: Star, value: '123', label: 'Dedicated Tutors' },
  { icon: Calendar, value: '89', label: 'Scheduled Events' },
  { icon: Globe, value: '56', label: 'Available Courses' },
]

export function CoolFacts() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4">
        {facts.map((f) => (
          <div key={f.label} className="text-center">
            <f.icon className="mx-auto mb-4 h-10 w-10 text-accent" />
            <h3 className="mb-2 text-3xl font-bold text-gray-800">{f.value}</h3>
            <p className="text-sm font-semibold text-gray-500">{f.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
