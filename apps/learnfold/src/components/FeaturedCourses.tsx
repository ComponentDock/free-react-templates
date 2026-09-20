import { useState } from 'react'
import { Users } from 'lucide-react'

const TABS = ['All', 'Finance', 'Design', 'Web Development', 'Photography'] as const

type Category = (typeof TABS)[number]

interface Course {
  id: number
  title: string
  description: string
  price: number
  category: Category
  students: number
  author: string
  image: string
  avatar: string
}

const COURSES: Course[] = [
  {
    id: 1,
    title: 'Financial Planning 101',
    description: 'Master personal and corporate financial planning strategies.',
    price: 49,
    category: 'Finance',
    students: 234,
    author: 'Sarah Chen',
    image: 'https://picsum.photos/seed/course1/400/250',
    avatar: 'https://picsum.photos/seed/avatar1/40/40',
  },
  {
    id: 2,
    title: 'UI/UX Design Principles',
    description: 'Create intuitive and beautiful user interfaces.',
    price: 59,
    category: 'Design',
    students: 189,
    author: 'Mike Ross',
    image: 'https://picsum.photos/seed/course2/400/250',
    avatar: 'https://picsum.photos/seed/avatar2/40/40',
  },
  {
    id: 3,
    title: 'Full Stack Web Dev',
    description: 'Build complete web applications from front to back end.',
    price: 79,
    category: 'Web Development',
    students: 412,
    author: 'Alex Kim',
    image: 'https://picsum.photos/seed/course3/400/250',
    avatar: 'https://picsum.photos/seed/avatar3/40/40',
  },
  {
    id: 4,
    title: 'Portrait Photography',
    description: 'Capture stunning portraits with professional lighting.',
    price: 39,
    category: 'Photography',
    students: 156,
    author: 'Emma Lin',
    image: 'https://picsum.photos/seed/course4/400/250',
    avatar: 'https://picsum.photos/seed/avatar4/40/40',
  },
  {
    id: 5,
    title: 'Investment Strategies',
    description: 'Learn modern investment approaches and portfolio management.',
    price: 69,
    category: 'Finance',
    students: 301,
    author: 'David Park',
    image: 'https://picsum.photos/seed/course5/400/250',
    avatar: 'https://picsum.photos/seed/avatar5/40/40',
  },
  {
    id: 6,
    title: 'Brand Identity Design',
    description: 'Build cohesive brand identities from concept to delivery.',
    price: 49,
    category: 'Design',
    students: 178,
    author: 'Lisa Wong',
    image: 'https://picsum.photos/seed/course6/400/250',
    avatar: 'https://picsum.photos/seed/avatar6/40/40',
  },
  {
    id: 7,
    title: 'React & TypeScript',
    description: 'Master modern React development with TypeScript.',
    price: 89,
    category: 'Web Development',
    students: 523,
    author: 'Tom Hayes',
    image: 'https://picsum.photos/seed/course7/400/250',
    avatar: 'https://picsum.photos/seed/avatar7/40/40',
  },
  {
    id: 8,
    title: 'Landscape Photography',
    description: 'Photograph breathtaking landscapes in any condition.',
    price: 45,
    category: 'Photography',
    students: 134,
    author: 'Anna Swift',
    image: 'https://picsum.photos/seed/course8/400/250',
    avatar: 'https://picsum.photos/seed/avatar8/40/40',
  },
]

function CourseCard({ course }: { course: Course }) {
  return (
    <div className="bg-white transition-shadow hover:shadow-lg">
      <div className="relative">
        <img src={course.image} alt={course.title} className="h-48 w-full object-cover" />
        <span className="absolute top-3 right-3 bg-brand px-3 py-1 text-xs font-bold text-white">
          ${course.price}
        </span>
      </div>
      <div className="p-5">
        <h3 className="mb-2 text-lg font-bold text-ink">{course.title}</h3>
        <p className="mb-4 text-sm text-body">{course.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={course.avatar}
              alt={course.author}
              className="h-8 w-8 rounded-full object-cover"
            />
            <span className="text-xs font-medium text-body">{course.author}</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-body">
            <Users size={14} />
            <span>{course.students}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function FeaturedCourses() {
  const [activeTab, setActiveTab] = useState<Category>('All')

  const filtered = activeTab === 'All' ? COURSES : COURSES.filter((c) => c.category === activeTab)

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-ink">Featured Courses</h2>
          <p className="mx-auto max-w-xl text-body">
            Browse our most popular courses across various categories.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 text-sm font-semibold transition-colors ${
                activeTab === tab
                  ? 'bg-brand text-white'
                  : 'bg-secondary text-body hover:bg-brand hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Course grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  )
}
