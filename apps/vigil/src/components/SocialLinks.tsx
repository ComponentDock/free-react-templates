interface SocialLink {
  name: string
  href: string
  color: string
  icon: string
}

const links: SocialLink[] = [
  { name: 'Facebook', href: '#', color: '#2A61D6', icon: 'F' },
  { name: 'Twitter', href: '#', color: '#3AA4F8', icon: 'T' },
  { name: 'Google+', href: '#', color: '#F43846', icon: 'G' },
  { name: 'Instagram', href: '#', color: '#8F614A', icon: 'I' },
  { name: 'Pinterest', href: '#', color: '#E1C013', icon: 'P' },
]

export function SocialLinks() {
  return (
    <div className="text-center">
      <p className="mb-3 text-sm font-semibold tracking-wide text-white/80">Follow us for update</p>
      <div className="flex justify-center gap-2">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            aria-label={link.name}
            className="flex h-[35px] w-[35px] items-center justify-center rounded-full text-sm font-bold text-white transition-colors hover:bg-white hover:text-gray-900"
            style={{ backgroundColor: link.color }}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  )
}
