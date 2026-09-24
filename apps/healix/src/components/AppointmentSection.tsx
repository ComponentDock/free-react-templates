import { cn } from '@free-react-templates/ui'

interface AppointmentSectionProps {
  className?: string
}

export function AppointmentSection({ className }: AppointmentSectionProps) {
  return (
    <section className={cn('bg-section-light py-16', className)} id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <div>
            <h2 className="text-3xl font-bold text-body-dark mb-4">
              Welcome to <span className="text-brand-blue">Healix</span>
            </h2>
            <p className="text-body mb-4 leading-relaxed">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.
            </p>
            <p className="text-body mb-6 leading-relaxed">
              A small river named Duden flows by their place and supplies it with the necessary
              regelialia. It is a paradisematic country, in which roasted parts of sentences fly
              into your mouth.
            </p>
            <a
              href="#contact"
              className="inline-block bg-brand-blue text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-brand-blue-light transition-colors"
            >
              Make an Appointment
            </a>
          </div>

          {/* Form side */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-body-dark mb-4">Appointment Form</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="apt-name"
                    className="block text-sm font-medium text-body-dark mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    id="apt-name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="apt-email"
                    className="block text-sm font-medium text-body-dark mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="apt-email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="apt-department"
                  className="block text-sm font-medium text-body-dark mb-1"
                >
                  Department
                </label>
                <select
                  id="apt-department"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                >
                  <option value="">Select Department</option>
                  <option value="neurology">Neurology</option>
                  <option value="ophthalmology">Ophthalmology</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="dental">Dental</option>
                </select>
              </div>
              <div>
                <label htmlFor="apt-time" className="block text-sm font-medium text-body-dark mb-1">
                  Preferred Time
                </label>
                <input
                  id="apt-time"
                  type="time"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand-blue text-white py-3 rounded-full text-sm font-semibold hover:bg-brand-blue-light transition-colors"
              >
                Request Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
