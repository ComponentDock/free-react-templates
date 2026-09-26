const projects = [
  { title: 'Branding & Illustration Design', category: 'Web Design', seed: 'clydson-work-1' },
  { title: 'Branding & Illustration Design', category: 'Web Design', seed: 'clydson-work-2' },
  { title: 'Branding & Illustration Design', category: 'Web Design', seed: 'clydson-work-3' },
  { title: 'Branding & Illustration Design', category: 'Web Design', seed: 'clydson-work-4' },
  { title: 'Branding & Illustration Design', category: 'Web Design', seed: 'clydson-work-5' },
  { title: 'Branding & Illustration Design', category: 'Web Design', seed: 'clydson-work-6' },
  { title: 'Branding & Illustration Design', category: 'Web Design', seed: 'clydson-work-7' },
  { title: 'Branding & Illustration Design', category: 'Web Design', seed: 'clydson-work-8' },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-brand text-sm uppercase tracking-widest font-medium">
            Accomplishments
          </span>
          <h2 className="text-3xl font-bold text-heading mt-2 mb-4">Our Projects</h2>
          <p className="text-body max-w-xl mx-auto">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {projects.map((p, i) => (
            <div
              key={i}
              className="relative aspect-square group cursor-pointer overflow-hidden rounded-lg"
            >
              <img
                src={`https://picsum.photos/seed/${p.seed}/400/400`}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
                <h3 className="text-lg font-bold mb-1">{p.title}</h3>
                <span className="text-sm text-gray-300">{p.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
