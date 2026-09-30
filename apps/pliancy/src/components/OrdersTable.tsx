import { cn } from '@free-react-templates/ui'
import { orders } from '../data/orders'

interface ColumnSpec {
  label: string
  /** Desktop-only geometry (widths/alignment/padding from the source sheet). */
  desktopClass: string
}

const columns: ColumnSpec[] = [
  { label: 'Date', desktopClass: 'w-[260px] pl-10' },
  { label: 'Order ID', desktopClass: 'w-[160px] pl-2' },
  { label: 'Name', desktopClass: 'w-[245px] pl-2' },
  { label: 'Price', desktopClass: 'w-[110px] pl-2 text-right' },
  { label: 'Quantity', desktopClass: 'w-[170px] pl-2 text-right' },
  { label: 'Total', desktopClass: 'w-[222px] pl-2 pr-[62px] text-right' },
]

/** Shared stacked-mode cell classes (≤992px): label:value card reflow. */
const stackedCell = [
  'max-[992px]:block',
  'max-[992px]:w-full',
  'max-[992px]:pl-[40%]',
  'max-[992px]:mb-6',
  'max-[992px]:text-left',
  'max-[992px]:before:content-[attr(data-label)]',
  'max-[992px]:before:absolute',
  'max-[992px]:before:left-[30px]',
  'max-[992px]:before:top-0',
  'max-[992px]:before:w-[40%]',
  'max-[992px]:before:font-open-sans',
  'max-[992px]:before:text-[14px]',
  'max-[992px]:before:leading-[1.2]',
  'max-[992px]:before:text-label-ink',
].join(' ')

/** Last cell of each stacked row closes the card block (margin-bottom: 0). */
const lastStackedCell = 'max-[992px]:last:mb-0'

export function OrdersTable() {
  return (
    <table className="relative w-full overflow-hidden rounded-[10px] bg-white max-[992px]:block">
      <thead className="max-[992px]:hidden">
        <tr className="h-[60px] bg-header-plum">
          {columns.map((column) => (
            <th
              key={column.label}
              className={cn(
                'relative font-open-sans text-[18px] font-normal leading-[1.2] text-white',
                column.desktopClass,
              )}
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="max-[992px]:block max-[992px]:text-sm">
        {orders.map((order, index) => {
          const values = [
            order.date,
            order.orderId,
            order.name,
            order.price,
            order.quantity,
            order.total,
          ]
          return (
            <tr
              key={`${order.orderId}-${index}`}
              className="relative h-[50px] cursor-pointer font-open-sans text-[15px] leading-[1.2] text-cell-ink even:bg-zebra hover:bg-zebra hover:text-hover-ink max-[992px]:block max-[992px]:h-auto max-[992px]:py-[37px]"
            >
              {columns.map((column, columnIndex) => (
                <td
                  key={column.label}
                  data-label={column.label}
                  className={cn(
                    'relative',
                    column.desktopClass,
                    stackedCell,
                    columnIndex === columns.length - 1 && lastStackedCell,
                  )}
                >
                  {values[columnIndex]}
                </td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
