import { Globe, AtSign, Camera, Mail } from 'lucide-react'

const features = [
  'Land Development',
  'Surface Mining',
  'Project Consulting',
  'Equipment Rental',
  'Environmental Services',
  'Safety Training',
]

export function Footer() {
  return (
    <footer className="bg-dark-bg text-white pt-16 pb-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h4 className="text-xl font-bold font-heading text-brand mb-4">About Digger</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Digger is a leading construction and mining company, delivering innovative solutions
              with over 30 years of industry experience.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold font-heading mb-4">Our Features</h4>
            <ul className="space-y-2">
              {features.map((f) => (
                <li key={f}>
                  <a href="#" className="text-sm text-gray-400 hover:text-brand transition-colors">
                    {f}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="sm:col-span-2 lg:col-span-2">
            <h4 className="text-xl font-bold font-heading mb-4">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and industry insights.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded bg-white/10 border border-white/20 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-brand transition-colors"
              />
              <button
                type="submit"
                className="bg-brand text-white px-6 py-2 rounded font-semibold text-sm hover:bg-brand-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Website"
              className="text-gray-400 hover:text-brand transition-colors"
            >
              <Globe size={18} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-400 hover:text-brand transition-colors"
            >
              <AtSign size={18} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-400 hover:text-brand transition-colors"
            >
              <Camera size={18} />
            </a>
            <a
              href="#"
              aria-label="Email"
              className="text-gray-400 hover:text-brand transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
          <p className="text-xs text-gray-500">
            Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-medium text-brand hover:text-brand-dark transition-colors"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
