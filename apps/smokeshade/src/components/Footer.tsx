const socialIcons = ['Facebook', 'Twitter', 'Instagram', 'Pinterest']
const usefulLinks = ['Home', 'About Us', 'Blog', 'Gallery', 'Contact']
const instagramImages = Array.from({ length: 6 }, (_, i) => `smokeshade-insta-${i + 1}`)

export function Footer() {
  return (
    <footer className="bg-[#111111] pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">Smokeshade</h3>
            <p className="text-sm text-[#b3b3b3]">
              We are a fashion agency creating trends that define the future of style and elegance.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-bold text-white">Useful Links</h4>
            <ul className="flex flex-col gap-2">
              {usefulLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm text-[#b3b3b3] transition-colors hover:text-[#e32879]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-bold text-white">Join The Newsletter</h4>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-l-full bg-[#303030] px-4 py-2 text-sm text-white placeholder-[#b3b3b3] focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-r-full bg-[#e32879] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#c41f65]"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-bold text-white">Instagram</h4>
            <div className="grid grid-cols-3 gap-2">
              {instagramImages.map((img) => (
                <img
                  key={img}
                  src={`https://picsum.photos/seed/${img}/100/100`}
                  alt="Instagram"
                  className="h-16 w-16 rounded object-cover"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#393939] pt-8 sm:flex-row">
          <p className="text-sm text-[#b3b3b3]">
            Copyright &copy; 2024 All rights reserved | This template is made with by{' '}
            <a href="https://www.componentdock.com/" className="text-[#e32879] hover:underline">
              Component Dock
            </a>
          </p>
          <div className="flex gap-3">
            {socialIcons.map((icon) => (
              <a
                key={icon}
                href="#"
                aria-label={icon}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e32879] text-xs text-white transition-colors hover:bg-[#c41f65]"
              >
                {icon[0]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
