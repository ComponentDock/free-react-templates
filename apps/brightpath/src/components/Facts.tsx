import { GraduationCap, BookOpen, Users, Clock, Download, Award } from 'lucide-react'

const facts = [
  {
    icon: GraduationCap,
    title: 'Expert Mentors',
    description:
      'Learn from industry professionals with years of real-world experience. Our mentors are passionate about sharing their knowledge.',
  },
  {
    icon: BookOpen,
    title: '25,000+ Courses',
    description:
      'Access an extensive library of courses covering every topic imaginable. New courses are added regularly.',
  },
  {
    icon: Users,
    title: 'Student Membership',
    description:
      'Join a vibrant community of learners. Get exclusive access to forums, study groups, and networking events.',
  },
  {
    icon: Clock,
    title: 'Lifetime Access',
    description:
      'Once enrolled, access your courses forever. Learn at your own pace and revisit materials anytime.',
  },
  {
    icon: Download,
    title: 'Source Files Included',
    description:
      'Download project files, templates, and resources. Practice hands-on with real-world materials.',
  },
  {
    icon: Award,
    title: 'Certified Programs',
    description:
      'Earn recognized certificates upon completion. Boost your resume with verified credentials.',
  },
]

export function Facts() {
  return (
    <section
      className="py-24 relative"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/brightpath-facts/1920/1080)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-overlay-dark/90" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Facts that Make us Unique</h2>
          <p className="text-white/80 max-w-xl mx-auto">
            We are committed to providing the best learning experience. Here's what sets us apart
            from other platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facts.map((fact) => (
            <div key={fact.title} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                <fact.icon className="w-8 h-8 text-brand" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">{fact.title}</h4>
              <p className="text-white/70 text-sm leading-relaxed">{fact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
