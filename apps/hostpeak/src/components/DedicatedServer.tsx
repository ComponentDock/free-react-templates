export function DedicatedServer() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="flex flex-col items-center gap-10 lg:flex-row">
        <div className="flex-1">
          <h2 className="mb-6 text-3xl font-bold text-heading lg:text-4xl">
            Dedicated
            <br />
            and Secured Server
            <br />
            for your Website
          </h2>
          <p className="text-base text-body">
            Our dedicated servers provide unparalleled performance and security. Each server is
            configured to deliver maximum uptime and speed, ensuring your website runs smoothly
            around the clock.
          </p>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="flex h-64 w-64 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-start/10 to-brand-end/10">
            <svg
              className="h-32 w-32 text-brand-end/40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
