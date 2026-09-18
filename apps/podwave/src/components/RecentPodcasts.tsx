import { Headphones } from 'lucide-react'

const episodes = [
  {
    id: 8,
    title: 'Episode 08: Mastering Audio Production',
    author: 'Sarah Mitchell',
    date: '9 September 2024',
    duration: '58:12',
    description:
      'Learn the fundamentals of audio production, from microphone selection to post-processing techniques that make your podcast sound professional.',
    imageSeed: 'podwave-ep8',
  },
  {
    id: 7,
    title: 'Episode 07: Growing Your Audience',
    author: 'Sarah Mitchell',
    date: '2 September 2024',
    duration: '45:30',
    description:
      'Discover proven strategies for building and retaining a loyal podcast audience through social media, SEO, and community engagement.',
    imageSeed: 'podwave-ep7',
  },
  {
    id: 6,
    title: 'Episode 06: Storytelling in Podcasts',
    author: 'Sarah Mitchell',
    date: '26 August 2024',
    duration: '52:45',
    description:
      'Explore the art of narrative podcasting and how compelling storytelling can transform your episodes into must-listen content.',
    imageSeed: 'podwave-ep6',
  },
  {
    id: 5,
    title: 'Episode 05: monetization Strategies',
    author: 'Sarah Mitchell',
    date: '19 August 2024',
    duration: '41:18',
    description:
      'A comprehensive guide to podcast monetization including sponsorships, memberships, merchandise, and affiliate marketing.',
    imageSeed: 'podwave-ep5',
  },
  {
    id: 4,
    title: 'Episode 04: Equipment Guide for Beginners',
    author: 'Sarah Mitchell',
    date: '12 August 2024',
    duration: '37:55',
    description:
      'Everything you need to know about choosing the right podcast equipment on any budget, from starter kits to professional setups.',
    imageSeed: 'podwave-ep4',
  },
]

interface EpisodeCardProps {
  episode: (typeof episodes)[number]
}

function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <article className="mb-8 flex flex-col bg-white shadow-sm md:flex-row">
      <div
        className="h-48 w-full bg-cover bg-center md:h-auto md:w-64 md:flex-shrink-0"
        style={{
          backgroundImage: `url(https://picsum.photos/seed/${episode.imageSeed}/640/400)`,
        }}
        role="img"
        aria-label={`Episode ${episode.id} cover art`}
      />
      <div className="flex-1 p-6">
        <h3 className="mb-2 text-lg font-light text-heading">
          <a href="#" className="transition-colors hover:text-brand-red">
            {episode.title}
          </a>
        </h3>
        <p className="mb-3 text-xs text-body/50">
          {episode.author} / {episode.date} / {episode.duration}
        </p>
        <p className="mb-4 text-sm leading-relaxed text-body">{episode.description}</p>
        <div className="flex items-center gap-3 rounded bg-section-light px-4 py-3">
          <Headphones className="text-brand-red" size={16} />
          <div className="h-1 flex-1 rounded-full bg-gray-200">
            <div className="h-1 w-0 rounded-full bg-brand-red" />
          </div>
          <span className="text-xs text-body/60">0:00 / {episode.duration}</span>
        </div>
      </div>
    </article>
  )
}

export function RecentPodcasts() {
  return (
    <section className="bg-section-light py-16 md:py-20" id="episodes">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="mb-12 text-center text-2xl font-bold text-heading">Recent Podcasts</h2>

        {episodes.map((ep) => (
          <EpisodeCard key={ep.id} episode={ep} />
        ))}

        {/* Pagination */}
        <nav className="mt-8 text-center" aria-label="Episode pagination">
          <ul className="inline-flex items-center gap-1">
            <li>
              <span className="px-3 py-2 text-sm text-body/40">&lt;</span>
            </li>
            {[1, 2, 3, 4, 5].map((page) => (
              <li key={page}>
                <a
                  href="#"
                  className={`px-3 py-2 text-sm transition-colors ${
                    page === 1
                      ? 'bg-brand-red text-white'
                      : 'text-body hover:bg-brand-red hover:text-white'
                  }`}
                  aria-current={page === 1 ? 'page' : undefined}
                >
                  {page}
                </a>
              </li>
            ))}
            <li>
              <a href="#" className="px-3 py-2 text-sm text-body hover:text-brand-red">
                &gt;
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  )
}
