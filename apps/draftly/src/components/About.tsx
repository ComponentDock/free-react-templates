import { Music, Plane, Film, Trophy } from 'lucide-react'

const INFO = [
  { label: 'Name', value: 'Draftly Nowitzki' },
  { label: 'Date of birth', value: 'January 01, 1990' },
  { label: 'Address', value: 'San Francisco CA 97987 USA' },
  { label: 'Zip code', value: '1000' },
  { label: 'Email', value: 'hello@draftly.dev' },
  { label: 'Phone', value: '+1-2234-5678-9-0' },
]

const INTERESTS = [
  { icon: Music, label: 'Music' },
  { icon: Plane, label: 'Travel' },
  { icon: Film, label: 'Movie' },
  { icon: Trophy, label: 'Sports' },
]

export function About() {
  return (
    <section id="about" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-8 md:flex-row">
          {/* Image */}
          <div className="md:w-5/12">
            <div
              className="aspect-[4/5] w-full bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://picsum.photos/seed/draftly-about/600/750)',
              }}
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center md:w-7/12 md:pl-8">
            <span className="mb-2 text-sm font-light uppercase tracking-widest text-brand-500">
              My Intro
            </span>
            <h2 className="mb-4 text-3xl font-bold text-gray-900">About Me</h2>
            <p className="mb-6 text-gray-500">
              A small river named Duden flows by their place and supplies it with the necessary
              regelialia. It is a paradisematic country, in which roasted parts of sentences fly
              into your mouth.
            </p>

            <ul className="mb-6 space-y-2">
              {INFO.map((item) => (
                <li key={item.label} className="flex gap-4 text-sm">
                  <span className="w-32 font-semibold text-gray-900">{item.label}:</span>
                  <span className="text-gray-500">{item.value}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              {INTERESTS.map((interest) => (
                <div
                  key={interest.label}
                  className="flex items-center gap-2 rounded bg-gray-100 px-4 py-2"
                >
                  <interest.icon className="h-5 w-5 text-brand-500" />
                  <span className="text-sm text-gray-700">{interest.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
