export function StepAccount() {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-semibold text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full rounded-[5px] border border-border px-[15px] py-[14.5px] text-[16px] font-semibold text-gray-800 outline-none focus:border-brand"
        />
      </div>
      <div>
        <label htmlFor="password" className="mb-1 block text-sm font-semibold text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-full rounded-[5px] border border-border px-[15px] py-[14.5px] text-[16px] font-semibold text-gray-800 outline-none focus:border-brand"
        />
      </div>
    </div>
  )
}
