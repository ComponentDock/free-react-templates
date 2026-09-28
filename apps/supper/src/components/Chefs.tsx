interface ChefProps {
  name: string
  title: string
  bio: string
  imageSeed: string
}

function ChefCard({ name, title, bio, imageSeed }: ChefProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div
        className="mb-4 h-48 w-48 rounded-full bg-cover bg-center"
        style={{ backgroundImage: `url(https://picsum.photos/seed/${imageSeed}/400/400)` }}
      />
      <h3
        className="mb-1 text-xl font-bold text-charcoal"
        style={{ fontFamily: 'var(--font-playfair)' }}
      >
        {name}
      </h3>
      <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">{title}</p>
      <p className="max-w-sm text-sm leading-relaxed text-body-text">{bio}</p>
    </div>
  )
}

const CHEFS: ChefProps[] = [
  {
    name: 'Daniel Graham',
    title: 'Master Chef',
    bio: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.',
    imageSeed: 'supper-chef1',
  },
  {
    name: 'Nick Browning',
    title: 'Master Chef',
    bio: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.',
    imageSeed: 'supper-chef2',
  },
]

export function Chefs() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2
            className="mb-3 text-3xl font-bold text-charcoal"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Meet The Chefs
          </h2>
        </div>
        <div className="grid gap-12 md:grid-cols-2">
          {CHEFS.map((chef) => (
            <ChefCard key={chef.name} {...chef} />
          ))}
        </div>
      </div>
    </section>
  )
}
