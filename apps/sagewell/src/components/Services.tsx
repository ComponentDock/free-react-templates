import { GraduationCap, Award, BookOpen } from 'lucide-react'

const services = [
  { icon: GraduationCap, title: 'Scholarship', subtitle: 'Available' },
  { icon: Award, title: 'Scholarship', subtitle: 'Available' },
  { icon: BookOpen, title: 'Scholarship', subtitle: 'Available' },
]

export function Services() {
  return (
    <section className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <div key={i} className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm">
              <div className="w-14 h-14 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
                <svc.icon className="w-7 h-7 text-brand-500" />
              </div>
              <div>
                <h4 className="font-semibold text-navy-800">{svc.title}</h4>
                <p className="text-sm text-navy-500">{svc.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
