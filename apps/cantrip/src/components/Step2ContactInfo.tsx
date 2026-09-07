export function Step2ContactInfo() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
      <div className="flex gap-4">
        <div className="flex-1">
          <label htmlFor="email" className="mb-1 block text-sm font-normal text-ink">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E.g. john123@gmail.com"
            className="w-full rounded-[5px] border border-transparent bg-surface px-5 py-3 text-sm text-ink placeholder-muted focus:border-focus focus:outline-none"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="phone" className="mb-1 block text-sm font-normal text-ink">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="(+ 123) 456 789"
            className="w-full rounded-[5px] border border-transparent bg-surface px-5 py-3 text-sm text-ink placeholder-muted focus:border-focus focus:outline-none"
          />
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <label htmlFor="city" className="mb-1 block text-sm font-normal text-ink">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="E.g. Ha Noi"
            className="w-full rounded-[5px] border border-transparent bg-surface px-5 py-3 text-sm text-ink placeholder-muted focus:border-focus focus:outline-none"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="pincode" className="mb-1 block text-sm font-normal text-ink">
            Pincode
          </label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            placeholder="E.g. 100000"
            className="w-full rounded-[5px] border border-transparent bg-surface px-5 py-3 text-sm text-ink placeholder-muted focus:border-focus focus:outline-none"
          />
        </div>
      </div>
    </form>
  )
}
