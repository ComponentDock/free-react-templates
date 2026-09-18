const hours = [
  { day: 'Monday', time: '09:30 AM — 07:30 PM' },
  { day: 'Tuesday', time: '09:30 AM — 07:30 PM' },
  { day: 'Wednesday', time: '09:30 AM — 07:30 PM' },
  { day: 'Thursday', time: '09:30 AM — 07:30 PM' },
  { day: 'Friday', time: '09:30 AM — 07:30 PM' },
  { day: 'Saturday', time: '09:30 AM — 04:30 PM' },
  { day: 'Sunday', time: 'Closed' },
]

const skills = [
  { name: 'Breathing', percent: 60 },
  { name: 'Meditation', percent: 87 },
  { name: 'Flexibility', percent: 70 },
]

export function Timetable() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Working Hours */}
          <div>
            <span className="mb-2 block text-xs font-medium uppercase tracking-[1px] text-zen-muted">
              Beginner & Advanced
            </span>
            <h3 className="mb-8 text-2xl font-bold uppercase tracking-[2px] text-zen-purple">
              Working Hours
            </h3>
            <ul className="space-y-3">
              {hours.map((item) => (
                <li
                  key={item.day}
                  className="flex items-center justify-between border-b border-gray-200 pb-3"
                >
                  <span className="font-semibold text-zen-purple">{item.day}</span>
                  <span className="text-zen-muted">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills / Progress */}
          <div>
            <span className="mb-2 block text-xs font-medium uppercase tracking-[1px] text-zen-muted">
              Beginner & Advanced
            </span>
            <h3 className="mb-6 text-2xl font-bold uppercase tracking-[2px] text-zen-purple">
              Meditation Sessions
            </h3>
            <p className="mb-8 leading-relaxed text-zen-muted">
              Our meditation curriculum covers three core pillars: controlled
              breathing techniques, focused meditation practices, and physical
              flexibility work. Each pillar is guided by certified instructors
              who adapt sessions to your progress level.
            </p>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-zen-purple">{skill.name}</span>
                    <span className="text-sm text-zen-muted">{skill.percent}%</span>
                  </div>
                  <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-zen-gradient-from to-zen-gradient-to"
                      style={{ width: `${skill.percent}%` }}
                      role="progressbar"
                      aria-valuenow={skill.percent}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
