import { GraduationCap, Award, Laptop, BookOpen } from 'lucide-react'
const features = [
  {
    icon: GraduationCap,
    title: 'Expert Teachers',
    text: 'Learn from industry experts with years of real-world experience.',
  },
  {
    icon: Award,
    title: 'Certified Programs',
    text: 'Accredited courses that earn you recognized certifications.',
  },
  {
    icon: Laptop,
    title: 'Online Learning',
    text: 'Access courses anytime, anywhere with our flexible platform.',
  },
  {
    icon: BookOpen,
    title: 'Book Library',
    text: 'Comprehensive digital library with thousands of resources.',
  },
] as const

export function FeaturesLight() {
  return (
    <section id="features-light" aria-label="Features light" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-lg bg-bg-light p-6 text-center transition-shadow hover:shadow-lg"
            >
              <Icon className="mx-auto h-12 w-12 text-primary-blue" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-bold text-heading-black">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-body-gray">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
