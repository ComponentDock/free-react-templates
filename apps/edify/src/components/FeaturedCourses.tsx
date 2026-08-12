import { Star } from 'lucide-react'

const COURSES = [
  {
    category: 'User Experience',
    title: 'Fundamental of UX for Application design',
    blurb: 'Design intuitive, user-centered interfaces from research to polished prototypes.',
    rating: '4.5',
    count: '120',
    price: '$135',
    image: 'https://picsum.photos/seed/edify-course-1/600/400',
  },
  {
    category: 'Design',
    title: 'Advanced Graphic Design principles',
    blurb: 'Master typography, color, and composition to build stunning visual identities.',
    rating: '4.7',
    count: '96',
    price: '$95',
    image: 'https://picsum.photos/seed/edify-course-2/600/400',
  },
  {
    category: 'Development',
    title: 'Full-Stack Web Development bootcamp',
    blurb: 'Build and ship full-stack web applications with modern tools and best practices.',
    rating: '4.9',
    count: '210',
    price: '$149',
    image: 'https://picsum.photos/seed/edify-course-3/600/400',
  },
  {
    category: 'Data Science',
    title: 'Data Science Essentials with Python',
    blurb: 'Analyze data, build models, and turn insights into decisions with Python.',
    rating: '4.6',
    count: '84',
    price: '$120',
    image: 'https://picsum.photos/seed/edify-course-4/600/400',
  },
] as const

/* Featured courses recreated from the source's courses-area: a centered
   indigo heading and course cards (radius 10px, soft shadow) with image,
   category, title, star rating, price, and a "Find out more" button —
   rendered as a responsive grid. */

function Stars() {
  return (
    <span className="flex items-center gap-0.5 text-star" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-current" />
      ))}
    </span>
  )
}

export function FeaturedCourses() {
  return (
    <section id="courses" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl font-semibold text-indigo dark:text-white sm:text-4xl">
          Our featured courses
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {COURSES.map((course) => (
            <article
              key={course.title}
              className="overflow-hidden rounded-[10px] bg-white shadow-[0_6px_6px_rgba(2,25,65,0.08)] dark:bg-gray-900"
            >
              <img
                src={course.image}
                alt={course.title}
                className="h-44 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-wide text-brand">
                  {course.category}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-indigo dark:text-white">
                  {course.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{course.blurb}</p>
                <div className="mt-3 flex items-center gap-2">
                  <Stars />
                  <span className="text-xs text-gray-500">
                    ({course.rating}) based on {course.count}
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-display text-xl font-bold text-indigo dark:text-white">
                    {course.price}
                  </span>
                  <a
                    href="#courses"
                    className="rounded border border-lavender-line px-4 py-2 text-sm font-semibold text-indigo transition-colors hover:bg-accent hover:text-white"
                  >
                    Find out more
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
