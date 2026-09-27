import { ArrowRight } from 'lucide-react'

export function CtaSection() {
  return (
    <section id="contact" className="bg-[#fafafa] py-20">
      <div className="mx-auto max-w-2xl px-8 text-center">
        <h2 className="mb-4 text-3xl font-bold text-black">Get in Touch!</h2>
        <p className="mb-8 leading-relaxed text-gray-500">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
          the Semantics.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-[2px] bg-brand-400 px-6 py-3 text-[12px] font-bold uppercase tracking-[1px] text-white transition-colors hover:bg-brand-500"
        >
          Contact me!
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  )
}
