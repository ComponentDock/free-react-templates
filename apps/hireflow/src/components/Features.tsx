import { Search, FileText, Shield, Bell } from 'lucide-react'

const features = [
  {
    icon: Search,
    title: 'Searching',
    description:
      'Find the perfect job that matches your skills and experience with our advanced search filters.',
  },
  {
    icon: FileText,
    title: 'Applying',
    description:
      'Apply to multiple jobs with a single click using our streamlined application process.',
  },
  {
    icon: Shield,
    title: 'Security',
    description:
      'Your personal data and applications are protected with enterprise-grade security.',
  },
  {
    icon: Bell,
    title: 'Notifications',
    description: 'Get instant notifications when new jobs matching your profile are posted.',
  },
]

export function Features() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <feature.icon className="mx-auto mb-4 text-brand" size={40} />
              <h4 className="mb-2 text-lg font-semibold text-gray-900">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
