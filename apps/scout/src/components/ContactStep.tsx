export function ContactStep() {
  return (
    <div>
      <div className="flex gap-8">
        <figure className="m-0 p-0 ml-[10px] mb-[-126px] shrink-0 hidden md:block">
          <img
            src="https://picsum.photos/seed/scout-contact/200/280"
            alt="Contact illustration"
            className="w-[200px]"
          />
        </figure>
        <div className="flex-1">
          <label className="block text-ink text-[22px] font-bold m-0 pb-[15px]">
            Enter your information manually below
          </label>
          <div className="flex gap-5 mb-5">
            <div className="flex-1">
              <input
                type="text"
                name="first_name"
                id="first_name"
                placeholder="First Name"
                className="w-full border border-line rounded-[5px] p-3 font-sans text-ink text-sm outline-none focus:border-accent transition-colors"
              />
            </div>
            <div className="flex-1">
              <input
                type="text"
                name="last_name"
                id="last_name"
                placeholder="Last Name"
                className="w-full border border-line rounded-[5px] p-3 font-sans text-ink text-sm outline-none focus:border-accent transition-colors"
              />
            </div>
          </div>
          <div className="mb-5">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full border border-line rounded-[5px] p-3 font-sans text-ink text-sm outline-none focus:border-accent transition-colors"
            />
          </div>
          <div className="mb-5">
            <input
              type="text"
              name="phone_number"
              id="phone_number"
              placeholder="Phone number"
              className="w-full border border-line rounded-[5px] p-3 font-sans text-ink text-sm outline-none focus:border-accent transition-colors"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
