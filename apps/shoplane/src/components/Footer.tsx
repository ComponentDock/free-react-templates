const navLinks = [
  { label: 'Blog', href: '#blog' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact us', href: '#contact' },
]

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  )
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.28-.03-.56-.08-.83A7.72 7.72 0 0023 3z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function SkypeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.069 18.874c-4.023 0-6.496-1.981-6.496-5.306 0-1.673.936-3.566 2.572-4.815-.672-.341-1.325-.525-1.888-.525-2.048 0-3.587 1.642-3.587 3.988 0 2.884 2.288 4.701 5.198 4.701.396 0 .787-.043 1.159-.127a6.077 6.077 0 01-.958-1.916zm-.157-6.974c.936 0 2.422-.321 3.095-.973.396-.375.381-.997-.024-1.598-.407-.618-1.434-1.059-2.539-1.059-1.132 0-2.166.441-2.585 1.078-.411.621-.407 1.244.016 1.598.421.541 1.366.954 2.037.954zm5.201 2.704c-.224-.12-.462-.184-.705-.184-.163 0-.321.033-.467.097-.586.26-1.651.823-1.651.823s1.044 1.254 2.653 1.254c.486 0 .951-.096 1.365-.272.438-.187.748-.541.748-.977 0-.651-.727-1.028-1.943-.764zm4.415 1.878c-.702-3.936-4.288-6.919-8.591-6.919-4.301 0-7.886 2.983-8.591 6.919-.074.42-.115.847-.115 1.28 0 4.209 3.982 7.621 8.886 7.621.552 0 1.09-.047 1.614-.134a9.044 9.044 0 01-.194-1.49c0-1.297.527-2.471 1.376-3.321.465-.475 1.037-.853 1.685-1.109a8.89 8.89 0 01-.419-1.014c-.272-.797-.385-1.504-.385-2.138 0-.372.049-.734.142-1.083.095-.36.235-.707.417-1.037zm-12.496 5.28c.714 0 1.413-.098 2.078-.283.359-.1.663-.367.818-.713.158-.36.116-.763-.116-1.069-.307-.406-.919-.768-1.78-.768-1.049 0-1.836.545-1.836 1.413 0 1.049.941 1.42 1.836 1.42z" />
    </svg>
  )
}

function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641 0 12.017 0z" />
    </svg>
  )
}

const socials = [
  { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
  { label: 'Twitter', href: 'https://twitter.com', Icon: TwitterIcon },
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { label: 'Skype', href: 'https://skype.com', Icon: SkypeIcon },
  { label: 'Pinterest', href: 'https://pinterest.com', Icon: PinterestIcon },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Nav links */}
          <ul className="flex items-center gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Social icons */}
          <ul className="flex items-center gap-3">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-coral-500"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 text-center text-xs text-gray-500">
          &copy; 2024 All Rights Reserved. More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="font-medium text-gray-400 underline transition-colors hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Component Dock
          </a>
        </div>
      </div>
    </footer>
  )
}
