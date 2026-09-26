import { Music, Plane, Film, Trophy } from 'lucide-react'

const info = [
  { label: 'Name', value: 'Clydson Nowitzki' },
  { label: 'Date of birth', value: 'January 01, 1990' },
  { label: 'Address', value: 'San Francisco CA 97987 USA' },
  { label: 'Zip code', value: '1000' },
  { label: 'Email', value: 'clydson@gmail.com' },
  { label: 'Phone', value: '+1-2234-5678-9-0' },
]

const interests = [
  { icon: Music, label: 'Music' },
  { icon: Plane, label: 'Travel' },
  { icon: Film, label: 'Movie' },
  { icon: Trophy, label: 'Sports' },
]

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-5/12">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <img
                src="https://picsum.photos/seed/clydson-about/600/500"
                alt="About"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand/20" />
            </div>
          </div>
          <div className="lg:w-7/12">
            <span className="text-brand text-sm uppercase tracking-widest font-medium">
              My Intro
            </span>
            <h2 className="text-3xl font-bold text-heading mt-2 mb-4">About Me</h2>
            <p className="text-body leading-relaxed mb-6">
              A small river named Duden flows by their place and supplies it with the necessary
              regelialia. It is a paradisematic country, in which roasted parts of sentences fly
              into your mouth.
            </p>
            <ul className="space-y-3 mb-8">
              {info.map((item) => (
                <li key={item.label} className="flex gap-4">
                  <span className="text-heading font-medium min-w-[120px]">{item.label}:</span>
                  <span className="text-body">{item.value}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-6">
              {interests.map((interest) => (
                <div key={interest.label} className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <interest.icon size={18} />
                  </div>
                  <span className="text-body text-sm">{interest.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
