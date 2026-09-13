import { Play } from 'lucide-react'

const EPISODES = [
  {
    title: 'Episode 02: Dealing With Technical Support',
    category: 'Music, Radio',
    duration: '40 mins',
    date: '16 Feb 2019',
    imageSeed: 'sonance-ep-2',
  },
  {
    title: 'Episode 03: Stu Unger — Rise And Fall Of A Poker Genius',
    category: 'Music, Radio',
    duration: '40 mins',
    date: '16 Feb 2019',
    imageSeed: 'sonance-ep-3',
  },
  {
    title: 'Episode 04: Become A Travel Pro In One Easy Lesson',
    category: 'Music, Radio',
    duration: '40 mins',
    date: '16 Feb 2019',
    imageSeed: 'sonance-ep-4',
  },
  {
    title: 'Episode 05: There Is No Competition — Only Opportunities',
    category: 'Music, Radio',
    duration: '40 mins',
    date: '16 Feb 2019',
    imageSeed: 'sonance-ep-5',
  },
  {
    title: 'Episode 06: How To Put Movies On Your Phone',
    category: 'Music, Radio',
    duration: '40 mins',
    date: '16 Feb 2019',
    imageSeed: 'sonance-ep-6',
  },
  {
    title: 'Episode 07: Creative Strategies For Growth',
    category: 'Music, Radio',
    duration: '40 mins',
    date: '16 Feb 2019',
    imageSeed: 'sonance-ep-7',
  },
]

export function Episodes() {
  return (
    <section aria-label="Latest episodes" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-extrabold text-ink">Latest Episodes</h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EPISODES.map((ep) => (
            <article
              key={ep.imageSeed}
              className="group overflow-hidden rounded-xl bg-mist transition-shadow hover:shadow-lg"
            >
              <div className="relative">
                <img
                  src={`https://picsum.photos/seed/${ep.imageSeed}/400/240`}
                  alt={`${ep.title} artwork`}
                  className="h-48 w-full object-cover"
                  loading="lazy"
                />
                <button
                  type="button"
                  aria-label={`Play ${ep.title}`}
                  className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary-400 text-white opacity-0 shadow-lg transition-all group-hover:opacity-100"
                >
                  <Play size={16} fill="currentColor" />
                </button>
              </div>

              <div className="p-5">
                <p className="text-xs font-semibold text-primary-400">
                  {ep.category} · {ep.duration}
                </p>
                <h3 className="mt-2 text-base font-bold leading-snug text-ink">{ep.title}</h3>
                <p className="mt-2 text-xs text-smoke">{ep.date}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
