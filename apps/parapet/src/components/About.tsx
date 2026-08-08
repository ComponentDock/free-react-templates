const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '150+', label: 'Team Members' },
  { value: '25+', label: 'Years Experience' },
  { value: '12', label: 'Industry Awards' },
] as const

export function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
              About Us
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Building Excellence Since 1998
            </h2>
            <p className="mt-6 leading-relaxed text-gray-600 dark:text-gray-400">
              Parapet has been at the forefront of the construction industry for over 25 years.
              Founded on the principles of quality craftsmanship, integrity, and client
              satisfaction, we have grown from a small local builder to one of the most respected
              construction firms in Texas.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
              Our team of skilled professionals brings together decades of combined experience in
              residential, commercial, and industrial construction. We leverage cutting-edge
              technology and sustainable practices to deliver projects that stand the test of time.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center shadow-sm dark:border-gray-800 dark:bg-gray-800"
              >
                <p className="text-3xl font-bold text-primary-600 sm:text-4xl dark:text-primary-400">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
