import { cn } from '@free-react-templates/ui'

const portfolioItems = [
  {
    title: 'Reality',
    date: 'January 2024',
    image: 'https://picsum.photos/seed/exposely-p1/600/400',
    bgText: 'Reality',
  },
  {
    title: 'Light & Shadow',
    date: 'February 2024',
    image: 'https://picsum.photos/seed/exposely-p2/600/500',
    bgText: 'Photography',
  },
  {
    title: 'Perspectives',
    date: 'March 2024',
    image: 'https://picsum.photos/seed/exposely-p3/600/350',
    bgText: '',
  },
  {
    title: 'Hope',
    date: 'April 2024',
    image: 'https://picsum.photos/seed/exposely-p4/600/450',
    bgText: 'Hope',
  },
  {
    title: 'Urban Stories',
    date: 'May 2024',
    image: 'https://picsum.photos/seed/exposely-p5/600/380',
    bgText: 'Future',
  },
  {
    title: 'Serenity',
    date: 'June 2024',
    image: 'https://picsum.photos/seed/exposely-p6/600/420',
    bgText: '',
  },
  {
    title: 'Horizons',
    date: 'July 2024',
    image: 'https://picsum.photos/seed/exposely-p7/600/360',
    bgText: '',
  },
] as const

export function Gallery() {
  return (
    <section className="bg-white px-6 py-24 md:px-12">
      <div className="mx-auto max-w-5xl">
        <p className="mb-16 text-center text-lg leading-relaxed text-gray-600">
          In photography there is a reality so subtle that it becomes more{' '}
          <span className="font-bold text-primary-dark">real</span> than reality.
        </p>

        <ul aria-label="Portfolio" className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {portfolioItems.map((item, i) => (
            <li
              key={item.title}
              className={cn(
                'relative overflow-hidden',
                i === 0 && 'md:col-span-2',
                i === 2 && 'md:col-span-2',
              )}
            >
              <img src={item.image} alt={item.title} className="h-64 w-full object-cover" />

              {item.bgText && (
                <span className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-bold text-white/20 select-none md:text-8xl">
                  {item.bgText}
                </span>
              )}

              <div className="mt-3">
                <p className="text-xs text-gray-400">{item.date}</p>
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
