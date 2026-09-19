import { Globe, Building2, BookOpen, Users, Award, GraduationCap } from 'lucide-react'

const services = [
  {
    title: 'Online Courses',
    icon: Globe,
    description:
      'Access high-quality courses from the comfort of your home with our comprehensive online learning platform.',
  },
  {
    title: 'Indoor Courses',
    icon: Building2,
    description:
      'Join our state-of-the-art indoor classrooms and experience hands-on learning with expert instructors.',
  },
  {
    title: 'Amazing Library',
    icon: BookOpen,
    description:
      'Explore our vast library with thousands of books, journals, and digital resources.',
  },
  {
    title: 'Exceptional Professors',
    icon: Users,
    description:
      'Learn from industry-leading professors who bring real-world experience to the classroom.',
  },
  {
    title: 'Top Programs',
    icon: Award,
    description: 'Enroll in our top-rated programs designed to advance your career and knowledge.',
  },
  {
    title: 'Graduate Diploma',
    icon: GraduationCap,
    description: 'Earn a recognized graduate diploma that opens doors to new opportunities.',
  },
]

export function Services() {
  return (
    <section className="bg-dark-bg px-4 py-20" aria-labelledby="services-heading">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2
            id="services-heading"
            className="font-heading text-3xl font-bold text-white sm:text-4xl"
          >
            Our Services
          </h2>
          <p className="mt-3 text-gray-400">What we offer to our students</p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="text-center">
                <Icon className="mx-auto mb-4 h-12 w-12 text-brand" aria-hidden="true" />
                <h3 className="mb-3 font-heading text-xl font-bold text-white">{service.title}</h3>
                <p className="text-sm text-gray-400">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
