import { contact } from '../data'
import { SectionTitle } from './SectionTitle'

export function Contact() {
  return (
    <section id="contact" className="bg-brand py-32">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <SectionTitle title={contact.title} intro={contact.intro} center light />
        <div className="grid gap-10 md:grid-cols-3">
          {contact.boxes.map((box) => (
            <div key={box.label}>
              <h4 className="font-sans text-[21px] font-bold text-white">{box.label}</h4>
              <p className="mt-2 font-body text-base text-white/90">{box.value}</p>
            </div>
          ))}
        </div>
        <a
          href={`mailto:${contact.boxes[1]!.value}`}
          className="mt-14 inline-flex items-center rounded-full bg-white px-12 py-4 font-sans text-base font-semibold text-ink transition-colors hover:bg-transparent hover:text-white"
        >
          {contact.cta}
        </a>
      </div>
    </section>
  )
}
