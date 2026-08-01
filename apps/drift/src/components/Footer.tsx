const socials = [
  { name: 'GitHub', href: 'https://github.com' },
  { name: 'X', href: 'https://x.com' },
  { name: 'LinkedIn', href: 'https://linkedin.com' },
] as const

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-10 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between sm:px-6">
        <div className="text-center sm:text-left">
          <p className="font-bold text-gray-900 dark:text-white">Drift</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            You&apos;ve drifted off course — let&apos;s get you back.
          </p>
        </div>
        <ul className="flex gap-6">
          {socials.map((social) => (
            <li key={social.name}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
              >
                {social.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
