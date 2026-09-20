import { Languages, Briefcase, BookOpen, Code, Palette, Users, Cpu } from 'lucide-react'

const departments = [
  { icon: Languages, name: 'Languages', mt: true },
  { icon: Briefcase, name: 'Business', mt: false },
  { icon: BookOpen, name: 'Literature', mt: true },
  { icon: Code, name: 'Software', mt: false },
  { icon: Palette, name: 'Design', mt: true },
  { icon: Users, name: 'Coaching', mt: false },
  { icon: Cpu, name: 'Development', mt: true },
]

export function Departments() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Department grid */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-3 gap-6">
              {departments.map((dept) => (
                <div
                  key={dept.name}
                  className={`text-center group cursor-pointer hover:bg-gray-50 p-4 rounded-lg transition-colors ${dept.mt ? 'mt-24' : ''}`}
                >
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gray-100 group-hover:bg-brand/10 flex items-center justify-center transition-colors">
                    <dept.icon className="w-8 h-8 text-brand group-hover:text-brand-dark transition-colors" />
                  </div>
                  <h4 className="text-sm font-semibold text-heading">{dept.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="lg:w-1/2 lg:pl-8">
            <h1 className="text-3xl md:text-4xl font-bold text-heading mb-6">
              Over 2500 Courses from 5 Platforms
            </h1>
            <p className="text-body mb-4 leading-relaxed">
              Explore a vast library of courses curated from the best online learning platforms. Our
              expert team ranks and reviews every course to help you make informed decisions about
              your education.
            </p>
            <p className="text-body mb-8 leading-relaxed">
              Whether you're looking to learn a new language, advance your business skills, or dive
              into software development, BrightPath has you covered with comprehensive course
              recommendations.
            </p>
            <a
              href="#courses"
              className="inline-block bg-gradient-to-r from-brand to-brand-light text-white px-8 py-3 text-sm font-semibold uppercase hover:from-brand-dark hover:to-brand transition-all shadow-lg shadow-brand/30"
            >
              Explore Courses
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
