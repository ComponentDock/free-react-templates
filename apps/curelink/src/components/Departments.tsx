import { useState } from 'react'

const departments = [
  {
    id: 'cardiology',
    name: 'Cardiology',
    icon: '♥',
    description:
      'Our cardiology department provides comprehensive heart care services including diagnostic testing, interventional procedures, and cardiac rehabilitation.',
  },
  {
    id: 'neurology',
    name: 'Neurology',
    icon: '🧠',
    description:
      'Our neurology department specializes in diagnosing and treating disorders of the nervous system, including the brain, spinal cord, and peripheral nerves.',
  },
  {
    id: 'diagnostic',
    name: 'Diagnostic',
    icon: '🔬',
    description:
      'Our diagnostic center offers state-of-the-art imaging and laboratory services to help detect and diagnose medical conditions accurately.',
  },
  {
    id: 'dental',
    name: 'Dental',
    icon: '🦷',
    description:
      'Our dental department provides complete oral health care including preventive, restorative, and cosmetic dentistry services for the whole family.',
  },
  {
    id: 'ophthalmology',
    name: 'Ophthalmology',
    icon: '👁',
    description:
      'Our ophthalmology department offers comprehensive eye care services from routine exams to advanced surgical procedures.',
  },
  {
    id: 'emergency',
    name: 'Emergency',
    icon: '🚑',
    description:
      'Our emergency department is equipped to handle all types of medical emergencies with rapid response teams available 24 hours a day, 7 days a week.',
  },
] as const

export function Departments({ defaultId }: { defaultId?: string } = {}) {
  const [activeId, setActiveId] = useState<string>(defaultId ?? departments[0].id)
  const active = departments.find((d) => d.id === activeId) ?? departments[0]

  return (
    <section id="departments" aria-label="Departments" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-purple-500">Our Departments</h2>
        <div className="flex flex-col gap-8 md:flex-row">
          {/* Vertical pill tabs */}
          <div className="flex flex-row flex-wrap gap-3 md:flex-col md:gap-2">
            {departments.map((dept) => (
              <button
                key={dept.id}
                type="button"
                onClick={() => setActiveId(dept.id)}
                className={`flex items-center gap-2 rounded-full px-5 py-3 text-left text-sm font-medium transition-colors ${
                  activeId === dept.id
                    ? 'bg-primary-400 text-white'
                    : 'bg-gray-100 text-purple-500 hover:bg-gray-200'
                }`}
              >
                <span className="text-lg" aria-hidden="true">
                  {dept.icon}
                </span>
                <span className="hidden sm:inline">{dept.name}</span>
              </button>
            ))}
          </div>

          {/* Department content */}
          <div className="flex-1 rounded-lg bg-gray-50 p-8">
            <div className="flex items-center gap-3">
              <span className="text-3xl" aria-hidden="true">
                {active.icon}
              </span>
              <h3 className="text-2xl font-bold text-purple-500">{active.name}</h3>
            </div>
            <p className="mt-4 leading-relaxed text-gray-600">{active.description}</p>
            <a
              href="#contact"
              className="mt-6 inline-block rounded-md bg-primary-400 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-500"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
