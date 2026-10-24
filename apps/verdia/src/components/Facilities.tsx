import { Ambulance, HeartPulse, Users } from 'lucide-react'

const FACILITIES = [
  {
    title: '24/7 Emergency',
    icon: Ambulance,
    description:
      'Our emergency department is open around the clock to provide immediate medical attention when you need it most.',
  },
  {
    title: 'Intensive Care',
    icon: HeartPulse,
    description:
      'State-of-the-art intensive care units staffed by experienced critical care specialists.',
  },
  {
    title: 'Family Planning',
    icon: Users,
    description:
      'Comprehensive family planning services with personalized counseling and modern solutions.',
  },
  {
    title: '24/7 Emergency',
    icon: Ambulance,
    description:
      'Rapid response emergency teams equipped with advanced life-saving technology and protocols.',
  },
]

export function Facilities() {
  return (
    <section id="features" className="bg-paper py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl font-bold text-ink">Our Latest Facilities</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FACILITIES.map((f, i) => {
            const Icon = f.icon
            return (
              <div
                key={`${f.title}-${i}`}
                className="rounded-lg bg-white p-6 text-center shadow transition-shadow hover:shadow-md"
              >
                <Icon className="mx-auto h-12 w-12 text-brand" />
                <h4 className="mt-4 text-lg font-bold text-ink">{f.title}</h4>
                <p className="mt-2 text-sm text-body">{f.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
