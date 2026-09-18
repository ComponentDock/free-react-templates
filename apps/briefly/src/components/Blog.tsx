import { ButtonLink } from '@free-react-templates/ui'

const posts = [
  {
    img: 'https://picsum.photos/seed/briefly-blog1/400/250',
    date: '25 June, 2018',
    author: 'Mark Wiens',
    title: 'Addiction When Gambling Becomes A Problem',
    desc: 'Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops.',
  },
  {
    img: 'https://picsum.photos/seed/briefly-blog2/400/250',
    date: '25 June, 2018',
    author: 'Mark Wiens',
    title: 'Addiction When Gambling Becomes A Problem',
    desc: 'Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops.',
  },
  {
    img: 'https://picsum.photos/seed/briefly-blog3/400/250',
    date: '25 June, 2018',
    author: 'Mark Wiens',
    title: 'Addiction When Gambling Becomes A Problem',
    desc: 'Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops.',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Latest From Our Blog Posts
          </h2>
          <p className="mt-4 text-smoke dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt
            labore dolore magna aliqua enim minim veniam quis nostrud.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post, i) => (
            <article
              key={i}
              className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800"
            >
              <img
                src={post.img}
                alt={post.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <p className="text-xs text-smoke dark:text-gray-500">
                  {post.date} | By {post.author}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold text-ink dark:text-white">
                  <ButtonLink href="#blog" className="hover:text-primary-400">
                    {post.title}
                  </ButtonLink>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-smoke dark:text-gray-400">
                  {post.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
