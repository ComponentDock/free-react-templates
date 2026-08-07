const milestones = [
  { value: '14', label: 'Years of Experience' },
  { value: '237', label: 'Projects Taken' },
  { value: '11k', label: 'Twitter Followers' },
  { value: '12', label: 'Awards Won' },
] as const

export function Milestones() {
  return (
    <section className="border-y border-line bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4">
        {milestones.map((milestone) => (
          <div key={milestone.label} className="text-center">
            <span className="text-5xl font-black text-ink dark:text-white">{milestone.value}</span>
            <p className="mt-2 text-sm font-bold uppercase tracking-wider text-mist dark:text-gray-400">
              {milestone.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
