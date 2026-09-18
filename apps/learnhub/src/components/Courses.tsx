import { Clock, Users, Star } from 'lucide-react'

interface CourseCardProps {
  image: string
  category: string
  level: string
  price: string
  title: string
  description: string
  duration: string
  enrolled: string
  instructor: string
  instructorImg: string
  rating: string
  stars: number
}

function CourseCard({
  image,
  category,
  level,
  price,
  title,
  description,
  duration,
  enrolled,
  instructor,
  instructorImg,
  rating,
  stars,
}: CourseCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-lg">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-52 w-full object-cover transition group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute left-4 top-4 flex gap-2">
          <span className="rounded-full bg-coral-500 px-3 py-1 text-xs font-semibold text-white">
            {category}
          </span>
          <span className="rounded-full bg-navy-900/80 px-3 py-1 text-xs font-medium text-white">
            {level}
          </span>
        </div>
      </div>

      <div className="p-6">
        <span className="font-heading text-lg font-bold text-coral-500">{price}</span>
        <h3 className="mt-2 font-heading text-lg font-semibold text-navy-900">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-500">{description}</p>

        <div className="mt-4 flex items-center gap-4 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> {duration}
          </span>
          <span className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" /> {enrolled}
          </span>
        </div>

        <div className="mt-5 flex items-center justify-between border-t pt-4">
          <div className="flex items-center gap-3">
            <img
              src={instructorImg}
              alt={instructor}
              className="h-9 w-9 rounded-full object-cover"
              loading="lazy"
            />
            <span className="text-xs font-medium text-gray-600">{instructor}</span>
          </div>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${i < stars ? 'fill-gold-400 text-gold-400' : 'text-gray-300'}`}
              />
            ))}
            <span className="ml-1 text-xs text-gray-400">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const courses: CourseCardProps[] = [
  {
    image: 'https://picsum.photos/seed/learnhub-course1/600/400',
    category: 'Web Dev',
    level: 'Beginner',
    price: '$130.00',
    title: 'Full-Stack Web Development Bootcamp',
    description:
      'Build responsive websites from scratch using HTML, CSS, JavaScript, and modern frameworks.',
    duration: '12 weeks',
    enrolled: '2,340',
    instructor: 'Sarah Mitchell',
    instructorImg: 'https://picsum.photos/seed/instructor1/100/100',
    rating: '4.8',
    stars: 5,
  },
  {
    image: 'https://picsum.photos/seed/learnhub-course2/600/400',
    category: 'Design',
    level: 'Intermediate',
    price: '$160.00',
    title: 'UX/UI Design Masterclass',
    description:
      'Master user experience design principles, wireframing, prototyping, and usability testing.',
    duration: '8 weeks',
    enrolled: '1,850',
    instructor: 'David Chen',
    instructorImg: 'https://picsum.photos/seed/instructor2/100/100',
    rating: '4.6',
    stars: 4,
  },
  {
    image: 'https://picsum.photos/seed/learnhub-course3/600/400',
    category: 'WordPress',
    level: 'Advanced',
    price: '$140.00',
    title: 'Advanced WordPress Development',
    description:
      'Build custom themes and plugins, master the WordPress REST API, and deploy production sites.',
    duration: '10 weeks',
    enrolled: '1,120',
    instructor: 'Michael Brooks',
    instructorImg: 'https://picsum.photos/seed/instructor3/100/100',
    rating: '4.9',
    stars: 5,
  },
]

export function Courses() {
  return (
    <section id="courses" className="bg-navy-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <span className="font-heading text-sm font-semibold uppercase tracking-wider text-coral-500">
            Popular Courses
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-navy-900 md:text-4xl">
            Featured Courses
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <CourseCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  )
}
