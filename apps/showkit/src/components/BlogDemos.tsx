import { DemoCard } from './DemoCard'

const demos = [
  {
    title: 'Blog List - 01',
    image: 'https://picsum.photos/seed/showkit-blog-1/480/340',
    href: 'https://example.com/blog-list-01',
  },
  {
    title: 'Blog List - 02',
    image: 'https://picsum.photos/seed/showkit-blog-2/480/340',
    href: 'https://example.com/blog-list-02',
  },
  {
    title: 'Blog Details - 01',
    image: 'https://picsum.photos/seed/showkit-blog-3/480/340',
    href: 'https://example.com/blog-details-01',
  },
  {
    title: 'Blog Details - 02',
    image: 'https://picsum.photos/seed/showkit-blog-4/480/340',
    href: 'https://example.com/blog-details-02',
  },
]

export function BlogDemos() {
  return (
    <section className="bg-[#f7f7f7] py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="pb-20 text-center font-display text-3xl font-semibold uppercase text-ink dark:text-white">
          Showkit Blog Page Demos
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {demos.map((demo) => (
            <DemoCard key={demo.title} {...demo} />
          ))}
        </div>
      </div>
    </section>
  )
}
