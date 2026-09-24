import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon } from './social-icons'

const tabs = ['All', 'Lifestyle', 'Travel', 'Fashion', 'Sports', 'Technology'] as const

type Tab = (typeof tabs)[number]

const allArticles: Record<Tab, { category: string; title: string; image: string }[]> = {
  All: [
    {
      category: 'Lifestyle',
      title: 'Morning Routines That Boost Productivity All Day',
      image: 'https://picsum.photos/seed/frontpage-wn1/400/300',
    },
    {
      category: 'Travel',
      title: 'Exploring the Hidden Temples of Kyoto, Japan',
      image: 'https://picsum.photos/seed/frontpage-wn2/400/300',
    },
    {
      category: 'Fashion',
      title: 'Summer 2026 Color Trends You Need to Know',
      image: 'https://picsum.photos/seed/frontpage-wn3/400/300',
    },
    {
      category: 'Sports',
      title: 'How Young Athletes Are Redefining Professional Tennis',
      image: 'https://picsum.photos/seed/frontpage-wn4/400/300',
    },
  ],
  Lifestyle: [
    {
      category: 'Lifestyle',
      title: 'Morning Routines That Boost Productivity All Day',
      image: 'https://picsum.photos/seed/frontpage-wn1/400/300',
    },
    {
      category: 'Lifestyle',
      title: 'Home Office Design Tips for Maximum Focus',
      image: 'https://picsum.photos/seed/frontpage-wn5/400/300',
    },
    {
      category: 'Lifestyle',
      title: 'The Art of Slow Living in a Fast-Paced World',
      image: 'https://picsum.photos/seed/frontpage-wn6/400/300',
    },
    {
      category: 'Lifestyle',
      title: 'Mindfulness Practices for Busy Professionals',
      image: 'https://picsum.photos/seed/frontpage-wn7/400/300',
    },
  ],
  Travel: [
    {
      category: 'Travel',
      title: 'Exploring the Hidden Temples of Kyoto, Japan',
      image: 'https://picsum.photos/seed/frontpage-wn2/400/300',
    },
    {
      category: 'Travel',
      title: 'Budget-Friendly European Destinations for 2026',
      image: 'https://picsum.photos/seed/frontpage-wn8/400/300',
    },
    {
      category: 'Travel',
      title: 'Island Hopping in the Philippines: A Complete Guide',
      image: 'https://picsum.photos/seed/frontpage-wn9/400/300',
    },
    {
      category: 'Travel',
      title: 'Northern Lights: Best Places to Witness the Aurora',
      image: 'https://picsum.photos/seed/frontpage-wn10/400/300',
    },
  ],
  Fashion: [
    {
      category: 'Fashion',
      title: 'Summer 2026 Color Trends You Need to Know',
      image: 'https://picsum.photos/seed/frontpage-wn3/400/300',
    },
    {
      category: 'Fashion',
      title: 'Sustainable Denim: Brands Leading the Charge',
      image: 'https://picsum.photos/seed/frontpage-wn11/400/300',
    },
    {
      category: 'Fashion',
      title: 'Vintage Revival: 90s Fashion Is Back',
      image: 'https://picsum.photos/seed/frontpage-wn12/400/300',
    },
    {
      category: 'Fashion',
      title: 'Street Style Stars: What They Are Wearing This Season',
      image: 'https://picsum.photos/seed/frontpage-wn13/400/300',
    },
  ],
  Sports: [
    {
      category: 'Sports',
      title: 'How Young Athletes Are Redefining Professional Tennis',
      image: 'https://picsum.photos/seed/frontpage-wn4/400/300',
    },
    {
      category: 'Sports',
      title: 'Inside the World of Competitive Rock Climbing',
      image: 'https://picsum.photos/seed/frontpage-wn14/400/300',
    },
    {
      category: 'Sports',
      title: 'Marathon Training: From Couch to 26.2 Miles',
      image: 'https://picsum.photos/seed/frontpage-wn15/400/300',
    },
    {
      category: 'Sports',
      title: 'Women in Football: Breaking Barriers on the Pitch',
      image: 'https://picsum.photos/seed/frontpage-wn16/400/300',
    },
  ],
  Technology: [
    {
      category: 'Technology',
      title: 'AI Assistants: How They Are Changing Daily Life',
      image: 'https://picsum.photos/seed/frontpage-wn17/400/300',
    },
    {
      category: 'Technology',
      title: 'The Rise of Foldable Devices in 2026',
      image: 'https://picsum.photos/seed/frontpage-wn18/400/300',
    },
    {
      category: 'Technology',
      title: 'Green Tech Innovations Saving the Planet',
      image: 'https://picsum.photos/seed/frontpage-wn19/400/300',
    },
    {
      category: 'Technology',
      title: 'Cybersecurity Tips for Remote Workers',
      image: 'https://picsum.photos/seed/frontpage-wn20/400/300',
    },
  ],
}

const socials = [
  { label: 'Facebook', Icon: FacebookIcon, fans: '24.5K', color: 'bg-blue-600' },
  { label: 'Twitter', Icon: TwitterIcon, fans: '18.2K', color: 'bg-sky-500' },
  { label: 'Instagram', Icon: InstagramIcon, fans: '32.1K', color: 'bg-pink-500' },
  { label: 'YouTube', Icon: YoutubeIcon, fans: '12.8K', color: 'bg-red-600' },
]

function Badge({ label }: { label: string }) {
  return (
    <span className="inline-block bg-brand px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white">
      {label}
    </span>
  )
}

export function WhatsNew() {
  const [activeTab, setActiveTab] = useState<Tab>('All')
  const articles = allArticles[activeTab]

  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-6 text-2xl font-bold uppercase tracking-wide text-heading">
          What&apos;s New
        </h2>

        <div className="mb-8 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={cn(
                'rounded border px-4 py-1.5 text-xs font-bold uppercase tracking-[3px] transition-colors',
                activeTab === tab
                  ? 'border-brand bg-brand text-white'
                  : 'border-gray-300 bg-white text-body hover:border-brand hover:text-brand',
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
          {/* Articles grid */}
          <div className="grid gap-6 sm:grid-cols-2" role="region" aria-label="News articles">
            {articles.map((article) => (
              <article key={article.title} className="group">
                <img
                  src={article.image}
                  alt={article.title}
                  className="aspect-[4/3] w-full rounded object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="mt-3">
                  <Badge label={article.category} />
                  <h3 className="mt-2 text-sm font-bold leading-snug text-heading">
                    {article.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Follow Us */}
            <div className="rounded border border-gray-200 p-5">
              <h3 className="mb-4 text-lg font-bold text-heading">Follow Us</h3>
              <ul className="space-y-3">
                {socials.map(({ label, Icon, fans, color }) => (
                  <li key={label}>
                    <a
                      href={`https://${label.toLowerCase()}.com`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow us on ${label}`}
                      className="flex items-center gap-3"
                    >
                      <span
                        className={cn(
                          'flex h-10 w-10 items-center justify-center rounded text-white',
                          color,
                        )}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <span className="block text-sm font-bold text-heading">{label}</span>
                        <span className="text-xs text-body">{fans} Fans</span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ad poster */}
            <div>
              <img
                src="https://picsum.photos/seed/frontpage-adside/280/400"
                alt="Side advertisement"
                className="w-full rounded object-cover"
                loading="lazy"
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
