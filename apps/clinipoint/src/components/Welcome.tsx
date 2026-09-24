import { Button } from '@free-react-templates/ui'
import { ChevronDown } from 'lucide-react'

const SPECIALTIES = [
  'Cardiovascular Diseases',
  'Neonatology',
  'Ophthalmology',
  'Toracic Surgery',
  'Gastroenterology',
  'Plastic Surgery',
  'Neurology',
  'Orthopedics',
]

export default function Welcome() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column - cards */}
          <div className="space-y-6">
            {/* Emergencies */}
            <div className="bg-gradient-to-br from-brand-primary to-brand-gradient-end rounded-lg p-6 text-white">
              <h4 className="text-xl font-semibold font-[family-name:var(--font-heading)] mb-2">
                For Emergencies
              </h4>
              <p className="text-sm opacity-90 mb-4">
                Our emergency department is open 24/7. If you need immediate medical assistance,
                please call our emergency line.
              </p>
              <Button className="bg-white text-brand-primary px-6 py-2 rounded font-medium text-sm hover:bg-gray-100 transition-colors">
                Call Now
              </Button>
            </div>

            {/* The Doctors */}
            <div className="bg-gradient-to-br from-brand-gradient-end to-brand-primary rounded-lg p-6 text-white">
              <h4 className="text-xl font-semibold font-[family-name:var(--font-heading)] mb-2">
                The Doctors
              </h4>
              <p className="text-sm opacity-90 mb-4">
                Our team of experienced physicians and specialists provides comprehensive medical
                care for you and your family.
              </p>
              <Button className="bg-white text-brand-primary px-6 py-2 rounded font-medium text-sm hover:bg-gray-100 transition-colors">
                Meet Our Team
              </Button>
            </div>

            {/* Book Appointment Mini Form */}
            <div className="bg-gradient-to-br from-brand-accent to-brand-gradient-end rounded-lg p-6 text-white">
              <h4 className="text-xl font-semibold font-[family-name:var(--font-heading)] mb-4">
                Book an Appointment
              </h4>
              <form className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded text-sm text-brand-heading placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 rounded text-sm text-brand-heading placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Button className="w-full bg-brand-primary text-white px-6 py-2 rounded font-medium text-sm hover:opacity-90 transition-opacity">
                  Book Now
                </Button>
              </form>
            </div>
          </div>

          {/* Right column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-brand-heading mb-6">
              Welcome to Clinipoint Health Center
            </h2>
            <p className="text-brand-body leading-relaxed mb-8">
              We provide quality healthcare services for the whole family. Our team of experienced
              medical professionals is dedicated to providing the best care possible. With
              state-of-the-art facilities and a patient-first approach, we ensure that every visit
              is comfortable and effective.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {SPECIALTIES.map((specialty) => (
                <div key={specialty} className="flex items-center gap-2 text-brand-body text-sm">
                  <ChevronDown size={16} className="text-brand-primary rotate-[-90deg]" />
                  <span>{specialty}</span>
                </div>
              ))}
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://picsum.photos/seed/clinipoint-about/600/400"
                alt="Clinipoint Health Center"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
