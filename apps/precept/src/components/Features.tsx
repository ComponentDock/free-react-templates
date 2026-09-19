import { BookOpen, GraduationCap, Library } from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: 'Learn Online Courses',
    description:
      'Usage of the Internet is becoming more common due to rapid advancement of technology.',
  },
  {
    icon: GraduationCap,
    title: 'No.1 of Universities',
    description:
      'For many of us, our very first experience of learning about the celestial bodies begins when we saw our first.',
  },
  {
    icon: Library,
    title: 'Huge Library',
    description:
      'If you are a serious academia enthusiast like a lot of us are, you can probably remember that one event.',
  },
]

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="text-center md:text-left">
              <h4 className="text-lg font-semibold text-heading mb-3">{f.title}</h4>
              <p className="text-body text-sm leading-relaxed mb-3">{f.description}</p>
              <a href="#courses" className="text-brand text-sm font-medium hover:underline">
                Join Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
