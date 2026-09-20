import { Button } from '@free-react-templates/ui'

export function Subscribe() {
  return (
    <section className="relative py-24">
      {/* Parallax background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/galaflow-subscribe/1920/600)',
        }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="ml-auto max-w-md rounded-lg bg-white p-8 shadow-xl">
          <h3 className="mb-4 text-2xl font-bold font-[family-name:var(--font-heading)] uppercase text-[#302072]">
            We have top executive &amp; start up here
          </h3>
          <p className="mb-6 font-[family-name:var(--font-sans)] text-sm text-[#79709D]">
            Subscribe to receive the latest updates on speakers, schedule, and exclusive offers for
            the upcoming conference.
          </p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email"
              aria-label="Email address"
              className="flex-1 rounded-[5px] border border-gray-300 px-4 py-2 text-sm font-[family-name:var(--font-sans)] text-[#302072] placeholder-gray-400 outline-none focus:border-[#302072] focus:ring-1 focus:ring-[#302072]"
            />
            <Button
              type="submit"
              className="rounded-[5px] bg-[#302072] px-6 py-2 text-sm font-semibold font-[family-name:var(--font-sans)] text-[#FDE449] hover:bg-[#1e1450]"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
