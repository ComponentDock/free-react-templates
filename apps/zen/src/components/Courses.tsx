import { Heart, Dumbbell, Leaf } from 'lucide-react'

const courses = [
  {
    icon: Leaf,
    label: 'Beginner & Advanced',
    title: 'Yoga',
    description:
      'Build strength, flexibility, and balance through guided yoga sessions. Our instructors tailor each class to your level.',
  },
  {
    icon: Heart,
    label: 'Beginner & Advanced',
    title: 'Hatha',
    description:
      'Experience the calming power of Hatha yoga. Slow, deliberate poses combined with deep breathing for total relaxation.',
  },
  {
    icon: Dumbbell,
    label: 'Beginner & Advanced',
    title: 'Pilates',
    description:
      'Strengthen your core and improve posture with Pilates. Low-impact movements designed for lasting physical health.',
  },
]

export function Courses() {
  return (
    <section id="classes" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {courses.map((course) => (
            <div key={course.title} className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-zen-gradient-from to-zen-gradient-to">
                <course.icon className="h-10 w-10 text-white" aria-hidden="true" />
              </div>
              <span className="mb-2 block text-xs font-medium uppercase tracking-[1px] text-zen-muted">
                {course.label}
              </span>
              <h3 className="mb-4 text-2xl font-bold uppercase tracking-[2px] text-zen-purple">
                {course.title}
              </h3>
              <p className="leading-relaxed text-zen-muted">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
