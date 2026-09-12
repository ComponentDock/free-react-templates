import { Pencil, Stamp } from 'lucide-react'

const platformFeatures = [
  {
    icon: Pencil,
    title: 'Learn Anywhere',
    description: 'Access your courses on any device with offline downloads for on-the-go learning.',
  },
  {
    icon: Stamp,
    title: 'Verified Certificates',
    description:
      'Earn industry-recognized certificates that you can share on LinkedIn and your resume.',
  },
]

export function Platform() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="font-heading text-sm font-semibold uppercase tracking-wider text-coral-500">
              Our Platform
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-navy-900 md:text-4xl">
              An Advanced Learning System Built for Results
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-gray-500">
              Our platform combines interactive video lessons, real-world coding challenges, and
              peer collaboration tools to create a learning experience that sticks. Track your
              progress, earn certificates, and join a global community of learners.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {platformFeatures.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-coral-500/10 text-coral-500">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="font-heading text-sm font-semibold text-navy-900">{f.title}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-gray-500">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="https://picsum.photos/seed/learnhub-platform/700/500"
              alt="Learnhub advanced learning platform interface"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
