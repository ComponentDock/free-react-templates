import { Mail, MapPin, Phone } from 'lucide-react'

export function HeaderTop() {
  return (
    <div className="bg-white py-2 text-sm text-navy-dark">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5 text-brand" />
            65/A, 17th floor, Kings land, New York
          </span>
          <span className="hidden items-center gap-1 sm:flex">
            <Mail className="h-3.5 w-3.5 text-brand" />
            info@insight.com
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a href="tel:+1234567890" className="text-muted hover:text-brand">
            <Phone className="h-3.5 w-3.5" />
          </a>
          <a href="#" className="text-muted hover:text-brand">
            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616 2c-2.737 0-4.952 2.225-4.952 4.97 0 .39.044.765.127 1.124C7.728 7.866 4.1 5.89 1.671 2.899a4.962 4.962 0 00-.672 2.5c0 1.724.876 3.244 2.204 4.135a4.9 4.9 0 01-2.244-.62v.062c0 2.407 1.712 4.413 3.982 4.87a4.935 4.935 0 01-2.238.084c.63 1.97 2.46 3.405 4.628 3.445A9.868 9.868 0 010 19.54a13.94 13.94 0 007.548 2.212c9.057 0 14.01-7.52 14.01-14.026 0-.213-.005-.425-.014-.637A10.012 10.012 0 0024 4.557z" />
            </svg>
          </a>
          <a href="#" className="text-muted hover:text-brand">
            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
