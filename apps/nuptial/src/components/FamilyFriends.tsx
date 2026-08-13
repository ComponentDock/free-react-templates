const members = [
  { name: 'Mark Tomy', role: 'Groomsmen', seed: 'nuptial-12' },
  { name: 'John Henceworth', role: 'Groomsmen', seed: 'nuptial-13' },
  { name: 'Rey Cooper', role: 'Groomsmen', seed: 'nuptial-14' },
  { name: 'Robert Chan', role: 'Groomsmen', seed: 'nuptial-15' },
  { name: 'Rose Jones', role: 'Bridesmaid', seed: 'nuptial-16' },
  { name: 'Mary Dell', role: 'Bridesmaid', seed: 'nuptial-17' },
  { name: 'Alicia Brean', role: 'Bridesmaid', seed: 'nuptial-18' },
  { name: 'Angel Worth', role: 'Bridesmaid', seed: 'nuptial-19' },
] as const

export function FamilyFriends() {
  return (
    <section id="people" className="bg-white py-16 transition-colors dark:bg-gray-950 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-script text-5xl text-pink-500 sm:text-6xl">
          Family &amp; Friends
        </h2>
        <div className="mt-14 grid grid-cols-2 gap-10 md:grid-cols-4">
          {members.map((member) => (
            <div key={member.name} className="text-center">
              <img
                src={`https://picsum.photos/seed/${member.seed}/200/200`}
                alt=""
                className="mx-auto h-28 w-28 rounded-full object-cover ring-4 ring-pink-100 dark:ring-pink-900/40"
                loading="lazy"
              />
              <h3 className="mt-4 text-lg font-semibold text-ink-900 dark:text-white">
                {member.name}
              </h3>
              <p className="mt-1 text-xs tracking-widest text-pink-500 uppercase">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
