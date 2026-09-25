import { Mail, MapPin, Phone, Clock } from 'lucide-react'

const doctors = [
  {
    name: 'Dr. Sarah Wilson',
    specialty: 'Cardiologist',
    image: 'https://picsum.photos/seed/curelink-doc1/400/400',
    email: 'sarah.wilson@curelink.com',
    phone: '+1 (555) 123-4567',
    address: '123 Medical Center Dr, Suite 200',
    hours: 'Mon–Fri 8:00 AM – 5:00 PM',
  },
  {
    name: 'Dr. Michael Chen',
    specialty: 'Neurologist',
    image: 'https://picsum.photos/seed/curelink-doc2/400/400',
    email: 'michael.chen@curelink.com',
    phone: '+1 (555) 234-5678',
    address: '123 Medical Center Dr, Suite 310',
    hours: 'Mon–Thu 9:00 AM – 6:00 PM',
  },
  {
    name: 'Dr. Emily Rodriguez',
    specialty: 'Pediatrician',
    image: 'https://picsum.photos/seed/curelink-doc3/400/400',
    email: 'emily.rodriguez@curelink.com',
    phone: '+1 (555) 345-6789',
    address: '123 Medical Center Dr, Suite 105',
    hours: 'Mon–Fri 7:30 AM – 4:30 PM',
  },
  {
    name: 'Dr. James Patel',
    specialty: 'Dentist',
    image: 'https://picsum.photos/seed/curelink-doc4/400/400',
    email: 'james.patel@curelink.com',
    phone: '+1 (555) 456-7890',
    address: '123 Medical Center Dr, Suite 420',
    hours: 'Tue–Sat 8:00 AM – 4:00 PM',
  },
] as const

export function Doctors() {
  return (
    <section id="doctors" aria-label="Doctors" className="bg-mist py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-purple-500">Our Doctors</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="group relative h-80 cursor-pointer overflow-hidden rounded-lg"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              {/* Front side — name & specialty */}
              <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-purple-500/90 to-transparent p-6">
                <h3 className="text-xl font-bold text-white">{doctor.name}</h3>
                <p className="mt-1 text-sm text-teal-300">{doctor.specialty}</p>
              </div>
              {/* Back side — contact info (visible on hover/focus) */}
              <div className="absolute inset-0 flex flex-col justify-center gap-4 bg-primary-400/95 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus-within:opacity-100">
                <ul className="space-y-3 text-sm text-white">
                  <li className="flex items-start gap-2">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>{doctor.email}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>{doctor.phone}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>{doctor.address}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>{doctor.hours}</span>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
