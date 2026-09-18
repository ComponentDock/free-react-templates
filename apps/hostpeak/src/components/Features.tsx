import { Shield, ShieldCheck, Pencil, Globe, Headphones } from 'lucide-react'

const features = [
  {
    icon: <Shield className="h-10 w-10 text-brand-end" />,
    title: 'Secured Server',
    desc: 'Enterprise-grade security protecting your data around the clock with advanced firewalls.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-brand-end" />,
    title: 'Backup Facility',
    desc: 'Automatic daily backups ensure your data is always safe and recoverable.',
  },
  {
    icon: <Pencil className="h-10 w-10 text-brand-end" />,
    title: 'Easy To Customize',
    desc: 'Intuitive control panel makes it simple to configure your hosting environment.',
  },
  {
    icon: <Globe className="h-10 w-10 text-brand-end" />,
    title: 'Free Domain Transfer',
    desc: 'Seamlessly transfer your existing domain at no additional cost.',
  },
  {
    icon: <Headphones className="h-10 w-10 text-brand-end" />,
    title: 'Live Chat Support',
    desc: 'Expert support team available 24/7 via live chat to assist you.',
  },
]

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col justify-center p-6">
          <h2 className="mb-6 text-3xl font-bold text-heading lg:text-4xl">
            Choose Your Own Virtual Space
          </h2>
          <p className="text-base text-body">
            We provide reliable, high-performance hosting solutions tailored to your needs. From
            shared hosting to dedicated servers, find the perfect plan for your website.
          </p>
        </div>
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded bg-surface p-8 text-center transition-shadow hover:shadow-lg hover:shadow-heading/10"
          >
            <div className="mb-6 flex justify-center">{f.icon}</div>
            <h3 className="mb-3 text-lg font-bold text-heading">{f.title}</h3>
            <p className="text-sm text-body">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
