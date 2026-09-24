import { Building2, TestTube, Ambulance, Radio, Siren, Pill, Stethoscope } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const SERVICES = [
  {
    icon: Building2,
    title: 'Ambulatory Care',
    description:
      'Outpatient medical services and consultations for patients who do not require hospitalization.',
  },
  {
    icon: TestTube,
    title: 'Laboratory',
    description:
      'Comprehensive diagnostic laboratory services with state-of-the-art equipment and trained technicians.',
  },
  {
    icon: Ambulance,
    title: 'Ambulance Service',
    description:
      'Emergency medical transportation services available 24/7 with fully equipped ambulances.',
  },
  {
    icon: Radio,
    title: 'Radiology',
    description: 'Advanced medical imaging including X-ray, MRI, CT scan, and ultrasound services.',
  },
  {
    icon: Siren,
    title: 'Emergency Care',
    description:
      'Round-the-clock emergency department with rapid response teams and critical care units.',
  },
  {
    icon: Pill,
    title: 'Pharmacy',
    description:
      'In-house pharmacy providing prescription medications and professional pharmaceutical advice.',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/clinipoint-services/1920/800')" }}
    >
      <div className="absolute inset-0 bg-brand-hero-overlay/90" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Stethoscope className="text-brand-accent mx-auto mb-4" size={40} />
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-white mb-4">
            Our Services
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg p-8 text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-brand-primary/10 rounded-full flex items-center justify-center">
                <service.icon className="text-brand-primary" size={28} />
              </div>
              <h5 className="text-lg font-semibold font-[family-name:var(--font-heading)] text-brand-heading mb-3">
                {service.title}
              </h5>
              <p className="text-brand-body text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button className="bg-brand-primary text-white px-8 py-3 rounded font-semibold hover:opacity-90 transition-opacity">
            See All Services
          </Button>
        </div>
      </div>
    </section>
  )
}
