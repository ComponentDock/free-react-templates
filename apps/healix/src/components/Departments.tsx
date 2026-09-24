import { cn } from '@free-react-templates/ui'

interface DepartmentsProps {
  className?: string
}

const departments = [
  { name: 'Neurology', seed: 'neuro-1' },
  { name: 'Ophthalmology', seed: 'ophthal-2' },
  { name: 'Nuclear Magnetic', seed: 'nuclear-3' },
  { name: 'X-Ray', seed: 'xray-4' },
  { name: 'Surgical', seed: 'surgical-5' },
  { name: 'Cardiology', seed: 'cardio-6' },
  { name: 'Dental', seed: 'dental-7' },
]

export function Departments({ className }: DepartmentsProps) {
  return (
    <section className={cn('bg-section-light py-16', className)} id="departments">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-body-dark">Our Departments</h2>
          <p className="text-body mt-2">Comprehensive medical services for every need</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {departments.map((dept) => (
            <div
              key={dept.name}
              className="relative h-48 rounded-lg overflow-hidden group cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundImage: `url('https://picsum.photos/seed/${dept.seed}/400/300')`,
                }}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-brand-blue/60 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-lg font-bold">{dept.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
