import { Monitor, Smartphone, FlaskConical, Palette, Video, Layers } from 'lucide-react'

const services = [
  { icon: Monitor, title: 'Web\nDevelopment' },
  { icon: Smartphone, title: 'Mobile\nDevelopment' },
  { icon: FlaskConical, title: 'Science\nData' },
  { icon: Palette, title: 'Graphic\nDesign' },
  { icon: Video, title: 'Media\nCourses' },
  { icon: Layers, title: 'User\nInterface' },
]

export function Services() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {services.map((s) => (
            <a
              key={s.title}
              href="#courses"
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-sky-50 flex items-center justify-center mb-3 group-hover:bg-sky-500 transition-colors">
                <s.icon
                  className="text-sky-500 group-hover:text-white transition-colors"
                  size={28}
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-800 whitespace-pre-line leading-tight">
                {s.title}
              </h3>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#courses"
            className="inline-flex items-center gap-2 border-2 border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white px-8 py-3 rounded-md text-sm font-medium transition-colors"
          >
            Discover Courses
          </a>
        </div>
      </div>
    </section>
  )
}
