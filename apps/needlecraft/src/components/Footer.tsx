import { Phone, MapPin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer id="contact" className="bg-ink py-12 text-white dark:bg-gray-950">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-3 md:px-8">
        <div className="flex items-start gap-3">
          <Phone className="mt-1 h-5 w-5 shrink-0 text-brand" />
          <div>
            <p className="font-semibold">Phone</p>
            <p className="text-sm text-gray-300">+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand" />
          <div>
            <p className="font-semibold">Address</p>
            <p className="text-sm text-gray-300">123 Wellness Ave, Health City, HC 90210</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Mail className="mt-1 h-5 w-5 shrink-0 text-brand" />
          <div>
            <p className="font-semibold">Email</p>
            <p className="text-sm text-gray-300">info@needlecraft.com</p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-4 pt-6 md:px-8">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-400 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Needlecraft. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Component Dock
            </a>
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
