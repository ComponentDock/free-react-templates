import { Briefcase, Coffee, DollarSign, ShoppingBag, type LucideIcon } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { formatSignedEuro, type IconName, type Transaction } from '../data/accounts'

const ICONS: Record<IconName, LucideIcon> = {
  bag: ShoppingBag,
  dollar: DollarSign,
  briefcase: Briefcase,
  coffee: Coffee,
}

interface ActivityCardProps {
  transactions: readonly Transaction[]
}

/** The four-row ledger: tile, merchant over category · date, right-aligned amount. */
export function ActivityCard({ transactions }: ActivityCardProps) {
  return (
    <>
      <div className="flex items-center justify-between gap-3">
        <h2 id="coffer-activity" className="m-0 text-base font-semibold">
          Recent activity
        </h2>
        <a
          href="#coffer-activity"
          className="ledger-link flex-none text-[13.5px] font-semibold text-white underline underline-offset-[3px]"
        >
          See all
        </a>
      </div>
      <ul className="mt-[14px] mb-0 grid list-none gap-1 p-0">
        {transactions.map((transaction) => {
          const Icon = ICONS[transaction.icon]

          return (
            <li
              key={transaction.merchant}
              className="flex items-center gap-3 border-b border-[color:rgba(255,255,255,.14)] py-[9px] last:border-b-0"
            >
              <span
                aria-hidden="true"
                className="grid size-[38px] flex-none place-items-center rounded-xl bg-white/16"
              >
                <Icon size={18} strokeWidth={1.8} />
              </span>
              <span className="flex min-w-0 flex-1 flex-col font-semibold leading-[1.3]">
                {transaction.merchant}
                <span className="text-[12.5px] font-normal text-violet-100">
                  {transaction.category} {'\u00b7'} {transaction.date}
                </span>
              </span>
              <span
                className={cn(
                  'whitespace-nowrap text-right text-[15px] font-semibold tabular-nums',
                  transaction.cents > 0 && 'text-green-200',
                )}
              >
                {formatSignedEuro(transaction.cents)}
              </span>
            </li>
          )
        })}
      </ul>
    </>
  )
}
