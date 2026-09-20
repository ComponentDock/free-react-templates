import { FlaskConical, Users, MessageSquare, Play } from 'lucide-react'

const features = [
  {
    icon: FlaskConical,
    title: 'Online Courses',
    description:
      'Access a wide range of courses covering the latest technologies and industry skills.',
  },
  {
    icon: Users,
    title: 'Expert Teachers',
    description:
      'Learn from industry professionals who bring real-world knowledge to every lesson.',
  },
  {
    icon: MessageSquare,
    title: 'Community',
    description: 'Join a thriving community of learners and grow together with fellow students.',
  },
]

export function WhyUs() {
  return (
    <section id="why-us" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Why Eduforge</h2>
          <p className="text-body max-w-xl mx-auto">
            Discover what makes Eduforge the preferred platform for learners worldwide.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
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

        {/* Divider */}
        <hr className="border-gray-bg mb-12" />

        {/* Text + Video */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-xl font-bold text-heading mb-3">
              Build the skills you need to succeed in your career
            </h3>
            <p className="text-body mb-4 leading-relaxed">
              Our courses are designed by industry experts to give you practical, job-ready skills.
              Whether you are starting out or looking to advance, Eduforge has the resources to help
              you reach your goals.
            </p>
            <p className="text-body leading-relaxed">
              With flexible scheduling, hands-on projects, and personalized learning paths, you can
              learn at your own pace and on your own terms.
            </p>
          </div>

          <div className="relative rounded-lg overflow-hidden group cursor-pointer">
            <img
              src="https://picsum.photos/seed/eduforge-video/600/350"
              alt="Watch our introduction video"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-heading/30 flex items-center justify-center group-hover:bg-heading/50 transition-colors">
              <div className="w-16 h-16 rounded-full bg-brand flex items-center justify-center">
                <Play className="w-6 h-6 text-white ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
