import { Button } from '@free-react-templates/ui'

export default function BookAppointment() {
  return (
    <section id="appointment" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-brand-primary text-sm font-medium uppercase tracking-wider">
            Book Appointment
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] mt-2">
            Make An Appointment
          </h2>
        </div>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <form onSubmit={(e) => e.preventDefault()} className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-brand-heading mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brand-heading mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-brand-heading mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+1 (555) 000-0000"
                className="w-full px-4 py-3 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
              />
            </div>
            <div>
              <label
                htmlFor="department"
                className="block text-sm font-medium text-brand-heading mb-2"
              >
                Department
              </label>
              <select
                id="department"
                name="department"
                className="w-full px-4 py-3 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent bg-white"
              >
                <option value="">Select Department</option>
                <option value="cardiology">Cardiology</option>
                <option value="neurology">Neurology</option>
                <option value="ophthalmology">Ophthalmology</option>
                <option value="orthopedics">Orthopedics</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="date" className="block text-sm font-medium text-brand-heading mb-2">
                Preferred Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="w-full px-4 py-3 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-brand-heading mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us about your condition..."
                className="w-full px-4 py-3 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent resize-none"
              />
            </div>
            <div className="sm:col-span-2 text-center">
              <Button
                type="submit"
                className="bg-brand-primary text-white px-8 py-3 rounded font-semibold text-sm hover:bg-brand-primary-dark transition-colors"
              >
                Book Appointment
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
