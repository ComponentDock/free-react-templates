const posts = [
  {
    title: 'Where Do You Learn HTML & CSS in 2035?',
    author: 'Ham Brook',
    date: 'Jan 18, 2035',
    category: 'News',
    image: 'https://picsum.photos/seed/turbo-blog1/600/400',
  },
  {
    title: 'Where Do You Learn HTML & CSS in 2035?',
    author: 'James Phelps',
    date: 'Jan 18, 2035',
    category: 'News',
    image: 'https://picsum.photos/seed/turbo-blog2/600/400',
  },
  {
    title: 'Where Do You Learn HTML & CSS in 2035?',
    author: 'James Phelps',
    date: 'Jan 18, 2035',
    category: 'News',
    image: 'https://picsum.photos/seed/turbo-blog3/600/400',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-mist py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold">Our Blog</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <div key={index} className="overflow-hidden rounded-lg bg-white shadow-sm">
              <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <div className="mb-2 flex flex-wrap gap-2 text-xs text-smoke">
                  <span>{post.author}</span>
                  <span>·</span>
                  <span>{post.date}</span>
                  <span>·</span>
                  <span className="text-primary-500">{post.category}</span>
                </div>
                <h3 className="mb-2 text-lg font-bold">{post.title}</h3>
                <p className="mb-4 text-sm text-smoke">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea
                  maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a
                  eius.
                </p>
                <a
                  href="#"
                  className="text-sm font-semibold text-primary-500 hover:text-primary-600"
                >
                  Continue Reading...
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
