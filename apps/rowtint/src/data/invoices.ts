export type RowTint = 'primary' | 'success' | 'warning' | 'danger' | 'info'

interface TintInvoiceRow {
  id: string
  invoice: string
  customer: string
  ship: string
  price: string
  purchasedPrice: string
  tint: RowTint
}

const baseRow = {
  invoice: '1001',
  customer: 'Mark Otto',
  ship: 'Japan',
  price: '$3000',
  purchasedPrice: '$1200',
}

/** Canonical demo dataset — 5 identical invoice rows in the solid tint sequence. */
export const invoiceRows: TintInvoiceRow[] = [
  { id: 'row-1', ...baseRow, tint: 'primary' },
  { id: 'row-2', ...baseRow, tint: 'success' },
  { id: 'row-3', ...baseRow, tint: 'warning' },
  { id: 'row-4', ...baseRow, tint: 'danger' },
  { id: 'row-5', ...baseRow, tint: 'info' },
]
