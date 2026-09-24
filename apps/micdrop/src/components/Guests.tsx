const GUESTS = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'CTO at TechVault',
    bio: 'Leading innovation in cloud infrastructure and developer tools.',
    image: 'https://picsum.photos/seed/guest1/300/300',
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    role: 'Founder of GreenCode',
    bio: 'Building sustainable technology solutions for a better tomorrow.',
    image: 'https://picsum.photos/seed/guest2/300/300',
  },
  {
    id: 3,
    name: 'Priya Patel',
    role: 'Design Lead at Figma',
    bio: 'Crafting intuitive user experiences that bridge the gap between tech and humans.',
    image: 'https://picsum.photos/seed/guest3/300/300',
  },
  {
    id: 4,
    name: 'Alex Rivera',
    role: 'Security Architect',
    bio: 'Protecting digital assets and pioneering zero-trust architectures.',
    image: 'https://picsum.photos/seed/guest4/300/300',
  },
]

export function Guests() {
  return (
    <section className="bg-dark-bg py-16" aria-label="Featured guests">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-2 text-center text-3xl font-bold text-white">Featured Guests</h2>
        <p className="mb-12 text-center text-gray-400">
          Meet the incredible minds we've had on the show
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {GUESTS.map((guest) => (
            <article
              key={guest.id}
              className="rounded-lg bg-surface p-6 text-center transition-colors hover:bg-surface/80"
            >
              <img
                src={guest.image}
                alt={guest.name}
                className="mx-auto mb-4 h-24 w-24 rounded-full object-cover"
                loading="lazy"
              />
              <h3 className="text-lg font-semibold text-white">{guest.name}</h3>
              <p className="mt-1 text-sm text-brand">{guest.role}</p>
              <p className="mt-3 text-sm text-gray-400">{guest.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
