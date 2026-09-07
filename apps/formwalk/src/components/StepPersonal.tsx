export function StepPersonal() {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="first-name" className="mb-1 block text-sm font-semibold text-gray-700">
          First Name
        </label>
        <input
          type="text"
          id="first-name"
          name="first-name"
          className="w-full rounded-[5px] border border-border px-[15px] py-[14.5px] text-[16px] font-semibold text-gray-800 outline-none focus:border-brand"
        />
      </div>
      <div>
        <label htmlFor="last-name" className="mb-1 block text-sm font-semibold text-gray-700">
          Last Name
        </label>
        <input
          type="text"
          id="last-name"
          name="last-name"
          className="w-full rounded-[5px] border border-border px-[15px] py-[14.5px] text-[16px] font-semibold text-gray-800 outline-none focus:border-brand"
        />
      </div>
    </div>
  )
}
