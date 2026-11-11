import { COLLAPSE_LABEL, EXPAND_LABEL, EYEBROW_LABEL, LEDE, TITLE, TITLE_ID } from '../content'

interface PricingHeadProps {
  onExpandAll: () => void
  onCollapseAll: () => void
}

/**
 * The head: an eyebrow, the page's only `h1`, one line of lede, then the two
 * bulk controls that open or close every group at once.
 */
export function PricingHead({ onExpandAll, onCollapseAll }: PricingHeadProps) {
  return (
    <header className="pt-head">
      <p className="pt-eyebrow">{EYEBROW_LABEL}</p>
      <h1 className="pt-title" id={TITLE_ID}>
        {TITLE}
      </h1>
      <p className="pt-lede">{LEDE}</p>
      <div className="pt-tools">
        <button type="button" className="pt-all" onClick={onExpandAll}>
          {EXPAND_LABEL}
        </button>
        <button type="button" className="pt-all" onClick={onCollapseAll}>
          {COLLAPSE_LABEL}
        </button>
      </div>
    </header>
  )
}
