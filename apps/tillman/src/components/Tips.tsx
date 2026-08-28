import { ArrowRight } from 'lucide-react'

const posts = [
  {
    title: '20+ years agricultural cooperative',
    description:
      'The information is also part of the MF Rural, where you can find news, quotes, technological information and others, in addition to information about companies in the sector, list of any and all companies related to agribusiness, just access the Rural List section.',
    image: 'https://picsum.photos/seed/tillman-tip1/400/300',
  },
  {
    title: 'Lawn Protection Equipments',
    description:
      'The information is also part of the MF Rural, where you can find news, quotes, technological information and others, in addition to information about companies in the sector, list of any and all companies related to agribusiness, just access the Rural List section.',
    image: 'https://picsum.photos/seed/tillman-tip2/400/300',
  },
]

export function Tips() {
  return (
    <section className="bg-leaf-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          Tips from experts
        </h2>

        <div className="space-y-8">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col overflow-hidden rounded-lg bg-white shadow-md sm:flex-row"
            >
              <div className="w-full sm:w-1/3">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex w-full flex-col justify-center p-6 sm:w-2/3">
                <h3 className="mb-3 text-xl font-bold text-gray-900">{post.title}</h3>
                <p className="mb-4 text-gray-600">{post.description}</p>
                <a
                  href="#tips"
                  className="inline-flex w-fit items-center gap-1 text-sm font-semibold text-leaf-500 transition-colors hover:text-leaf-600"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#tips"
            className="inline-block rounded-full border-2 border-leaf-400 px-8 py-3 font-semibold text-leaf-500 transition-colors hover:bg-leaf-400 hover:text-white"
          >
            More Tips
          </a>
        </div>
      </div>
    </section>
  )
}
