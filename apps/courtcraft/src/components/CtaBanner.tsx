import { cn } from '@free-react-templates/ui'
import { CTA_BG, CTA_HEADING, CTA_TEXT } from '../data'

export function CtaBanner() {
  return (
    <section className="relative py-24">
      {/* Parallax bg */}
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center"
        style={{ backgroundImage: `url(${CTA_BG})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">{CTA_HEADING}</h2>
        <p className="mb-8 text-white/80">{CTA_TEXT}</p>
        <a
          href="#contact"
          className={cn(
            'inline-block rounded bg-[#3f52e3] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2f89fc]',
          )}
        >
          Consultation
        </a>
      </div>
    </section>
  )
}
