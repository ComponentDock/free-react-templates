import { useState } from 'react'

type Slot = { time: string; title: string; trainer: string; duration: string }

const scheduleData: Record<string, Slot[]> = {
  S: [
    { time: '7:30am - 9:00am', title: 'Yoga Basics', trainer: 'Sarah Miller', duration: '45' },
    {
      time: '9:30am - 11:00am',
      title: 'Strength Training',
      trainer: 'Mike Johnson',
      duration: '60',
    },
    { time: '11:30am - 1:00pm', title: 'Cardio Blast', trainer: 'Lisa Chen', duration: '30' },
    { time: '2:00pm - 3:30pm', title: 'Pilates Core', trainer: 'Emma Davis', duration: '50' },
    { time: '4:00pm - 5:30pm', title: 'HIIT Circuit', trainer: 'James Wilson', duration: '40' },
  ],
  M: [
    { time: '7:30am - 9:00am', title: 'Spin Cycle', trainer: 'Alex Turner', duration: '45' },
    { time: '9:30am - 11:00am', title: 'Boxing Basics', trainer: 'Carlos Rivera', duration: '60' },
    { time: '11:30am - 1:00pm', title: 'Stretch & Flow', trainer: 'Nina Patel', duration: '30' },
    { time: '2:00pm - 3:30pm', title: 'Power Lift', trainer: 'Derek Brown', duration: '55' },
    { time: '4:00pm - 5:30pm', title: 'Aerobics', trainer: 'Karen Lopez', duration: '45' },
  ],
  T: [
    { time: '7:30am - 9:00am', title: 'Yoga Basics', trainer: 'Sarah Miller', duration: '45' },
    { time: '9:30am - 11:00am', title: 'HIIT Circuit', trainer: 'James Wilson', duration: '40' },
    { time: '11:30am - 1:00pm', title: 'Spin Cycle', trainer: 'Alex Turner', duration: '45' },
    {
      time: '2:00pm - 3:30pm',
      title: 'Strength Training',
      trainer: 'Mike Johnson',
      duration: '60',
    },
    { time: '4:00pm - 5:30pm', title: 'Cardio Blast', trainer: 'Lisa Chen', duration: '30' },
  ],
  W: [
    { time: '7:30am - 9:00am', title: 'Boxing Basics', trainer: 'Carlos Rivera', duration: '60' },
    { time: '9:30am - 11:00am', title: 'Pilates Core', trainer: 'Emma Davis', duration: '50' },
    { time: '11:30am - 1:00pm', title: 'Yoga Basics', trainer: 'Sarah Miller', duration: '45' },
    { time: '2:00pm - 3:30pm', title: 'Aerobics', trainer: 'Karen Lopez', duration: '45' },
    { time: '4:00pm - 5:30pm', title: 'Power Lift', trainer: 'Derek Brown', duration: '55' },
  ],
  F: [
    {
      time: '7:30am - 9:00am',
      title: 'Strength Training',
      trainer: 'Mike Johnson',
      duration: '60',
    },
    { time: '9:30am - 11:00am', title: 'Cardio Blast', trainer: 'Lisa Chen', duration: '30' },
    { time: '11:30am - 1:00pm', title: 'Stretch & Flow', trainer: 'Nina Patel', duration: '30' },
    { time: '2:00pm - 3:30pm', title: 'HIIT Circuit', trainer: 'James Wilson', duration: '40' },
    { time: '4:00pm - 5:30pm', title: 'Spin Cycle', trainer: 'Alex Turner', duration: '45' },
  ],
}

const dayKeys: readonly string[] = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
const dayLabels: readonly string[] = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

function ScheduleCard({ time, title, trainer, duration }: Slot) {
  return (
    <div className="bg-white p-4 rounded shadow-sm border border-gray-100">
      <span className="text-xs text-text-meta font-semibold">{time}</span>
      <h4 className="text-sm font-bold mt-1">{title}</h4>
      <span className="text-xs text-text-meta">
        By {trainer} · {duration} min
      </span>
    </div>
  )
}

export function Schedule() {
  const [activeIdx, setActiveIdx] = useState(0)
  const activeDay: string = dayKeys[activeIdx]!
  const slots: Slot[] = scheduleData[activeDay]!

  return (
    <section className="py-20 bg-white" id="schedule">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-text-sub text-sm uppercase tracking-wider mb-2">Fitness Sched</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Schedule</h2>
          <p className="text-text-gray leading-relaxed">
            Plan your week with our comprehensive class schedule. Every day brings new energy.
          </p>
        </div>

        {/* Day tabs */}
        <div className="flex justify-center mb-8">
          {dayKeys.map((d, i) => (
            <button
              key={`${d}-${i}`}
              onClick={() => setActiveIdx(i)}
              className={`w-[14.25%] py-2.5 text-sm font-bold transition-colors ${
                i === activeIdx
                  ? 'bg-brand text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              aria-label={`Select ${dayLabels[i]}`}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Day pane */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {slots.map((slot: Slot, i: number) => (
            <ScheduleCard key={`${activeDay}-${i}`} {...slot} />
          ))}
        </div>
      </div>
    </section>
  )
}
