const posts = [
  {
    title: 'Even the all-powerful Pointing has no control about the blind texts',
    image: 'https://picsum.photos/seed/archway-blog1/400/300',
    date: 'Sep. 20, 2018',
    author: 'Admin',
    comments: 3,
  },
  {
    title: 'Even the all-powerful Pointing has no control about the blind texts',
    image: 'https://picsum.photos/seed/archway-blog2/400/300',
    date: 'Sep. 20, 2018',
    author: 'Admin',
    comments: 3,
  },
  {
    title: 'Even the all-powerful Pointing has no control about the blind texts',
    image: 'https://picsum.photos/seed/archway-blog3/400/300',
    date: 'Sep. 20, 2018',
    author: 'Admin',
    comments: 3,
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-ink sm:text-4xl">Recent Blog</h2>
          <p className="mx-auto max-w-2xl text-[#6c757d]">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-lg bg-white shadow-sm">
              <img src={post.image} alt={post.title} className="aspect-[4/3] w-full object-cover" />
              <div className="p-6">
                <div className="mb-3 flex gap-4 text-sm text-mist">
                  <span>{post.date}</span>
                  <span>{post.author}</span>
                  <span>{post.comments} comments</span>
                </div>
                <h3 className="font-semibold text-ink">{post.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
