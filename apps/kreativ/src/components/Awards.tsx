const awards = [
  { name: 'Awwwards Site of the Day', year: '2024' },
  { name: 'CSS Design Awards', year: '2024' },
  { name: 'FWA of the Month', year: '2023' },
  { name: 'Webby Awards Honoree', year: '2023' },
]

export function Awards() {
  return (
    <section className="border-y border-gray-200 bg-white py-8 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {awards.map((award) => (
          <div
            key={award.name}
            className="flex flex-col items-center gap-1 text-center sm:items-start sm:text-left"
          >
            <p className="font-semibold text-gray-900 dark:text-white">{award.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{award.year}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
