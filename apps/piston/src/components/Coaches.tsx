import { TwitterIcon, FacebookIcon, InstagramIcon } from './SocialIcons'

const coaches = [
  { name: 'Oscar Brook', role: 'Head Coach', img: 'piston-coach1' },
  { name: 'Leonard Smith', role: 'Cardio Expert', img: 'piston-coach2' },
  { name: 'James Buffer', role: 'Strength Trainer', img: 'piston-coach3' },
  { name: 'Maricar Collins', role: 'Yoga Instructor', img: 'piston-coach4' },
]

export function Coaches() {
  return (
    <section id="coaches" className="py-20">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="mb-2 text-3xl font-bold text-dark">Our Coaches</h2>
        <p className="mb-12 text-mist">Meet the experts behind your transformation</p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {coaches.map((c) => (
            <div key={c.name} className="overflow-hidden rounded border border-gray-200">
              <img
                src={`https://picsum.photos/seed/${c.img}/400/300`}
                alt={c.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-dark">{c.name}</h3>
                <p className="mb-3 text-sm text-mist">{c.role}</p>
                <div className="flex justify-center gap-3 text-mist">
                  <a href="#" aria-label={`${c.name} Twitter`}>
                    <TwitterIcon size={16} />
                  </a>
                  <a href="#" aria-label={`${c.name} Facebook`}>
                    <FacebookIcon size={16} />
                  </a>
                  <a href="#" aria-label={`${c.name} Instagram`}>
                    <InstagramIcon size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
