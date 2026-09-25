import { ButtonLink } from '@free-react-templates/ui'
import { Download } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-gray-900">About Me</h2>
            <p className="mb-4 leading-relaxed text-gray-600">
              I'm a passionate product designer with a keen eye for detail and a love for creating
              intuitive user experiences. With years of experience in the industry, I've worked with
              startups and enterprises alike to bring their digital visions to life.
            </p>
            <p className="mb-8 leading-relaxed text-gray-600">
              My approach combines user-centered design principles with modern aesthetics to create
              products that not only look great but also solve real problems for real people.
            </p>
            <div className="flex flex-wrap gap-4">
              <ButtonLink
                href="#contact"
                className="rounded-full bg-leaf-400 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-leaf-500"
              >
                Hire Me
              </ButtonLink>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border-2 border-leaf-400 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-leaf-400 transition-colors hover:bg-leaf-400 hover:text-white"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="https://picsum.photos/seed/dossier-about/500/600"
              alt="Portrait of Alex Morgan"
              className="w-full max-w-sm rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
