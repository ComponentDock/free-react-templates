const footerColumns = [
  {
    title: 'For Candidates',
    links: [
      'Browse Jobs',
      'Browse Categories',
      'Candidate Dashboard',
      'Saved Jobs',
      'Saved Searches',
    ],
  },
  {
    title: 'For Employers',
    links: ['Post A Job', 'Pricing', 'Employer Dashboard', 'Applications', 'Recruiting Tips'],
  },
  {
    title: 'Archives',
    links: ['January 2026', 'February 2026', 'March 2026', 'April 2026', 'May 2026'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Blog', 'FAQ', 'Terms', 'Privacy'],
  },
]

export function Footer() {
  return (
    <footer className="bg-bg-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="font-bold text-white mb-4">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 text-sm hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-bold text-white mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>203 Fake St. Mountain View, San Francisco, California, USA</li>
              <li>+1 234 567 8901</li>
              <li>info@joblaunch.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm text-gray-400">
          <p>
            Copyright &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-dark transition-colors"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
