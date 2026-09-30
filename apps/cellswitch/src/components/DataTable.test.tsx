import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DataTable, tableRows } from './DataTable'

function bodyRows(): HTMLElement[] {
  return screen.getAllByRole('row').slice(1)
}

describe('DataTable', () => {
  it('renders seven header columns with the select-all control in the first cell', () => {
    render(<DataTable />)
    const headers = screen.getAllByRole('columnheader')
    expect(headers).toHaveLength(7)
    for (const col of ['Order', 'Name', 'Occupation', 'Contact', 'Education']) {
      expect(screen.getByRole('columnheader', { name: col })).toBeInTheDocument()
    }
    expect(
      within(headers[0] as HTMLElement).getByRole('checkbox', { name: 'Select all rows' }),
    ).toBeInTheDocument()
    // The seventh header cell (Details column) is EMPTY — no label.
    expect(headers[6]).toHaveTextContent('')
  })

  it('header labels render black and in normal case (no uppercase, no letter-spacing)', () => {
    render(<DataTable />)
    for (const col of ['Order', 'Name', 'Occupation', 'Contact', 'Education']) {
      const th = screen.getByRole('columnheader', { name: col })
      expect(th).toHaveClass('text-header')
      expect(th.className).not.toMatch(/uppercase|tracking-/)
    }
  })

  it('renders seven data rows with same-kind demo data', () => {
    render(<DataTable />)
    const rows = bodyRows()
    expect(rows).toHaveLength(tableRows.length)
    tableRows.forEach((row, index) => {
      const tr = rows[index] as HTMLElement
      expect(within(tr).getByText(row.order)).toBeInTheDocument()
      expect(within(tr).getByRole('link', { name: row.name })).toBeInTheDocument()
      expect(within(tr).getByText(row.contact)).toBeInTheDocument()
      expect(within(tr).getByText(row.education)).toBeInTheDocument()
      expect(within(tr).getByText(row.occupation)).toBeInTheDocument()
    })
  })

  it('demo data keeps the source shape (4-digit orders, +CC phones)', () => {
    for (const row of tableRows) {
      expect(row.order).toMatch(/^\d{4}$/)
      expect(row.contact).toMatch(/^\+\d+/)
    }
  })

  it('odd rows carry the subtle stripe tint and even rows do not', () => {
    render(<DataTable />)
    const rows = bodyRows()
    rows.forEach((tr, index) => {
      if (index % 2 === 0) {
        expect(tr).toHaveClass('bg-stripe')
      } else {
        expect(tr.className).not.toMatch(/bg-stripe/)
      }
    })
  })

  it('body cells are faint gray, light weight, and borderless', () => {
    render(<DataTable />)
    const firstRow = bodyRows()[0] as HTMLElement
    const cells = within(firstRow).getAllByRole('cell')
    expect(cells.length).toBe(7)
    for (const cell of cells) {
      expect(cell).toHaveClass('text-muted', 'font-light')
      expect(cell.className).not.toMatch(/border-/)
    }
  })

  it('occupation cells include the faint block-level sub-blurb', () => {
    render(<DataTable />)
    expect(screen.getAllByText('Far far away, behind the word mountains')).toHaveLength(
      tableRows.length,
    )
    const firstRow = bodyRows()[0] as HTMLElement
    const blurb = within(firstRow).getByText('Far far away, behind the word mountains')
    expect(blurb.tagName).toBe('SMALL')
    expect(blurb).toHaveClass('block', 'text-blurb', 'font-light')
  })

  it('name cells render the switch LEFT of a blue no-underline name link', () => {
    render(<DataTable />)
    const firstRow = bodyRows()[0] as HTMLElement
    const nameCell = within(firstRow).getAllByRole('cell')[2] as HTMLElement
    expect(nameCell).toHaveClass('pl-0')
    const children = Array.from((nameCell.firstElementChild as HTMLElement).children)
    expect(children[0]?.tagName).toBe('LABEL')
    const link = within(firstRow).getByRole('link', { name: 'James Yates' })
    expect(children[1]).toBe(link)
    expect(link).toHaveClass('text-accent', 'no-underline')
    expect(link.className).not.toMatch(/uppercase/)
  })

  it('Details links render plain blue with no underline or uppercase', () => {
    render(<DataTable />)
    const rows = bodyRows()
    rows.forEach((tr) => {
      const link = within(tr).getByRole('link', { name: 'Details' })
      expect(link).toHaveAttribute('href', '#')
      expect(link).toHaveClass('text-accent', 'no-underline')
      expect(link.className).not.toMatch(/uppercase|tracking-/)
    })
  })

  it('header select-all checks every row checkbox', async () => {
    const user = userEvent.setup()
    render(<DataTable />)
    await user.click(screen.getByRole('checkbox', { name: 'Select all rows' }))
    const rows = bodyRows()
    rows.forEach((tr) => {
      expect(within(tr).getByRole('checkbox', { name: /^Select row/ })).toBeChecked()
    })
  })

  it('header select-all unchecks every row checkbox on the second toggle', async () => {
    const user = userEvent.setup()
    render(<DataTable />)
    const header = screen.getByRole('checkbox', { name: 'Select all rows' })
    await user.click(header)
    await user.click(header)
    const rows = bodyRows()
    rows.forEach((tr) => {
      expect(within(tr).getByRole('checkbox', { name: /^Select row/ })).not.toBeChecked()
    })
  })

  it('select-all checks rows that were already individually checked', async () => {
    const user = userEvent.setup()
    render(<DataTable />)
    const firstRow = bodyRows()[0] as HTMLElement
    await user.click(within(firstRow).getByRole('checkbox', { name: /^Select row/ }))
    await user.click(screen.getByRole('checkbox', { name: 'Select all rows' }))
    const rows = bodyRows()
    rows.forEach((tr) => {
      expect(within(tr).getByRole('checkbox', { name: /^Select row/ })).toBeChecked()
    })
  })

  it('row checkboxes toggle independently', async () => {
    const user = userEvent.setup()
    render(<DataTable />)
    const [row1, row2] = bodyRows()
    const box1 = within(row1 as HTMLElement).getByRole('checkbox', { name: /^Select row/ })
    const box2 = within(row2 as HTMLElement).getByRole('checkbox', { name: /^Select row/ })
    await user.click(box1)
    expect(box1).toBeChecked()
    expect(box2).not.toBeChecked()
  })

  it('a row checkbox can be toggled off again', async () => {
    const user = userEvent.setup()
    render(<DataTable />)
    const firstRow = bodyRows()[0] as HTMLElement
    const box = within(firstRow).getByRole('checkbox', { name: /^Select row/ })
    await user.click(box)
    await user.click(box)
    expect(box).not.toBeChecked()
  })

  it('checking a row does NOT auto-check the header select-all (source behavior)', async () => {
    const user = userEvent.setup()
    render(<DataTable />)
    const firstRow = bodyRows()[0] as HTMLElement
    await user.click(within(firstRow).getByRole('checkbox', { name: /^Select row/ }))
    expect(screen.getByRole('checkbox', { name: 'Select all rows' })).not.toBeChecked()
  })

  it('switches start with the source mix: rows 1/2/5/6 ON, rows 3/4/7 OFF', () => {
    render(<DataTable />)
    const rows = bodyRows()
    const expected = [true, true, false, false, true, true, false]
    rows.forEach((tr, index) => {
      const toggle = within(tr).getByRole('checkbox', { name: /^Toggle/ })
      if (expected[index]) {
        expect(toggle).toBeChecked()
      } else {
        expect(toggle).not.toBeChecked()
      }
    })
  })

  it('toggling an ON switch turns only that row OFF', async () => {
    const user = userEvent.setup()
    render(<DataTable />)
    const [row1, row2] = bodyRows()
    const switch1 = within(row1 as HTMLElement).getByRole('checkbox', { name: /^Toggle/ })
    const switch2 = within(row2 as HTMLElement).getByRole('checkbox', { name: /^Toggle/ })
    await user.click(switch1)
    expect(switch1).not.toBeChecked()
    expect(switch2).toBeChecked()
  })

  it('toggling an OFF switch turns it ON', async () => {
    const user = userEvent.setup()
    render(<DataTable />)
    const thirdRow = bodyRows()[2] as HTMLElement
    const toggle = within(thirdRow).getByRole('checkbox', { name: /^Toggle/ })
    expect(toggle).not.toBeChecked()
    await user.click(toggle)
    expect(toggle).toBeChecked()
  })

  it('switch toggling does not affect checkboxes', async () => {
    const user = userEvent.setup()
    render(<DataTable />)
    const firstRow = bodyRows()[0] as HTMLElement
    await user.click(within(firstRow).getByRole('checkbox', { name: /^Toggle/ }))
    expect(within(firstRow).getByRole('checkbox', { name: /^Select row/ })).not.toBeChecked()
    expect(screen.getByRole('checkbox', { name: 'Select all rows' })).not.toBeChecked()
  })

  it('checkbox toggling does not affect switches', async () => {
    const user = userEvent.setup()
    render(<DataTable />)
    const firstRow = bodyRows()[0] as HTMLElement
    await user.click(within(firstRow).getByRole('checkbox', { name: /^Select row/ }))
    expect(within(firstRow).getByRole('checkbox', { name: /^Toggle/ })).toBeChecked()
  })

  it('wraps the table in a horizontal scroll container with a 900px min-width', () => {
    render(<DataTable />)
    const table = screen.getByRole('table')
    expect(table.parentElement).toHaveClass('overflow-x-auto')
    expect(table).toHaveClass('min-w-[900px]', 'border-collapse', 'w-full')
  })
})
