export function ContactInfo() {
  return (
    <div className="relative w-full bg-[#1a1a2e] px-8 py-10 text-white md:w-[40%]">
      <img
        src="https://picsum.photos/seed/relaybox-bg/600/800"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-30"
        aria-hidden="true"
      />
      <div className="relative z-10 space-y-10">
        {/* Address */}
        <div>
          <div className="mb-3 flex items-center gap-3">
            <MapPinIcon />
            <h3 className="text-lg font-semibold">Address</h3>
          </div>
          <p className="ml-[38px] text-sm leading-relaxed text-white/80">
            Media Center 8th floor,
            <br />
            379 Hudson St, New York,
            <br />
            NY 10018 US
          </p>
        </div>

        {/* Phone */}
        <div>
          <div className="mb-3 flex items-center gap-3">
            <PhoneIcon />
            <h3 className="text-lg font-semibold">Lets Talk</h3>
          </div>
          <p className="ml-[38px]">
            <a
              href="tel:+18001236879"
              className="text-[#28a745] transition-colors hover:text-[#218838]"
            >
              +1 800 1236879
            </a>
          </p>
        </div>

        {/* Email */}
        <div>
          <div className="mb-3 flex items-center gap-3">
            <MailIcon />
            <h3 className="text-lg font-semibold">General Support</h3>
          </div>
          <p className="ml-[38px]">
            <a
              href="mailto:contact@example.com"
              className="text-[#28a745] transition-colors hover:text-[#218838]"
            >
              contact@example.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

function MapPinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-white"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-white"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-white"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}
