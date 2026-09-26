import { ArrowRight, Download } from 'lucide-react'

interface WorkExperience {
  position: string
  company: string
  year: string
}

const EXPERIENCES: WorkExperience[] = [
  { position: 'Senior Web Designer', company: 'XYZ Agency', year: '2018–2022' },
  { position: 'Front-end Engineer', company: 'StudioLab', year: '2016–2018' },
  { position: 'UI/UX Designer', company: 'DesignCo', year: '2014–2016' },
  { position: 'Junior Developer', company: 'WebWorks', year: '2012–2014' },
]

export function About() {
  return (
    <section id="about-section" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="font-mulish mb-2 text-4xl font-bold text-ink">About</h2>
          <p className="font-roboto-mono max-w-xl text-muted">
            A passionate designer and developer with over a decade of experience creating digital
            experiences that matter.
          </p>
          <svg
            viewBox="0 0 100 12"
            preserveAspectRatio="none"
            className="mt-4 h-3 w-24 text-primary"
          >
            <path
              d="M0,6 Q12,0 25,6 T50,6 T75,6 T100,6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: image + experience badge */}
          <div className="relative">
            <div className="mb-6 rounded-lg bg-primary/10 p-6">
              <span className="font-mulish block text-lg font-bold text-ink">
                12 Years of experience
              </span>
              <div className="mt-3 flex gap-4">
                <a
                  href="#portfolio-section"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  <ArrowRight size={14} />
                  See portfolio
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  <Download size={14} />
                  Download CV
                </a>
              </div>
            </div>
            <img
              src="https://picsum.photos/seed/cosmos-about/600/400"
              alt="About me"
              className="w-full rounded-lg object-cover"
              loading="lazy"
            />
          </div>

          {/* Right: bio + work experience */}
          <div>
            <h3 className="font-mulish mb-3 text-lg font-bold text-ink">Bio</h3>
            <p className="font-roboto-mono mb-4 text-sm text-muted">
              I&apos;m a creative professional with a passion for building beautiful, functional
              digital products. Over the years, I&apos;ve worked with startups and agencies to
              deliver web experiences that delight users and drive business results.
            </p>
            <p className="font-roboto-mono mb-8 text-sm text-muted">
              When I&apos;m not designing or coding, you can find me exploring new technologies,
              contributing to open source, or enjoying a good cup of coffee.
            </p>

            <h3 className="font-mulish mb-4 text-lg font-bold text-ink">Work Experience</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {EXPERIENCES.map((exp) => (
                <div key={exp.position + exp.company} className="rounded-lg border border-line p-4">
                  <h4 className="font-mulish text-sm font-bold text-ink">{exp.position}</h4>
                  <p className="font-roboto-mono text-xs text-muted">{exp.company}</p>
                  <p className="font-roboto-mono mt-1 text-xs text-primary">{exp.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
