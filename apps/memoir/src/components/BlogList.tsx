import { ArrowRight, Calendar, Folder, MessageCircle } from 'lucide-react'

const posts = [
  {
    seed: 'memoir-1',
    title: 'A Loving Heart is the Truest Wisdom',
    category: 'Lifestyle',
    date: 'June 28, 2019',
    comments: '5 Comment',
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    seed: 'memoir-2',
    title: 'Great Things Never Came from Comfort Zone',
    category: 'Travel',
    date: 'June 21, 2019',
    comments: '3 Comment',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
  {
    seed: 'memoir-3',
    title: 'Paths Are Made by Walking',
    category: 'Nature',
    date: 'June 14, 2019',
    comments: '7 Comment',
    excerpt:
      'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed.',
  },
  {
    seed: 'memoir-4',
    title: 'The Secret of Getting Ahead is Getting Started',
    category: 'Lifestyle',
    date: 'June 7, 2019',
    comments: '4 Comment',
    excerpt:
      'The European languages are members of the same family — their separate existence is a myth.',
  },
  {
    seed: 'memoir-5',
    title: 'Slow Mornings, Strong Coffee, Quiet Thoughts',
    category: 'Travel',
    date: 'May 30, 2019',
    comments: '6 Comment',
    excerpt:
      'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  },
  {
    seed: 'memoir-6',
    title: 'Learning to Love the In-Between Days',
    category: 'Lifestyle',
    date: 'May 23, 2019',
    comments: '2 Comment',
    excerpt:
      'The quick, brown fox jumps over a lazy dog — but the dog only yawns and stays where it is.',
  },
  {
    seed: 'memoir-7',
    title: 'Packing Light, Living Lighter',
    category: 'Travel',
    date: 'May 16, 2019',
    comments: '8 Comment',
    excerpt:
      'A wonderful serenity has taken possession of my entire soul, like these sweet mornings.',
  },
  {
    seed: 'memoir-8',
    title: 'The Art of Doing One Thing at a Time',
    category: 'Nature',
    date: 'May 9, 2019',
    comments: '5 Comment',
    excerpt:
      'The road to the cottage wound through birch woods and past a lake that never quite froze.',
  },
  {
    seed: 'memoir-9',
    title: 'Why We Walk the Same Streets Twice',
    category: 'Travel',
    date: 'May 2, 2019',
    comments: '9 Comment',
    excerpt:
      'Yet another reason to wander: the same street at dusk is not the street you saw at noon.',
  },
  {
    seed: 'memoir-10',
    title: 'Letters to My Younger Self',
    category: 'Lifestyle',
    date: 'April 25, 2019',
    comments: '11 Comment',
    excerpt:
      'And when the night is cloudy there is still a light that shines on me, shine until tomorrow.',
  },
  {
    seed: 'memoir-11',
    title: 'Finding Stillness Between Deadlines',
    category: 'Nature',
    date: 'April 18, 2019',
    comments: '3 Comment',
    excerpt:
      'The seasons turned quietly outside the window while the city argued with itself inside.',
  },
  {
    seed: 'memoir-12',
    title: 'A Field Guide to Tiny Joys',
    category: 'Lifestyle',
    date: 'April 11, 2019',
    comments: '6 Comment',
    excerpt: 'Consider the daisy: it opens for the sun without asking whether the sun will stay.',
  },
] as const

export function BlogList() {
  return (
    <div>
      {posts.map((post) => (
        <article key={post.seed} className="mb-12 flex flex-col items-center gap-6 md:flex-row">
          <a href="#" className="shrink-0">
            <img
              src={`https://picsum.photos/seed/${post.seed}/300/300`}
              alt={post.title}
              loading="lazy"
              className="h-38 w-38 rounded-full object-cover"
            />
          </a>
          <div className="min-w-0 flex-1 text-center md:text-left">
            <h3 className="font-serif text-2xl font-semibold text-ink-900">
              <a href="#" className="transition-colors hover:text-sky-500">
                {post.title}
              </a>
            </h3>
            <p className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-sm text-meta-500 md:justify-start">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                {post.date}
              </span>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-body-900 transition-colors hover:text-sky-500"
              >
                <Folder className="h-4 w-4" aria-hidden="true" />
                {post.category}
              </a>
              <span className="inline-flex items-center gap-1.5">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                {post.comments}
              </span>
            </p>
            <p className="mt-4 text-body-900">{post.excerpt}</p>
            <a
              href="#"
              className="mt-5 inline-flex items-center gap-2 font-medium text-sky-500 transition-colors hover:text-sky-700"
            >
              Read More <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </article>
      ))}
    </div>
  )
}
