import { Flame, Dumbbell, Zap, User, Salad, HeartPulse } from 'lucide-react'

const courses = [
  {
    icon: Flame,
    title: 'Weight Loss Class',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque.',
  },
  {
    icon: HeartPulse,
    title: 'Yoga Classes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque.',
  },
  {
    icon: Zap,
    title: 'Spinning Class',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque.',
  },
  {
    icon: User,
    title: 'Private Fit Class',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque.',
  },
  {
    icon: Salad,
    title: 'Nutrition Classes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque.',
  },
  {
    icon: Dumbbell,
    title: 'Pilates Class',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque.',
  },
]

export function Courses() {
  return (
    <section id="courses" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-400">
          welcome to sportium
        </p>
        <h2 className="mb-12 text-3xl font-bold text-heading md:text-4xl">Our Courses</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => {
            const Icon = course.icon
            return (
              <div key={course.title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-50">
                  <Icon className="h-6 w-6 text-brand-400" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-heading">{course.title}</h3>
                  <p className="text-sm leading-relaxed text-body">{course.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
