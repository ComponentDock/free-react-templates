import { teamMembers } from '../data'

export function TeamSection() {
  return (
    <section id="team" className="bg-soft py-30 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-sans text-3xl font-semibold text-ink dark:text-white">
            About Blogger Team
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted dark:text-gray-400">
            The people behind the stories — editors, writers and photographers shaping the Quill
            magazine every day.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <article key={member.seed} className="group text-center">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={`https://picsum.photos/seed/${member.seed}/400/500`}
                  alt={member.name}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-end gap-1 bg-brand/70 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-sm font-semibold tracking-wide text-white uppercase">
                    {member.name}
                  </span>
                  <span className="text-xs text-white/90">{member.role}</span>
                </div>
              </div>
              <h3 className="mt-4 font-sans text-base font-semibold text-ink dark:text-white">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-muted dark:text-gray-400">{member.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
