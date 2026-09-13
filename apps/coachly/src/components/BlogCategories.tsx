const CATEGORIES = [
  {
    title: 'Social Life',
    desc: 'Build meaningful relationships and social skills that enhance your personal and professional life.',
    seed: 'coachly-social',
  },
  {
    title: 'Money & Finance',
    desc: 'Master financial literacy and develop strategies for long-term wealth building.',
    seed: 'coachly-finance',
  },
  {
    title: 'Motivation',
    desc: 'Stay inspired with proven techniques to maintain drive and focus on your goals.',
    seed: 'coachly-motivation',
  },
]

export function BlogCategories() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <div key={cat.title}>
              <img
                src={`https://picsum.photos/seed/${cat.seed}/400/250`}
                alt={cat.title}
                className="mb-4 w-full rounded-lg object-cover"
              />
              <h3 className="mb-2 text-xl font-bold text-gray-900">{cat.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
