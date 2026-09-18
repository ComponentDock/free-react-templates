import { Clock, BarChart3 } from 'lucide-react'

const programs = [
  {
    title: 'Embrace Your Edge',
    category: 'Healthy Yoga',
    instructor: 'Vicky Johnson',
    time: '60 min',
    level: 'Intermediate',
    image: 'https://picsum.photos/seed/soulflow-p1/400/300',
  },
  {
    title: 'Yoga to Build Resilience',
    category: 'Healthy Yoga',
    instructor: 'Kit Rich',
    time: '45 min',
    level: 'Beginner',
    image: 'https://picsum.photos/seed/soulflow-p2/400/300',
  },
  {
    title: 'Rise & Shine',
    category: 'Power Yoga',
    instructor: 'Sara Clark',
    time: '30 min',
    level: 'Advanced',
    image: 'https://picsum.photos/seed/soulflow-p3/400/300',
  },
  {
    title: 'Bend & Stretch',
    category: 'Healthy Yoga',
    instructor: 'Maria Lopez',
    time: '50 min',
    level: 'Beginner',
    image: 'https://picsum.photos/seed/soulflow-p4/400/300',
  },
  {
    title: 'Vinyasa Yoga',
    category: 'Flow Yoga',
    instructor: 'Emma Wilson',
    time: '60 min',
    level: 'Intermediate',
    image: 'https://picsum.photos/seed/soulflow-p5/400/300',
  },
  {
    title: 'Barre Workout',
    category: 'Healthy Yoga',
    instructor: 'Lisa Chen',
    time: '45 min',
    level: 'All Levels',
    image: 'https://picsum.photos/seed/soulflow-p6/400/300',
  },
]

export function Programs() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">Our Programs</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.title}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img src={program.image} alt={program.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-1">{program.title}</h3>
                <p className="text-soulflow-teal text-sm mb-1">{program.category}</p>
                <p className="text-gray-500 text-sm mb-3">{program.instructor}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {program.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <BarChart3 className="w-4 h-4" />
                    {program.level}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
