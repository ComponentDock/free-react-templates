const stats = [
  {
    number: '99.55%',
    title: 'Ratings 4.9 from Users',
    description: 'Far far away, behind the word mountains.',
  },
  {
    number: '98,000+',
    title: 'Happy Customers',
    description: 'Far far away, behind the word mountains.',
  },
  {
    number: '99.99%',
    title: 'Server Uptime',
    description: 'Far far away, behind the word mountains.',
  },
  {
    number: '1M+',
    title: 'Loved by Customers',
    description: 'Far far away, behind the word mountains.',
  },
]

export function Achievements() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.title} className="text-center">
              <div className="mb-2 text-3xl font-bold text-brand md:text-4xl">{stat.number}</div>
              <h4 className="mb-2 text-sm font-bold text-heading">{stat.title}</h4>
              <p className="text-sm text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
