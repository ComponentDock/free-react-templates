import { ArrowRight } from 'lucide-react'

const instagramImages = Array.from({ length: 8 }, (_, i) => `shopcraft-insta-${i + 1}`)

export function Footer() {
  return (
    <footer className="bg-[#222] py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-bold">About Us</h3>
            <p className="mt-3 text-sm text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore dolore magna aliqua.
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold">Newsletter</h3>
            <p className="mt-3 text-sm text-gray-400">Stay update with our latest</p>
            <form className="mt-3 flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter Email"
                className="flex-1 px-3 py-2 text-sm text-heading"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="bg-brand px-4 py-2 text-white transition-colors hover:bg-brand-dark"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Instagram Feed */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Instagram Feed</h3>
            <div className="grid grid-cols-4 gap-2">
              {instagramImages.map((img) => (
                <img
                  key={img}
                  src={`https://picsum.photos/seed/${img}/60/60`}
                  alt="Instagram post"
                  className="h-14 w-14 object-cover"
                  width={60}
                  height={60}
                />
              ))}
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-bold">Follow Us</h3>
            <p className="mt-3 text-sm text-gray-400">Let us be social</p>
            <div className="mt-4 flex gap-4">
              <a href="#facebook" aria-label="Facebook" className="text-gray-400 hover:text-white">
                f
              </a>
              <a href="#twitter" aria-label="Twitter" className="text-gray-400 hover:text-white">
                t
              </a>
              <a href="#dribbble" aria-label="Dribbble" className="text-gray-400 hover:text-white">
                d
              </a>
              <a href="#behance" aria-label="Behance" className="text-gray-400 hover:text-white">
                b
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-gray-400">
            Copyright &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
            <span className="text-brand">&#9829;</span> by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
