export type StatusVariant = 'success' | 'warning' | 'danger'

interface InvoiceStatus {
  label: string
  variant: StatusVariant
}

interface InvoiceRow {
  id: string
  invoice: string
  customer: string
  ship: string
  price: string
  purchasedPrice: string
  status: InvoiceStatus
}

const baseRow = {
  invoice: '1001',
  customer: 'Mark Otto',
  ship: 'Japan',
  price: '$3000',
  purchasedPrice: '$1200',
}

/** Canonical demo dataset — 8 identical invoice rows with the source status sequence. */
export const invoiceRows: InvoiceRow[] = [
  { id: 'row-1', ...baseRow, status: { label: 'Progress', variant: 'success' } },
  { id: 'row-2', ...baseRow, status: { label: 'Open', variant: 'warning' } },
  { id: 'row-3', ...baseRow, status: { label: 'On hold', variant: 'danger' } },
  { id: 'row-4', ...baseRow, status: { label: 'Progress', variant: 'success' } },
  { id: 'row-5', ...baseRow, status: { label: 'On hold', variant: 'danger' } },
  { id: 'row-6', ...baseRow, status: { label: 'Open', variant: 'warning' } },
  { id: 'row-7', ...baseRow, status: { label: 'Open', variant: 'warning' } },
  { id: 'row-8', ...baseRow, status: { label: 'Progress', variant: 'success' } },
]
