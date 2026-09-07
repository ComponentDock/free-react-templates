export function StepDetails() {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="subject" className="mb-1 block text-sm font-semibold text-gray-700">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          className="w-full rounded-[5px] border border-border px-[15px] py-[14.5px] text-[16px] font-semibold text-gray-800 outline-none focus:border-brand"
        >
          <option value="" disabled selected>
            Your Subject
          </option>
          <option value="Finance">Finance</option>
          <option value="Marketing">Marketing</option>
          <option value="IT Support">IT Support</option>
        </select>
      </div>
      <div>
        <label htmlFor="comment" className="mb-1 block text-sm font-semibold text-gray-700">
          Comment
        </label>
        <input
          type="text"
          id="comment"
          name="comment"
          className="w-full rounded-[5px] border border-border px-[15px] py-[14.5px] text-[16px] font-semibold text-gray-800 outline-none focus:border-brand"
        />
      </div>
    </div>
  )
}
