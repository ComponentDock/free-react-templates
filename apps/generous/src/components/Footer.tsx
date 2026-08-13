import { contactInfo, footerAbout, footerPosts, socials } from '../data'
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from './social-icons'

const socialIcons: Record<string, React.ReactNode> = {
  Facebook: <FacebookIcon />,
  Twitter: <TwitterIcon />,
  Instagram: <InstagramIcon />,
  Linkedin: <LinkedinIcon />,
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-footer">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <h2 className="font-script text-xl uppercase tracking-[0.1em] text-white">About Us</h2>
          <p className="mt-4 font-light text-white/60">{footerAbout}</p>
          <div className="mt-4 flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="text-white/60 transition-colors hover:text-primary"
              >
                {socialIcons[social.name]}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-script text-xl uppercase tracking-[0.1em] text-white">Blog</h2>
          <ul className="mt-4 space-y-4">
            {footerPosts.map((post, i) => (
              <li key={`${post.title}-${i}`} className="block-21 flex items-start gap-3">
                <img
                  src={post.thumb}
                  alt={post.alt}
                  className="h-14 w-20 flex-none rounded object-cover"
                />
                <div>
                  <h3 className="text-sm font-medium leading-snug text-white">
                    <a href="#blog" className="transition-colors hover:text-primary">
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-xs text-white/40">{post.meta}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-script text-xl uppercase tracking-[0.1em] text-white">
            Contact Info
          </h2>
          <ul className="mt-4 space-y-3 font-light text-white/60">
            {contactInfo.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 text-sm font-light text-white/50">
          <p>Copyright © {year} All rights reserved</p>
          <p>
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-medium text-white transition-colors hover:text-primary"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
