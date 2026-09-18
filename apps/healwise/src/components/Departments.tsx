import { useState } from 'react'

const departments = [
  {
    id: 'neurology',
    name: 'Neurology',
    image: 'https://picsum.photos/seed/healwise-neuro/600/400',
    features: ['Brain & Nerve Care', 'Epilepsy Treatment', 'Stroke Recovery', 'Migraine Therapy'],
    description:
      'Our neurology department specializes in diagnosing and treating disorders of the nervous system with cutting-edge technology.',
  },
  {
    id: 'surgical',
    name: 'Surgical',
    image: 'https://picsum.photos/seed/healwise-surg/600/400',
    features: [
      'Minimally Invasive Surgery',
      'Orthopedic Surgery',
      'General Surgery',
      'Post-Op Recovery',
    ],
    description:
      'Our surgical team performs advanced procedures with precision and care, ensuring the best outcomes for every patient.',
  },
  {
    id: 'dental',
    name: 'Dental',
    image: 'https://picsum.photos/seed/healwise-dental/600/400',
    features: ['Routine Checkups', 'Teeth Whitening', 'Orthodontics', 'Oral Surgery'],
    description:
      'Comprehensive dental care from routine cleanings to advanced procedures, keeping your smile healthy and bright.',
  },
  {
    id: 'ophthalmology',
    name: 'Ophthalmology',
    image: 'https://picsum.photos/seed/healwise-eye/600/400',
    features: ['Vision Testing', 'Cataract Surgery', 'Glaucoma Treatment', 'LASIK Consultation'],
    description:
      'Expert eye care services including diagnosis and treatment of vision problems and eye diseases.',
  },
  {
    id: 'cardiology',
    name: 'Cardiology',
    image: 'https://picsum.photos/seed/healwise-cardio/600/400',
    features: [
      'Heart Disease Treatment',
      'ECG & Monitoring',
      'Cardiac Rehabilitation',
      'Preventive Cardiology',
    ],
    description:
      'Dedicated cardiac care with advanced diagnostic tools and treatment plans tailored to each patient.',
  },
]

const defaultDept = departments[0]!

export function Departments() {
  const [activeTab, setActiveTab] = useState(defaultDept.id)
  const activeDept = departments.find((d) => d.id === activeTab)!

  return (
    <section id="departments" className="bg-page py-20" data-testid="departments">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand">
            Our Departments
          </p>
          <h2 className="text-3xl font-bold text-ink md:text-4xl">Featured Medical Departments</h2>
        </div>

        {/* Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setActiveTab(dept.id)}
              className={`rounded px-6 py-2 text-sm font-semibold transition-colors ${
                activeTab === dept.id
                  ? 'bg-brand text-white'
                  : 'bg-paper text-mist hover:bg-brand/10'
              }`}
              data-testid={`dept-tab-${dept.id}`}
            >
              {dept.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid items-center gap-8 md:grid-cols-2" data-testid="dept-content">
          <img
            src={activeDept.image}
            alt={activeDept.name}
            className="rounded-lg object-cover shadow-lg"
            loading="lazy"
          />
          <div>
            <h3 className="mb-4 text-2xl font-bold text-ink">{activeDept.name}</h3>
            <p className="mb-6 leading-relaxed text-mist">{activeDept.description}</p>
            <ul className="space-y-3">
              {activeDept.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-ink">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-brand" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
