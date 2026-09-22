import { Heart, Bone, Smile, Eye, Brain, Scissors } from 'lucide-react'

const departments = [
  { icon: Heart, name: 'Cardiology' },
  { icon: Bone, name: 'Urology' },
  { icon: Smile, name: 'Dental Care' },
  { icon: Eye, name: 'Eye Care' },
  { icon: Brain, name: 'Neurology' },
  { icon: Scissors, name: 'Plastic Surgery' },
]

export function Departments() {
  return (
    <section id="departments" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold text-gray-900">
            Our Popular Departments
          </h2>
          <p className="mx-auto max-w-lg text-gray-500">
            Comprehensive medical care across specialized departments staffed by experienced
            professionals.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
          {departments.map((dept) => (
            <div key={dept.name} className="group text-center">
              <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-sky-50 text-sky-400 transition-colors group-hover:bg-sky-400 group-hover:text-white">
                <dept.icon className="h-10 w-10" />
              </div>
              <h4 className="text-sm font-medium text-gray-700">{dept.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
