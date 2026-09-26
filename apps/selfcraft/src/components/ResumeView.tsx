const EXPERIENCE = [
  {
    date: '2020 — Present',
    role: 'Senior Web Designer',
    company: 'Creative Studio',
    description:
      'Leading design initiatives for high-profile clients, creating responsive websites and brand identities that drive engagement and conversions.',
  },
  {
    date: '2017 — 2020',
    role: 'Web Designer',
    company: 'Digital Agency',
    description:
      'Designed and developed custom WordPress themes and landing pages for e-commerce and SaaS clients across various industries.',
  },
  {
    date: '2015 — 2017',
    role: 'Junior Designer',
    company: 'Startup Inc.',
    description:
      'Created visual assets, social media graphics, and assisted in UI/UX design for mobile applications.',
  },
]

const EDUCATION = [
  {
    date: '2011 — 2015',
    role: 'Bachelor of Fine Arts',
    company: 'Design University',
    description: 'Studied graphic design, typography, and digital media. Graduated with honors.',
  },
]

export function ResumeView() {
  return (
    <section aria-label="Resume">
      <h1 className="font-heading text-heading text-4xl sm:text-5xl mb-8">Experience</h1>

      <div className="space-y-8 mb-16">
        {EXPERIENCE.map(({ date, role, company, description }) => (
          <div key={role}>
            <p className="text-sm text-heading opacity-60 mb-1">{date}</p>
            <h3 className="font-heading text-heading text-xl mb-2">
              {role} <span className="font-normal text-body-text">— {company}</span>
            </h3>
            <p className="leading-relaxed">{description}</p>
          </div>
        ))}
      </div>

      <h1 className="font-heading text-heading text-4xl sm:text-5xl mb-8">Education</h1>

      <div className="space-y-8">
        {EDUCATION.map(({ date, role, company, description }) => (
          <div key={role}>
            <p className="text-sm text-heading opacity-60 mb-1">{date}</p>
            <h3 className="font-heading text-heading text-xl mb-2">
              {role} <span className="font-normal text-body-text">— {company}</span>
            </h3>
            <p className="leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
