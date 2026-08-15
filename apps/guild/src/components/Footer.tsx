import {
  componentDockName,
  componentDockUrl,
  footerAbout,
  footerColumns,
  footerLatestPosts,
  siteName,
} from '../data'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-footer pt-[73px]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-4 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <p className="text-[30px] leading-none font-bold tracking-wide text-white">{siteName}</p>
          <p className="mt-10 text-base leading-relaxed text-meta">{footerAbout}</p>
        </div>
        {footerColumns.map((column) => (
          <nav key={column.title} aria-label={column.title} className="lg:col-span-2">
            <h2 className="pt-[42px] text-lg font-bold text-white">{column.title}</h2>
            <ul className="mt-11 space-y-[10px]">
              {column.links.map((link) => (
                <li key={link}>
                  <a
                    href="#home"
                    className="text-base text-meta transition-colors hover:text-brand"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
        <nav aria-label="Latest posts" className="lg:col-span-3">
          <h2 className="pt-[42px] text-lg font-bold text-white">Useful Links</h2>
          <ul className="mt-11 space-y-6">
            {footerLatestPosts.map((post) => (
              <li key={post.title}>
                <p className="text-sm font-medium text-brand">{post.date}</p>
                <h3 className="mt-1 text-base font-bold text-white">
                  <a href="#blog" className="transition-colors hover:text-brand">
                    {post.title}
                  </a>
                </h3>
                <p className="mt-1 text-xs text-meta">{post.meta}</p>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="mt-16 px-4 pt-[35px] pb-[30px] text-center text-base text-meta">
        Copyright © {year} All rights reserved | This template is made with ♥ by{' '}
        <a
          href={componentDockUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-meta underline underline-offset-2 transition-colors hover:text-brand"
        >
          {componentDockName}
        </a>
      </p>
    </footer>
  )
}
