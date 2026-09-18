import { Briefcase, Megaphone, Heart, Stethoscope, Building2, PenTool } from 'lucide-react'

const jobs = [
  {
    icon: PenTool,
    title: 'Design & Creatives',
    desc: 'The automated process starts as soon as your clothes go into.',
    remote: true,
  },
  {
    icon: Megaphone,
    title: 'Marketing',
    desc: 'The automated process starts as soon as your clothes go into.',
    remote: false,
  },
  {
    icon: Briefcase,
    title: 'Corporate',
    desc: 'The automated process starts as soon as your clothes go into.',
    remote: false,
  },
  {
    icon: Heart,
    title: 'Health/Medical',
    desc: 'The automated process starts as soon as your clothes go into.',
    remote: true,
  },
  {
    icon: Stethoscope,
    title: 'Finance',
    desc: 'The automated process starts as soon as your clothes go into.',
    remote: false,
  },
  {
    icon: Building2,
    title: 'Copywriting',
    desc: 'The automated process starts as soon as your clothes go into.',
    remote: false,
  },
]

export function TopJobs() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-brand text-[80px] lg:text-[120px] font-bold leading-none block">
            1000+
          </span>
          <h2 className="text-brand-dark text-3xl lg:text-5xl font-bold capitalize mt-4">
            Browse From Our Top Jobs
          </h2>
          <p className="text-text-muted text-lg mt-5 max-w-2xl mx-auto">
            The automated process starts as soon as your clothes go into the machine. The outcome is
            gleaming clothes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <div
              key={job.title}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow relative"
            >
              {job.remote && (
                <span className="absolute top-4 right-4 bg-brand text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                  Remote
                </span>
              )}
              <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mb-6">
                <job.icon className="text-brand" size={28} />
              </div>
              <h5 className="text-brand-dark text-xl font-bold mb-3">{job.title}</h5>
              <p className="text-text-muted mb-6">{job.desc}</p>
              <a
                href="#"
                className="inline-block bg-brand/6 text-brand px-8 py-3 rounded-full text-sm font-bold uppercase hover:bg-brand hover:text-white transition-colors"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
