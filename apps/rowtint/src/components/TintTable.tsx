import { invoiceRows, type RowTint } from '../data/invoices'
import { EditButton } from './EditButton'

/** Source header labels — the source's own spelling is preserved verbatim. */
const headerLabels = ['Invoce', 'Customer', 'Ship', 'Price', 'Pruchased Price'] as const

/** Solid row tints — the source's fixed primary → success → warning → danger → info sequence. */
const tintRowStyles: Record<RowTint, string> = {
  primary: 'bg-row-primary',
  success: 'bg-row-success',
  warning: 'bg-row-warning',
  danger: 'bg-row-danger',
  info: 'bg-row-info',
}

export function TintTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[1000px] border-collapse bg-headerband text-left text-celltext shadow-[0_5px_12px_-12px_var(--color-cardshadow)]">
        <thead>
          <tr className="bg-headerband">
            {headerLabels.map((label) => (
              <th
                key={label}
                scope="col"
                className="border-none px-[30px] py-[20px] text-[13px] font-normal uppercase text-white"
              >
                {label}
              </th>
            ))}
            <th
              scope="col"
              className="border-none px-[30px] py-[20px] text-[13px] font-normal uppercase text-white"
            >
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {invoiceRows.map((row) => (
            <tr key={row.id} className={tintRowStyles[row.tint]}>
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
                <EditButton invoice={row.invoice} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
