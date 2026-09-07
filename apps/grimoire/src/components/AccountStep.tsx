import { User, Mail, Lock } from 'lucide-react'

export function AccountStep() {
  return (
    <div className="space-y-4">
      <div className="form-group">
        <label htmlFor="username" className="block text-sm font-medium text-[#222] mb-1">
          Username
        </label>
        <div className="flex items-center border border-[#e0e0e0] rounded-[5px] px-3 py-2 focus-within:border-[#6DAB3C] transition-colors">
          <User className="w-4 h-4 text-[#999] mr-2 shrink-0" />
          <input
            type="text"
            id="username"
            name="username"
            placeholder="User Name"
            className="w-full outline-none text-sm text-[#222] bg-transparent placeholder:text-[#999]"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="email" className="block text-sm font-medium text-[#222] mb-1">
          Email
        </label>
        <div className="flex items-center border border-[#e0e0e0] rounded-[5px] px-3 py-2 focus-within:border-[#6DAB3C] transition-colors">
          <Mail className="w-4 h-4 text-[#999] mr-2 shrink-0" />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="w-full outline-none text-sm text-[#222] bg-transparent placeholder:text-[#999]"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="password" className="block text-sm font-medium text-[#222] mb-1">
          Password
        </label>
        <div className="flex items-center border border-[#e0e0e0] rounded-[5px] px-3 py-2 focus-within:border-[#6DAB3C] transition-colors">
          <Lock className="w-4 h-4 text-[#999] mr-2 shrink-0" />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="••••••••"
            className="w-full outline-none text-sm text-[#222] bg-transparent placeholder:text-[#999]"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="avatar" className="block text-sm font-medium text-[#222] mb-1">
          Select avatar
        </label>
        <div className="flex items-center border border-[#e0e0e0] rounded-[5px] px-3 py-2">
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/*"
            className="w-full text-sm text-[#999] file:mr-3 file:py-1 file:px-3 file:rounded file:border-0 file:text-sm file:bg-[#6DAB3C] file:text-white file:cursor-pointer"
          />
        </div>
      </div>
    </div>
  )
}
