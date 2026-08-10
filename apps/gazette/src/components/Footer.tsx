import { Heart } from 'lucide-react'
import { BrandIcon } from './BrandIcon'
import { latestPosts, quickLinks, socialLabels, socialLinks } from '../data'

export function Footer() {
  return (
    <footer className="bg-ink py-20 dark:bg-black">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="mb-8 font-sans text-sm font-bold uppercase tracking-[0.2em] text-white">
            Paragraph
          </h3>
          <img
            src="https://picsum.photos/seed/gazette-footer/400/300"
            alt=""
            className="h-[150px] w-full object-cover"
          />
          <p className="mt-4 text-sm leading-relaxed text-white/50">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>

        <div>
          <h3 className="mb-8 font-sans text-sm font-bold uppercase tracking-[0.2em] text-white">
            Latest Post
          </h3>
          <ul className="flex flex-col gap-5">
            {latestPosts.map((post) => (
              <li key={post.seed} className="flex items-center gap-4">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/90/90`}
                  alt=""
                  className="h-[90px] w-[90px] object-cover"
                />
                <div>
                  <h4 className="font-sans text-lg font-bold leading-snug text-white">
                    <a href="#home" className="transition-opacity hover:opacity-50">
                      {post.title}
                    </a>
                  </h4>
                  <p className="mt-1 text-sm text-white/50">{post.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-8 font-sans text-sm font-bold uppercase tracking-[0.2em] text-white">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3">
            {quickLinks.map((link) => (
              <li key={link}>
                <a href="#home" className="text-sm text-white transition-opacity hover:opacity-50">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-8 font-sans text-sm font-bold uppercase tracking-[0.2em] text-white">
            Social
          </h3>
          <ul className="flex items-center gap-3" aria-label="Footer social links">
            {socialLinks.map((name) => (
              <li key={name}>
                <a
                  href="#home"
                  aria-label={socialLabels[name]}
                  className="text-white transition-opacity hover:opacity-50"
                >
                  <BrandIcon name={name} className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 border-t border-white/10 pt-6">
        <p className="text-center text-sm text-white/60">
          Copyright © 2026 All rights reserved | Made with{' '}
          <Heart className="inline h-4 w-4 text-brand" aria-hidden="true" /> by Free React Templates
        </p>
      </div>
    </footer>
  )
}
