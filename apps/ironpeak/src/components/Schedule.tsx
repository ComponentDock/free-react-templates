import { Clock, Calendar } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const scheduleItems = [
  {
    name: 'Body Building',
    time: '5:30 PM',
    date: 'April 22, 2024',
    image: 'https://picsum.photos/seed/ironpeak-sched1/400/300',
    description: 'Build strength and sculpt your physique with guided weight training sessions.',
  },
  {
    name: 'Yoga Pilates',
    time: '7:00 AM',
    date: 'April 23, 2024',
    image: 'https://picsum.photos/seed/ironpeak-sched2/400/300',
    description: 'Improve flexibility and core strength through mindful movement practices.',
  },
  {
    name: 'Cardio Blast',
    time: '6:00 PM',
    date: 'April 24, 2024',
    image: 'https://picsum.photos/seed/ironpeak-sched3/400/300',
    description: 'High-energy cardio sessions designed to burn calories and boost endurance.',
  },
  {
    name: 'Power Lift',
    time: '8:00 AM',
    date: 'April 25, 2024',
    image: 'https://picsum.photos/seed/ironpeak-sched4/400/300',
    description: 'Learn proper lifting technique and progressive overload for maximum gains.',
  },
]

export function Schedule() {
  return (
    <section id="schedule" className="bg-gray-50 py-16">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-extrabold uppercase tracking-wider text-ink">Our Schedule</h2>
        <span className="text-6xl font-extrabold uppercase tracking-wider text-gray-200">
          Schedule
        </span>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:px-8">
        {scheduleItems.map((item) => (
          <div
            key={item.name}
            className="flex flex-col overflow-hidden bg-white shadow-sm sm:flex-row"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-48 w-full object-cover sm:h-auto sm:w-48"
              loading="lazy"
            />
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-bold text-ink">{item.name}</h3>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
              <div className="mt-3 flex flex-col gap-1 text-sm text-muted">
                <span className="flex items-center gap-1.5">
                  <Clock size={14} className="text-brand" /> {item.time}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-brand" /> {item.date}
                </span>
              </div>
              <div className="mt-4">
                <Button className="bg-brand px-4 py-2 text-xs font-semibold uppercase tracking-wider text-ink hover:bg-brand-dark">
                  Join from $15
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
