import { Ambulance, Stethoscope, Sun, Clock } from 'lucide-react'

const services = [
  {
    icon: Ambulance,
    title: 'Emergency Services',
    description:
      'Our emergency department is equipped with the latest technology and staffed 24/7 to provide immediate care when you need it most.',
  },
  {
    icon: Stethoscope,
    title: 'Qualified Doctors',
    description:
      'Our team of board-certified physicians brings years of experience and expertise across multiple specialties.',
  },
  {
    icon: Sun,
    title: 'Outdoors Checkup',
    description:
      'Comprehensive outdoor health checkup programs designed to keep you and your family in peak condition.',
  },
  {
    icon: Clock,
    title: '24 Hours Service',
    description:
      'Round-the-clock medical services to ensure you receive quality care at any hour of the day or night.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-paper py-20" data-testid="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left: Services */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold text-ink">Our Services</h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {services.map((svc) => (
                <div key={svc.title} className="flex gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded bg-coral/10 text-coral transition-transform hover:scale-110">
                    <svc.icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink">{svc.title}</h3>
                    <p className="mt-2 text-sm text-body">{svc.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Appointment Form */}
          <div className="lg:col-span-5">
            <div className="rounded bg-white p-8 shadow-md">
              <h3 className="text-xl font-bold text-ink">Free Consultation</h3>
              <form className="mt-6 flex flex-col gap-4" aria-label="Free consultation form">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="rounded border border-gray-300 px-4 py-2 text-sm focus:border-brand focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="rounded border border-gray-300 px-4 py-2 text-sm focus:border-brand focus:outline-none"
                  />
                </div>
                <select className="rounded border border-gray-300 px-4 py-2 text-sm text-gray-500 focus:border-brand focus:outline-none">
                  <option value="">Select Service</option>
                  <option value="emergency">Emergency Services</option>
                  <option value="doctors">Qualified Doctors</option>
                  <option value="outdoors">Outdoors Checkup</option>
                  <option value="24h">24 Hours Service</option>
                </select>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="rounded border border-gray-300 px-4 py-2 text-sm focus:border-brand focus:outline-none"
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="date"
                    className="rounded border border-gray-300 px-4 py-2 text-sm focus:border-brand focus:outline-none"
                  />
                  <input
                    type="time"
                    className="rounded border border-gray-300 px-4 py-2 text-sm focus:border-brand focus:outline-none"
                  />
                </div>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="rounded border border-gray-300 px-4 py-2 text-sm focus:border-brand focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded bg-secondary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-gray-700"
                >
                  Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
