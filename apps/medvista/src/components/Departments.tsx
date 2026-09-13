import { Stethoscope } from 'lucide-react'

const departments = [
  { name: 'Neurology', description: 'Diagnosis and treatment of nervous system disorders.' },
  { name: 'Surgical', description: 'Advanced surgical procedures with modern techniques.' },
  { name: 'Dental', description: 'Complete dental care from routine to specialized treatments.' },
  { name: 'Ophthalmology', description: 'Expert eye care and vision correction services.' },
  { name: 'Cardiology', description: 'Heart health monitoring and cardiovascular treatment.' },
  { name: 'Traumatology', description: 'Emergency trauma care and rehabilitation services.' },
  { name: 'Nuclear Magnetic', description: 'Advanced imaging and diagnostic technology.' },
  { name: 'X-ray', description: 'Quick and accurate radiology and imaging services.' },
  { name: 'Cardiology', description: 'Specialized cardiac care and heart disease prevention.' },
] as const

export function Departments() {
  return (
    <section id="departments" className="bg-white" data-testid="departments">
      <div className="grid min-h-[500px] lg:grid-cols-3">
        {/* Left: Tall image */}
        <div
          className="hidden bg-cover bg-center lg:block"
          style={{ backgroundImage: "url('https://picsum.photos/seed/medvista-dept/600/900')" }}
          aria-hidden="true"
        />

        {/* Right: Department grid */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((dept) => (
              <div
                key={`${dept.name}-${dept.description}`}
                className="flex flex-col items-center border border-gray-200 p-8 text-center transition-colors hover:bg-brand hover:text-white group"
              >
                <Stethoscope
                  className="mb-4 h-10 w-10 text-brand transition-colors group-hover:text-white"
                  aria-hidden="true"
                />
                <h3 className="text-lg font-bold">{dept.name}</h3>
                <p className="mt-2 text-sm text-body transition-colors group-hover:text-gray-200">
                  {dept.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
