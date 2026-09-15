const highlights = [
  {
    title: 'Clean and Services',
    description:
      'For each project we establish relationships with partners who we know will help us.',
  },
  {
    title: 'Clean and Modern',
    description:
      'For each project we establish relationships with partners who we know will help us.',
  },
  {
    title: 'Elegant and Modern',
    description:
      'For each project we establish relationships with partners who we know will help us.',
  },
] as const

export function InfoHighlights() {
  return (
    <section
      id="about"
      className="bg-cover bg-center bg-no-repeat py-20"
      style={{
        backgroundImage:
          'linear-gradient(rgba(22,22,26,0.88), rgba(22,22,26,0.88)), url(https://picsum.photos/seed/cosyhaus-info/1600/600)',
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title}>
              <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
