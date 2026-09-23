import { Download } from 'lucide-react'

const socials = [
  {
    label: 'Facebook',
    href: '#',
    path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z',
  },
  {
    label: 'Twitter',
    href: '#',
    path: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z',
  },
  {
    label: 'Dribbble',
    href: '#',
    path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.15-.12-.298-.184-.445a25.424 25.424 0 0 0-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0 1 12 3.475zm-3.633.803a53.896 53.896 0 0 1 3.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 0 1 4.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.245.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 0 1-2.19-5.705zM12 20.547a8.482 8.482 0 0 1-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 0 1 1.823 6.475 8.4 8.4 0 0 1-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 0 1-3.655 5.715z',
  },
]

export function About() {
  return (
    <section id="about" className="relative py-24" role="region" aria-label="About">
      {/* Watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 select-none font-[family-name:var(--font-heading)] text-[250px] font-bold uppercase leading-none text-[#f0f0f0] opacity-50"
      >
        About
      </span>

      {/* Rotated vertical label */}
      <span
        aria-hidden="true"
        className="absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-xs font-bold uppercase tracking-[4px] text-gray-300"
      >
        About Me
      </span>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-12">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {/* Image */}
          <div className="shrink-0">
            <img
              src="https://picsum.photos/seed/cardwell-about/500/600"
              alt="Cardwell portrait"
              className="w-full max-w-sm rounded object-cover shadow-lg"
              loading="lazy"
            />
          </div>

          {/* Info */}
          <div className="flex-1">
            <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-heading">
              Cardwell
            </h2>
            <p className="mt-2 text-sm uppercase tracking-widest text-brand">
              Creative Designer &amp; Developer
            </p>

            <p className="mt-6 leading-relaxed text-gray-500">
              I&apos;m a creative designer and full-stack developer based in San Francisco. I
              specialize in building beautiful, functional websites and applications that help
              brands tell their stories and connect with audiences. With over ten years of
              experience, I bring a blend of design thinking and technical expertise to every
              project.
            </p>

            <div className="mt-6 flex items-center gap-6">
              <ul className="flex gap-4">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      aria-label={s.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-brand transition-colors hover:bg-brand hover:text-white"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d={s.path} />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-[1px] border border-brand bg-brand px-6 py-3 text-[13px] font-semibold uppercase tracking-[2px] text-white transition-colors hover:bg-transparent hover:text-brand"
              >
                <Download size={14} />
                Download CV
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-200 pt-10 sm:grid-cols-4">
              {[
                { value: '10+', label: 'Years Experience' },
                { value: '120+', label: 'Projects Done' },
                { value: '50+', label: 'Happy Clients' },
                { value: '15', label: 'Awards Won' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-bold text-brand">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-gray-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
