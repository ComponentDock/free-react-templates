export function Contact() {
  return (
    <section id="contact" className="relative bg-navy py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-16 flex items-start gap-6">
          <span className="font-heading text-8xl font-bold text-rose/30">07</span>
          <div className="rounded-lg bg-rose px-6 py-4">
            <h2 className="font-heading text-4xl font-bold text-white">Contact</h2>
          </div>
        </div>
        <p className="mx-auto mb-12 max-w-xl text-center text-sm leading-relaxed text-white/60">
          Consectetur adipisicing elit sed eiusmod tempor incididunt ut dolore magna labore eiusmod.
          Lorem ipsum dolor sit amet consectetur est adipisicing elit, sed do eiusmod.
        </p>
        <form className="mx-auto max-w-xl space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              name="your-name"
              placeholder="Name"
              className="w-full border-b border-white/30 bg-transparent py-2 text-sm text-white placeholder-white/40 outline-none focus:border-rose"
            />
          </div>
          <div>
            <input
              type="email"
              name="your-email"
              placeholder="Email"
              className="w-full border-b border-white/30 bg-transparent py-2 text-sm text-white placeholder-white/40 outline-none focus:border-rose"
            />
          </div>
          <div>
            <input
              type="text"
              name="your-subject"
              placeholder="Subject"
              className="w-full border-b border-white/30 bg-transparent py-2 text-sm text-white placeholder-white/40 outline-none focus:border-rose"
            />
          </div>
          <div>
            <textarea
              name="your-message"
              placeholder="Message"
              rows={4}
              className="w-full resize-none border-b border-white/30 bg-transparent py-2 text-sm text-white placeholder-white/40 outline-none focus:border-rose"
            />
          </div>
          <button
            type="submit"
            className="w-full border-2 border-rose py-3 text-sm font-bold uppercase tracking-widest text-rose transition-colors hover:bg-rose hover:text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
