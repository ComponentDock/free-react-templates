const courses = [
  {
    image: 'https://picsum.photos/seed/cognita-course1/400/250',
    category: 'Web Design',
    title: 'Developing Mobile Apps',
    price: 'Free',
  },
  {
    image: 'https://picsum.photos/seed/cognita-course2/400/250',
    category: 'Development',
    title: 'Convert PSD to HTML',
    price: 'Free',
  },
  {
    image: 'https://picsum.photos/seed/cognita-course3/400/250',
    category: 'WordPress',
    title: 'Convert HTML to WordPress',
    price: '$49',
  },
  {
    image: 'https://picsum.photos/seed/cognita-course4/400/250',
    category: 'JavaScript',
    title: 'Advanced JavaScript',
    price: '$39',
  },
  {
    image: 'https://picsum.photos/seed/cognita-course5/400/250',
    category: 'Design',
    title: 'Learned Smoke Effects',
    price: 'Free',
  },
  {
    image: 'https://picsum.photos/seed/cognita-course6/400/250',
    category: 'Marketing',
    title: 'Digital Marketing 101',
    price: '$29',
  },
]

export function Classes() {
  return (
    <section id="courses" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center font-heading text-3xl font-bold text-heading sm:text-4xl">
          Our Classes
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-body">
          Even the all-powerful Pointing has no control about the blind texts it is an almost
          unorthographic life.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <div
              key={c.title}
              className="group overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-3 top-3 rounded bg-primary-500 px-2 py-1 text-xs font-semibold text-white">
                  {c.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold text-heading">{c.title}</h3>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm font-semibold text-gold-500">{c.price}</span>
                  <a
                    href="#enroll"
                    className="text-sm font-semibold text-primary-500 hover:text-primary-600"
                  >
                    Enroll Now →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
