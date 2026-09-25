const timeline = [
  {
    year: '2001 – 2005',
    text: 'Founded as a small design studio with a passion for creative excellence.',
  },
  {
    year: '2005 – 2008',
    text: 'Expanded services to include web development and digital marketing.',
  },
  {
    year: '2008 – 2012',
    text: 'Grew into a full-service digital agency serving clients worldwide.',
  },
  {
    year: '2012 – 2015',
    text: 'Pioneered mobile-first design approaches and responsive frameworks.',
  },
  {
    year: '2015 – 2016',
    text: 'Launched innovative products and established strategic partnerships.',
  },
]

const team = [
  {
    name: 'Robert Williams',
    role: 'Lead Designer',
    description:
      'Visionary designer with 15+ years of experience crafting award-winning digital experiences.',
    image: 'https://picsum.photos/seed/boxpulse-team-1/200/200',
  },
  {
    name: 'John Doe',
    role: 'SEO Master',
    description:
      'Data-driven strategist who transforms online visibility into measurable business growth.',
    image: 'https://picsum.photos/seed/boxpulse-team-2/200/200',
  },
  {
    name: 'Jane Smith',
    role: 'PSD Guru',
    description:
      'Pixel-perfect craftsperson who bridges the gap between design vision and code reality.',
    image: 'https://picsum.photos/seed/boxpulse-team-3/200/200',
  },
]

export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-[1170px] px-4">
        <div className="flex flex-col gap-12 md:flex-row">
          <div className="shrink-0 md:w-1/4">
            <span className="block font-heading text-8xl font-bold text-brand-dark/10 md:text-[120px]">
              03
            </span>
            <h2 className="mt-2 -translate-y-4 font-heading text-2xl font-bold uppercase tracking-wider text-text-primary">
              Crafters
            </h2>
          </div>
          <div className="flex-1">
            <p className="mb-8 font-body text-base leading-relaxed text-text-muted">
              We are a passionate team of designers, developers, and strategists dedicated to
              delivering exceptional digital solutions that drive results for our clients.
            </p>
            <div className="mb-12 space-y-4 border-l-2 border-brand-pink/30 pl-6">
              {timeline.map((entry) => (
                <div key={entry.year} className="relative">
                  <span className="absolute -left-[31px] top-1 h-4 w-4 rounded-full border-2 border-brand-pink bg-white" />
                  <span className="mb-1 block font-heading text-sm font-bold uppercase tracking-wider text-brand-pink">
                    {entry.year}
                  </span>
                  <p className="font-body text-sm text-text-muted">{entry.text}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="mx-auto mb-4 h-32 w-32 rounded-full object-cover"
                  />
                  <h3 className="font-heading text-base font-bold text-text-primary">
                    {member.name}
                  </h3>
                  <p className="mb-2 font-heading text-xs font-medium uppercase tracking-wider text-brand-pink">
                    {member.role}
                  </p>
                  <p className="font-body text-sm text-text-muted">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
