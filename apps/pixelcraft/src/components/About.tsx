const timeline = [
  { year: '2001', text: 'Founded the studio with a vision for creative excellence.' },
  { year: '2008', text: 'Expanded into digital product design and mobile apps.' },
  { year: '2012', text: 'Awarded Best Creative Agency at the Design Awards.' },
  { year: '2016', text: 'Launched our global remote-first design program.' },
]

const team = [
  {
    name: 'Alex Morgan',
    position: 'Creative Director',
    image: 'https://picsum.photos/seed/pc-team1/300/300',
    bio: '15 years of experience in visual design and brand strategy.',
  },
  {
    name: 'Sarah Chen',
    position: 'Lead Developer',
    image: 'https://picsum.photos/seed/pc-team2/300/300',
    bio: 'Full-stack engineer passionate about clean, accessible code.',
  },
  {
    name: 'Marcus Lee',
    position: 'UX Designer',
    image: 'https://picsum.photos/seed/pc-team3/300/300',
    bio: 'Human-centered design advocate with a love for micro-interactions.',
  },
]

export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-12 md:grid-cols-[370px_1fr]">
          {/* Title block */}
          <div className="flex h-[370px] w-[370px] flex-col items-center justify-center bg-green-title">
            <span
              className="text-6xl font-bold text-green-num"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              03
            </span>
            <span
              className="mt-2 text-2xl font-bold text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Crafters
            </span>
          </div>

          <div className="space-y-12">
            {/* About text */}
            <div className="grid gap-8 sm:grid-cols-2">
              <p
                className="text-gray-text leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                We are a creative agency that believes in the power of design to transform
                businesses. Our team of passionate professionals combines strategy, design, and
                technology to create memorable experiences.
              </p>
              <p
                className="text-gray-text leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                From branding to web development, we deliver solutions that drive results. Every
                project is an opportunity to push boundaries and exceed expectations.
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              {timeline.map((item) => (
                <div key={item.year} className="flex gap-4">
                  <span
                    className="min-w-[80px] text-2xl font-bold text-pink-brand"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {item.year}
                  </span>
                  <p className="text-gray-text" style={{ fontFamily: 'var(--font-body)' }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Team cards */}
            <div className="grid gap-8 sm:grid-cols-3">
              {team.map((member) => (
                <div key={member.name} className="flex flex-col items-center text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="mb-4 h-32 w-32 rounded-full object-cover"
                  />
                  <h4
                    className="text-lg font-bold text-navy-body"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {member.name}
                  </h4>
                  <p
                    className="text-sm font-bold text-pink-brand"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {member.position}
                  </p>
                  <p
                    className="mt-2 text-sm text-gray-text"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
