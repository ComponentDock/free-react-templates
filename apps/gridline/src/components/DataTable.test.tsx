import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DataTable, tableRows } from './DataTable'

describe('DataTable', () => {
  it('renders the six header columns', () => {
    render(<DataTable />)
    for (const col of ['Order', 'Name', 'Occupation', 'Contact', 'Education']) {
      expect(screen.getByRole('columnheader', { name: col })).toBeInTheDocument()
    }
    expect(screen.getByRole('columnheader', { name: /select all rows/i })).toBeInTheDocument()
  })

  it('renders four data rows with same-kind demo data', () => {
    render(<DataTable />)
    expect(screen.getAllByRole('rowheader')).toHaveLength(4)
    for (const row of tableRows) {
      expect(screen.getByText(row.name)).toBeInTheDocument()
      expect(screen.getByText(row.order)).toBeInTheDocument()
      expect(screen.getByText(row.contact)).toBeInTheDocument()
      expect(screen.getByText(row.education)).toBeInTheDocument()
      expect(screen.getByText(row.occupation)).toBeInTheDocument()
    }
  })

  it('demo data keeps the source shape (4-digit orders, +CC phones)', () => {
    for (const row of tableRows) {
      expect(row.order).toMatch(/^\d{4}$/)
      expect(row.contact).toMatch(/^\+\d+/)
    }
  })

  it('header checkbox selects all rows', async () => {
    const user = userEvent.setup()
    render(<DataTable />)
    const boxes = screen.getAllByRole('checkbox')
    await user.click(boxes[0] as HTMLElement)
    for (const box of boxes.slice(1)) {
      expect(box).toBeChecked()
    }
  })

  it('header checkbox deselects all rows on second toggle', async () => {
    const user = userEvent.setup()
    render(<DataTable />)
    const boxes = screen.getAllByRole('checkbox')
    await user.click(boxes[0] as HTMLElement)
    await user.click(boxes[0] as HTMLElement)
    for (const box of boxes.slice(1)) {
      expect(box).not.toBeChecked()
    }
  })

  it('row checkboxes toggle independently', async () => {
    const user = userEvent.setup()
    render(<DataTable />)
    const boxes = screen.getAllByRole('checkbox')
    await user.click(boxes[1] as HTMLElement)
    expect(boxes[1]).toBeChecked()
    expect(boxes[2]).not.toBeChecked()
    expect(boxes[3]).not.toBeChecked()
  })

  it('header checkbox selects all when some rows are already checked', async () => {
    const user = userEvent.setup()
    render(<DataTable />)
    const boxes = screen.getAllByRole('checkbox')
    await user.click(boxes[2] as HTMLElement)
    await user.click(boxes[0] as HTMLElement)
    for (const box of boxes.slice(1)) {
      expect(box).toBeChecked()
    }
  })

  it('a row checkbox can be toggled off again', async () => {
    const user = userEvent.setup()
    render(<DataTable />)
    const boxes = screen.getAllByRole('checkbox')
    await user.click(boxes[1] as HTMLElement)
    await user.click(boxes[1] as HTMLElement)
    expect(boxes[1]).not.toBeChecked()
    expect(boxes[2]).not.toBeChecked()
  })

  it('wraps the table in a horizontal scroll container', () => {
    render(<DataTable />)
    const table = screen.getByRole('table')
    expect(table.parentElement).toHaveClass('overflow-x-auto')
  })
})
