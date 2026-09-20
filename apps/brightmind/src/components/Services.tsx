import { ClipboardCheck, Bell, Award } from 'lucide-react'

const services = [
  {
    icon: ClipboardCheck,
    title: 'Admission',
    description:
      'Streamlined admission process designed to welcome students from diverse backgrounds into our programs.',
  },
  {
    icon: Bell,
    title: 'Notice Board',
    description:
      'Stay updated with the latest announcements, schedules, and important notices from the university.',
  },
  {
    icon: Award,
    title: 'Scholarship',
    description:
      'Financial aid and scholarship opportunities to ensure quality education is accessible to everyone.',
  },
]

export function Services() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-lg border border-gray-100 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-50">
                  <service.icon className="h-7 w-7 text-brand-500" />
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-dark">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
