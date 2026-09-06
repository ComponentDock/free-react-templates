import { type FormEvent } from 'react'
import { MapPin, Phone, Send, Star } from 'lucide-react'

const blogPosts = [
  {
    title: 'Even the all-powerful Pointing has no control about',
    date: 'Oct. 16, 2019',
    author: 'Admin',
    comments: 19,
    image: 'https://picsum.photos/seed/blog1/80/80',
  },
  {
    title: 'Even the all-powerful Pointing has no control about',
    date: 'Oct. 16, 2019',
    author: 'Admin',
    comments: 19,
    image: 'https://picsum.photos/seed/blog2/80/80',
  },
] as const

const product = {
  name: 'Grilled Beef with potatoes',
  rating: 5,
  image: 'https://picsum.photos/seed/product1/400/150',
} as const

const instagramImages = [
  'https://picsum.photos/seed/insta1/200/200',
  'https://picsum.photos/seed/insta2/200/200',
  'https://picsum.photos/seed/insta3/200/200',
  'https://picsum.photos/seed/insta4/200/200',
  'https://picsum.photos/seed/insta5/200/200',
  'https://picsum.photos/seed/insta6/200/200',
] as const

function TwitterIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

export function Footer() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <footer className="bg-footer-bg font-['Poppins',sans-serif]" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        {/* Top row: Logo + Social */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 border-b border-footer-border pb-6 sm:flex-row sm:items-center">
          <h2 className="text-[28px] font-bold leading-tight text-white">
            FooterBloom{' '}
            <span className="block text-[14px] font-normal text-footer-link">Free Templates</span>
          </h2>
          <ul className="flex gap-3">
            {[
              { icon: <TwitterIcon />, label: 'Twitter' },
              { icon: <FacebookIcon />, label: 'Facebook' },
              { icon: <InstagramIcon />, label: 'Instagram' },
            ].map((social) => (
              <li key={social.label}>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-footer-social-border text-footer-text transition-colors hover:border-footer-social-hover-border hover:text-white"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Brand + Contact + Subscribe */}
          <div>
            <h3 className="mb-6 text-[20px] font-semibold text-white">FooterBloom</h3>
            <ul className="mb-6 space-y-4">
              <li className="flex gap-3 text-[15px] text-footer-text">
                <MapPin className="mt-0.5 h-[18px] w-[18px] shrink-0" />
                <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
              </li>
              <li>
                <a
                  href="#"
                  className="flex gap-3 text-[15px] text-footer-text transition-colors hover:text-white"
                >
                  <Phone className="mt-0.5 h-[18px] w-[18px] shrink-0" />
                  <span>+2 392 3929 210</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex gap-3 text-[15px] text-footer-text transition-colors hover:text-white"
                >
                  <Send className="mt-0.5 h-[18px] w-[18px] shrink-0" />
                  <span>info@yourdomain.com</span>
                </a>
              </li>
            </ul>
            <form onSubmit={handleSubmit} className="flex" aria-label="Email subscription">
              <input
                type="text"
                placeholder="Enter email address"
                aria-label="Email address"
                className="h-[52px] flex-1 border-2 border-footer-social-border bg-black/5 px-4 text-[15px] text-white/40 outline-none placeholder:text-white/40 focus:border-footer-social-hover-border"
              />
              <button
                type="submit"
                className="flex h-[52px] w-[52px] shrink-0 items-center justify-center bg-footer-subscribe-bg text-white transition-colors hover:opacity-90"
                aria-label="Subscribe"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Col 2: Latest News */}
          <div>
            <h3 className="mb-6 text-[20px] font-semibold text-white">Latest News</h3>
            <div className="space-y-6">
              {blogPosts.map((post, i) => (
                <div key={i} className="flex gap-4">
                  <a
                    href="#"
                    className="h-[80px] w-[80px] shrink-0 rounded bg-cover bg-center"
                    style={{ backgroundImage: `url(${post.image})` }}
                  />
                  <div className="min-w-0 flex-1">
                    <a
                      href="#"
                      className="mb-2 block text-[16px] font-normal leading-snug text-footer-link transition-colors hover:text-white"
                    >
                      {post.title}
                    </a>
                    <div className="flex flex-wrap gap-x-3 text-[12px] text-footer-text">
                      <span>{post.date}</span>
                      <span>{post.author}</span>
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Col 3: Best Sellers */}
          <div>
            <h3 className="mb-6 text-[20px] font-semibold text-white">Best Sellers</h3>
            <div>
              <a
                href="#"
                className="mb-3 block h-[150px] rounded bg-cover bg-center"
                style={{ backgroundImage: `url(${product.image})` }}
              />
              <div>
                <a
                  href="#"
                  className="block text-[16px] text-footer-link transition-colors hover:text-white"
                >
                  {product.name}
                </a>
                <div className="mt-1 flex gap-0.5">
                  {Array.from({ length: product.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-footer-link text-footer-link" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Instagram */}
          <div>
            <h3 className="mb-6 text-[20px] font-semibold text-white">Instagram</h3>
            <div className="grid grid-cols-3 gap-1">
              {instagramImages.map((src, i) => (
                <a
                  key={i}
                  href="#"
                  className="block aspect-square bg-cover bg-center"
                  style={{ backgroundImage: `url(${src})` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-footer-border pt-8 sm:flex-row">
          <p className="text-[14px] text-footer-text">
            &copy; {new Date().getFullYear()} All rights reserved
          </p>
          <p className="text-[14px] text-footer-text">
            Made with <span className="text-footer-link">♥</span> by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noreferrer"
              className="text-footer-link transition-colors hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
