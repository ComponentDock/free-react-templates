import { Download } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://picsum.photos/seed/kael-about/500/550"
            alt="About Kael"
            className="rounded-2xl object-cover shadow-lg"
            width={500}
            height={550}
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="mb-6 font-display text-3xl font-bold uppercase leading-snug text-ink md:text-4xl">
            Let's <br />
            Introduce About <br />
            Myself
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-smoke">
            Passionate about creating exceptional digital experiences. With over a decade of
            experience in web development and design, I bring ideas to life through clean code and
            thoughtful interfaces.
          </p>
          <p className="mb-8 text-sm leading-relaxed text-smoke">
            From concept to deployment, I focus on performance, accessibility, and user experience.
            Every project is an opportunity to push boundaries and deliver something remarkable.
          </p>
          <Button className="bg-gradient-to-r from-primary-500 to-accent-400 text-white">
            <span className="flex items-center gap-2">
              Download CV <Download className="h-4 w-4" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  )
}
