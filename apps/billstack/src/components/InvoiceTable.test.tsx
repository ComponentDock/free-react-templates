import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { InvoiceTable } from './InvoiceTable'

describe('InvoiceTable', () => {
  it('renders one shadowed white-band table inside a horizontal-scroll wrapper', () => {
    render(<InvoiceTable />)
    const table = screen.getByRole('table')
    expect(table.className).toContain('w-full')
    expect(table.className).toContain('min-w-[1000px]')
    expect(table.className).toContain('border-collapse')
    expect(table.className).toContain('text-left')
    expect(table.className).toContain('text-cell')
    expect(table.className).toContain('shadow-[0_5px_12px_-12px_var(--color-cardshadow)]')
    const wrapper = table.parentElement as HTMLElement
    expect(wrapper.className).toContain('overflow-x-auto')
  })

  it('renders six uppercase 13px regular-weight header cells with scope="col"', () => {
    render(<InvoiceTable />)
    const table = screen.getByRole('table')
    const headers = within(table).getAllByRole('columnheader')
    expect(headers.map((cell) => cell.textContent)).toEqual([
      'Invoce',
      'Customer',
      'Ship',
      'Price',
      'Pruchased Price',
      'Status',
    ])
    for (const cell of headers) {
      expect(cell).toHaveAttribute('scope', 'col')
      expect(cell.className).toContain('text-[13px]')
      expect(cell.className).toContain('font-normal')
      expect(cell.className).toContain('uppercase')
      expect(cell.className).toContain('text-heading')
      expect(cell.className).toContain('px-[30px]')
      expect(cell.className).toContain('py-[30px]')
      expect(cell.className).toContain('border-none')
    }
    const headerRow = within(table).getAllByRole('row')[0] as HTMLElement
    expect(headerRow.className).toContain('bg-white')
  })

  it('renders eight body rows with the canonical invoice data and status sequence', () => {
    render(<InvoiceTable />)
    const table = screen.getByRole('table')
    const bodyRows = within(table).getAllByRole('row').slice(1)
    expect(bodyRows).toHaveLength(8)
    expect(screen.getAllByText('Mark Otto')).toHaveLength(8)
    expect(screen.getAllByText('Japan')).toHaveLength(8)
    expect(screen.getAllByText('$3000')).toHaveLength(8)
    expect(screen.getAllByText('$1200')).toHaveLength(8)
    const buttons = within(table).getAllByRole('button')
    expect(buttons.map((button) => button.textContent)).toEqual([
      'Progress',
      'Open',
      'On hold',
      'Progress',
      'On hold',
      'Open',
      'Open',
      'Progress',
    ])
  })

  it('gives every row six cells: a bold row-header th plus four tds plus the status cell', () => {
    render(<InvoiceTable />)
    const table = screen.getByRole('table')
    const bodyRows = within(table).getAllByRole('row').slice(1)
    for (const row of bodyRows) {
      const cells = within(row).getAllByRole('cell')
      expect(cells).toHaveLength(5)
      const rowHeader = within(row).getAllByRole('rowheader')
      expect(rowHeader).toHaveLength(1)
      const headerCell = rowHeader[0] as HTMLElement
      expect(headerCell).toHaveAttribute('scope', 'row')
      expect(headerCell).toHaveTextContent('1001')
      expect(headerCell.className).toContain('font-bold')
      for (const cell of [...rowHeader, ...cells]) {
        expect(cell.className).toContain('border-none')
        expect(cell.className).toContain('px-[30px]')
        expect(cell.className).toContain('py-[20px]')
        expect(cell.className).toContain('text-[14px]')
        expect(cell.className).toContain('align-middle')
      }
    }
  })

  it('stripes odd rows (1,3,5,7) and leaves even rows white', () => {
    render(<InvoiceTable />)
    const table = screen.getByRole('table')
    const bodyRows = within(table).getAllByRole('row').slice(1)
    bodyRows.forEach((row, index) => {
      const typedRow = row as HTMLElement
      if (index % 2 === 0) {
        expect(typedRow.className).toContain('bg-stripe')
      } else {
        expect(typedRow.className).toContain('bg-white')
      }
    })
  })

  it('maps each status label to its Bootstrap variant styling', () => {
    render(<InvoiceTable />)
    const table = screen.getByRole('table')
    const buttons = within(table).getAllByRole('button')
    const progress = buttons[0] as HTMLElement
    expect(progress.className).toContain('bg-success')
    expect(progress.className).toContain('text-white')
    const open = buttons[1] as HTMLElement
    expect(open.className).toContain('bg-warning')
    expect(open.className).toContain('text-cell')
    const onHold = buttons[2] as HTMLElement
    expect(onHold.className).toContain('bg-danger')
    expect(onHold.className).toContain('text-white')
  })
})
