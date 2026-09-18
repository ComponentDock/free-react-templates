import { Phone, Mail, ChevronDown, User } from 'lucide-react'

export function TopBar() {
  return (
    <div className="bg-ink text-white text-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone className="h-3 w-3" />
            <span>+38 068 005 3570</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-3 w-3" />
            <a
              href="mailto:fastsales@gmail.com"
              className="hover:text-primary-400 transition-colors"
            >
              fastsales@gmail.com
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <span>English</span>
            <ChevronDown className="h-3 w-3" />
          </div>
          <div className="flex items-center gap-1">
            <span>$ US Dollar</span>
            <ChevronDown className="h-3 w-3" />
          </div>
          <div className="flex items-center gap-3 border-l border-white/20 pl-4">
            <User className="h-3 w-3" />
            <a href="#" className="hover:text-primary-400 transition-colors">
              Register
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors">
              Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
