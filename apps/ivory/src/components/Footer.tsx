import { BrandIcon } from './BrandIcon'
import { footerPosts, instagramImages, socialLabels, socialLinks } from '../data'

export function Footer() {
  return (
    <footer className="border-t border-footerline bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6 pt-[100px]">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          {footerPosts.map((post) => (
            <div key={post.seed} className="flex gap-5">
              <img
                src={`https://picsum.photos/seed/${post.seed}/185/140`}
                alt=""
                className="h-auto w-[185px] shrink-0 object-cover"
              />
              <div className="flex flex-col justify-between py-1">
                <p className="text-[11px] uppercase tracking-[0.08rem] text-meta dark:text-gray-400">
                  {post.date}
                </p>
                <h3 className="font-sans text-lg font-medium leading-snug text-ink dark:text-gray-100">
                  <a href="#blog" className="transition-colors hover:text-meta">
                    {post.title}
                  </a>
                </h3>
                <a
                  href="#blog"
                  className="mb-3 text-sm capitalize text-ink underline transition-opacity hover:opacity-70 dark:text-gray-200"
                >
                  read more
                </a>
              </div>
            </div>
          ))}
        </div>

        <ul
          className="mt-14 grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-5 xl:flex"
          aria-label="Instagram feed"
        >
          {instagramImages.map((seed) => (
            <li key={seed} className="flex-1">
              <a href="#blog">
                <img
                  src={`https://picsum.photos/seed/${seed}/240/240`}
                  alt=""
                  className="h-auto w-full object-cover"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-14 bg-ink py-[22px] dark:bg-black">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <p className="text-[13px] text-copyright dark:text-gray-500">
            Copyright © 2026 All rights reserved | This template is made with by Free React
            Templates
          </p>
          <ul className="flex items-center gap-6" aria-label="Footer social links">
            {socialLinks.map((name) => (
              <li key={name}>
                <a
                  href="#home"
                  aria-label={socialLabels[name]}
                  className="text-sm text-footsocial transition-colors hover:text-white"
                >
                  <BrandIcon name={name} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
