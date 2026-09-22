import { HeartPulse, Brain, Eye, Bone, Stethoscope, Baby } from 'lucide-react'

const departments = [
  {
    name: 'Cardiology',
    icon: HeartPulse,
    description: 'Heart care and cardiovascular treatments.',
  },
  { name: 'Neurology', icon: Brain, description: 'Brain and nervous system diagnostics.' },
  { name: 'Ophthalmology', icon: Eye, description: 'Complete eye care and vision treatments.' },
  { name: 'Orthopedics', icon: Bone, description: 'Bone, joint, and muscle care.' },
  { name: 'General', icon: Stethoscope, description: 'Comprehensive general health checkups.' },
  { name: 'Pediatrics', icon: Baby, description: 'Specialized care for children.' },
]

export function Departments() {
  return (
    <section id="departments" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#76b900]">
            What We Offer
          </p>
          <h2 className="text-3xl font-bold text-[#333333]">Our Departments</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((dept) => {
            const Icon = dept.icon
            return (
              <article
                key={dept.name}
                className="group rounded border border-[#e5e5e5] p-8 text-center transition-all hover:border-[#76b900] hover:shadow-md"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#76b900]/10 text-[#76b900] group-hover:bg-[#76b900] group-hover:text-white transition-colors">
                  <Icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#333333]">{dept.name}</h3>
                <p className="text-sm text-[#666666]">{dept.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
