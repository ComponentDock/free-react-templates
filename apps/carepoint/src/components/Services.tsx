import { Stethoscope, ClipboardCheck, Activity, SmilePlus, Baby, FlaskConical } from 'lucide-react'

const services = [
  {
    icon: Stethoscope,
    title: 'Free Checkups',
    description:
      'Comprehensive health checkups to assess your overall well-being and detect potential issues early.',
  },
  {
    icon: ClipboardCheck,
    title: 'Screening Exams',
    description:
      'Advanced screening examinations using the latest medical technology for accurate diagnosis.',
  },
  {
    icon: Activity,
    title: 'RMI Services',
    description:
      'Advanced imaging services including MRI, CT scans, and X-rays for precise medical evaluation.',
  },
  {
    icon: SmilePlus,
    title: 'Dentistry',
    description:
      'Complete dental care services from routine cleanings to advanced procedures for a healthy smile.',
  },
  {
    icon: Baby,
    title: 'Neonatology',
    description:
      'Specialized care for newborns requiring medical attention, delivered with compassion and expertise.',
  },
  {
    icon: FlaskConical,
    title: 'Biochemistry',
    description:
      'Advanced laboratory testing and biochemistry analysis for accurate medical diagnosis.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-dark-text text-center mb-12">
          Our Featured Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="text-center p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow group"
            >
              <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-green group-hover:text-white transition-colors">
                <service.icon className="w-8 h-8 text-brand-green group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-dark-text mb-3">{service.title}</h3>
              <p className="text-body text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
