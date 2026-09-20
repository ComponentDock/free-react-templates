import { Star, Users } from 'lucide-react'

interface Course {
  title: string
  instructor: string
  language: string
  description: string
  students: number
  rating: number
  free: boolean
  imageSeed: string
}

const courses: Course[] = [
  {
    title: 'Conversational Spanish',
    instructor: 'Maria Garcia',
    language: 'Spanish',
    description:
      'Learn everyday Spanish for travel, work, and social situations with real-world dialogues.',
    students: 342,
    rating: 4.8,
    free: true,
    imageSeed: 'lingo-course-1',
  },
  {
    title: 'Business Japanese',
    instructor: 'Takeshi Yamada',
    language: 'Japanese',
    description: 'Master professional Japanese for meetings, emails, and workplace communication.',
    students: 215,
    rating: 4.7,
    free: false,
    imageSeed: 'lingo-course-2',
  },
  {
    title: 'French for Beginners',
    instructor: 'Sophie Laurent',
    language: 'French',
    description: 'Start your French journey with pronunciation, grammar, and essential vocabulary.',
    students: 489,
    rating: 4.9,
    free: true,
    imageSeed: 'lingo-course-3',
  },
]

function CourseCard({ course }: { course: Course }) {
  return (
    <div className="bg-white rounded shadow-sm overflow-hidden">
      <div className="relative">
        <img
          src={`https://picsum.photos/seed/${course.imageSeed}/350/200`}
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        <span
          className={`absolute bottom-2 right-2 px-3 py-1 text-xs font-bold uppercase rounded-[3px] ${
            course.free ? 'bg-brand-accent text-dark-bg' : 'bg-brand-primary text-white'
          }`}
        >
          {course.free ? 'Free' : 'Paid'}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg mb-1">{course.title}</h3>
        <p className="text-sm text-text-muted mb-1">
          {course.instructor} · <span className="text-brand-primary">{course.language}</span>
        </p>
        <p className="text-sm text-text-muted mb-4 leading-relaxed">{course.description}</p>
        <div className="flex items-center justify-between text-sm text-text-muted border-t pt-3">
          <span className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {course.students} students
          </span>
          <span className="flex items-center gap-1 text-brand-accent">
            <Star className="w-4 h-4 fill-brand-accent" />
            {course.rating}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function Courses() {
  return (
    <section id="courses" className="bg-light-bg py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
      </div>
    </section>
  )
}
