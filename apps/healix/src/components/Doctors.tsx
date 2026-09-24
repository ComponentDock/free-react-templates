import { cn } from '@free-react-templates/ui'

interface DoctorsProps {
  className?: string
}

const doctors = [
  { name: 'Dr. Alicia Henderson', specialty: 'Cardiologist', seed: 'doc-alicia' },
  { name: 'Dr. James Wilson', specialty: 'Neurologist', seed: 'doc-james' },
  { name: 'Dr. Sarah Mitchell', specialty: 'Ophthalmologist', seed: 'doc-sarah' },
]

export function Doctors({ className }: DoctorsProps) {
  return (
    <section className={cn('py-16', className)} id="doctors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-body-dark">Our Qualified Doctors</h2>
          <p className="text-body mt-2">Meet our team of experienced medical professionals</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <div key={doctor.name} className="text-center group">
              <div className="relative mb-4 overflow-hidden rounded-full w-48 h-48 mx-auto">
                <div
                  className="w-full h-full bg-cover bg-center rounded-full"
                  style={{
                    backgroundImage: `url('https://picsum.photos/seed/${doctor.seed}/400/400')`,
                  }}
                />
              </div>
              <h3 className="text-lg font-bold text-body-dark">{doctor.name}</h3>
              <p className="text-brand-blue text-sm">{doctor.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
