interface SocialLinksProps {
  links?: Array<{ label: string; href: string; svg: string }>
}

const defaultLinks = [
  {
    label: 'Facebook',
    href: '#',
    svg: '<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>',
  },
  {
    label: 'Twitter',
    href: '#',
    svg: '<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>',
  },
  {
    label: 'Tumblr',
    href: '#',
    svg: '<path d="M14.563 24c-5.093 0-7.031-3.756-7.031-6.411V9.747H5.116V6.648c3.63-1.313 4.512-4.596 4.71-6.469C9.84.051 9.941 0 10.096 0h3.619v6.234h4.938v3.513h-4.952v7.45c.012 1.019.399 2.435 2.306 2.435h.121c.641-.02 1.508-.205 1.962-.419l1.156 3.425c-.467.671-2.567 1.462-4.565 1.462z"/>',
  },
  {
    label: 'Instagram',
    href: '#',
    svg: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>',
  },
]

export function SocialLinks({ links = defaultLinks }: SocialLinksProps) {
  return (
    <div className="absolute bottom-[7.35%] left-0 right-0 z-10 text-center max-md:static max-md:mt-8">
      {links.map(({ label, href, svg }) => (
        <a
          key={label}
          href={href}
          className="mr-3.5 text-[17px] text-white last:mr-0 hover:text-[#e5e5e5]"
          aria-label={label}
        >
          <svg
            className="inline h-[17px] w-[17px]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            dangerouslySetInnerHTML={{ __html: svg }}
          />
        </a>
      ))}
    </div>
  )
}
