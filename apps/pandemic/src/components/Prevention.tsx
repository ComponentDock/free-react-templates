import { Home, UserX, Hand, Droplets } from 'lucide-react'

const items = [
  {
    icon: Home,
    title: 'Stay at home',
    description:
      'Stay at home if you feel unwell. If you have a fever, cough and difficulty breathing, seek medical attention.',
  },
  {
    icon: UserX,
    title: 'Wear facemask',
    description:
      'Wear a facemask in public areas and when using public transportation to reduce transmission.',
  },
  {
    icon: Hand,
    title: 'Keep social distancing',
    description:
      'Maintain at least 1 meter distance between yourself and anyone who is coughing or sneezing.',
  },
  {
    icon: Droplets,
    title: 'Wash your hands',
    description:
      'Wash your hands frequently with soap and water for at least 20 seconds, especially after being in public.',
  },
]

export function Prevention() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center text-3xl font-black text-brand">How to Prevent</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-mist">
          Follow these essential steps to protect yourself and prevent the spread of the virus.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-brand-light">
                <item.icon className="h-10 w-10 text-brand" />
              </div>
              <h3 className="text-lg font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm text-mist">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
