import { ChevronDown } from 'lucide-react'

const services = [
  'Office Cleaning',
  'Pool Cleaning',
  'Carpet Cleaning',
  'Kitchen Cleaning',
  'Garden Cleaning',
  'Window Cleaning',
]
const cleaners = ['John Doe', 'William Smith', 'Danny Green', 'Jason Thompson']

export function AppointmentForm() {
  return (
    <section className="relative -mt-16 z-10 pb-8" aria-label="Appointment booking">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
          <form
            className="flex flex-col md:flex-row items-stretch gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex-1">
              <label
                htmlFor="appt-name"
                className="block text-sm font-medium text-brand-heading mb-1"
              >
                Name
              </label>
              <input
                id="appt-name"
                type="text"
                placeholder="Your Name"
                className="w-full border border-brand-border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="appt-phone"
                className="block text-sm font-medium text-brand-heading mb-1"
              >
                Phone number
              </label>
              <input
                id="appt-phone"
                type="text"
                placeholder="Phone number"
                className="w-full border border-brand-border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
              />
            </div>
            <div className="flex-1 relative">
              <label
                htmlFor="appt-service"
                className="block text-sm font-medium text-brand-heading mb-1"
              >
                Select Services
              </label>
              <div className="relative">
                <select
                  id="appt-service"
                  className="w-full border border-brand-border rounded px-3 py-2 text-sm appearance-none pr-8 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                >
                  <option value="">Select Services</option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-body pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 relative">
              <label
                htmlFor="appt-cleaner"
                className="block text-sm font-medium text-brand-heading mb-1"
              >
                Select Cleaners
              </label>
              <div className="relative">
                <select
                  id="appt-cleaner"
                  className="w-full border border-brand-border rounded px-3 py-2 text-sm appearance-none pr-8 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                >
                  <option value="">Select Cleaners</option>
                  {cleaners.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-body pointer-events-none" />
              </div>
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full md:w-auto bg-brand-primary text-white py-3 px-6 rounded hover:bg-brand-primary-dark transition-colors font-medium uppercase tracking-wide text-sm"
              >
                Make an Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
