import { GraduationCap, Users, Wrench, Award } from 'lucide-react'

const features = [
  {
    icon: GraduationCap,
    title: 'Professional Courses',
    description: 'Industry-leading curriculum designed by experts in their respective fields.',
  },
  {
    icon: Users,
    title: 'Experienced Instructor',
    description: 'Learn from professionals with years of real-world experience.',
  },
  {
    icon: Wrench,
    title: 'Practical Training',
    description: 'Hands-on projects and exercises to build practical skills.',
  },
  {
    icon: Award,
    title: 'Validated Certificate',
    description: 'Earn recognized certificates to showcase your achievements.',
  },
]

export function Features() {
  return (
    <section className="bg-section-alt py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-500 text-white">
                <f.icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-heading">{f.title}</h3>
              <p className="mt-2 text-sm text-body">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
