import { useState } from 'react'
import { Stethoscope, Heart, Ear, Brain, Droplets, MoreHorizontal } from 'lucide-react'

const DEPARTMENTS = [
  { id: 'dentistry', label: 'Dentistry', icon: Stethoscope },
  { id: 'cardiology', label: 'Cardiology', icon: Heart },
  { id: 'ent', label: 'ENT Specialists', icon: Ear },
  { id: 'neurology', label: 'Neurology', icon: Brain },
  { id: 'blood', label: 'Blood Screening', icon: Droplets },
  { id: 'more', label: 'More', icon: MoreHorizontal },
] as const

const DEPT_CONTENT: Record<string, { title: string; description: string }> = {
  dentistry: {
    title: 'Comprehensive Dental Care',
    description:
      'Our dental department offers a full range of services from routine checkups to advanced procedures. Our experienced dentists use the latest techniques to ensure your oral health is in excellent condition.',
  },
  cardiology: {
    title: 'Heart Health Specialists',
    description:
      'Our cardiology team provides expert diagnosis and treatment for heart conditions. From preventive screenings to advanced interventions, we keep your heart healthy and strong.',
  },
  ent: {
    title: 'Ear, Nose & Throat Experts',
    description:
      'Specialized care for conditions affecting the ear, nose, and throat. Our ENT specialists use modern diagnostic tools and treatments for optimal outcomes.',
  },
  neurology: {
    title: 'Neurological Care',
    description:
      'Expert neurological evaluation and treatment for conditions of the brain and nervous system. Our neurologists combine clinical expertise with compassionate care.',
  },
  blood: {
    title: 'Blood Screening & Diagnostics',
    description:
      'Comprehensive blood screening services with fast, accurate results. Our laboratory uses state-of-the-art equipment for reliable diagnostic testing.',
  },
  more: {
    title: 'Additional Services',
    description:
      'We offer a wide range of additional medical services including pediatrics, dermatology, physiotherapy, and more. Contact us to learn about all available departments.',
  },
}

export default function Departments() {
  const [active, setActive] = useState<string>('dentistry')

  return (
    <section id="departments" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-brand-heading mb-3">
              Departments
            </h2>
            <p className="text-brand-body max-w-lg">
              Our specialized departments provide expert care across a wide range of medical
              disciplines.
            </p>
          </div>
        </div>

        {/* Department tabs */}
        <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Department tabs">
          {DEPARTMENTS.map((dept) => {
            const Icon = dept.icon
            const isActive = active === dept.id
            return (
              <button
                key={dept.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${dept.id}`}
                className={`flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-brand-primary text-white'
                    : 'bg-white text-brand-body hover:bg-gray-100'
                }`}
                onClick={() => setActive(dept.id)}
              >
                <Icon size={18} />
                <span>{dept.label}</span>
              </button>
            )
          })}
        </div>

        {/* Active department content */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          {(() => {
            const content = DEPT_CONTENT[active]!
            return (
              <div
                id={`panel-${active}`}
                role="tabpanel"
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <img
                  src={`https://picsum.photos/seed/medflow-dept-${active}/600/400`}
                  alt={`${content.title} department`}
                  className="rounded-lg w-full object-cover aspect-[3/2]"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-brand-heading mb-4">
                    {content.title}
                  </h3>
                  <p className="text-brand-body mb-6 leading-relaxed">{content.description}</p>
                  <button
                    className="bg-brand-primary text-white px-6 py-2.5 rounded font-medium text-sm hover:opacity-90 transition-opacity"
                    onClick={() => {
                      document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    Make An Appointment
                  </button>
                </div>
              </div>
            )
          })()}
        </div>
      </div>
    </section>
  )
}
