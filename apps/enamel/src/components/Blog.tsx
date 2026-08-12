import { MessageSquare } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { SectionHeading } from './SectionHeading'

const posts: ReadonlyArray<{
  title: string
  excerpt: string
  day: string
  month: string
  year: string
  admin: string
  comments: string
  image: string
}> = [
  {
    title: 'Scary Thing That You Don\u2019t Get Enough Sleep',
    excerpt:
      'Sleep and oral health are closer than you think — here is what your gums are trying to tell you.',
    day: '18',
    month: 'September',
    year: '2019',
    admin: 'Admin 3',
    comments: '19',
    image: 'https://picsum.photos/seed/enamel-blog-1/600/400',
  },
  {
    title: 'Five Foods That Naturally Whiten Your Teeth',
    excerpt:
      'Crunchy, fibrous and bright — the everyday foods that help keep your smile camera-ready.',
    day: '22',
    month: 'October',
    year: '2019',
    admin: 'Admin 7',
    comments: '12',
    image: 'https://picsum.photos/seed/enamel-blog-2/600/400',
  },
  {
    title: 'Braces at Any Age: Why Adults Are Smiling More',
    excerpt:
      'Clear aligners have made orthodontics discreet — and adults are the fastest-growing patients.',
    day: '03',
    month: 'November',
    year: '2019',
    admin: 'Admin 2',
    comments: '27',
    image: 'https://picsum.photos/seed/enamel-blog-3/600/400',
  },
]

/** "Recent Blog" — three post cards with a blue date box on the image and a
    white text box below (the source .blog-entry cards). */
export function Blog() {
  return (
    <section id="blog" className="bg-cloud py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subheading="Blog"
          title="Recent Blog"
          intro="Tips, news and stories from the Enamel team — fresh from the clinic."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="bg-white">
              <div className="relative">
                <img src={post.image} alt="" className="h-56 w-full object-cover" />
                <div className="absolute left-0 top-0 bg-primary p-3 text-center text-white">
                  <span className="block text-3xl font-light leading-none">{post.day}</span>
                  <span className="mt-1 block text-[13px]">{post.month}</span>
                  <span className="block text-[13px]">{post.year}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-normal leading-snug text-ink">
                  <a href="#blog" className="transition-colors hover:text-primary">
                    {post.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between">
                  <ButtonLink
                    href="#blog"
                    size="sm"
                    className="h-auto rounded bg-primary px-4 py-2 text-sm text-white hover:bg-primary-700"
                  >
                    Read More
                  </ButtonLink>
                  <p className="flex items-center gap-3 text-sm text-mist">
                    <span>{post.admin}</span>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="h-3.5 w-3.5" aria-hidden="true" />
                      {post.comments}
                    </span>
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
