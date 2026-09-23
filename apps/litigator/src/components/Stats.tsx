const stats = [
  {
    value: '90+',
    label: 'Awards',
    description: 'Recognized excellence in legal practice and client service.',
  },
  {
    value: '3K+',
    label: 'Cases Won',
    description: 'Successful case outcomes across all practice areas.',
  },
  {
    value: '2K+',
    label: 'Clients',
    description: 'Trusted by thousands of individuals and businesses.',
  },
  {
    value: '200+',
    label: 'Attorneys',
    description: 'A network of experienced legal professionals.',
  },
] as const

export function Stats() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            <span className="text-primary-400">50 Years</span> of Experience in Various Cases
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <span className="text-4xl font-bold text-primary-400">{stat.value}</span>
              <h3 className="mt-2 text-lg font-semibold text-white">{stat.label}</h3>
              <p className="mt-2 text-sm text-gray-400">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
