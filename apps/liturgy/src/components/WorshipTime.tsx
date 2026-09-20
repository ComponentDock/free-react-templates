const schedule = [
  { service: 'Morning Worship', time: '5:30AM - 6:00AM' },
  { service: 'Afternoon Worship', time: '1:30PM - 2:00PM' },
  { service: 'Evening Worship', time: '7:30PM - 8:00PM' },
]

export function WorshipTime() {
  return (
    <section className="border-b border-charcoal-700">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 px-8 py-16 md:px-16 md:py-24">
          <h3 className="mb-8 font-heading text-2xl text-charcoal-800">Worship Time</h3>
          <ul className="mb-12 space-y-4">
            {schedule.map((item) => (
              <li key={item.service} className="border-b border-gray-200 pb-3">
                <a href="#" className="group block">
                  <span className="block text-base text-charcoal-800 transition-opacity group-hover:opacity-70">
                    {item.service}
                  </span>
                  <span className="block text-sm text-charcoal-400">{item.time}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="h-80 w-full bg-cover bg-center md:h-auto md:w-1/2"
          style={{ backgroundImage: 'url(https://picsum.photos/seed/liturgy-worship/800/600)' }}
        />
      </div>
    </section>
  )
}
