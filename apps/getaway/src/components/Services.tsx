import { Plane, Route, UserCheck, MapPin } from 'lucide-react'

const services = [
  {
    icon: Plane,
    title: 'Activities',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary',
  },
  {
    icon: Route,
    title: 'Travel Arrangements',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary',
  },
  {
    icon: UserCheck,
    title: 'Private Guide',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary',
  },
  {
    icon: MapPin,
    title: 'Location Manager',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary',
  },
]

export function Services() {
  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              It&apos;s time to start your adventure
            </h2>
            <p className="mb-4 text-gray-600">
              A small river named Duden flows by their place and supplies it with the necessary
              regelialia. It is a paradisematic country, in which roasted parts of sentences fly
              into your mouth.
            </p>
            <p className="mb-6 text-gray-600">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.
            </p>
            <div>
              <a
                href="#destination"
                className="inline-block rounded bg-sunset-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sunset-600"
              >
                Search Destination
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {services.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex flex-col items-start">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-sunset-700/10">
                  <Icon className="h-6 w-6 text-sunset-700" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
