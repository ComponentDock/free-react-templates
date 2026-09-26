import { Globe, MessageCircle, Pen, Share2 } from 'lucide-react'

const socials = [
  { icon: Globe, label: 'Facebook', href: '#' },
  { icon: MessageCircle, label: 'Twitter', href: '#' },
  { icon: Pen, label: 'Dribbble', href: '#' },
  { icon: Share2, label: 'Behance', href: '#' },
]

export function Footer() {
  return (
    <footer className="bg-[var(--color-heading)] py-12">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="mb-2 text-2xl font-bold text-white">Smithy</h2>
        <p className="mb-4 text-sm text-white/60">Follow Me</p>
        <div className="mb-6 flex justify-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <s.icon size={18} />
            </a>
          ))}
        </div>
        <p className="mb-2 text-sm text-white/60">
          &copy; {new Date().getFullYear()} Smithy. All rights reserved.
        </p>
        <p className="text-sm text-white/60">
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="underline transition-colors hover:text-white"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
