import { Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  information: ['About Us', 'Services', 'Gallery', 'Blog', 'Contact', 'Privacy Policy'],
}

const recentBlog = [
  { title: 'Photoshoot Technique', seed: 'clareo-blog-1' },
  { title: 'Camera Lens Shoot', seed: 'clareo-blog-f1' },
  { title: 'Clareo the biggest photography studio', seed: 'clareo-blog-f2' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-16 text-gray-400">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-4">
          {/* About */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-white">About Clareo</h4>
            <p className="text-sm leading-relaxed">
              A professional photography studio capturing life's beautiful moments with passion and
              creativity.
            </p>
          </div>

          {/* Information */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-white">Information</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.information.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-brand-400">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Blog */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-white">Recent Blog</h4>
            <div className="space-y-4">
              {recentBlog.map((post) => (
                <a key={post.title} href="#" className="group block">
                  <div
                    className="mb-1 aspect-[16/9] rounded bg-cover bg-center"
                    style={{
                      backgroundImage: `url(https://picsum.photos/seed/${post.seed}/300/170)`,
                    }}
                    role="img"
                    aria-label={post.title}
                  />
                  <span className="text-sm group-hover:text-brand-400">{post.title}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-white">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-400" aria-hidden="true" />
                <span>+1 (234) 567-920</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-400" aria-hidden="true" />
                <span>info@clareo.studio</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-400" aria-hidden="true" />
                <span>123 Creative Ave, Studio City</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Clareo. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-400 hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
