import { Clock, Calendar } from 'lucide-react'

const scheduleItems = [
  {
    name: 'Yinyasa',
    description:
      'A slow-paced practice focusing on deep stretches and relaxation. Perfect for winding down after a long day.',
    time: '5:30 PM',
    date: 'Every Monday',
    image: 'https://picsum.photos/seed/asana-sched1/600/400',
  },
  {
    name: 'Chandra Vinyasa',
    description:
      'A gentle flow sequence inspired by the moon. Calming movements synchronized with breath for inner balance.',
    time: '5:30 PM',
    date: 'Every Tuesday',
    image: 'https://picsum.photos/seed/asana-sched2/600/400',
  },
  {
    name: 'Surya Vinyasa',
    description:
      'An energizing sun salutation sequence to awaken the body and build heat. Ideal for morning practice.',
    time: '5:30 PM',
    date: 'Every Wednesday',
    image: 'https://picsum.photos/seed/asana-sched3/600/400',
  },
  {
    name: 'Ashtanga Foundations',
    description:
      'Build strength and flexibility through the traditional Primary Series. A challenging yet rewarding practice.',
    time: '5:30 PM',
    date: 'Every Thursday',
    image: 'https://picsum.photos/seed/asana-sched4/600/400',
  },
]

export function Schedule() {
  return (
    <section id="schedule" className="py-16 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Schedule</h2>
          <p className="text-gray-500 leading-relaxed">
            Find the perfect class for your schedule. Our weekly timetable offers a variety of
            styles to suit every level of practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {scheduleItems.map((item) => (
            <div
              key={item.name}
              className="flex flex-col sm:flex-row bg-white rounded-lg overflow-hidden shadow-sm"
            >
              <div
                className="w-full sm:w-48 h-48 sm:h-auto bg-cover bg-center flex-shrink-0"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">{item.name}</h3>
                  <p className="text-gray-500 text-sm mb-3">{item.description}</p>
                  <div className="flex flex-col gap-1 text-sm text-gray-400">
                    <span className="flex items-center gap-2">
                      <Clock size={14} /> {item.time}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar size={14} /> {item.date}
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <a
                    href="#"
                    className="inline-block px-4 py-2 border-2 border-brand-500 text-brand-500 text-sm font-semibold hover:bg-brand-500 hover:text-white transition-colors"
                  >
                    Join from $15
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
