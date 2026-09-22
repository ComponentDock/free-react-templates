import { Clock } from 'lucide-react'

const schedule = [
  { day: 'Monday - Friday', time: '08:00 am - 10:00 pm' },
  { day: 'Saturday', time: '08:00 am - 06:00 pm' },
  { day: 'Sunday', time: 'Closed' },
]

export function ServicingHours() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <Clock className="h-8 w-8 text-[#76b900]" aria-hidden="true" />
        <h2 className="text-3xl font-bold text-[#333333]">Servicing Hours</h2>
      </div>
      <p className="text-[#666666]">
        Our dedicated medical team is available throughout the week to provide you with the best
        healthcare services. Feel free to visit us during our operating hours.
      </p>
      <div className="mt-2 space-y-3">
        {schedule.map((item) => (
          <div
            key={item.day}
            className="flex items-center justify-between border-b border-[#e5e5e5] pb-3"
          >
            <span className="font-medium text-[#333333]">{item.day}</span>
            <span className="text-[#666666]">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
