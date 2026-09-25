import { Music, Plane, Film, SportShoe } from 'lucide-react'

const personalInfo = [
  { label: 'Name', value: 'John Doe' },
  { label: 'Date of birth', value: 'January 01, 1990' },
  { label: 'Address', value: '123 Main St, New York, NY 10001' },
  { label: 'Email', value: 'hello@palette.dev' },
  { label: 'Phone', value: '+1 (555) 123-4567' },
]

const interests = [
  { icon: Music, label: 'Music' },
  { icon: Plane, label: 'Travel' },
  { icon: Film, label: 'Movie' },
  { icon: SportShoe, label: 'Sports' },
]

export function About() {
  return (
    <section id="about" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-12 md:flex-row">
          <div className="md:w-1/2">
            <img
              src="https://picsum.photos/seed/palette-about/600/700"
              alt="Portrait of the designer"
              className="w-full rounded-lg object-cover shadow-lg"
            />
          </div>

          <div className="md:w-1/2">
            <h2 className="mb-6 text-3xl font-bold text-ink">About Me</h2>
            <p className="mb-6 text-smoke">
              I am a passionate UI/UX designer and developer with over 8 years of experience
              creating beautiful digital experiences. I love turning complex problems into simple,
              elegant designs.
            </p>

            <ul className="mb-8 space-y-3">
              {personalInfo.map((item) => (
                <li key={item.label} className="flex text-sm">
                  <span className="w-32 font-semibold text-ink">{item.label}:</span>
                  <span className="text-smoke">{item.value}</span>
                </li>
              ))}
            </ul>

            <h3 className="mb-4 text-lg font-semibold text-ink">Interests</h3>
            <div className="flex flex-wrap gap-4">
              {interests.map((interest) => (
                <div key={interest.label} className="flex items-center gap-2 text-sm text-smoke">
                  <interest.icon className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span>{interest.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
