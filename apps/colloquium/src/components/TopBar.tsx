import { Phone, Mail, Globe, MessageSquare, Send, Share2 } from 'lucide-react'

export interface TopBarProps {
  className?: string
}

export function TopBar({ className }: TopBarProps) {
  return (
    <div className={`bg-[#0d0d1a] py-2 ${className ?? ''}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        {/* Left side: contact info */}
        <div className="flex items-center gap-6">
          <a
            href="tel:+1234567890"
            className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
          >
            <Phone size={14} />
            <span>+1 234 567 890</span>
          </a>
          <a
            href="mailto:info@colloquium.com"
            className="hidden items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white sm:flex"
          >
            <Mail size={14} />
            <span>info@colloquium.com</span>
          </a>
        </div>

        {/* Right side: social icons + Buy Ticket */}
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#"
              className="text-gray-400 transition-colors hover:text-[#ff2d9b]"
              aria-label="Facebook"
            >
              <Globe size={16} />
            </a>
            <a
              href="#"
              className="text-gray-400 transition-colors hover:text-[#ff2d9b]"
              aria-label="Twitter"
            >
              <MessageSquare size={16} />
            </a>
            <a
              href="#"
              className="text-gray-400 transition-colors hover:text-[#ff2d9b]"
              aria-label="Instagram"
            >
              <Send size={16} />
            </a>
            <a
              href="#"
              className="text-gray-400 transition-colors hover:text-[#ff2d9b]"
              aria-label="LinkedIn"
            >
              <Share2 size={16} />
            </a>
          </div>
          <a
            href="#pricing"
            className="rounded bg-[#ff2d9b] px-4 py-1.5 text-xs font-semibold uppercase text-white transition-all hover:bg-[#e6288c]"
          >
            Buy Ticket
          </a>
        </div>
      </div>
    </div>
  )
}
