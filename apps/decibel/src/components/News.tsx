import { SectionHeading } from './SectionHeading'

const posts = [
  {
    date: 'Jan 20th, 2019',
    title: 'This Is The Day, Party, Party!',
    image: 'https://picsum.photos/seed/decibel-news-1/600/400',
  },
  {
    date: 'Feb 2nd, 2019',
    title: 'New Studio Sessions Every Friday Night',
    image: 'https://picsum.photos/seed/decibel-news-2/600/400',
  },
  {
    date: 'Mar 8th, 2019',
    title: 'Decibel Wins Community Radio Award',
    image: 'https://picsum.photos/seed/decibel-news-3/600/400',
  },
] as const

export function News() {
  return (
    <section id="news" className="bg-dark py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="News & Events"
          intro="Station announcements, event recaps and everything happening around Decibel."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <a key={post.title} href="#news" className="group block overflow-hidden bg-white">
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt=""
                  className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <span className="block text-xs uppercase tracking-wider text-steel">
                  {post.date}
                </span>
                <h3 className="mt-2 font-display text-lg font-normal text-black transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
