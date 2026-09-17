import { useState } from 'react'

const topics = [
  {
    id: 1,
    title: 'Marketing Intro',
    heading: 'Marketing 101 — Studies for Beginners',
    text: 'Discover the fundamentals of modern marketing, from audience research to campaign strategy. Learn how to identify your target market and craft compelling messaging that resonates.',
  },
  {
    id: 2,
    title: 'Marketing Strategy',
    heading: 'Strategic Marketing Planning',
    text: 'Dive deep into strategic frameworks that drive growth. Explore case studies from leading brands and learn how to build a marketing plan that delivers measurable results.',
  },
  {
    id: 3,
    title: 'Cyber Marketing',
    heading: 'Digital Security in Marketing',
    text: 'Understand the intersection of cybersecurity and digital marketing. Protect your campaigns and customer data while maintaining engagement and trust.',
  },
  {
    id: 4,
    title: 'Online Strategy',
    heading: 'Online Strategy Essentials',
    text: 'Master the art of online marketing channels. From SEO and social media to email campaigns and paid advertising, build a cohesive digital presence.',
  },
  {
    id: 5,
    title: 'Stories',
    heading: 'Brand Storytelling Workshop',
    text: 'Learn how to craft authentic brand narratives that connect with audiences. Explore the power of storytelling across different media and platforms.',
  },
  {
    id: 6,
    title: 'Special Guest',
    heading: 'Special Guest Keynote',
    text: 'Hear from industry luminaries who are shaping the future of marketing. Gain exclusive insights into emerging trends and innovative approaches.',
  },
]

export interface TopicsProps {
  className?: string
}

export function Topics({ className }: TopicsProps) {
  const [active, setActive] = useState(0)
  const current = topics[active]!

  return (
    <section className={`bg-white py-20 ${className ?? ''}`}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary-400">
            See what&apos;s all about
          </p>
          <h2 className="mt-2 text-3xl font-bold text-navy md:text-4xl">The Topics</h2>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {topics.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`rounded px-4 py-2 text-sm font-medium transition-colors ${
                i === active
                  ? 'bg-primary-400 text-white'
                  : 'bg-gray-100 text-body hover:bg-gray-200'
              }`}
              aria-pressed={i === active}
            >
              0{t.id}. {t.title}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-5">
          <div className="md:col-span-3">
            <h3 className="text-xl font-bold text-navy">{current.heading}</h3>
            <p className="mt-4 leading-relaxed text-body">{current.text}</p>
            <a
              href="#"
              className="mt-4 inline-block text-sm font-semibold text-primary-400 underline decoration-primary-400/30 transition-colors hover:text-primary-500"
            >
              Read More
            </a>
          </div>
          <div className="md:col-span-2">
            <img
              src={`https://picsum.photos/seed/topic${current.id}/600/400`}
              alt={current.heading}
              className="w-full rounded-lg object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
