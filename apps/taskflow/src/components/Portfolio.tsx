import { Share2, Eye, Heart } from 'lucide-react'

const projects = [
  {
    title: 'Work 01',
    tags: 'Branding, Illustration',
    image: 'https://picsum.photos/seed/taskflow-work1/600/400',
    shares: 24,
    views: 312,
    likes: 89,
  },
  {
    title: 'Work 02',
    tags: 'Web Design, UI',
    image: 'https://picsum.photos/seed/taskflow-work2/600/400',
    shares: 18,
    views: 256,
    likes: 67,
  },
  {
    title: 'Work 03',
    tags: 'Branding, Web Dev',
    image: 'https://picsum.photos/seed/taskflow-work3/600/400',
    shares: 31,
    views: 489,
    likes: 124,
  },
  {
    title: 'Work 04',
    tags: 'SEO, Marketing',
    image: 'https://picsum.photos/seed/taskflow-work4/600/400',
    shares: 15,
    views: 198,
    likes: 52,
  },
  {
    title: 'Work 05',
    tags: 'Web Design, Branding',
    image: 'https://picsum.photos/seed/taskflow-work5/600/400',
    shares: 22,
    views: 367,
    likes: 98,
  },
  {
    title: 'Work 06',
    tags: 'UI, Web Dev',
    image: 'https://picsum.photos/seed/taskflow-work6/600/400',
    shares: 27,
    views: 421,
    likes: 113,
  },
]

export function Portfolio() {
  return (
    <section id="work" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-8">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[2px] text-gray-400">
            My Work
          </span>
          <h2 className="text-2xl font-bold text-black">Recent Work</h2>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative h-[300px] overflow-hidden rounded bg-cover bg-center"
              style={{ backgroundImage: `url(${project.image})` }}
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 flex flex-col justify-end bg-black/0 p-6 transition-colors group-hover:bg-black/70">
                <div className="translate-y-4 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="mb-1 text-lg font-bold text-white">{project.title}</h3>
                  <span className="mb-3 block text-[11px] text-white/70">{project.tags}</span>
                  <div className="flex gap-4 text-white/60">
                    <span className="flex items-center gap-1 text-xs">
                      <Share2 size={12} /> {project.shares}
                    </span>
                    <span className="flex items-center gap-1 text-xs">
                      <Eye size={12} /> {project.views}
                    </span>
                    <span className="flex items-center gap-1 text-xs">
                      <Heart size={12} /> {project.likes}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
