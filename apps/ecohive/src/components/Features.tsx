import {
  Activity,
  EyeOff,
  Headphones,
  Lock,
  ShieldCheck,
  Users,
  type LucideIcon,
} from 'lucide-react'

interface Feature {
  caption: string
  blurb: string
  Icon: LucideIcon
}

const FEATURES: Feature[] = [
  {
    caption: 'Employee Owned',
    blurb: "Our team owns the company, so every call is decided in your favour, not an investor's.",
    Icon: Users,
  },
  {
    caption: 'Commitment to Security',
    blurb: 'Firewalls, malware scans and DDoS shielding ship with every plan at no extra cost.',
    Icon: ShieldCheck,
  },
  {
    caption: 'Passion for Privacy',
    blurb: 'We never sell your data, and domain privacy is included with every registration.',
    Icon: EyeOff,
  },
  {
    caption: 'Free SSL Certificates',
    blurb: 'Every site gets a certificate that renews itself, so the padlock never disappears.',
    Icon: Lock,
  },
  {
    caption: '24/7 Support',
    blurb: 'Real people answer chat, phone and email at any hour, every day of the year.',
    Icon: Headphones,
  },
  {
    caption: '100% Uptime Guaranteed',
    blurb: 'Redundant servers, power and network links keep you online — backed in writing.',
    Icon: Activity,
  },
]

export function Features() {
  return (
    <section id="features" className="bg-shell pb-24">
      <div className="mx-auto max-w-[1200px] px-4">
        <h2 className="font-heading text-center text-3xl font-bold text-white sm:text-4xl">
          Most amazing features
        </h2>

        <ul className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ caption, blurb, Icon }) => (
            <li key={caption} className="text-center">
              <Icon className="mx-auto h-12 w-12 text-accent" aria-hidden="true" />
              <h5 className="font-heading mt-6 text-lg font-semibold text-white">{caption}</h5>
              <p className="mt-3 text-sm leading-relaxed text-muted">{blurb}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
