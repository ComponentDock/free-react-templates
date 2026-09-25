import { Lightbulb, Globe, Database, Smartphone } from 'lucide-react'

const serviceIcons = [
  { icon: Lightbulb, label: 'Graphic Design', color: 'bg-brand' },
  { icon: Globe, label: 'Web Design', color: 'bg-emerald-500' },
  { icon: Database, label: 'Software', color: 'bg-violet-500' },
  { icon: Smartphone, label: 'Application', color: 'bg-amber-500' },
]

export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <span className="text-sm font-medium text-brand uppercase tracking-wider">About</span>
        <h2 className="text-3xl font-bold text-text-primary mt-2 mb-6">Who Am I?</h2>

        <div className="text-text-secondary leading-relaxed mb-10 space-y-4">
          <p>
            <strong className="text-text-primary">Hi, I&apos;m Alex Morgan.</strong> On her way she
            met a copy. The copy warned the Little Blind Text, that where it came from it would have
            been rewritten a thousand times and everything that was left from its origin would be
            the word &quot;and&quot; and the Little Blind Text should turn around and return to its
            own, safe country.
          </p>
          <p>
            Even the all-powerful Pointing has no control about the blind texts it is an almost
            unorthographic life One day however a small line of blind text by the name of Lorem
            Ipsum decided to leave for the far World of Grammar.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {serviceIcons.map((item) => (
            <div
              key={item.label}
              className="text-center p-6 rounded-lg bg-bg-secondary border border-border"
            >
              <div
                className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center mx-auto mb-3`}
              >
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-sm font-semibold text-text-primary">{item.label}</h3>
            </div>
          ))}
        </div>

        <div className="mt-10 p-8 bg-bg-secondary rounded-lg text-center border border-border">
          <h2 className="text-xl font-bold text-text-primary mb-2">
            I am happy to know you
            <br />
            that 300+ projects done successfully!
          </h2>
          <a
            href="#contact"
            className="inline-block mt-4 bg-brand hover:bg-brand-hover text-white font-medium px-6 py-3 rounded-md transition-colors"
          >
            Hire me
          </a>
        </div>
      </div>
    </section>
  )
}
