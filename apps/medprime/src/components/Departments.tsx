import { Heart, Brain, Eye, Bone, Stethoscope, Baby } from 'lucide-react'

const DEPARTMENTS = [
  {
    icon: Heart,
    title: 'Cardiology',
    description: 'Heart health diagnostics and treatment with state-of-the-art equipment.',
  },
  {
    icon: Brain,
    title: 'Neurology',
    description: 'Expert care for neurological conditions and brain health.',
  },
  {
    icon: Eye,
    title: 'Ophthalmology',
    description: 'Complete eye care from routine exams to advanced surgery.',
  },
  {
    icon: Bone,
    title: 'Orthopedics',
    description: 'Bone, joint, and muscle treatment for all ages.',
  },
  {
    icon: Stethoscope,
    title: 'General Medicine',
    description: 'Primary care and preventive health services.',
  },
  {
    icon: Baby,
    title: 'Pediatrics',
    description: 'Dedicated healthcare for infants, children, and adolescents.',
  },
]

export default function Departments() {
  return (
    <section id="departments" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-brand-primary text-sm font-medium uppercase tracking-wider">
            Our Departments
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] mt-2">
            Quality Healthcare Services
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {DEPARTMENTS.map((dept) => (
            <div
              key={dept.title}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary mb-6">
                <dept.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold font-[family-name:var(--font-heading)] mb-3">
                {dept.title}
              </h3>
              <p className="text-brand-body text-sm leading-relaxed">{dept.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
