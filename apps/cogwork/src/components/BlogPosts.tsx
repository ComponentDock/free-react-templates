import { ArrowRight } from 'lucide-react'

const posts = [
  {
    title: 'Separated they live in Bookmarksgrove right',
    date: 'Feb 26th, 2024',
    image: 'https://picsum.photos/seed/cogwork-blog1/400/300',
  },
  {
    title: 'The Big Oxmox advised her not to do so',
    date: 'Mar 10th, 2024',
    image: 'https://picsum.photos/seed/cogwork-blog2/400/300',
  },
  {
    title: 'A small river named Duden flows by',
    date: 'Apr 5th, 2024',
    image: 'https://picsum.photos/seed/cogwork-blog3/400/300',
  },
  {
    title: 'Far far away behind the word mountains',
    date: 'May 12th, 2024',
    image: 'https://picsum.photos/seed/cogwork-blog4/400/300',
  },
]

export function BlogPosts() {
  return (
    <section id="blog" className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Blog Posts</h2>
          <p className="mx-auto max-w-2xl text-[#6c757d]">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.title} className="flex gap-4">
              <img src={post.image} alt={post.title} className="h-24 w-24 shrink-0 object-cover" />
              <div>
                <span className="text-sm text-[#6c757d]">{post.date}</span>
                <h3 className="mt-1 font-bold text-[#212529]">{post.title}</h3>
                <a
                  href="#"
                  className="mt-1 inline-flex items-center gap-1 text-sm text-[#fd5f00] hover:text-[#d75100]"
                >
                  Read More <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
