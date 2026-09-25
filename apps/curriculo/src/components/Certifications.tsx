import { Award, Trophy, Medal, Ribbon } from 'lucide-react'

const certs = [
  {
    year: '2031',
    title: 'Google UX Design Professional',
    issuer: 'Google',
    description:
      'Comprehensive UX design certification covering user research, wireframing, prototyping, and usability testing.',
    Icon: Medal,
  },
  {
    year: '2030',
    title: 'Awwwards Site of the Day',
    issuer: 'Awwwards',
    description:
      'Recognized for exceptional web design, creativity, and user experience on the TechFlow project.',
    Icon: Trophy,
  },
  {
    year: '2029',
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    description:
      'Professional certification for designing distributed systems and deploying scalable applications on AWS.',
    Icon: Award,
  },
  {
    year: '2028',
    title: 'CSS Design Awards — Best UI',
    issuer: 'CSS Design Awards',
    description:
      'Winner of Best UI Design for innovative interface design on the Bloom Finance dashboard project.',
    Icon: Trophy,
  },
  {
    year: '2027',
    title: 'Meta Front-End Developer',
    issuer: 'Meta',
    description:
      'Professional certification in modern front-end development including React, responsive design, and accessibility.',
    Icon: Ribbon,
  },
  {
    year: '2026',
    title: 'Red Dot Design Award',
    issuer: 'Red Dot',
    description:
      'International recognition for outstanding product design and visual communication excellence.',
    Icon: Trophy,
  },
]

export function Certifications() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-10 text-center text-2xl font-extralight text-gray-800">
          Certifications &amp; <strong className="font-bold">Awards</strong>
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((c) => (
            <div key={c.title} className="flex gap-4 rounded-lg bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                <c.Icon className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-brand-primary">{c.year}</span>
                <h3 className="text-base font-bold text-gray-800">{c.title}</h3>
                <p className="mb-1 text-xs font-semibold text-gray-500">{c.issuer}</p>
                <p className="text-sm text-gray-600">{c.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
