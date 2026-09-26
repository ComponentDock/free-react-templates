const projects = [
  {
    id: 1,
    title: 'Brand Identity',
    category: 'Branding',
    span: 'col-span-1',
    img: 'https://picsum.photos/seed/framecast-1/600/400',
  },
  {
    id: 2,
    title: 'Mobile App Design',
    category: 'UI/UX',
    span: 'col-span-1',
    img: 'https://picsum.photos/seed/framecast-2/600/400',
  },
  {
    id: 3,
    title: 'Corporate Website',
    category: 'Web Design',
    span: 'col-span-2',
    img: 'https://picsum.photos/seed/framecast-3/1200/400',
  },
  {
    id: 4,
    title: 'Product Packaging',
    category: 'Packaging',
    span: 'col-span-2',
    img: 'https://picsum.photos/seed/framecast-4/1200/400',
  },
  {
    id: 5,
    title: 'Motion Graphics',
    category: 'Animation',
    span: 'col-span-1',
    img: 'https://picsum.photos/seed/framecast-5/600/400',
  },
  {
    id: 6,
    title: 'Interior Visualization',
    category: '3D Modeling',
    span: 'col-span-1',
    img: 'https://picsum.photos/seed/framecast-6/600/400',
  },
  {
    id: 7,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    span: 'col-span-1',
    img: 'https://picsum.photos/seed/framecast-7/600/400',
  },
  {
    id: 8,
    title: 'Social Campaign',
    category: 'Marketing',
    span: 'col-span-1',
    img: 'https://picsum.photos/seed/framecast-8/600/400',
  },
  {
    id: 9,
    title: 'Photography Series',
    category: 'Photography',
    span: 'col-span-2',
    img: 'https://picsum.photos/seed/framecast-9/1200/400',
  },
]

export function PortfolioGrid() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative cursor-pointer overflow-hidden ${project.span}`}
            >
              <img
                src={project.img}
                alt={project.title}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-dark/0 opacity-0 transition-all duration-500 group-hover:bg-dark/70 group-hover:opacity-100">
                <span className="mb-1 text-sm uppercase tracking-wider text-brand">
                  {project.category}
                </span>
                <span className="font-poppins text-xl font-semibold text-white">
                  {project.title}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-block border border-brand bg-transparent px-8 py-3 font-alata text-sm text-dark transition-colors hover:bg-brand hover:text-white"
          >
            More Works
          </a>
        </div>
      </div>
    </section>
  )
}
