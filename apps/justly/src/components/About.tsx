import { ButtonLink } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" className="bg-surface py-20" data-testid="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-4xl text-white uppercase mb-6">About Me</h2>
            <p className="text-text-muted leading-relaxed mb-4">
              With over a decade of experience in fitness coaching, I've helped hundreds of clients
              transform their bodies and lifestyles. My approach combines science-backed training
              methods with personalized nutrition guidance.
            </p>
            <p className="text-text-muted leading-relaxed mb-8">
              Whether you're looking to build muscle, lose weight, or improve your overall fitness,
              I'll create a program that fits your goals and schedule. Every journey starts with a
              single step.
            </p>
            <ButtonLink
              href="#courses"
              className="inline-flex border-2 border-brand text-brand px-8 py-3 font-heading text-xs uppercase tracking-[0.2em] hover:bg-brand hover:text-white transition-colors"
            >
              My Courses
            </ButtonLink>
          </div>
          <div>
            <img
              src="https://picsum.photos/seed/justly-about/600/500"
              alt="About Justly"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
