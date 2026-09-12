export function CallToAction() {
  return (
    <section
      className="relative py-24 bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/frostguard-cta/1920/600)' }}
    >
      <div className="absolute inset-0 bg-[#142336]/80" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
        <p className="font-['Mulish'] text-lg mb-3 opacity-90">
          Modern Styling for your Modern Life
        </p>
        <h2 className="font-['Saira_Condensed'] text-3xl md:text-5xl font-bold mb-8 max-w-2xl mx-auto">
          Less Power Consume, More Cooling
        </h2>
        <a
          href="#contact"
          className="inline-block bg-[#FAD110] text-[#142336] font-['Saira_Condensed'] font-bold text-lg px-8 py-3 rounded-[60px] hover:bg-[#e6be0e] transition-colors"
        >
          Installation now
        </a>
      </div>
    </section>
  )
}
