import { cn } from '@free-react-templates/ui'

const googlePath =
  'M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.344-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z'

const facebookPath =
  'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'

const twitterPath =
  'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z'

const socials = [
  { name: 'Google', path: googlePath },
  { name: 'Facebook', path: facebookPath },
  { name: 'Twitter', path: twitterPath },
] as const

const iconLinkClass =
  'inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/5 text-black transition-colors duration-300 hover:bg-accent hover:text-white focus-visible:bg-accent focus-visible:text-white focus-visible:outline-none'

export function SocialSignup() {
  return (
    <div className="mt-6 text-center">
      <div className="relative mb-4 flex items-center justify-center">
        <span
          aria-hidden="true"
          className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-divider"
        />
        <span className="relative bg-white px-5 text-black/40">or</span>
      </div>
      <p className="mb-4 text-black/40">Signup with this services</p>
      <div className="flex items-center justify-center gap-2.5">
        {socials.map((social) => (
          <a
            key={social.name}
            href="#"
            aria-label={`Sign up with ${social.name}`}
            className={cn(iconLinkClass)}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
              <path d={social.path} />
            </svg>
          </a>
        ))}
      </div>
    </div>
  )
}
