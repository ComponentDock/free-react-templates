import { contactLede, person } from '../content'

export function ContactPanel() {
  return (
    <section
      id="contact"
      className="mb-[65px] rounded-[4px] bg-yellow px-[55px] py-[55px] max-[991px]:p-[35px] max-[575px]:mb-10 max-[575px]:px-6 max-[575px]:py-[30px]"
    >
      <span className="mb-[25px] block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-muted">
        04 / SAY HELLO
      </span>

      <h2 className="q-h2-contact m-0 max-w-[650px]">
        A good conversation
        <br />
        is a good <em className="font-serif font-normal italic">start.</em>
      </h2>

      <p className="max-w-[520px]">{contactLede}</p>

      <a href={`mailto:${person.email}`} className="q-btn q-btn-outline">
        {person.email} <span aria-hidden="true">↗</span>
      </a>

      <p className="mt-[10px] text-[0.72rem] text-muted">
        Demo email address. Replace it with your own before publishing.
      </p>
    </section>
  )
}
