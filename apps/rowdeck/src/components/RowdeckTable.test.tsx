import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RowdeckTable } from './RowdeckTable'
import { initialRows } from '../data/rows'

describe('RowdeckTable', () => {
  it('renders one table inside a horizontal-scroll wrapper', () => {
    render(<RowdeckTable />)
    const table = screen.getByRole('table')
    expect(table).toBeInTheDocument()
    expect(table.className).toContain('w-full')
    expect(table.className).toContain('min-w-[1000px]')
    // Row-card signature: separate borders + 10px vertical spacing.
    expect(table.className).toContain('border-separate')
    expect(table.className).toContain('border-spacing-y-[10px]')
    expect(table.className).not.toContain('border-collapse')
    const wrapper = table.parentElement as HTMLElement
    expect(wrapper.className).toContain('overflow-x-scroll')
  })

  it('renders the five-column header on a dark charcoal bar', () => {
    render(<RowdeckTable />)
    const headerCells = screen.getAllByRole('columnheader')
    expect(headerCells).toHaveLength(5)
    expect(headerCells.map((cell) => cell.textContent?.trim())).toEqual([
      'ID no.',
      'First Name',
      'Last Name',
      'Email',
      '',
    ])
    const table = screen.getByRole('table')
    const thead = table.querySelector('thead')
    expect(thead?.className).toContain('bg-header-dark')
    for (const cell of headerCells) {
      expect(cell).toHaveAttribute('scope', 'col')
      expect(cell.className).toContain('font-bold')
      expect(cell.className).toContain('text-white')
      expect(cell.className).toContain('text-[14px]')
      expect(cell.className).toContain('px-[30px]')
      expect(cell.className).toContain('py-[30px]')
      expect(cell.className).toContain('border-none')
    }
  })

  it('renders five row-cards with bold scope=row ID cells 001–005', () => {
    render(<RowdeckTable />)
    const rows = screen.getAllByRole('row').slice(1)
    expect(rows).toHaveLength(5)
    const rowHeaders = screen.getAllByRole('rowheader')
    expect(rowHeaders.map((cell) => cell.textContent)).toEqual(['001', '002', '003', '004', '005'])
    for (const cell of rowHeaders) {
      expect(cell).toHaveAttribute('scope', 'row')
      expect(cell.className).toContain('font-bold')
      expect(cell.className).toContain('text-center')
      expect(cell.className).toContain('text-[14px]')
      expect(cell.className).toContain('bg-white')
      expect(cell.className).toContain('p-[30px]')
      expect(cell.className).toContain('border-none')
      expect(cell.className).toContain('text-ink')
    }
  })

  it('styles each row as a floating card: soft radius, subtle shadow', () => {
    render(<RowdeckTable />)
    const rows = screen.getAllByRole('row').slice(1)
    for (const row of rows) {
      expect(row.className).toContain('rounded-[0.25rem]')
      expect(row.className).toContain('border border-transparent')
      expect(row.className).toContain('shadow-[0_5px_12px_-12px_rgba(0,0,0,0.29)]')
    }
  })

  it('styles body cells: left-aligned 14px ink on white, no borders or striping', () => {
    render(<RowdeckTable />)
    const cells = screen.getAllByRole('cell')
    expect(cells).toHaveLength(20)
    for (const cell of cells) {
      expect(cell.className).toContain('text-left')
      expect(cell.className).toContain('text-[14px]')
      expect(cell.className).toContain('text-ink')
      expect(cell.className).toContain('bg-white')
      expect(cell.className).toContain('p-[30px]')
      expect(cell.className).toContain('border-none')
      expect(cell.className).not.toContain('even:')
    }
  })

  it('renders a dismiss button per row with a red × icon and accessible name', () => {
    render(<RowdeckTable />)
    const buttons = screen.getAllByRole('button', { name: 'Close' })
    expect(buttons).toHaveLength(5)
    for (const button of buttons) {
      expect(button).toHaveAttribute('type', 'button')
      expect(button.className).toContain('opacity-50')
      expect(button.className).toContain('hover:opacity-75')
      expect(button.className).toContain('focus-visible:opacity-75')
      const icon = button.querySelector('svg')
      expect(icon).not.toBeNull()
      expect(icon?.getAttribute('class')).toContain('h-3 w-3')
      expect(icon?.getAttribute('class')).toContain('text-danger')
    }
  })

  it('keeps the data module in sync with the rendered rows', () => {
    render(<RowdeckTable />)
    const cells = screen.getAllByRole('cell')
    const rowHeaders = screen.getAllByRole('rowheader')
    initialRows.forEach((entry, index) => {
      const offset = index * 4
      expect(rowHeaders[index]?.textContent).toBe(entry.id)
      expect(cells[offset]?.textContent).toBe(entry.firstName)
      expect(cells[offset + 1]?.textContent).toBe(entry.lastName)
      expect(cells[offset + 2]?.textContent).toBe(entry.email)
    })
  })

  it('dismisses a row on button click, keeping the remaining order and styling', async () => {
    const user = userEvent.setup()
    render(<RowdeckTable />)
    const buttons = screen.getAllByRole('button', { name: 'Close' })
    await user.click(buttons[2] as HTMLElement)
    expect(screen.queryByText('003')).not.toBeInTheDocument()
    expect(screen.getAllByRole('rowheader').map((c) => c.textContent)).toEqual([
      '001',
      '002',
      '004',
      '005',
    ])
    const rows = screen.getAllByRole('row').slice(1)
    expect(rows).toHaveLength(4)
    for (const row of rows) {
      expect(row.className).toContain('rounded-[0.25rem]')
      expect(row.className).toContain('shadow-[0_5px_12px_-12px_rgba(0,0,0,0.29)]')
    }
  })

  it('shows a minimal muted empty state when every row is dismissed', async () => {
    const user = userEvent.setup()
    const { container } = render(<RowdeckTable />)
    for (let i = 0; i < 5; i += 1) {
      await user.click(screen.getAllByRole('button', { name: 'Close' })[0] as HTMLElement)
    }
    expect(screen.queryAllByRole('rowheader')).toHaveLength(0)
    expect(screen.getByText('No rows to display.')).toBeInTheDocument()
    // Header bar and table shell remain intact.
    expect(screen.getAllByRole('columnheader')).toHaveLength(5)
    expect(screen.getByRole('table')).toBeInTheDocument()
    // No live-region semantics leak onto rows.
    expect(container.querySelector('[role="alert"]')).toBeNull()
  })
})
