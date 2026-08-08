import { BookOpen, Star } from 'lucide-react'

const instructors = [
  {
    name: 'Dr. Maya Chen',
    role: 'AI Research Scientist & Educator',
    rating: '4.96',
    courses: 8,
    seed: 'schola-maya',
  },
  {
    name: 'Marcus Thompson',
    role: 'Senior Product Designer',
    rating: '4.92',
    courses: 6,
    seed: 'schola-marcus',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Full-Stack Architect & Tech Lead',
    rating: '4.94',
    courses: 10,
    seed: 'schola-elena',
  },
  {
    name: 'James Okonkwo',
    role: 'Growth Marketing Director',
    rating: '4.89',
    courses: 5,
    seed: 'schola-james',
  },
  {
    name: 'Priya Sharma',
    role: 'Cloud Solutions Architect',
    rating: '4.91',
    courses: 7,
    seed: 'schola-priya',
  },
] as const

export function Instructors() {
  return (
    <section id="instructors" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Learn from Industry Leaders
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Our instructors are practitioners first — they teach what they do every day.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {instructors.map((instructor) => (
            <div
              key={instructor.name}
              className="card-hover rounded-2xl border border-gray-200 bg-white p-6 text-center transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              <img
                src={`https://picsum.photos/seed/${instructor.seed}/120/120`}
                alt={instructor.name}
                className="mx-auto h-20 w-20 rounded-full object-cover"
              />
              <h3 className="mt-4 font-display text-base font-bold text-gray-900 dark:text-white">
                {instructor.name}
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{instructor.role}</p>
              <div className="mt-4 flex items-center justify-center gap-4 text-xs font-medium text-gray-700 dark:text-gray-300">
                <span className="flex items-center gap-1">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
                  {instructor.rating}
                </span>
                <span className="flex items-center gap-1">
                  <BookOpen className="h-3.5 w-3.5 text-primary-500" aria-hidden="true" />
                  {instructor.courses} courses
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
