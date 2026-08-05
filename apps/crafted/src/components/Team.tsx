import { SocialLinks } from './SocialLinks'

const members = [
  { name: 'Randy Weaver', role: 'Senior Barrister at law', seed: 'crafted-team-1' },
  { name: 'Marvel Maison', role: 'Chief Executive', seed: 'crafted-team-2' },
  { name: 'Diana Cole', role: 'Art Director', seed: 'crafted-team-3' },
  { name: 'Ethan Marsh', role: 'Lead Developer', seed: 'crafted-team-4' },
] as const

export function Team() {
  return (
    <section id="team" className="bg-paper py-16 dark:bg-gray-900 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Our Interactive Team Mates
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-body dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <article
              key={member.seed}
              className="overflow-hidden rounded bg-white text-center shadow-md dark:bg-gray-950"
            >
              <img
                src={`https://picsum.photos/seed/${member.seed}/480/480`}
                alt={member.name}
                className="aspect-square w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-ink dark:text-white">{member.name}</h3>
                <p className="mt-1 text-sm text-body dark:text-gray-400">{member.role}</p>
                <div className="mt-4 flex justify-center">
                  <SocialLinks />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
