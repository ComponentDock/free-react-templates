const attorneys = [
  {
    name: 'James Morrison',
    title: 'Founding Partner',
    bio: 'With over 35 years of experience, James has built a reputation for excellence in corporate law and complex litigation.',
    photo: 'https://picsum.photos/seed/verdict-1/600/720',
  },
  {
    name: 'Sarah Chen',
    title: 'Managing Partner',
    bio: 'Sarah leads our firm\u2019s strategic direction, guiding attorneys to deliver exceptional results for every client.',
    photo: 'https://picsum.photos/seed/verdict-2/600/720',
  },
  {
    name: 'Michael Thompson',
    title: 'Senior Partner',
    bio: 'Michael is a nationally recognized trial attorney with an exceptional record in complex civil and criminal litigation.',
    photo: 'https://picsum.photos/seed/verdict-3/600/720',
  },
  {
    name: 'Elena Rodriguez',
    title: 'Partner',
    bio: 'Elena brings compassion and fierce advocacy to her family law practice, helping clients navigate life transitions.',
    photo: 'https://picsum.photos/seed/verdict-4/600/720',
  },
]

export function Attorneys() {
  return (
    <section id="attorneys" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="text-center text-sm font-bold uppercase tracking-widest text-accent-600 dark:text-accent-400">
          Our Legal Team
        </p>
        <h2 className="font-display mt-3 text-center text-3xl font-bold text-primary-900 sm:text-4xl lg:text-5xl dark:text-white">
          Meet Our Attorneys
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600 dark:text-gray-300">
          Our team of experienced attorneys is dedicated to providing exceptional legal
          representation tailored to your unique needs.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {attorneys.map((attorney) => (
            <div
              key={attorney.name}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
            >
              <img
                src={attorney.photo}
                alt={attorney.name}
                loading="lazy"
                className="h-72 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-primary-900 dark:text-white">
                  {attorney.name}
                </h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-accent-600 dark:text-accent-400">
                  {attorney.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {attorney.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
