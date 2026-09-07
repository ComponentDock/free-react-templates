import type { FormData } from '../App'

interface ConfirmStepProps {
  data: FormData
}

interface SummaryRow {
  label: string
  value: string
}

export function ConfirmStep({ data }: ConfirmStepProps) {
  const rows: SummaryRow[] = [
    { label: 'Username:', value: data.username },
    { label: 'Email Address:', value: data.email },
    { label: 'Card Type:', value: data.cardType },
    { label: 'Card Number:', value: data.cardNumber },
    { label: 'CVC:', value: data.cvc },
    { label: 'Expiry Month:', value: data.expiryMonth },
    { label: 'Expiry Year:', value: data.expiryYear },
  ]

  return (
    <section
      aria-labelledby="step3-heading"
      className="rounded-lg bg-primary-400 p-8 sm:p-[32px_115px_23px_75px]"
    >
      <h2 id="step3-heading" className="mb-3 text-base font-semibold text-white">
        Confirm Details
      </h2>
      <div className="rounded-[5px] bg-primary-500 p-6">
        <table className="w-full">
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-b border-white/10 last:border-b-0">
                <th className="pb-4 text-left text-base font-normal text-white/60">{row.label}</th>
                <td className="pb-4 text-left text-base font-normal text-white">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
