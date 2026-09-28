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
        className="mb-1 text-xl font-bold text-brand-dark"
        style={{ fontFamily: 'var(--font-dancing)' }}
      >
        {name}
      </h3>
      <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-red">{title}</p>
      <p className="max-w-sm text-sm leading-relaxed text-muted-text">{bio}</p>
    </div>
  )
}

const CHEFS: ChefProps[] = [
  {
    name: 'John Gustavo',
    title: 'Master Chef',
    bio: 'I am an ambitious workaholic, but apart from that, pretty simple person. Separated they live in Bookmarksgrove right at the coast of the Semantics.',
    imageSeed: 'zing-chef1',
  },
  {
    name: 'Michelle Fraulen',
    title: 'Master Chef',
    bio: 'I am an ambitious workaholic, but apart from that, pretty simple person. Separated they live in Bookmarksgrove right at the coast of the Semantics.',
    imageSeed: 'zing-chef2',
  },
  {
    name: 'Daniel Graham',
    title: 'Master Chef',
    bio: 'I am an ambitious workaholic, but apart from that, pretty simple person. Separated they live in Bookmarksgrove right at the coast of the Semantics.',
    imageSeed: 'zing-chef3',
  },
]

export function Chefs() {
  return (
    <section id="chef" className="bg-brand-light py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2
            className="mb-3 text-3xl font-bold text-brand-dark"
            style={{ fontFamily: 'var(--font-dancing)' }}
          >
            Our Master Chef
          </h2>
        </div>
        <div className="grid gap-12 md:grid-cols-3">
          {CHEFS.map((chef) => (
            <ChefCard key={chef.name} {...chef} />
          ))}
        </div>
      </div>
    </section>
  )
}
