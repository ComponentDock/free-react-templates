const members = [
  {
    name: 'Robert Williams',
    role: 'Lead Designer',
    img: 'https://picsum.photos/seed/musecraft-robert/200/200',
  },
  {
    name: 'John Doe',
    role: 'SEO Master',
    img: 'https://picsum.photos/seed/musecraft-john1/200/200',
  },
  {
    name: 'John Doe',
    role: 'PSD Guru',
    img: 'https://picsum.photos/seed/musecraft-john2/200/200',
  },
]

export function Crafters() {
  return (
    <section id="about" className="relative bg-navy py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-16 flex items-start gap-6">
          <span className="font-heading text-8xl font-bold text-rose/30">03</span>
          <div className="rounded-lg bg-rose px-6 py-4">
            <h2 className="font-heading text-4xl font-bold text-white">Crafters</h2>
          </div>
        </div>
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 font-heading text-lg font-bold text-white">About</p>
          <p className="leading-relaxed text-white/60">
            Polor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt ut dolore
            magna labore eiusmod. Lorem ipsum dolor sit amet consectetur est adipisicing elit, sed
            do eiusmod.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {members.map(({ name, role, img }) => (
            <div key={name + role} className="text-center">
              <img
                src={img}
                alt={name}
                className="mx-auto h-32 w-32 rounded-full object-cover"
                loading="lazy"
              />
              <h4 className="mt-4 font-heading text-base font-bold text-white">{name}</h4>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-rose-light">{role}</p>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                Eiusmod tempor incididunt ut dolore magna labore eiusmod. Lorem ipsum dolor sit amet
                consectetur est.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
