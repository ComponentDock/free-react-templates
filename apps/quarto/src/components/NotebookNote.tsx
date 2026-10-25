import { noteLines } from '../content'

export function NotebookNote() {
  return (
    <aside aria-label="A few things about me" className="q-notebook mt-10 min-[992px]:mt-0">
      <div className="flex justify-between border-b border-note-rule pb-[15px] text-[0.63rem] tracking-[0.12em] text-ink">
        <span>FIELD NOTES</span>
        <span>VOL. 01 / 2026</span>
      </div>

      <h2 className="my-[28px_16px] font-serif text-[3rem] font-normal italic tracking-[-0.05em] max-[991px]:text-[2.7rem] max-[575px]:text-[2.4rem]">
        Always asking
        <br />
        “what if?”
      </h2>

      <div className="mt-[30px] text-[0.8rem]">
        {noteLines.map((line) => (
          <span key={line} className="block border-b border-note-rule py-[10px]">
            {line}
          </span>
        ))}
      </div>

      <span className="q-stamp mt-[18px] ml-auto text-ink">
        MADE WITH
        <br />
        CURIOSITY
        <br />✳
      </span>
    </aside>
  )
}
