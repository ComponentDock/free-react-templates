const trainers = [
  {
    name: 'Sarah Miller',
    role: 'Trainer',
    bio: 'Yoga and flexibility specialist with 10 years of experience.',
    seed: 'stride-trainer-1',
  },
  {
    name: 'Mike Johnson',
    role: 'Trainer',
    bio: 'Strength and conditioning expert dedicated to your progress.',
    seed: 'stride-trainer-2',
  },
  {
    name: 'Lisa Chen',
    role: 'Trainer',
    bio: 'Cardio and HIIT coach who brings energy to every session.',
    seed: 'stride-trainer-3',
  },
  {
    name: 'James Wilson',
    role: 'Trainer',
    bio: 'CrossFit certified trainer focused on functional fitness.',
    seed: 'stride-trainer-4',
  },
]

export function Trainers() {
  return (
    <section className="py-20 bg-white" id="trainer">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-text-sub text-sm uppercase tracking-wider mb-2">Trainer</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Our Trainers</h2>
          <p className="text-text-gray leading-relaxed">
            Meet our certified fitness professionals ready to guide you on your journey.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((t) => (
            <div key={t.name} className="text-center">
              <img
                src={`https://picsum.photos/seed/${t.seed}/200/200`}
                alt={t.name}
                className="w-[100px] h-[100px] rounded-full mx-auto mb-4 object-cover border-4 border-gray-100"
              />
              <h3 className="text-lg font-bold">{t.name}</h3>
              <p className="text-xs uppercase tracking-wider text-text-meta mb-2">{t.role}</p>
              <p className="text-sm text-text-gray">{t.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
