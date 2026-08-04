const members = [
  { name: 'Mellisa Howard', seed: 1 },
  { name: 'Mike Richardson', seed: 2 },
  { name: 'Charles White', seed: 3 },
  { name: 'Laura Smith', seed: 4 },
] as const

export function Team() {
  return (
    <section id="team" className="bg-paper py-20 dark:bg-gray-900 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white lg:text-5xl">
            Every Dog Needs A Good Owner
          </h2>
          <p className="mt-5 text-sm font-light leading-relaxed text-gray-600 dark:text-gray-300">
            Our trainers and caregivers are dog people through and through — patient, experienced,
            and always happy to share a treat.
          </p>
        </div>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <article key={member.name} className="text-center">
              <img
                src={`https://picsum.photos/seed/breed-team-${member.seed}/360/300`}
                alt={member.name}
                className="mx-auto w-full max-w-xs object-cover"
              />
              <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
                {member.name}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
