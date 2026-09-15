const stats = [
  { value: '40+', label: 'Classes' },
  { value: '100+', label: 'Students' },
  { value: '15+', label: 'Trainers' },
] as const

export function DifferentYoga() {
  return (
    <section
      id="about"
      className="relative bg-cover bg-center bg-no-repeat py-20"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/pranayama-about/1920/800)',
      }}
    >
      <div className="absolute inset-0 bg-brand/80" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <blockquote className="mx-auto max-w-3xl font-display text-2xl font-medium italic text-white sm:text-3xl">
            &ldquo;Yoga is the journey of the self, through the self, to the self.&rdquo;
          </blockquote>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl font-bold text-gold">{stat.value}</p>
              <p className="mt-2 text-lg text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
