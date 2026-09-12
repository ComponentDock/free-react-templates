import { Phone, Mail } from 'lucide-react'

function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function DribbbleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
      <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
    </svg>
  )
}

export function TopBar() {
  return (
    <div className="bg-dark py-2 text-sm text-gray-300">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 sm:flex-row">
        <div className="mb-2 flex items-center gap-4 sm:mb-0">
          <span className="flex items-center gap-1">
            <Phone size={14} />
            <span>
              Phone:{' '}
              <a href="tel:+001234567" className="hover:text-white">
                +00 1234 567
              </a>
            </span>
          </span>
          <span className="flex items-center gap-1">
            <Mail size={14} />
            <span>
              Email:{' '}
              <a href="mailto:email@example.com" className="hover:text-white">
                email@example.com
              </a>
            </span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" aria-label="Facebook" className="hover:text-white">
            <FacebookIcon />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-white">
            <TwitterIcon />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-white">
            <InstagramIcon />
          </a>
          <a href="#" aria-label="Dribbble" className="hover:text-white">
            <DribbbleIcon />
          </a>
        </div>
      </div>
    </div>
  )
}
