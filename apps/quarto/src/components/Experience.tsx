import { timeline } from '../content'

export function Experience() {
  return (
    <section id="experience" className="q-section">
      <div className="grid grid-cols-1 gap-y-6 min-[992px]:-mx-6 min-[992px]:grid-cols-12 min-[992px]:gap-y-0">
        <div className="min-[992px]:col-span-5 min-[992px]:px-6">
          <h2 className="q-h2 m-0">
            <span className="mb-[14px] block font-sans text-[0.74rem] font-normal tracking-[0.04em] text-muted">
              03 / ALONG THE WAY
            </span>
            Inside &amp;
            <br />
            <em className="font-serif font-normal italic">outside class.</em>
          </h2>
          <p className="mt-6 mb-0">
            <button
              type="button"
              className="text-left text-green underline-offset-[5px] hover:underline"
            >
              Read my full résumé →
            </button>
          </p>
        </div>

        <div className="min-[992px]:col-span-7 min-[992px]:px-6">
          <ol className="m-0 list-none p-0">
            {timeline.map((row) => (
              <li key={row.date} className="border-t border-line py-[23px]">
                <span className="mb-[6px] block text-[0.72rem] text-muted">{row.date}</span>
                <h3 className="mb-2 mt-0 text-[1.15rem] tracking-[-0.02em]">{row.title}</h3>
                <p className="m-0 text-[0.86rem] text-muted">{row.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
