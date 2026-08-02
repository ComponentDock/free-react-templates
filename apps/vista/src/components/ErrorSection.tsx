import type { FormEvent } from 'react'

function handleSearchSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
}

const socials = [
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    path: 'M9 8H6v4h3v12h5V12h3.6L18 8h-4V6.3c0-.9.2-1.3 1.2-1.3H18V0h-3.6C11.2 0 9 2.2 9 5.7V8Z',
  },
  {
    name: 'X',
    href: 'https://x.com',
    path: 'M18.9 1.2h3.7l-8.1 9.3L24 22.8h-7.5l-5.9-7.7-6.7 7.7H.2l8.7-9.9L0 1.2h7.7l5.3 7 6-7Z',
  },
  {
    name: 'Pinterest',
    href: 'https://pinterest.com',
    path: 'M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0Z',
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com',
    path: 'M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z',
  },
] as const

export function ErrorSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-11rem)] items-center justify-center overflow-hidden px-4 py-16 sm:px-6">
      <img
        src="https://picsum.photos/seed/vista-1/1920/1080"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/25" />

      <div className="relative w-full max-w-[600px] bg-white/70 px-6 py-12 text-center sm:px-10 sm:py-14">
        <h1 className="font-display text-[9.125rem] leading-none text-brand sm:text-[13.75rem]">
          404
        </h1>
        <h2 className="mb-5 mt-6 font-sans text-[22px] uppercase text-brand sm:text-[26px]">
          Oops! Page Not Found
        </h2>

        <form
          role="search"
          onSubmit={handleSearchSubmit}
          className="relative mx-auto mb-5 mt-8 w-full max-w-[420px] pr-[120px]"
        >
          <label htmlFor="vista-search" className="sr-only">
            Search
          </label>
          <input
            id="vista-search"
            type="text"
            placeholder="Search..."
            className="h-10 w-full border-none bg-brand px-4 text-lg text-white placeholder:text-white/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 h-10 w-[120px] bg-accent text-base font-normal uppercase text-white transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Search
          </button>
        </form>

        <div className="mb-4 flex items-center justify-center gap-1.5">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
              className="flex h-10 w-10 items-center justify-center bg-brand text-white transition-colors hover:bg-accent"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                <path d={social.path} />
              </svg>
            </a>
          ))}
        </div>

        <a
          href="/"
          className="font-sans text-sm uppercase text-brand transition-colors hover:text-accent"
        >
          Back to homepage
        </a>
      </div>
    </section>
  )
}
