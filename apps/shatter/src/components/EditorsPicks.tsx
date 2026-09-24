import { PostCard } from './PostCard'

const editorsPosts = [
  {
    image: 'https://picsum.photos/seed/shatter-ep1/400/300',
    category: 'Technology',
    date: 'Nov 18, 2026',
    headline: 'AI Revolution in Healthcare Diagnostics',
  },
  {
    image: 'https://picsum.photos/seed/shatter-ep2/400/300',
    category: 'Business',
    date: 'Nov 17, 2026',
    headline: 'Startups Reshaping the Fintech Landscape',
  },
  {
    image: 'https://picsum.photos/seed/shatter-ep3/400/300',
    category: 'World',
    date: 'Nov 16, 2026',
    headline: 'Climate Summit Yields New Commitments',
  },
  {
    image: 'https://picsum.photos/seed/shatter-ep4/400/300',
    category: 'Culture',
    date: 'Nov 15, 2026',
    headline: 'The Rise of Independent Cinema',
  },
]

export function EditorsPicks() {
  return (
    <section className="bg-paper py-10" aria-labelledby="editors-heading">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 id="editors-heading" className="mb-6 font-display text-2xl font-bold text-ink">
          Editors' Picks
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {editorsPosts.map((post) => (
            <PostCard key={post.headline} {...post} variant="horizontal" />
          ))}
        </div>
      </div>
    </section>
  )
}
