import { ACCOUNT, GOAL, TRANSACTIONS } from './data/accounts'
import { AccountCard } from './components/AccountCard'
import { ActivityCard } from './components/ActivityCard'
import { Blobs } from './components/Blobs'
import { GlassCard } from './components/GlassCard'
import { GoalCard } from './components/GoalCard'
import { PageFooter } from './components/PageFooter'
import { PageHead } from './components/PageHead'

/**
 * Coffer — one full-viewport gradient stage: a greeting, three frosted-glass
 * cards (a bank account, a savings goal, a four-row ledger), three blurred
 * colour blobs behind them and one line of attribution. No navigation, no
 * second band.
 */
export function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,#1e1b4b_0%,#4c1d95_45%,#9d174d_100%)] px-4 py-[clamp(40px,7vw,88px)] text-white">
      <Blobs />
      <PageHead />
      <div className="mx-auto grid max-w-[1140px] grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-[22px]">
        <GlassCard labelledBy="coffer-account" className="min-h-[320px]">
          <AccountCard account={ACCOUNT} />
        </GlassCard>
        <GlassCard labelledBy="coffer-goal">
          <GoalCard goal={GOAL} />
        </GlassCard>
        <GlassCard labelledBy="coffer-activity">
          <ActivityCard transactions={TRANSACTIONS} />
        </GlassCard>
      </div>
      <PageFooter />
    </main>
  )
}
