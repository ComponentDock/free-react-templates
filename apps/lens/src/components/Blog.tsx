const posts = [
  {
    id: 1,
    title: 'My New Photography Has Been Featured in Forbes',
    date: 'Jan 18, 2024',
    image: 'https://picsum.photos/seed/lens-blog-1/500/300',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis aliquid doloremque qui, saepe alias eum?',
  },
  {
    id: 2,
    title: 'Behind the Scenes of My Latest Exhibition',
    date: 'Feb 5, 2024',
    image: 'https://picsum.photos/seed/lens-blog-2/500/300',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis aliquid doloremque qui, saepe alias eum?',
  },
  {
    id: 3,
    title: 'Top 10 Photography Tips for Beginners',
    date: 'Mar 12, 2024',
    image: 'https://picsum.photos/seed/lens-blog-3/500/300',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis aliquid doloremque qui, saepe alias eum?',
  },
  {
    id: 4,
    title: 'How I Edit My Photos for Maximum Impact',
    date: 'Apr 20, 2024',
    image: 'https://picsum.photos/seed/lens-blog-4/500/300',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis aliquid doloremque qui, saepe alias eum?',
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="mb-12 text-4xl font-bold uppercase text-white">Blog</h2>
        <div className="space-y-10">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <div className="shrink-0 sm:w-[250px]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full rounded object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  <a href="#" className="transition-colors hover:text-brand">
                    {post.title}
                  </a>
                </h3>
                <p className="mb-3 text-sm text-gray-500">
                  Posted by Jed Jones on{' '}
                  <a href="#" className="text-gray-400 underline hover:text-brand">
                    {post.date}
                  </a>
                </p>
                <p className="text-gray-400">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 flex justify-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white">
            1
          </span>
          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-brand hover:text-white"
          >
            2
          </a>
          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-brand hover:text-white"
          >
            3
          </a>
        </div>
      </div>
    </section>
  )
}
