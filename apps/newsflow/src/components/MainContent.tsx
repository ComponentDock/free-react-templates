interface ContentCardProps {
  title: string
  category: string
  categoryColor: string
  time: string
  image: string
  large?: boolean
}

function ContentCard({ title, category, categoryColor, time, image, large }: ContentCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-lg" aria-label={title}>
      <img
        src={image}
        alt={title}
        className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
          large ? 'h-80' : 'h-40'
        }`}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 p-4">
        <span
          className="mb-2 inline-block rounded px-2 py-0.5 text-xs font-bold uppercase text-white"
          style={{ backgroundColor: categoryColor }}
        >
          {category}
        </span>
        <h2 className={`font-bold leading-tight text-white ${large ? 'text-2xl' : 'text-sm'}`}>
          {title}
        </h2>
        <time className="mt-1 block text-xs text-gray-300">{time}</time>
      </div>
    </article>
  )
}

const FEATURE = {
  title: '10 Tips to travel in style for less',
  category: 'Travel',
  categoryColor: '#e53935',
  time: '1 day ago',
  image: 'https://picsum.photos/seed/newsflow-feat/800/400',
}

const SIDEBAR = [
  {
    title: 'Superstar spotted with new boyfriend',
    category: 'Celebs',
    categoryColor: '#43a047',
    time: '1 day ago',
    image: 'https://picsum.photos/seed/newsflow-s1/400/200',
  },
  {
    title: 'Festival looks for all the party people',
    category: '4 Fun',
    categoryColor: '#ff9800',
    time: '1 day ago',
    image: 'https://picsum.photos/seed/newsflow-s2/400/200',
  },
]

export function MainContent() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8" aria-label="Featured stories">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ContentCard {...FEATURE} large />
        </div>
        <div className="flex flex-col gap-4">
          {SIDEBAR.map((card) => (
            <ContentCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
