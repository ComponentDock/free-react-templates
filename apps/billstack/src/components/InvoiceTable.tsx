import { invoiceRows } from '../data/invoices'
import { StatusButton } from './StatusButton'

const headerLabels = ['Invoce', 'Customer', 'Ship', 'Price', 'Pruchased Price', 'Status'] as const

export function InvoiceTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[1000px] border-collapse text-left text-cell shadow-[0_5px_12px_-12px_var(--color-cardshadow)]">
        <thead>
          <tr className="bg-white">
            {headerLabels.map((label) => (
              <th
                key={label}
                scope="col"
                className="border-none px-[30px] py-[30px] text-[13px] font-normal uppercase text-heading"
              >
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {invoiceRows.map((row, index) => (
            <tr key={row.id} className={index % 2 === 0 ? 'bg-stripe' : 'bg-white'}>
              <th
                scope="row"
                className="border-none px-[30px] py-[20px] text-[14px] font-bold align-middle"
              >
                {row.invoice}
              </th>
              <td className="border-none px-[30px] py-[20px] text-[14px] align-middle">
                {row.customer}
              </td>
              <td className="border-none px-[30px] py-[20px] text-[14px] align-middle">
                {row.ship}
              </td>
              <td className="border-none px-[30px] py-[20px] text-[14px] align-middle">
                {row.price}
              </td>
              <td className="border-none px-[30px] py-[20px] text-[14px] align-middle">
                {row.purchasedPrice}
              </td>
              <td className="border-none px-[30px] py-[20px] text-[14px] align-middle">
                <StatusButton variant={row.status.variant} label={row.status.label} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
