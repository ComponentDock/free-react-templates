const SPEAKERS = [
  { name: 'Patricia Stone', role: 'CEO Company', seed: 'speaker-1' },
  { name: 'James Oliver', role: 'CTO TechCorp', seed: 'speaker-2' },
  { name: 'Carla Banks', role: 'VP Design', seed: 'speaker-3' },
  { name: 'William Smith', role: 'Lead Architect', seed: 'speaker-4' },
  { name: 'Jessica Black', role: 'Product Director', seed: 'speaker-5' },
  { name: 'Marcus Lee', role: 'Head of Innovation', seed: 'speaker-6' },
  { name: 'Duncan Stan', role: 'Founder StartupX', seed: 'speaker-7' },
  { name: 'Elena Rice', role: 'Creative Director', seed: 'speaker-8' },
]

export function Speakers() {
  return (
    <section className="pb-16 font-[family-name:var(--font-montserrat)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold uppercase text-[var(--color-heading)] relative inline-block pb-3 before:absolute before:top-0 before:left-0 before:w-8 before:border-t-3 before:border-[var(--color-brand)]">
            Our Speakers
          </h3>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
        {SPEAKERS.map((speaker) => (
          <div key={speaker.name} className="relative group overflow-hidden">
            <img
              src={`https://picsum.photos/seed/${speaker.seed}/400/500`}
              alt={speaker.name}
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div>
                <h5 className="text-white font-bold text-sm">{speaker.name}</h5>
                <p className="text-white/70 text-xs">{speaker.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
