const stats = [
  {
    value: '20',
    suffix: '+',
    description: 'List of any and all companies related to agribusiness.',
  },
  {
    value: '10',
    suffix: 'K',
    description: 'List of any and all companies related to agribusiness.',
  },
  {
    value: '12',
    suffix: '+',
    description: 'List of any and all companies related to agribusiness.',
  },
  {
    value: '280',
    suffix: '+',
    description: 'List of any and all companies related to agribusiness.',
  },
]

export function Stats() {
  return (
    <section className="border-b border-gray-200 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.value} className="text-center">
              <div className="mb-2">
                <span className="text-4xl font-bold text-leaf-500 lg:text-5xl">{stat.value}</span>
                <span className="text-2xl font-bold text-leaf-500">{stat.suffix}</span>
              </div>
              <p className="text-sm text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
