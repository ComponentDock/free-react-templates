const blogPosts = [
  {
    image: 'https://picsum.photos/seed/domicile-blog1/600/400',
    date: '25 June, 2024',
    author: 'Mark Wiens',
    title: 'Addiction When Gambling Becomes A Problem',
    excerpt:
      'Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops.',
  },
  {
    image: 'https://picsum.photos/seed/domicile-blog2/600/400',
    date: '25 June, 2024',
    author: 'Mark Wiens',
    title: 'Addiction When Gambling Becomes A Problem',
    excerpt:
      'Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops.',
  },
  {
    image: 'https://picsum.photos/seed/domicile-blog3/600/400',
    date: '25 June, 2024',
    author: 'Mark Wiens',
    title: 'Addiction When Gambling Becomes A Problem',
    excerpt:
      'Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops.',
  },
  {
    image: 'https://picsum.photos/seed/domicile-blog4/600/400',
    date: '25 June, 2024',
    author: 'Mark Wiens',
    title: 'Addiction When Gambling Becomes A Problem',
    excerpt:
      'Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops.',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {blogPosts.map((post, idx) => (
          <div key={idx} className="group">
            <div className="overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <span className="text-xs uppercase tracking-wider text-primary-400">
                {post.date} | By {post.author}
              </span>
              <h3 className="mt-2 font-display text-lg font-bold uppercase text-ink">
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
