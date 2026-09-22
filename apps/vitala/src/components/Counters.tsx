const stats = [
  { value: '30K', label: 'Years of Experience' },
  { value: '2K+', label: 'Blood Donors' },
  { value: '5K+', label: 'Patients Cured' },
  { value: '20K+', label: 'Staff Members' },
]

export function Counters() {
  return (
    <section
      className="relative py-20"
      style={{
        backgroundImage:
          'linear-gradient(rgba(11,169,255,0.9), rgba(86,217,255,0.9)), url(https://picsum.photos/seed/vitala-counter/1600/400)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center text-white">
              <h3 className="mb-2 text-4xl font-bold md:text-5xl">{stat.value}</h3>
              <p className="text-sm font-medium uppercase tracking-wide text-white/90">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
