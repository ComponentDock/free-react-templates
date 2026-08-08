import { Check, ChevronRight } from 'lucide-react'

const beliefs = [
  {
    title: 'The Bible',
    description: "We believe the Bible is God's inspired Word and our guide for faith and life.",
  },
  {
    title: 'Jesus Christ',
    description: 'We believe Jesus is the Son of God who died for our sins and rose again.',
  },
  {
    title: 'Salvation',
    description: 'We believe salvation comes through faith in Jesus Christ alone.',
  },
  {
    title: 'Community',
    description: "We believe life is better together and we're called to love one another.",
  },
] as const

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
              Our Story
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Who We Are
            </h2>
            <p className="mt-6 leading-relaxed text-gray-600 dark:text-gray-400">
              Sanctuary was founded in 1985 with a simple mission: to help people know God and grow
              together in faith. What started as a small gathering in a living room has grown into a
              vibrant community of believers.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
              We believe the church should be a place where everyone feels welcome, where questions
              are encouraged, and where lives are transformed by the love of Christ.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
              Our diverse congregation includes people from all walks of life, united by our common
              faith and commitment to loving God and loving people.
            </p>
            <a
              href="#services"
              className="mt-6 inline-flex items-center gap-1 font-medium text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400"
            >
              Learn More About Us
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm dark:bg-gray-800">
            <h3 className="font-serif text-2xl font-bold text-gray-900 dark:text-white">
              What We Believe
            </h3>
            <ul className="mt-6 space-y-6">
              {beliefs.map((belief) => (
                <li key={belief.title} className="flex gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-100">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{belief.title}</h4>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      {belief.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
