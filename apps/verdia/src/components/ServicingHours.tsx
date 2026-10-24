import { Clock } from 'lucide-react'

const HOURS = [
  { day: 'Monday - Friday', time: '7.00 AM - 10.00 PM' },
  { day: 'Saturday', time: '7.00 AM - 8.00 PM' },
  { day: 'Sunday', time: '8.00 AM - 6.00 PM' },
]

export function ServicingHours() {
  return (
    <section className="bg-paper py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-ink">Servicing Hours</h2>
            <p className="mt-4 text-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="mt-6 space-y-3">
              {HOURS.map((h) => (
                <li key={h.day} className="flex items-center gap-3 text-ink">
                  <Clock className="h-4 w-4 text-brand" />
                  <span>
                    <strong>{h.day}</strong> — {h.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div id="appointment-anchor" />
        </div>
      </div>
    </section>
  )
}
