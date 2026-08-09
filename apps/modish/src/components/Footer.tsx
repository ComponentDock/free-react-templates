import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  PinterestIcon,
  TwitterIcon,
} from './social-icons'

const questionsLeft = ['About Us', 'Track Orders', 'Returns', 'Jobs', 'Shipping', 'Blog'] as const

const questionsRight = ['Partners', 'Bloggers', 'Support', 'Terms of Use', 'Press'] as const

const posts = [
  { title: 'what shoes to wear', date: 'Oct 21, 2018' },
  { title: 'trends this year', date: 'Oct 10, 2018' },
] as const

const socials = [
  { label: 'Instagram', Icon: InstagramIcon },
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'Twitter', Icon: TwitterIcon },
  { label: 'Linkedin', Icon: LinkedinIcon },
  { label: 'Pinterest', Icon: PinterestIcon },
] as const

export function Footer() {
  return (
    <footer id="contact" className="bg-night text-white transition-colors dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-xl font-bold uppercase tracking-wider">
            Modish<span className="text-brand">.</span>
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Donec vitae purus nunc. Morbi faucibus erat sit amet congue mattis. Nullam fringilla
            faucibus urna, id dapibus erat iaculis ut. Integer ac sem.
          </p>
        </div>

        <nav aria-label="Questions" className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Questions
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              {questionsLeft.map((item) => (
                <li key={item}>
                  <a href="#home" className="transition-colors hover:text-brand">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <ul className="mt-8 space-y-2 text-sm text-white/60">
            {questionsRight.map((item) => (
              <li key={item}>
                <a href="#home" className="transition-colors hover:text-brand">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Latest posts">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Latest Posts
          </h2>
          <ul className="mt-4 space-y-4 text-sm">
            {posts.map((post) => (
              <li key={post.title}>
                <a
                  href="#home"
                  className="font-medium text-white transition-colors hover:text-brand"
                >
                  {post.title}
                </a>
                <p className="mt-1 text-xs text-white/50">{post.date}</p>
                <a href="#home" className="text-xs uppercase tracking-widest text-brand">
                  Read More
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Contact</h2>
          <address className="mt-4 space-y-2 text-sm not-italic text-white/60">
            <p>C. Your Company Ltd</p>
            <p>B. 1481 Creekside Lane Avila Beach, CA 93424, P.O. BOX 68</p>
            <p>T. +53 345 7953 32453</p>
            <p>E. office@youremail.com</p>
          </address>
          <div className="mt-6 flex items-center gap-3">
            {socials.map(({ label, Icon }) => (
              <a
                key={label}
                href="#home"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-brand hover:text-brand"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Modish — Free React Template
      </div>
    </footer>
  )
}
