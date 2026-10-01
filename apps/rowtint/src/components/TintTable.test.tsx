import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { TintTable } from './TintTable'

describe('TintTable', () => {
  it('renders one dark shadowed table inside a horizontal-scroll wrapper', () => {
    render(<TintTable />)
    const table = screen.getByRole('table')
    expect(table.className).toContain('w-full')
    expect(table.className).toContain('min-w-[1000px]')
    expect(table.className).toContain('border-collapse')
    expect(table.className).toContain('text-left')
    expect(table.className).toContain('bg-headerband')
    expect(table.className).toContain('text-celltext')
    expect(table.className).toContain('shadow-[0_5px_12px_-12px_var(--color-cardshadow)]')
    const wrapper = table.parentElement as HTMLElement
    expect(wrapper.className).toContain('overflow-x-auto')
  })

  it('renders six uppercase 13px regular-weight white header cells with scope="col" on a charcoal band', () => {
    render(<TintTable />)
    const table = screen.getByRole('table')
    const headers = within(table).getAllByRole('columnheader')
    expect(headers.map((cell) => cell.textContent)).toEqual([
      'Invoce',
      'Customer',
      'Ship',
      'Price',
      'Pruchased Price',
      'Actions',
    ])
    for (const cell of headers) {
      expect(cell).toHaveAttribute('scope', 'col')
      expect(cell.className).toContain('text-[13px]')
      expect(cell.className).toContain('font-normal')
      expect(cell.className).toContain('uppercase')
      expect(cell.className).toContain('text-white')
      expect(cell.className).toContain('px-[30px]')
      expect(cell.className).toContain('py-[20px]')
      expect(cell.className).toContain('border-none')
    }
    const headerRow = within(table).getAllByRole('row')[0] as HTMLElement
    expect(headerRow.className).toContain('bg-headerband')
  })

  it('renders five body rows with the canonical invoice data in the solid tint sequence', () => {
    render(<TintTable />)
    const table = screen.getByRole('table')
    const bodyRows = within(table).getAllByRole('row').slice(1)
    expect(bodyRows).toHaveLength(5)
    expect(screen.getAllByText('Mark Otto')).toHaveLength(5)
    expect(screen.getAllByText('Japan')).toHaveLength(5)
    expect(screen.getAllByText('$3000')).toHaveLength(5)
    expect(screen.getAllByText('$1200')).toHaveLength(5)
    const tints = [
      'bg-row-primary',
      'bg-row-success',
      'bg-row-warning',
      'bg-row-danger',
      'bg-row-info',
    ]
    bodyRows.forEach((row, index) => {
      expect((row as HTMLElement).className).toContain(tints[index] as string)
    })
  })

  it('gives every row six cells: a bold scope="row" header th plus four data tds plus the edit cell', () => {
    render(<TintTable />)
    const table = screen.getByRole('table')
    const bodyRows = within(table).getAllByRole('row').slice(1)
    for (const row of bodyRows) {
      const rowHeader = within(row).getAllByRole('rowheader')
      expect(rowHeader).toHaveLength(1)
      const headerCell = rowHeader[0] as HTMLElement
      expect(headerCell).toHaveAttribute('scope', 'row')
      expect(headerCell).toHaveTextContent('1001')
      expect(headerCell.className).toContain('font-bold')
      const cells = within(row).getAllByRole('cell')
      expect(cells).toHaveLength(5)
      for (const cell of [...rowHeader, ...cells]) {
        expect(cell.className).toContain('border-none')
        expect(cell.className).toContain('px-[30px]')
        expect(cell.className).toContain('py-[20px]')
        expect(cell.className).toContain('text-[14px]')
        expect(cell.className).toContain('align-middle')
      }
    }
    expect(screen.getAllByText('1001')).toHaveLength(5)
  })

  it('renders exactly one edit button per row with a row-identifying accessible name', () => {
    render(<TintTable />)
    const table = screen.getByRole('table')
    const buttons = within(table).getAllByRole('button', { name: 'Edit invoice 1001' })
    expect(buttons).toHaveLength(5)
  })

  it('has no row-hover treatment and no row separator borders', () => {
    render(<TintTable />)
    const table = screen.getByRole('table')
    const bodyRows = within(table).getAllByRole('row').slice(1)
    for (const row of bodyRows) {
      expect((row as HTMLElement).className).not.toContain('hover:')
    }
  })
})
