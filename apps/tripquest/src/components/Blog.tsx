import { useState } from 'react'
import { SectionTitle } from './SectionTitle'
import { SliderControls } from './Slider'

const POSTS = [
  {
    title: 'Low Cost Advertising',
    excerpt:
      'Where the money actually goes on a mid-range trip, and which three line items you can cut first.',
    date: '31st January, 2018',
    seed: 'tripquest-blog-1',
  },
  {
    title: 'Creative Outdoor Ads',
    excerpt:
      'Hiking routes that stay quiet in high season, mapped by the guides who walk them weekly.',
    date: '31st January, 2018',
    seed: 'tripquest-blog-2',
  },
  {
    title: "It's Classified How To Utilize Free",
    excerpt:
      'Free museum days, city cards that pay for themselves, and the passes to skip entirely.',
    date: '31st January, 2018',
    seed: 'tripquest-blog-3',
  },
  {
    title: 'Low Cost Advertising',
    excerpt: 'Shoulder-season pricing across the coast: what opening a week early really changes.',
    date: '31st January, 2018',
    seed: 'tripquest-blog-4',
  },
  {
    title: 'Creative Outdoor Ads',
    excerpt:
      'Packing for three climates in one carry-on, tested on a two-week island-to-alpine run.',
    date: '31st January, 2018',
    seed: 'tripquest-blog-5',
  },
  {
    title: "It's Classified How To Utilize Free",
    excerpt:
      'Getting from the runway to the resort without a taxi meter: rail, shuttle and ferry times.',
    date: '31st January, 2018',
    seed: 'tripquest-blog-6',
  },
] as const

const TAGS = ['Travel', 'Life Style'] as const
const PAGE_SIZE = 3

/* Carousel of post cards — photo, tag chips, headline, excerpt and date —
   paged three at a time. */
export function Blog() {
  const [page, setPage] = useState(0)
  const pageCount = Math.ceil(POSTS.length / PAGE_SIZE)
  const visible = POSTS.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)

  return (
    <section id="blog" className="py-[120px]">
      <SectionTitle
        title="Latest from Our Blog"
        subtitle="Field notes from the planners: costs, routes and the small decisions that shape a trip."
      />
      <div className="mx-auto grid max-w-[1140px] gap-[30px] px-4 md:grid-cols-3">
        {visible.map((post) => (
          <article key={post.seed}>
            <img
              src={`https://picsum.photos/seed/${post.seed}/600/400`}
              alt={post.title}
              className="h-[220px] w-full object-cover"
            />
            <ul className="mt-[20px] flex items-center gap-[10px]">
              {TAGS.map((tag) => (
                <li key={tag}>
                  <a
                    href="#blog"
                    className="border border-line px-[12px] py-[3px] text-[12px] text-body transition-colors duration-300 hover:border-brand hover:text-brand"
                  >
                    {tag}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="mt-[14px] text-[20px] font-semibold text-ink">{post.title}</h4>
            <p className="mt-[12px] text-[15px] leading-[1.8] text-body">{post.excerpt}</p>
            <p className="mt-[12px] text-[13px] text-body/80">{post.date}</p>
          </article>
        ))}
      </div>
      <p data-testid="blog-page" className="sr-only">
        Page {page + 1} of {pageCount}
      </p>
      <SliderControls
        label="blog page"
        onPrevious={() => setPage((current) => (current - 1 + pageCount) % pageCount)}
        onNext={() => setPage((current) => (current + 1) % pageCount)}
      />
    </section>
  )
}
