import { BookOpen, Users, Award, GraduationCap } from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: 'Online Courses',
    description:
      'Browse over 1,200 expert-led courses across every discipline, available on demand.',
  },
  {
    icon: Users,
    title: 'Expert Instructors',
    description: 'Learn from industry professionals and experienced educators worldwide.',
  },
  {
    icon: Award,
    title: 'Certified Programs',
    description: 'Earn recognized certificates and credentials to boost your career.',
  },
  {
    icon: GraduationCap,
    title: 'Campus Life',
    description: 'Join a vibrant community of learners, clubs, and campus events.',
  },
]

export function WelcomeSection() {
  return (
    <section className="bg-cloud py-20" id="about" aria-labelledby="welcome-heading">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2
          id="welcome-heading"
          className="mb-6 text-3xl font-bold text-ink font-display md:text-4xl"
        >
          Welcome To Uniwell E-Learning
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-smoke">
          Uniwell provides a comprehensive online learning platform for students, educators, and
          institutions. Discover courses, earn certifications, and advance your knowledge with our
          world-class curriculum.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-lg bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary-50 p-4 text-primary-600">
                <f.icon size={28} />
              </div>
              <h3 className="mb-2 text-lg font-bold text-ink">{f.title}</h3>
              <p className="text-sm leading-relaxed text-smoke">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
