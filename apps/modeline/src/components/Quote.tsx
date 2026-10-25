import { quote } from '../data'

/** 444px white band: a 36px italic pull-quote over a 30px bold attribution. */
export function Quote() {
  return (
    <section aria-label="Pull quote" className="bg-white py-[125px] md:py-[138px]">
      <div className="mx-auto max-w-[1140px] px-6 text-center">
        <p className="mx-auto max-w-[900px] text-[26px] leading-[1.45] text-ink italic md:text-[36px]">
          {quote.text}
        </p>
        <h2 className="mt-[28px] text-[22px] font-bold text-ink md:text-[30px]">
          {quote.attribution}
        </h2>
      </div>
    </section>
  )
}
