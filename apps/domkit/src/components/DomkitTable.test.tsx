import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DomkitTable } from './DomkitTable'
import { domains } from '../data/domains'

describe('DomkitTable', () => {
  it('renders one table inside a horizontal-scroll wrapper', () => {
    render(<DomkitTable />)
    const table = screen.getByRole('table')
    expect(table).toBeInTheDocument()
    expect(table.className).toContain('w-full')
    expect(table.className).toContain('min-w-[1000px]')
    expect(table.className).toContain('bg-white')
    expect(table.className).toContain('text-center')
    expect(table.className).toContain('shadow-[0_5px_12px_-12px_rgba(0,0,0,0.29)]')
    const wrapper = table.parentElement as HTMLElement
    expect(wrapper.className).toContain('overflow-x-scroll')
  })

  it('renders the six-column header on a vivid violet bar', () => {
    render(<DomkitTable />)
    const headerCells = screen.getAllByRole('columnheader')
    expect(headerCells.map((cell) => cell.textContent)).toEqual([
      'TLD',
      'Duration',
      'Registration',
      'Renewal',
      'Transfer',
      'Register',
    ])
    const table = screen.getByRole('table')
    const thead = table.querySelector('thead')
    expect(thead?.className).toContain('bg-primary')
    for (const cell of headerCells) {
      expect(cell).toHaveAttribute('scope', 'col')
      expect(cell.className).toContain('font-bold')
      expect(cell.className).toContain('text-white')
      expect(cell.className).toContain('text-[14px]')
      expect(cell.className).toContain('p-[30px]')
      expect(cell.className).toContain('border-none')
    }
  })

  it('renders six TLD rows with bold shaded lavender scope cells', () => {
    render(<DomkitTable />)
    const rows = screen.getAllByRole('row').slice(1)
    expect(rows).toHaveLength(6)
    const rowHeaders = screen.getAllByRole('rowheader')
    expect(rowHeaders.map((cell) => cell.textContent)).toEqual([
      '.com',
      '.net',
      '.org',
      '.biz',
      '.info',
      '.me',
    ])
    // First five rows carry the 2px lavender bottom border; the .me row
    // drops it (covered by the last-row test below).
    for (const cell of rowHeaders.slice(0, -1)) {
      expect(cell).toHaveAttribute('scope', 'row')
      expect(cell.className).toContain('font-bold')
      expect(cell.className).toContain('bg-scope')
      expect(cell.className).toContain('border-scope-border')
      expect(cell.className).toContain('border-b-2')
      expect(cell.className).toContain('p-[30px]')
      expect(cell.className).toContain('text-[14px]')
      expect(cell.className).toContain('align-middle')
    }
  })

  it('renders body cells: 14px ink on white with page-colored bottom borders', () => {
    render(<DomkitTable />)
    const cells = screen.getAllByRole('cell')
    expect(cells).toHaveLength(30)
    // First five rows carry the 2px page-colored bottom border; the .me
    // row drops it (covered by the last-row test below).
    for (const cell of cells.slice(0, -5)) {
      expect(cell.className).toContain('text-[14px]')
      expect(cell.className).toContain('bg-white')
      expect(cell.className).toContain('p-[30px]')
      expect(cell.className).toContain('align-middle')
      expect(cell.className).toContain('border-b-2')
      expect(cell.className).toContain('border-page')
    }
  })

  it('shades the Registration and Transfer columns at >=768px only', () => {
    render(<DomkitTable />)
    const cells = screen.getAllByRole('cell')
    cells.forEach((cell, index) => {
      const positionInRow = index % 5
      const isShadedColumn = positionInRow === 1 || positionInRow === 3
      if (isShadedColumn) {
        expect(cell.className).toContain('min-[768px]:bg-shade')
        expect(cell.className).toContain('min-[768px]:border-shade-border')
      } else {
        expect(cell.className).not.toContain('bg-shade')
      }
    })
  })

  it('renders Duration, Renewal, and Register cells white with page borders', () => {
    render(<DomkitTable />)
    const cells = screen.getAllByRole('cell')
    for (let index = 0; index < cells.length; index += 1) {
      const positionInRow = index % 5
      const cell = cells[index] as HTMLElement
      if (positionInRow === 0 || positionInRow === 2 || positionInRow === 4) {
        expect(cell.className).toContain('bg-white')
        expect(cell.className).toContain('border-page')
        expect(cell.className).not.toContain('bg-shade')
      }
    }
  })

  it('gives the last row (.me) no bottom border on any cell', () => {
    render(<DomkitTable />)
    const rows = screen.getAllByRole('row').slice(1)
    const lastRow = rows[rows.length - 1] as HTMLElement
    const cells = lastRow.querySelectorAll('th, td')
    expect(cells).toHaveLength(6)
    for (const cell of cells) {
      expect(cell.className).toContain('border-b-0')
    }
  })

  it('renders a Sign Up button per row with the primary button tokens', () => {
    render(<DomkitTable />)
    const buttons = screen.getAllByRole('button', { name: 'Sign Up' })
    expect(buttons).toHaveLength(6)
    for (const button of buttons) {
      expect(button).toHaveAttribute('type', 'button')
      expect(button.className).toContain('bg-primary')
      expect(button.className).toContain('border-primary')
      expect(button.className).toContain('text-white')
      expect(button.className).toContain('text-[13px]')
      expect(button.className).toContain('font-medium')
      expect(button.className).toContain('border-2')
      expect(button.className).toContain('rounded-[2px]')
      expect(button.className).toContain('px-3')
      expect(button.className).toContain('py-1.5')
      expect(button.className).toContain('hover:bg-primary-hover')
      expect(button.className).toContain('hover:border-primary-hover')
      expect(button.className).toContain('hover:shadow-[0_12px_20px_-6px_rgba(0,0,0,0.21)]')
    }
  })

  it('Sign Up controls are real buttons, not invented navigation', () => {
    render(<DomkitTable />)
    const buttons = screen.getAllByRole('button', { name: 'Sign Up' })
    for (const button of buttons) {
      expect(button.tagName).toBe('BUTTON')
      expect(button).not.toHaveAttribute('href')
    }
  })

  it('keeps the data module in sync with the rendered rows', () => {
    render(<DomkitTable />)
    const cells = screen.getAllByRole('cell')
    const rowHeaders = screen.getAllByRole('rowheader')
    domains.forEach((domain, index) => {
      const offset = index * 5
      expect(rowHeaders[index]?.textContent).toBe(domain.tld)
      expect(cells[offset]?.textContent).toBe(domain.duration)
      expect(cells[offset + 1]?.textContent).toBe(domain.registration)
      expect(cells[offset + 2]?.textContent).toBe(domain.renewal)
      expect(cells[offset + 3]?.textContent).toBe(domain.transfer)
      expect(cells[offset + 4]?.textContent).toBe('Sign Up')
    })
  })
})
