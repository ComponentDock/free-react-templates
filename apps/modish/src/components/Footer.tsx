import { CreditCard } from 'lucide-react'
import {
  FacebookIcon,
  GooglePlusIcon,
  InstagramIcon,
  PinterestIcon,
  TumblrIcon,
  TwitterIcon,
  YoutubeIcon,
} from './social-icons'

const questionsLeft = ['About Us', 'Track Orders', 'Returns', 'Jobs', 'Shipping', 'Blog'] as const

const questionsRight = ['Partners', 'Bloggers', 'Support', 'Terms of Use', 'Press'] as const

const posts = [
  { title: 'what shoes to wear', date: 'Oct 21, 2018' },
  { title: 'trends this year', date: 'Oct 10, 2018' },
] as const

const contact = [
  { letter: 'C.', text: 'Your Company Ltd' },
  { letter: 'B.', text: '1481 Creekside Lane Avila Beach, CA 93424, P.O. BOX 68' },
  { letter: 'T.', text: '+53 345 7953 32453' },
  { letter: 'E.', text: 'office@youremail.com' },
] as const

const socials = [
  { label: 'Instagram', Icon: InstagramIcon, hover: 'hover:text-[#2F5D84]' },
  { label: 'Google Plus', Icon: GooglePlusIcon, hover: 'hover:text-[#E04B37]' },
  { label: 'Pinterest', Icon: PinterestIcon, hover: 'hover:text-[#CD212D]' },
  { label: 'Facebook', Icon: FacebookIcon, hover: 'hover:text-[#39599F]' },
  { label: 'Twitter', Icon: TwitterIcon, hover: 'hover:text-[#5abed6]' },
  { label: 'YouTube', Icon: YoutubeIcon, hover: 'hover:text-[#D12227]' },
  { label: 'Tumblr', Icon: TumblrIcon, hover: 'hover:text-[#37475E]' },
] as const

export function Footer() {
  return (
    <footer id="contact" className="bg-night text-white transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
        <p className="text-center text-2xl font-bold uppercase tracking-wider">
          Modish<span className="text-brand">.</span>
        </p>

        <div className="mt-12 grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-lg font-bold uppercase text-white">About</h2>
            <p className="mt-5 text-sm leading-relaxed text-mist">
              Donec vitae purus nunc. Morbi faucibus erat sit amet congue mattis. Nullam fringilla
              faucibus urna, id dapibus erat iaculis ut. Integer ac sem.
            </p>
            <div className="mt-6 flex items-center gap-2 text-white/40">
              {[0, 1, 2, 3].map((card) => (
                <CreditCard key={card} className="h-6 w-6" aria-hidden="true" />
              ))}
            </div>
          </div>

          <nav aria-label="Questions" className="grid grid-cols-2 gap-4">
            <div>
              <h2 className="text-lg font-bold uppercase text-white">Questions</h2>
              <ul className="mt-5 space-y-2 text-sm">
                {questionsLeft.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 shrink-0 rounded-full border border-brand-dark"
                    />
                    <a href="#home" className="text-mist transition-colors hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <ul className="mt-8 space-y-2 text-sm">
              {questionsRight.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 shrink-0 rounded-full border border-brand-dark"
                  />
                  <a href="#home" className="text-mist transition-colors hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Latest posts">
            <h2 className="text-lg font-bold uppercase text-white">Latest Posts</h2>
            <ul className="mt-5 space-y-4 text-sm">
              {posts.map((post) => (
                <li key={post.title}>
                  <a
                    href="#home"
                    className="font-bold uppercase text-white/60 transition-colors hover:text-brand"
                  >
                    {post.title}
                  </a>
                  <p className="mt-1 text-xs text-white/40">{post.date}</p>
                  <a href="#home" className="text-xs uppercase tracking-widest text-brand">
                    Read More
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-lg font-bold uppercase text-white">Contact</h2>
            <address className="mt-5 space-y-3 text-sm not-italic">
              {contact.map((row) => (
                <p key={row.letter} className="flex gap-2">
                  <span className="font-bold text-brand">{row.letter}</span>
                  <span className="text-mist">{row.text}</span>
                </p>
              ))}
            </address>
          </div>
        </div>

        <div className="border-t-2 border-[#3b3535] py-10">
          <div className="flex flex-wrap items-center justify-center gap-5">
            {socials.map(({ label, Icon, hover }) => (
              <a
                key={label}
                href="#home"
                aria-label={label}
                className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#9f9fa0] transition-colors ${hover} hover:text-white`}
              >
                <Icon className="h-5 w-5" />
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Modish — Free React Template
        </div>
      </div>
    </footer>
  )
}
