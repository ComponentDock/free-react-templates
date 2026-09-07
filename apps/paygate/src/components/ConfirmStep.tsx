import type { FormData } from '../App'

interface ConfirmStepProps {
  data: FormData
}

interface SummaryRow {
  label: string
  value: string
}

function maskCardNumber(number: string): string {
  if (number.length <= 4) return number
  return '*'.repeat(number.length - 4) + number.slice(-4)
}

export function ConfirmStep({ data }: ConfirmStepProps) {
  const rows: SummaryRow[] = [
    { label: 'Full Name:', value: data.fullName },
    { label: 'Email:', value: data.email },
    { label: 'Phone:', value: data.phone },
    { label: 'Card Number:', value: maskCardNumber(data.cardNumber) },
    { label: 'Expiry Date:', value: data.expiryDate },
    { label: 'CVV:', value: '***' },
    { label: 'Cardholder:', value: data.cardholderName },
  ]

  return (
    <section aria-labelledby="step3-heading">
      <h2 id="step3-heading" className="mb-4 text-lg font-semibold" style={{ color: '#26282b' }}>
        Confirmation
      </h2>
      <div className="rounded border p-4" style={{ borderColor: '#eee' }}>
        <table className="w-full">
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.label}
                className="border-b last:border-b-0"
                style={{ borderColor: '#eee' }}
              >
                <td className="py-2 pr-4 text-sm font-medium" style={{ color: '#666' }}>
                  {row.label}
                </td>
                <td className="py-2 text-sm" style={{ color: '#26282b' }}>
                  {row.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
