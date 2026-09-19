import { ShoppingCart, ChevronDown, LogIn } from 'lucide-react'

export function TopBar() {
  return (
    <div className="bg-dark-deep text-white text-xs py-2">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="mailto:hello@threadcraft.com" className="hover:text-brand transition-colors">
            hello@threadcraft.com
          </a>
          <a href="tel:+15551234567" className="hover:text-brand transition-colors">
            +1 555 123 4567
          </a>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 hover:text-brand transition-colors">
            EN <ChevronDown className="w-3 h-3" />
          </button>
          <button className="flex items-center gap-1 hover:text-brand transition-colors relative">
            <ShoppingCart className="w-4 h-4" />
            <span className="bg-brand text-dark-deep text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              3
            </span>
          </button>
          <a href="#" className="flex items-center gap-1 hover:text-brand transition-colors">
            <LogIn className="w-3 h-3" /> Login
          </a>
        </div>
      </div>
    </div>
  )
}
