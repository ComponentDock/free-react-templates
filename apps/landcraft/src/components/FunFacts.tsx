const stats = [
  { value: '2,157', label: 'Projects Completed' },
  { value: '15,445', label: 'Happy Clients' },
  { value: '145', label: 'Awards Won' },
  { value: '1,200', label: 'Team Members' },
]

export default function FunFacts() {
  return (
    <section className="relative py-24" data-testid="fun-facts">
      <img
        src="https://picsum.photos/seed/landcraft-parallax1/1920/500"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h3 className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</h3>
              <p className="text-white/80 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
