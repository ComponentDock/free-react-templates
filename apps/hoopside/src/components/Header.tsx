import { ShoppingCart, Users, Headphones } from 'lucide-react'

const navLinks = ['Home', 'About', 'Player', 'Shop', 'Pages', 'Blog', 'Contact']

export function Header() {
  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-dark-surface py-2 text-sm text-gray-400">
        <div className="container mx-auto flex justify-end">
          <ul className="flex gap-6">
            <li className="flex items-center gap-2">
              <Users size={14} className="text-primary" />
              <div>
                <span className="block text-xs text-gray-500">Join our team</span>
                <span>Ourteam@hoopside.com</span>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <Headphones size={14} className="text-primary" />
              <div>
                <span className="block text-xs text-gray-500">Contact us</span>
                <span>Support@hoopside.com</span>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <ShoppingCart size={14} className="text-primary" />
              <div>
                <span className="block text-xs text-gray-500">My cart</span>
                <span>
                  ( 2 items ) <span className="text-white">$285.00</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-dark-bg py-4">
        <div className="container mx-auto flex items-center justify-between">
          <a
            href="/"
            className="font-heading text-2xl font-bold uppercase tracking-wider text-white"
          >
            Hoop<span className="text-primary">side</span>
          </a>
          <nav>
            <ul className="flex gap-6">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="font-heading text-sm uppercase tracking-wide text-gray-300 transition-colors hover:text-primary"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
