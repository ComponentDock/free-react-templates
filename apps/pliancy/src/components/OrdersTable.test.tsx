import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { OrdersTable } from './OrdersTable'
import { orders } from '../data/orders'

const headerLabels = ['Date', 'Order ID', 'Name', 'Price', 'Quantity', 'Total']

function renderTable() {
  const { container } = render(<OrdersTable />)
  const table = screen.getByRole('table')
  const headerCells = screen.getAllByRole('columnheader')
  const rows = screen.getAllByRole('row')
  const bodyRows = rows.slice(1)
  const bodyCells = screen.getAllByRole('cell')
  return { container, table, headerCells, bodyRows, bodyCells }
}

describe('OrdersTable', () => {
  it('renders one table with a header row and fourteen body rows', () => {
    renderTable()
    const table = screen.getByRole('table')
    expect(table).toBeInTheDocument()
    const rows = screen.getAllByRole('row')
    // 1 header row + 14 body rows
    expect(rows).toHaveLength(15)
    expect(screen.getAllByRole('columnheader')).toHaveLength(6)
    expect(screen.getAllByRole('cell')).toHaveLength(84)
  })

  it('renders the six column labels in order', () => {
    renderTable()
    const headerCells = screen.getAllByRole('columnheader')
    expect(headerCells.map((cell) => cell.textContent)).toEqual(headerLabels)
  })

  it('renders the first order row verbatim', () => {
    renderTable()
    const bodyCells = screen.getAllByRole('cell')
    const firstRow = bodyCells.slice(0, 6).map((cell) => cell.textContent)
    expect(firstRow).toEqual([
      '2017-09-29 01:22',
      '200398',
      'iPhone X 64Gb Grey',
      '$999.00',
      '1',
      '$999.00',
    ])
  })

  it('repeats rows 7–10 as rows 11–14 (dataset invariant)', () => {
    renderTable()
    const bodyCells = screen.getAllByRole('cell')
    const rowValues = (from: number, to: number) =>
      bodyCells.slice(from * 6, to * 6).map((cell) => cell.textContent)
    expect(rowValues(10, 14)).toEqual(rowValues(6, 10))
  })

  it('styles the table card: white, rounded, overflow-hidden, no shadow', () => {
    const { table } = renderTable()
    expect(table.className).toContain('w-full')
    expect(table.className).toContain('bg-white')
    expect(table.className).toContain('rounded-[10px]')
    expect(table.className).toContain('overflow-hidden')
    expect(table.className).not.toContain('shadow')
  })

  it('styles the header row: 60px dark plum band with white 18px regular labels', () => {
    renderTable()
    const headerRow = screen.getAllByRole('row')[0] as HTMLElement
    expect(headerRow.className).toContain('h-[60px]')
    expect(headerRow.className).toContain('bg-header-plum')
    const headerCells = screen.getAllByRole('columnheader')
    for (const cell of headerCells) {
      expect(cell.className).toContain('font-open-sans')
      expect(cell.className).toContain('font-normal')
      expect(cell.className).toContain('text-[18px]')
      expect(cell.className).toContain('text-white')
      expect(cell.className).toContain('leading-[1.2]')
    }
  })

  it('applies the desktop column geometry to header cells', () => {
    renderTable()
    const headerCells = screen.getAllByRole('columnheader')
    expect(headerCells[0]?.className).toContain('w-[260px]')
    expect(headerCells[0]?.className).toContain('pl-10')
    expect(headerCells[1]?.className).toContain('w-[160px]')
    expect(headerCells[2]?.className).toContain('w-[245px]')
    expect(headerCells[3]?.className).toContain('w-[110px]')
    expect(headerCells[4]?.className).toContain('w-[170px]')
    expect(headerCells[5]?.className).toContain('w-[222px]')
    expect(headerCells[5]?.className).toContain('pr-[62px]')
    // columns 4–6 are right-aligned; 1–3 left
    expect(headerCells[3]?.className).toContain('text-right')
    expect(headerCells[4]?.className).toContain('text-right')
    expect(headerCells[5]?.className).toContain('text-right')
    expect(headerCells[0]?.className).not.toContain('text-right')
  })

  it('styles body rows: 50px, gray 15px text, zebra striping, CSS hover', () => {
    renderTable()
    const rows = screen.getAllByRole('row').slice(1)
    for (const row of rows) {
      expect(row.className).toContain('h-[50px]')
      expect(row.className).toContain('font-open-sans')
      expect(row.className).toContain('text-[15px]')
      expect(row.className).toContain('leading-[1.2]')
      expect(row.className).toContain('text-cell-ink')
      expect(row.className).toContain('even:bg-zebra')
      expect(row.className).toContain('hover:bg-zebra')
      expect(row.className).toContain('hover:text-hover-ink')
      expect(row.className).toContain('cursor-pointer')
    }
  })

  it('gives every body cell its stacked-mode data-label attribute', () => {
    renderTable()
    const bodyCells = screen.getAllByRole('cell')
    for (let row = 0; row < 14; row += 1) {
      for (let col = 0; col < 6; col += 1) {
        expect(bodyCells[row * 6 + col]).toHaveAttribute('data-label', headerLabels[col])
      }
    }
  })

  it('carries the ≤992px stacked-mode class markup on the table', () => {
    const { table } = renderTable()
    expect(table.className).toContain('max-[992px]:block')
    const thead = table.querySelector('thead')
    expect(thead?.className).toContain('max-[992px]:hidden')
    const tbody = table.querySelector('tbody')
    expect(tbody?.className).toContain('max-[992px]:block')
    expect(tbody?.className).toContain('max-[992px]:text-sm')
  })

  it('carries the stacked-mode row classes (block, auto height, 37px padding)', () => {
    renderTable()
    const rows = screen.getAllByRole('row').slice(1)
    for (const row of rows) {
      expect(row.className).toContain('max-[992px]:block')
      expect(row.className).toContain('max-[992px]:h-auto')
      expect(row.className).toContain('max-[992px]:py-[37px]')
    }
  })

  it('carries the stacked-mode cell classes (:before label injection)', () => {
    renderTable()
    const bodyCells = screen.getAllByRole('cell')
    for (const cell of bodyCells) {
      expect(cell.className).toContain('max-[992px]:block')
      expect(cell.className).toContain('max-[992px]:w-full')
      expect(cell.className).toContain('max-[992px]:pl-[40%]')
      expect(cell.className).toContain('max-[992px]:mb-6')
      expect(cell.className).toContain('max-[992px]:text-left')
      expect(cell.className).toContain('max-[992px]:before:content-[attr(data-label)]')
      expect(cell.className).toContain('max-[992px]:before:absolute')
      expect(cell.className).toContain('max-[992px]:before:left-[30px]')
      expect(cell.className).toContain('max-[992px]:before:top-0')
      expect(cell.className).toContain('max-[992px]:before:w-[40%]')
      expect(cell.className).toContain('max-[992px]:before:font-open-sans')
      expect(cell.className).toContain('max-[992px]:before:text-[14px]')
      expect(cell.className).toContain('max-[992px]:before:leading-[1.2]')
      expect(cell.className).toContain('max-[992px]:before:text-label-ink')
    }
  })

  it('zeroes the bottom margin of each row’s last cell in stacked mode', () => {
    renderTable()
    const rows = screen.getAllByRole('row').slice(1)
    for (const row of rows) {
      const cells = row.querySelectorAll('td')
      expect(cells[5]?.className).toContain('max-[992px]:last:mb-0')
      expect(cells[0]?.className).not.toContain('max-[992px]:last:mb-0')
    }
  })

  it('keeps the data module in sync with the rendered rows', () => {
    renderTable()
    const bodyCells = screen.getAllByRole('cell')
    orders.forEach((order, index) => {
      const offset = index * 6
      expect(bodyCells[offset]?.textContent).toBe(order.date)
      expect(bodyCells[offset + 1]?.textContent).toBe(order.orderId)
      expect(bodyCells[offset + 2]?.textContent).toBe(order.name)
      expect(bodyCells[offset + 3]?.textContent).toBe(order.price)
      expect(bodyCells[offset + 4]?.textContent).toBe(order.quantity)
      expect(bodyCells[offset + 5]?.textContent).toBe(order.total)
    })
  })
})
