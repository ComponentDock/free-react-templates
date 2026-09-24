import { Heart } from 'lucide-react'
import { footerLinks } from '../data'

export function Footer() {
  return (
    <footer className="relative bg-dark-bg px-4 pt-16 pb-8 text-white">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/newsclip-footer-bg/1920/1080')] bg-cover bg-center opacity-5" />
      <div className="relative mx-auto max-w-7xl">
        {/* 6-column widget areas */}
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-white">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm text-white/60 transition-colors hover:text-brand"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright bar */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-white/60">
            Copyright © {new Date().getFullYear()} All rights reserved | Made with{' '}
            <Heart className="inline h-4 w-4 text-brand" aria-hidden="true" /> by{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand transition-opacity hover:opacity-70"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
