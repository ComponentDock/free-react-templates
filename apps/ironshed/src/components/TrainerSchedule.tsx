const schedule = [
  {
    time: '10:00 - 12:00',
    mon: { type: 'Gym', name: 'Robert Fox' },
    tue: { type: 'Yoga', name: 'Jane Cooper' },
    wed: { type: 'Body', name: 'Albert Flores' },
    thu: { type: 'Cardio', name: 'Darlene Robertson' },
    fri: { type: 'Box', name: 'Marvin McKinney' },
    sat: { type: 'Gym', name: 'Robert Fox' },
    sun: null,
  },
  {
    time: '14:00 - 16:00',
    mon: { type: 'Yoga', name: 'Jane Cooper' },
    tue: null,
    wed: { type: 'Cardio', name: 'Darlene Robertson' },
    thu: { type: 'Gym', name: 'Robert Fox' },
    fri: { type: 'Yoga', name: 'Jane Cooper' },
    sat: { type: 'Body', name: 'Albert Flores' },
    sun: null,
  },
  {
    time: '16:00 - 18:00',
    mon: { type: 'Cardio', name: 'Darlene Robertson' },
    tue: { type: 'Body', name: 'Albert Flores' },
    wed: null,
    thu: { type: 'Box', name: 'Marvin McKinney' },
    fri: null,
    sat: { type: 'Yoga', name: 'Jane Cooper' },
    sun: { type: 'Gym', name: 'Robert Fox' },
  },
] as const

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] as const

const colorMap: Record<string, string> = {
  Gym: 'bg-schedule-gym',
  Running: 'bg-schedule-gym',
  Yoga: 'bg-schedule-yoga',
  Body: 'bg-schedule-body',
  Box: 'bg-schedule-body',
  Cardio: 'bg-schedule-cardio',
}

function getCellColor(type: string): string {
  // All workout types in the schedule are guaranteed to be in colorMap
  return colorMap[type]!
}

export function TrainerSchedule() {
  return (
    <section
      id="schedule"
      aria-label="Trainer schedule"
      className="relative bg-cover bg-fixed bg-center py-20 sm:py-24"
      style={{ backgroundImage: "url('https://picsum.photos/seed/ironshed-schedule/1920/800')" }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl">
            Our Trainer
          </h2>
        </div>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[700px] border-collapse text-sm">
            <thead>
              <tr>
                <th className="sr-only">Time</th>
                {days.map((day) => (
                  <th
                    key={day}
                    className="px-3 py-3 text-left font-heading text-xs font-medium uppercase tracking-wider text-white/70"
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {schedule.map((row) => (
                <tr key={row.time}>
                  <td className="whitespace-nowrap pr-4 py-3 font-heading text-xs font-medium text-white/60">
                    {row.time}
                  </td>
                  {[row.mon, row.tue, row.wed, row.thu, row.fri, row.sat, row.sun].map(
                    (cell, i) => (
                      <td key={i} className="px-1 py-1">
                        {cell ? (
                          <div
                            className={`${getCellColor(cell.type)} rounded-sm px-3 py-2 text-white`}
                          >
                            <h6 className="font-heading text-xs font-semibold">{cell.type}</h6>
                            <span className="block text-[10px] text-white/80">{row.time}</span>
                            <span className="block text-[10px] text-white/70">{cell.name}</span>
                          </div>
                        ) : (
                          <div className="h-full min-h-[48px]" />
                        )}
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
