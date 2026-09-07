import { UserCircle, Globe, Users, MessageSquare } from 'lucide-react'

export function PersonalStep() {
  return (
    <div className="space-y-4">
      <div className="form-group">
        <label htmlFor="full_name" className="block text-sm font-medium text-[#222] mb-1">
          Full name
        </label>
        <div className="flex items-center border border-[#e0e0e0] rounded-[5px] px-3 py-2 focus-within:border-[#6DAB3C] transition-colors">
          <UserCircle className="w-4 h-4 text-[#999] mr-2 shrink-0" />
          <input
            type="text"
            id="full_name"
            name="full_name"
            placeholder="Full Name"
            className="w-full outline-none text-sm text-[#222] bg-transparent placeholder:text-[#999]"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="country" className="block text-sm font-medium text-[#222] mb-1">
          Country
        </label>
        <div className="flex items-center border border-[#e0e0e0] rounded-[5px] px-3 py-2 focus-within:border-[#6DAB3C] transition-colors">
          <Globe className="w-4 h-4 text-[#999] mr-2 shrink-0" />
          <select
            id="country"
            name="country"
            className="w-full outline-none text-sm text-[#222] bg-transparent"
          >
            <option value="">Country</option>
            <option value="Australia">Australia</option>
            <option value="USA">America</option>
            <option value="UK">United Kingdom</option>
            <option value="Canada">Canada</option>
            <option value="Germany">Germany</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label className="block text-sm font-medium text-[#222] mb-1">Gender</label>
        <div className="flex items-center gap-6 px-1">
          <label className="flex items-center gap-2 text-sm text-[#222] cursor-pointer">
            <input
              type="radio"
              name="gender"
              value="male"
              defaultChecked
              className="accent-[#6DAB3C]"
            />
            <Users className="w-4 h-4 text-[#999]" />
            Male
          </label>
          <label className="flex items-center gap-2 text-sm text-[#222] cursor-pointer">
            <input type="radio" name="gender" value="female" className="accent-[#6DAB3C]" />
            <Users className="w-4 h-4 text-[#999]" />
            Female
          </label>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="about" className="block text-sm font-medium text-[#222] mb-1">
          About us
        </label>
        <div className="flex items-start border border-[#e0e0e0] rounded-[5px] px-3 py-2 focus-within:border-[#6DAB3C] transition-colors">
          <MessageSquare className="w-4 h-4 text-[#999] mr-2 mt-1 shrink-0" />
          <textarea
            id="about"
            name="about"
            rows={3}
            placeholder="Who are you ..."
            className="w-full outline-none text-sm text-[#222] bg-transparent placeholder:text-[#999] resize-none"
          />
        </div>
      </div>
    </div>
  )
}
