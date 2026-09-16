const SCHEDULE = [
  { label: 'Morning Worship', time: '5:30AM - 6:00AM' },
  { label: 'Afternoon Worship', time: '1:30PM - 2:00PM' },
  { label: 'Evening Worship', time: '7:30PM - 8:00PM' },
]

export function WorshipTime() {
  return (
    <section className="border-b border-dark-border bg-white" aria-label="Worship time">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col justify-center px-8 py-16 md:w-1/2 md:px-16">
          <h3 className="mb-6 font-heading text-3xl text-dark">Worship Time</h3>
          <ul className="space-y-3">
            {SCHEDULE.map((item) => (
              <li
                key={item.label}
                className="flex items-center justify-between border-b border-gray-200 pb-3 text-base text-dark"
              >
                <a href="#" className="transition-colors hover:text-brand">
                  {item.label}
                </a>
                <span className="text-sm text-black/20">{item.time}</span>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="h-[350px] bg-cover bg-center md:h-auto md:w-1/2"
          style={{
            backgroundImage: `url(https://picsum.photos/seed/nave-worship/800/600)`,
          }}
          aria-hidden="true"
        />
      </div>
    </section>
  )
}
