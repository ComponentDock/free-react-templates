import { Mail, MapPin, Phone } from 'lucide-react'
import { contact, recentPosts } from '../data'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-footer py-16 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-3 md:px-6">
        <div>
          <h2 className="font-heading text-lg font-light uppercase tracking-[0.1em] text-white">
            About Us
          </h2>
          <p className="mt-5 text-sm text-white/70">
            Alms is a volunteer-run charity funding clean water, schooling and
            shelter in 150 countries. Every program is requested by the
            community that runs it.
          </p>
          <p className="mt-4 text-sm text-white/70">
            We publish our accounts twice a year and cap administration at eight
            percent of income.
          </p>
          <a
            href="#home"
            className="mt-4 inline-block text-sm text-brand underline decoration-brand/60 underline-offset-4 hover:no-underline"
          >
            Read More
          </a>
        </div>

        <div>
          <h2 className="font-heading text-lg font-light uppercase tracking-[0.1em] text-white">
            Recent Blog
          </h2>
          <ul className="mt-5 space-y-5">
            {recentPosts.map((post) => (
              <li key={post.title} className="flex gap-4">
                <img
                  src={post.image}
                  alt=""
                  className="h-16 w-16 shrink-0 rounded border-4 border-white object-cover"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-heading text-base font-light leading-snug">
                    <a href="#news" className="text-white transition-colors hover:text-brand">
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-xs text-white/60">
                    {post.date} · {post.author} · 19 comments
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-lg font-light uppercase tracking-[0.1em] text-white">
            Get Connected
          </h2>
          <ul className="mt-5 space-y-4 text-sm text-white/70">
            <li className="flex gap-3">
              <MapPin aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-brand" />
              <span>{contact.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-brand" />
              <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="hover:text-brand">
                {contact.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-brand" />
              <a href={`mailto:${contact.email}`} className="hover:text-brand">
                {contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-6xl border-t border-white/10 px-4 pt-6 text-sm text-white/50 md:px-6">
        <p>
          © {year} Alms. All rights reserved. More templates at{' '}
          <a href="https://www.componentdock.com/" className="text-brand hover:underline">
            Component Dock
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
