import { Tag } from 'lucide-react'
import { tags } from './Sidebar'

const navLinks = ['Home', 'About Me', 'Blog', 'Travel', 'Lifestyle', 'Fashion', 'Health'] as const

const footerPosts = [
  { title: 'The Most Popular Leg Workout for Women', date: '22 Jan, 2017' },
  { title: 'Popular Lifestyle with Fashion & Modeling', date: '20 Jan, 2017' },
  { title: 'Video Post Travel with my Friends', date: '21 Jan, 2017' },
  { title: '7 Tricks of Skateboarding For A Beginner', date: '19 Jan, 2017' },
] as const

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-footer-100 py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="mb-6 font-serif text-xl italic text-ink-heading dark:text-gray-100">
              Navigational
            </h3>
            <ul className="space-y-3">
              {navLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="text-ink-body transition-colors hover:text-brand-500 dark:text-gray-300"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-6 font-serif text-xl italic text-ink-heading dark:text-gray-100">
              Recent Post
            </h3>
            <ul className="space-y-6">
              {footerPosts.map((post) => (
                <li key={post.title}>
                  <p className="text-[13px] text-gray-500">{post.date}</p>
                  <a
                    href="#"
                    className="font-serif italic text-ink-heading transition-colors hover:text-brand-500 dark:text-gray-100"
                  >
                    {post.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-6 font-serif text-xl italic text-ink-heading dark:text-gray-100">
              Tags
            </h3>
            <ul className="flex flex-wrap gap-x-5 gap-y-3">
              {tags.map((tag) => (
                <li key={tag}>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-ink-heading transition-colors hover:text-brand-500 dark:text-gray-100"
                  >
                    <Tag className="h-3.5 w-3.5 text-brand-500" aria-hidden="true" />
                    {tag}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-line-300 pt-8 text-center text-sm text-gray-500 dark:border-gray-700">
          Copyright © {year} All rights reserved | Made with ♥ by Free React Templates
        </div>
      </div>
    </footer>
  )
}
