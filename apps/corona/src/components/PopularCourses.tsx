import { Star } from 'lucide-react'

/* Popular courses (source: .popular-course-area — owl-carousel recreated
   as a responsive grid; 4 cards with thumb, #f9f9fb details panel,
   uppercase category + price, title, 5 stars + review count). */
const COURSES = [
  {
    title: 'Learn Angular JS Course for Legendary Persons',
    category: 'programming language',
    price: '$150',
    reviews: '25 Reviews',
  },
  {
    title: 'Deep Space Photography for Amateur Astronomers',
    category: 'photography',
    price: '$120',
    reviews: '42 Reviews',
  },
  {
    title: 'User Interface Design Principles Masterclass',
    category: 'design',
    price: '$90',
    reviews: '18 Reviews',
  },
  {
    title: 'Machine Learning Foundations for Beginners',
    category: 'data science',
    price: '$180',
    reviews: '57 Reviews',
  },
]

export function PopularCourses() {
  return (
    <section id="courses" className="bg-white py-[120px]">
      <div className="mx-auto max-w-[1140px] px-[15px]">
        <div className="mb-[75px] text-center">
          <h2 className="font-display text-[42px] font-black text-ink">
            Popular Courses
            <br />
            Available Right Now
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-[14px] leading-6 text-smoke">
            Explore the most-loved courses in our catalog, taught by expert mentors and trusted by
            learners around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {COURSES.map((course, index) => (
            <article key={course.title} className="overflow-hidden rounded-md bg-card">
              <div className="overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/corona-course-${index + 1}/400/250`}
                  alt=""
                  className="h-[180px] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-[30px]">
                <div className="flex items-center justify-between">
                  <p className="text-[12px] font-medium uppercase text-smoke">{course.category}</p>
                  <p className="text-[16px] font-bold text-ink">{course.price}</p>
                </div>
                <h3 className="mt-3 text-[16px] font-medium leading-[27px] text-ink">
                  {course.title}
                </h3>
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex" aria-label={`${course.reviews} rating`}>
                    {Array.from({ length: 5 }, (_, star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-[#f4c150] text-[#f4c150]"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="text-[13px] text-smoke">{course.reviews}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
