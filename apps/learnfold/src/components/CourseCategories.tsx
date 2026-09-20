import { BookOpen, Palette, Code, Camera, TrendingUp, GraduationCap } from 'lucide-react'

const CATEGORIES = [
  {
    icon: BookOpen,
    title: 'Business Management',
    desc: 'Learn core business principles and management strategies.',
    count: 12,
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    desc: 'Master design tools and create stunning visual content.',
    count: 8,
  },
  {
    icon: Code,
    title: 'Web Development',
    desc: 'Build modern websites and web applications.',
    count: 15,
  },
  {
    icon: Camera,
    title: 'Photography',
    desc: 'Capture professional-quality photos and edit like a pro.',
    count: 6,
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    desc: 'Grow brands through SEO, social media, and ads.',
    count: 10,
  },
  {
    icon: GraduationCap,
    title: 'Education & Teaching',
    desc: 'Become an effective educator with modern techniques.',
    count: 9,
  },
]

export function CourseCategories() {
  return (
    <section className="bg-secondary py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-ink">Our Course Categories</h2>
          <p className="mx-auto max-w-xl text-body">
            Explore our wide range of course categories designed to help you achieve your learning
            goals.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <div key={cat.title} className="bg-white p-6 transition-shadow hover:shadow-lg">
              <cat.icon className="mb-4 h-10 w-10 text-brand" />
              <h3 className="mb-2 text-lg font-bold text-ink">{cat.title}</h3>
              <p className="mb-3 text-sm text-body">{cat.desc}</p>
              <span className="text-sm font-semibold text-brand">{cat.count} Courses</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
