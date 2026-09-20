import { Code, Smartphone, BarChart3, Briefcase, Palette, Globe } from 'lucide-react'

const categories = [
  { icon: Code, title: 'Web Development', count: 120, color: 'bg-primary-400' },
  { icon: Smartphone, title: 'Mobile Development', count: 85, color: 'bg-emerald-500' },
  { icon: BarChart3, title: 'Data Science', count: 95, color: 'bg-orange-500' },
  { icon: Briefcase, title: 'Business', count: 110, color: 'bg-violet-500' },
  { icon: Palette, title: 'Design', count: 75, color: 'bg-pink-500' },
  { icon: Globe, title: 'Marketing', count: 65, color: 'bg-amber-500' },
]

export function CourseCategories() {
  return (
    <section className="bg-white py-20" id="categories" aria-labelledby="categories-heading">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2
            id="categories-heading"
            className="mb-4 text-3xl font-bold text-ink font-display md:text-4xl"
          >
            Course Categories
          </h2>
          <p className="mx-auto max-w-xl text-smoke">
            Explore our wide range of course categories designed to help you develop new skills and
            advance your career.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <a
              key={cat.title}
              href="#courses"
              className="group flex items-center gap-4 rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-primary-200 hover:shadow-md"
            >
              <div
                className={`flex items-center justify-center rounded-lg p-3 text-white ${cat.color}`}
              >
                <cat.icon size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-ink group-hover:text-primary-500 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-sm text-smoke">{cat.count} Courses</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
