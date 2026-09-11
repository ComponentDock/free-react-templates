import { Globe, MessageCircle, Video, Hash } from 'lucide-react'

const socials = [
  { name: 'Google+', icon: Globe, color: 'bg-red-600' },
  { name: 'LinkedIn', icon: Hash, color: 'bg-blue-700' },
  { name: 'Dribbble', icon: Globe, color: 'bg-pink-500' },
  { name: 'GitHub', icon: Hash, color: 'bg-gray-800' },
  { name: 'Behance', icon: Globe, color: 'bg-blue-600' },
  { name: 'YouTube', icon: Video, color: 'bg-red-600' },
  { name: 'Twitter', icon: MessageCircle, color: 'bg-blue-400' },
  { name: 'Flickr', icon: Globe, color: 'bg-pink-400' },
]

export function Community() {
  return (
    <section id="contact" className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="mb-2 text-sm uppercase tracking-wider text-coral">Great Community</p>
        <h2 className="mb-12 text-3xl font-bold text-white md:text-4xl">Our Community</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
          {socials.map((s) => (
            <a
              key={s.name}
              href="#"
              aria-label={s.name}
              className={`flex items-center justify-center gap-2 rounded-xl ${s.color} p-6 text-white transition-opacity hover:opacity-80`}
            >
              <s.icon className="h-6 w-6" aria-hidden="true" />
              <span className="hidden text-sm font-medium sm:inline">{s.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
