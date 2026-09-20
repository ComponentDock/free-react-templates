import { Button } from '@free-react-templates/ui'

export function BookSeat() {
  return (
    <section id="book" className="relative py-32">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/galaflow-book/1920/600)',
        }}
      />
      <div className="absolute inset-0 bg-[#302072]/70" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
        <h2 className="mb-6 text-4xl font-bold font-[family-name:var(--font-heading)] uppercase md:text-5xl">
          Book Your Seat
        </h2>
        <p className="mb-8 max-w-2xl mx-auto font-[family-name:var(--font-sans)] text-white/80">
          Don&apos;t miss out on the most anticipated conference of the year. Reserve your spot
          today and join thousands of industry professionals.
        </p>
        <Button className="rounded-[5px] bg-[#FDE449] px-10 py-3 text-sm font-semibold font-[family-name:var(--font-sans)] text-[#302072] transition hover:bg-[#e6cf3f]">
          Buy Ticket
        </Button>
      </div>
    </section>
  )
}
