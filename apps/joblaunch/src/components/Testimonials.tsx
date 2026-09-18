import { Quote } from 'lucide-react'

interface Testimonial {
  name: string
  role: string
  quote: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    role: 'HR Director at TechCorp',
    quote:
      'JobLaunch helped us find incredible talent in record time. The platform is intuitive and the candidate quality is outstanding.',
    avatar: 'https://picsum.photos/seed/avatar1/100/100',
  },
  {
    name: 'Michael Chen',
    role: 'CEO at StartupXYZ',
    quote:
      'We filled three critical positions within a week. The search filters and candidate matching are truly best-in-class.',
    avatar: 'https://picsum.photos/seed/avatar2/100/100',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Recruiter at GlobalTech',
    quote:
      'The best job portal we have used. Clean interface, great candidate pool, and excellent support team.',
    avatar: 'https://picsum.photos/seed/avatar3/100/100',
  },
  {
    name: 'David Kim',
    role: 'Talent Acquisition Lead',
    quote:
      'JobLaunch transformed our hiring process. We now reach top talent faster than ever before.',
    avatar: 'https://picsum.photos/seed/avatar4/100/100',
  },
]

export function Testimonials() {
  return (
    <section className="bg-bg-light py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-ink text-center mb-12">Happy Employers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <Quote size={24} className="text-primary mb-4" />
              <p className="text-ink-muted text-sm leading-relaxed mb-6">{t.quote}</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-sm font-bold text-ink">{t.name}</h4>
                  <p className="text-xs text-ink-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
