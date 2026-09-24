import { Button } from '@free-react-templates/ui'

const SPECIALTIES = ['Cardiology', 'Pediatrics', 'Orthopedics', 'Neurology', 'General Medicine']

const DOCTORS = ['Dr. Melissa Smith', 'Dr. Josh Henderson', 'Dr. Christinne Jones']

export default function AppointmentForm() {
  return (
    <section id="appointment" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-brand-heading mb-8">
              Book an Appointment
            </h2>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-heading mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="specialty"
                  className="block text-sm font-medium text-brand-heading mb-1"
                >
                  Specialty
                </label>
                <select
                  id="specialty"
                  name="specialty"
                  className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary bg-white"
                >
                  <option value="">Select a specialty</option>
                  {SPECIALTIES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-brand-heading mb-1"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="doctor"
                  className="block text-sm font-medium text-brand-heading mb-1"
                >
                  Doctor
                </label>
                <select
                  id="doctor"
                  name="doctor"
                  className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary bg-white"
                >
                  <option value="">Select a doctor</option>
                  {DOCTORS.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-brand-heading mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                />
              </div>
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-brand-heading mb-1">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-brand-primary text-white px-8 py-3 rounded font-semibold hover:opacity-90 transition-opacity"
              >
                Make an Appointment
              </Button>
            </form>
          </div>

          {/* Image */}
          <div className="flex items-center justify-center">
            <img
              src="https://picsum.photos/seed/clinipoint-appointment/600/700"
              alt="Book an appointment"
              className="w-full max-w-md rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
