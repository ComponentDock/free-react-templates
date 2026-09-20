import { FlaskConical, Users, MessageSquare } from 'lucide-react'

const features = [
  {
    icon: FlaskConical,
    title: 'Online Courses',
    description:
      'Access a wide range of courses covering the latest technologies and industry skills. Learn at your own pace with expert-led instruction.',
  },
  {
    icon: Users,
    title: 'Expert Teachers',
    description:
      'Learn from industry professionals and experienced educators who bring real-world knowledge to every lesson.',
  },
  {
    icon: MessageSquare,
    title: 'Community',
    description:
      'Join a thriving community of learners. Collaborate, share insights, and grow together with fellow students worldwide.',
  },
]

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: features */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-3">Welcome to Eduforge</h2>
              <p className="text-body leading-relaxed">
                Empowering learners worldwide with high-quality online education and professional
                development resources.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand flex items-center justify-center">
                    <f.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-heading mb-1">{f.title}</h4>
                    <p className="text-sm text-body leading-relaxed">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <div>
            <img
              src="https://picsum.photos/seed/eduforge-about/600/400"
              alt="About Eduforge"
              className="rounded-lg w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
