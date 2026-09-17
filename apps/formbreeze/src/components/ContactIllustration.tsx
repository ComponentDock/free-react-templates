import { MessageCircle, User, Mail } from 'lucide-react'

export function ContactIllustration() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-8">
      <div className="relative">
        <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue-start/20 to-brand-blue-end/20">
          <MessageCircle size={64} className="text-brand-blue-start" />
        </div>
        <div className="absolute -right-3 -top-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue-end/30">
          <Mail size={20} className="text-brand-blue-end" />
        </div>
        <div className="absolute -bottom-2 -left-3 flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue-start/25">
          <User size={18} className="text-brand-blue-start" />
        </div>
      </div>
      <p className="max-w-[220px] text-center text-sm leading-relaxed text-white/90">
        We'd love to hear from you. Send us a message and we'll respond as soon as possible.
      </p>
    </div>
  )
}
