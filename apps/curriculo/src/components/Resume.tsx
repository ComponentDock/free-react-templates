import { Calendar } from 'lucide-react'

const education = [
  {
    date: 'Sep 2020 – Jun 2022',
    title: 'Master of Information Technology',
    description:
      'Specialized in human-computer interaction and design systems. Thesis on accessible web interfaces.',
    school: 'New York University',
  },
  {
    date: 'Sep 2016 – Jun 2020',
    title: 'Bachelor of Computer Science',
    description: "Focus on software engineering and interactive media. Dean's list all semesters.",
    school: 'University of California, Berkeley',
  },
  {
    date: '2023',
    title: 'Advanced UX Certification',
    description: 'Intensive program covering research methods, prototyping, and usability testing.',
    school: 'Nielsen Norman Group',
  },
  {
    date: '2022',
    title: 'Google UX Design Professional',
    description: 'Comprehensive certification in user research, wireframing, and prototyping.',
    school: 'Google',
  },
]

const experience = [
  {
    date: 'Jan 2023 – Present',
    title: 'Lead Product Designer',
    description:
      'Leading a team of 5 designers on a SaaS dashboard used by 2M+ monthly active users.',
    school: 'GitHub',
  },
  {
    date: 'Mar 2021 – Dec 2022',
    title: 'Senior UX Designer',
    description: 'Designed core features for the mobile app, improving user retention by 25%.',
    school: 'Spotify',
  },
  {
    date: 'Jun 2019 – Feb 2021',
    title: 'Product Designer',
    description: 'Created design systems and component libraries for enterprise clients.',
    school: 'Figma',
  },
  {
    date: 'Aug 2017 – May 2019',
    title: 'Junior UI/UX Designer',
    description:
      'Built responsive web interfaces and conducted usability testing for e-commerce platforms.',
    school: 'Shopify',
  },
]

interface ResumeItemProps {
  date: string
  title: string
  description: string
  school: string
}

function ResumeItem({ date, title, description, school }: ResumeItemProps) {
  return (
    <div className="mb-6">
      <span className="mb-1 flex items-center gap-1.5 text-sm text-gray-500">
        <Calendar className="h-3.5 w-3.5" />
        {date}
      </span>
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      <p className="mb-1 text-sm text-gray-600">{description}</p>
      <span className="text-sm font-semibold text-brand-primary">{school}</span>
    </div>
  )
}

export function Resume() {
  return (
    <section id="resume" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-10 text-center text-2xl font-extralight text-gray-800">
          My <strong className="font-bold">Resume</strong>
        </h2>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-xl font-extralight text-gray-800">Education</h3>
            {education.map((item) => (
              <ResumeItem key={item.title} {...item} />
            ))}
          </div>
          <div>
            <h3 className="mb-6 text-xl font-extralight text-gray-800">Experience</h3>
            {experience.map((item) => (
              <ResumeItem key={item.title} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
