import { CheckCircle } from 'lucide-react'

const schedule = [
  { day: 'Monday — Friday', hours: '07.00 AM to 10.00 PM' },
  { day: 'Saturday', hours: '08.00 AM to 08.00 PM' },
  { day: 'Sunday', hours: '09.00 AM to 06.00 PM' },
]

const points = [
  'Compassionate care with cutting-edge medical technology and treatments.',
  'Board-certified physicians across 20+ specialties and departments.',
  'Patient-first approach with personalized treatment plans.',
]

export function About() {
  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left: text content */}
          <div>
            <h2 className="mb-6 font-heading text-3xl font-bold text-gray-900">
              Welcome to Vitala Medical Center
            </h2>
            <p className="mb-6 leading-relaxed text-gray-500">
              Providing comprehensive healthcare services with a focus on patient comfort and
              well-being. Our team of specialists works together to deliver the best possible
              outcomes for every patient.
            </p>
            <ul className="space-y-3">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-400" />
                  <span className="text-sm leading-relaxed text-gray-600">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: schedule card */}
          <div className="relative overflow-hidden rounded-xl bg-sky-400 p-8 text-white shadow-xl">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'url(https://picsum.photos/seed/vitala-schedule/600/400)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="relative">
              <h3 className="mb-6 font-heading text-2xl font-bold">Doctors Time Table</h3>
              <div className="space-y-4">
                {schedule.map((slot) => (
                  <div
                    key={slot.day}
                    className="flex justify-between border-b border-white/30 pb-3"
                  >
                    <span className="font-medium">{slot.day}</span>
                    <span className="text-white/90">{slot.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
