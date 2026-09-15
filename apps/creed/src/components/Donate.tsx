import { Heart } from 'lucide-react'

const causes = [
  {
    title: 'Church Building',
    description: 'Help us renovate and maintain our beloved church building.',
    image: 'https://picsum.photos/seed/creed-donate1/400/300',
  },
  {
    title: 'Youth Foundation',
    description: 'Support programs and activities for the young people in our community.',
    image: 'https://picsum.photos/seed/creed-donate2/400/300',
  },
  {
    title: "Children's Ministry",
    description: 'Fund educational resources and activities for the children.',
    image: 'https://picsum.photos/seed/creed-donate3/400/300',
  },
] as const

export function Donate() {
  return (
    <section id="causes" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900">Donate to our Charities</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Your generous contributions help us serve the community and spread the word of God.
            Every donation makes a difference.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {causes.map((cause, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg bg-gray-50 shadow-sm transition-shadow hover:shadow-md"
            >
              <img
                src={cause.image}
                alt={cause.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{cause.title}</h3>
                <p className="mb-4 text-sm text-gray-600">{cause.description}</p>
                <a
                  href="#donate"
                  className="inline-flex items-center gap-2 rounded bg-primary-400 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-500"
                >
                  <Heart className="h-4 w-4" />
                  Donate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
