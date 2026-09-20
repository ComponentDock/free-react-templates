import { BookOpen, Users, Award, Globe } from 'lucide-react'

const features = [
  {
    title: 'Expert Instructors',
    desc: 'Learn from industry professionals with real-world experience.',
    Icon: BookOpen,
  },
  {
    title: 'Flexible Learning',
    desc: 'Study at your own pace, anytime and anywhere.',
    Icon: Globe,
  },
  {
    title: 'Certified Courses',
    desc: 'Earn recognized certificates to boost your career.',
    Icon: Award,
  },
  { title: 'Global Community', desc: 'Join thousands of learners worldwide.', Icon: Users },
]

export function Features() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="mb-12 text-3xl font-bold text-brand-text md:text-4xl">
          Learn Anything You Want Today
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col items-center gap-4 rounded-xl bg-brand-light p-8 text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-teal/10 text-brand-teal">
                <f.Icon className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-brand-text">{f.title}</h3>
              <p className="text-sm text-brand-muted">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
