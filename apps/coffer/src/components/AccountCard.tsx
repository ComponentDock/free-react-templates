import { splitEuro, type Account } from '../data/accounts'

interface AccountCardProps {
  account: Account
}

/** The physical-card card: balance, chip and a bottom-anchored holder strip. */
export function AccountCard({ account }: AccountCardProps) {
  const balance = splitEuro(account.balanceCents)

  return (
    <>
      <div className="flex items-center justify-between gap-3">
        <h2 id="coffer-account" className="m-0 text-base font-semibold">
          {account.title}
        </h2>
        <svg viewBox="0 0 40 24" aria-hidden="true" className="h-[26px] w-11 flex-none">
          <circle cx="12" cy="12" r="11" fill="rgba(255,255,255,.85)" />
          <circle cx="28" cy="12" r="11" fill="rgba(255,255,255,.45)" />
        </svg>
      </div>
      <p className="mt-[22px] mb-0 block text-[12.5px] tracking-[.04em] text-violet-100">
        {account.label}
      </p>
      <p className="mt-[4px] mb-0 text-[36px] font-bold leading-none tracking-[-.03em] tabular-nums">
        {balance.whole}
        <span className="text-[20px] text-violet-100">{balance.cents}</span>
      </p>
      <svg viewBox="0 0 44 34" aria-hidden="true" className="mt-[22px] h-[30px] w-10 flex-none">
        <rect
          x="1"
          y="1"
          width="42"
          height="32"
          rx="7"
          fill="rgba(253,230,138,.85)"
          stroke="rgba(120,80,0,.45)"
          strokeWidth="1.2"
        />
        <path
          d="M1 12h12m18 0h12M1 22h12m18 0h12M13 1v32m18-32v32"
          fill="none"
          stroke="rgba(120,80,0,.45)"
          strokeWidth="1.2"
        />
      </svg>
      <p className="mt-[10px] mb-[14px] text-[17px] font-medium tabular-nums tracking-[.12em] [word-spacing:.2em]">
        <span className="sr-only">Card ending in </span>
        <span aria-hidden="true">{'\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 '}</span>
        {account.last4}
      </p>
      <div className="mt-auto flex items-start gap-9 text-sm leading-[1.5] font-semibold">
        <span className="flex flex-col">
          <span className="block text-[12.5px] text-violet-100">Card holder</span>
          {account.holder}
        </span>
        <span className="flex flex-col">
          <span className="block text-[12.5px] text-violet-100">Expires</span>
          {account.expires}
        </span>
      </div>
    </>
  )
}
