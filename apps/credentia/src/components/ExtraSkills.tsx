const skills = [
  { percentage: 75, label: 'Inspiration' },
  { percentage: 83, label: 'Creativity' },
]

const stats = [
  {
    value: '14',
    label: 'Years of Experience',
    iconPath:
      'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
  },
  {
    value: '120+',
    label: 'Happy Clients',
    iconPath:
      'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z',
  },
  {
    value: '15',
    label: 'Awards Won',
    iconPath:
      'M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z',
  },
]

export function ExtraSkills() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-dark mb-16 relative inline-block after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-dark">
          Extra Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {skills.map((skill) => (
            <div key={skill.label} className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <svg className="w-32 h-32 -rotate-90" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="54" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                  <circle
                    cx="60"
                    cy="60"
                    r="54"
                    fill="none"
                    stroke="#40424a"
                    strokeWidth="8"
                    strokeDasharray={`${(skill.percentage / 100) * 339.292} 339.292`}
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-dark">
                  {skill.percentage}%
                </span>
              </div>
              <h3 className="text-sm font-bold text-dark uppercase tracking-wide">{skill.label}</h3>
              <p className="text-sm text-muted mt-1">Etiam nec odio vestibulum est.</p>
            </div>
          ))}
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center rounded-full bg-light">
                <svg
                  className="w-10 h-10 text-dark"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d={stat.iconPath} />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-dark">{stat.value}</h3>
              <p className="text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
