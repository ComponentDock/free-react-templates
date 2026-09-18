import { MapPin, Plus } from 'lucide-react'

const PROJECTS = [
  {
    category: 'Building',
    title: 'Building A Condominium',
    location: 'San Francisco, California, USA',
    image: 'https://picsum.photos/seed/ironclad-proj1/400/300',
  },
  {
    category: 'Building',
    title: 'Building A Condominium',
    location: 'San Francisco, California, USA',
    image: 'https://picsum.photos/seed/ironclad-proj2/400/300',
  },
  {
    category: 'Building',
    title: 'Building A Condominium',
    location: 'San Francisco, California, USA',
    image: 'https://picsum.photos/seed/ironclad-proj3/400/300',
  },
  {
    category: 'Building',
    title: 'Building A Condominium',
    location: 'San Francisco, California, USA',
    image: 'https://picsum.photos/seed/ironclad-proj4/400/300',
  },
  {
    category: 'Building',
    title: 'Building A Condominium',
    location: 'San Francisco, California, USA',
    image: 'https://picsum.photos/seed/ironclad-proj5/400/300',
  },
  {
    category: 'Building',
    title: 'Building A Condominium',
    location: 'San Francisco, California, USA',
    image: 'https://picsum.photos/seed/ironclad-proj6/400/300',
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-brand-400 font-medium text-sm uppercase tracking-wide">
            Our Global Work Industries
          </span>
          <h2 className="text-3xl font-bold text-dark mt-2">Latest Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <div key={i} className="group">
              <div className="relative rounded-lg overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-colors flex items-center justify-center">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Plus className="w-5 h-5 text-dark" />
                  </div>
                </div>
              </div>
              <span className="text-brand-400 text-sm font-medium">{project.category}</span>
              <h3 className="text-lg font-bold text-dark mt-1">{project.title}</h3>
              <p className="text-body text-sm flex items-center gap-1 mt-1">
                <MapPin className="w-4 h-4" />
                {project.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
