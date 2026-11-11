import { FeatureGroup } from './components/FeatureGroup'
import { MobileCtas } from './components/MobileCtas'
import { PlanHeaderRow } from './components/PlanHeaderRow'
import { PricingHead } from './components/PricingHead'
import { SiteFooter } from './components/SiteFooter'
import { CAPTION, GROUPS, PLANS, TITLE_ID } from './content'
import { useGroups } from './use-groups'
import { useNarrow } from './use-narrow'

/**
 * Parity — one white card on a cool grey ground: a left-aligned head with two
 * bulk controls, then a single comparison table whose plan header pins to the
 * top and whose four feature groups open and close. No header, no form, no
 * imagery.
 */
export function App() {
  const narrow = useNarrow()
  const { open, toggle, expandAll, collapseAll } = useGroups(narrow)

  return (
    <>
      <main className="pt-main">
        <section className="pt-card" aria-labelledby={TITLE_ID}>
          <PricingHead onExpandAll={expandAll} onCollapseAll={collapseAll} />

          <table className="pt-table">
            <caption className="pt-sr">{CAPTION}</caption>
            <colgroup>
              <col className="pt-colf" />
              <col span={3} />
            </colgroup>
            <PlanHeaderRow plans={PLANS} />
            {GROUPS.map((group) => (
              <FeatureGroup
                key={group.id}
                group={group}
                plans={PLANS}
                open={Boolean(open[group.id])}
                onToggle={toggle}
              />
            ))}
          </table>

          {narrow ? <MobileCtas plans={PLANS} /> : null}
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
