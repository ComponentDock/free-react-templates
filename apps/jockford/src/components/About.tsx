import { Button } from '@free-react-templates/ui'
import { Palette, Globe, Code2, Smartphone } from 'lucide-react'

const stats = [
  { icon: Palette, label: 'Graphic Design', count: 45, color: 'bg-brand' },
  { icon: Globe, label: 'Web Design', count: 32, color: 'bg-emerald-500' },
  { icon: Code2, label: 'Software', count: 28, color: 'bg-amber-500' },
  { icon: Smartphone, label: 'Application', count: 18, color: 'bg-rose-500' },
]

export function About() {
  return (
    <section id="about" className="bg-bg-primary py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-4 text-3xl font-bold text-text-primary">Who Am I?</h2>
        <p className="mb-8 max-w-2xl text-text-secondary">
          I&apos;m a passionate UI/UX designer with over 8 years of experience creating beautiful,
          user-friendly digital experiences. I specialize in turning complex problems into simple,
          elegant designs that users love.
        </p>

        <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-bg-secondary p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div
                className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full ${stat.color} text-white`}
              >
                <stat.icon className="h-6 w-6" />
              </div>
              <p className="text-2xl font-bold text-text-primary">{stat.count}</p>
              <p className="text-sm text-text-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        <Button className="bg-brand text-white hover:bg-brand-hover">Hire me</Button>
      </div>
    </section>
  )
}
