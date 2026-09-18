const socialLinks = [
  { label: 'Facebook', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'Dribbble', href: '#' },
]

export function SocialLinks() {
  return (
    <div className="mt-8 w-full border-t border-input-border pt-5">
      <h3 className="mb-2 text-base font-normal text-text-heading">Follow us here</h3>
      <p className="flex flex-wrap gap-2">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[13px] font-medium uppercase text-text-social transition-colors hover:text-text-heading"
          >
            {link.label}
          </a>
        ))}
      </p>
    </div>
  )
}
