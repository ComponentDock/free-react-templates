import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DataTable, tableRows } from './DataTable'

function dataRows(container: HTMLElement): HTMLElement[] {
  // Spacer rows are aria-hidden (decorative) and stay out of the a11y tree.
  return Array.from(container.querySelectorAll('tbody tr:not([aria-hidden])'))
}

function spacers(container: HTMLElement): HTMLElement[] {
  return Array.from(container.querySelectorAll('tbody tr[aria-hidden="true"]'))
}

describe('DataTable', () => {
  it('renders six header columns with the select-all control in the first cell', () => {
    const { container } = render(<DataTable />)
    const headers = screen.getAllByRole('columnheader')
    expect(headers).toHaveLength(6)
    for (const col of ['Order', 'Name', 'Occupation', 'Contact', 'Education']) {
      expect(screen.getByRole('columnheader', { name: col })).toBeInTheDocument()
    }
    expect(
      within(headers[0] as HTMLElement).getByRole('checkbox', { name: 'Select all rows' }),
    ).toBeInTheDocument()
    expect(container.textContent).not.toMatch(/Details/)
  })

  it('header labels render WHITE and in normal case (no uppercase, no letter-spacing)', () => {
    render(<DataTable />)
    for (const col of ['Order', 'Name', 'Occupation', 'Contact', 'Education']) {
      const th = screen.getByRole('columnheader', { name: col })
      expect(th).toHaveClass('text-header')
      expect(th.className).not.toMatch(/uppercase|tracking-/)
    }
  })

  it('renders seven data rows with same-kind demo data', () => {
    const { container } = render(<DataTable />)
    const rows = dataRows(container)
    expect(rows).toHaveLength(tableRows.length)
    expect(screen.getAllByRole('rowheader')).toHaveLength(tableRows.length)
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

  it('separates every data row with a 3px transparent spacer gap (6 spacers)', () => {
    const { container } = render(<DataTable />)
    const gaps = spacers(container)
    expect(gaps).toHaveLength(tableRows.length - 1)
    for (const gap of gaps) {
      const cell = gap.firstElementChild as HTMLElement
      expect(cell).toHaveClass('h-[3px]', 'bg-transparent', 'p-0')
      expect(cell).toHaveAttribute('colspan', '6')
    }
  })

  it('normal rows are dark cards with faint gray borderless cells (no striping)', () => {
    const { container } = render(<DataTable />)
    const rows = dataRows(container)
    rows.forEach((tr) => {
      expect(tr.className).not.toMatch(/stripe/)
      for (const cell of Array.from(tr.children) as HTMLElement[]) {
        expect(cell).toHaveClass('bg-row', 'text-muted')
        expect(cell.className).not.toMatch(/border-|stripe/)
      }
    })
  })

  it('name links render gray (NOT blue) with no underline', () => {
    const { container } = render(<DataTable />)
    const rows = dataRows(container)
    rows.forEach((tr) => {
      const link = within(tr).getByRole('link', { name: /Yates|Wasil|Murphy|Semenov/ })
      expect(link).toHaveAttribute('href', '#')
      expect(link).toHaveClass('text-link', 'no-underline')
      expect(link.className).not.toMatch(/text-accent|uppercase/)
    })
  })

  it('occupation cells include the faint block-level sub-blurb', () => {
    const { container } = render(<DataTable />)
    expect(screen.getAllByText('Far far away, behind the word mountains')).toHaveLength(
      tableRows.length,
    )
    const firstRow = dataRows(container)[0] as HTMLElement
    const blurb = within(firstRow).getByText('Far far away, behind the word mountains')
    expect(blurb.tagName).toBe('SMALL')
    expect(blurb).toHaveClass('block', 'text-blurb', 'font-light', 'group-hover:text-blurb')
  })

  it('rows carry hover classes giving the active treatment on hover', () => {
    const { container } = render(<DataTable />)
    const rows = dataRows(container)
    for (const tr of rows) {
      expect(tr).toHaveClass('group', 'group-hover:shadow-[0_2px_10px_-5px_rgba(0,0,0,0.1)]')
      for (const cell of Array.from(tr.children) as HTMLElement[]) {
        expect(cell).toHaveClass('group-hover:bg-row-active', 'group-hover:text-white')
      }
    }
  })

  it('checkboxes start unchecked with the dark #3f3f47 indicator border', () => {
    const { container } = render(<DataTable />)
    const rows = dataRows(container)
    rows.forEach((tr) => {
      const box = within(tr).getByRole('checkbox', { name: /^Select row/ })
      expect(box).not.toBeChecked()
    })
    // Unchecked indicator uses the dark checkbox-border token (not #ccc).
    expect(container.querySelectorAll('span.border-checkbox-border').length).toBe(
      tableRows.length + 1,
    )
  })

  it('initial load has NO active highlight on any row', () => {
    const { container } = render(<DataTable />)
    const rows = dataRows(container)
    rows.forEach((tr) => {
      expect(tr.textContent).toBeTruthy()
      for (const cell of Array.from(tr.children) as HTMLElement[]) {
        expect(cell.className).not.toMatch(/(^|\s)(bg-row-active|text-white)(\s|$)/)
      }
    })
  })

  it('header select-all checks every row checkbox AND highlights every row', async () => {
    const user = userEvent.setup()
    const { container } = render(<DataTable />)
    await user.click(screen.getByRole('checkbox', { name: 'Select all rows' }))
    const rows = dataRows(container)
    rows.forEach((tr) => {
      expect(within(tr).getByRole('checkbox', { name: /^Select row/ })).toBeChecked()
      for (const cell of Array.from(tr.children) as HTMLElement[]) {
        expect(cell).toHaveClass('bg-row-active', 'text-white')
      }
      const link = within(tr).getByRole('link', { name: /Yates|Wasil|Murphy|Semenov/ })
      expect(link).toHaveClass('text-link-active')
    })
  })

  it('header select-all restores every row on the second toggle', async () => {
    const user = userEvent.setup()
    const { container } = render(<DataTable />)
    const header = screen.getByRole('checkbox', { name: 'Select all rows' })
    await user.click(header)
    await user.click(header)
    const rows = dataRows(container)
    rows.forEach((tr) => {
      expect(within(tr).getByRole('checkbox', { name: /^Select row/ })).not.toBeChecked()
      for (const cell of Array.from(tr.children) as HTMLElement[]) {
        expect(cell).toHaveClass('bg-row', 'text-muted')
        expect(cell.className).not.toMatch(/(^|\s)bg-row-active(\s|$)/)
      }
    })
  })

  it('checking a row highlights ONLY that row and does not auto-check the header', async () => {
    const user = userEvent.setup()
    const { container } = render(<DataTable />)
    const [row1, row2] = dataRows(container)
    await user.click(within(row1 as HTMLElement).getByRole('checkbox', { name: /^Select row/ }))
    expect(within(row1 as HTMLElement).getByRole('checkbox', { name: /^Select row/ })).toBeChecked()
    for (const cell of Array.from((row1 as HTMLElement).children) as HTMLElement[]) {
      expect(cell).toHaveClass('bg-row-active')
    }
    expect(
      within(row2 as HTMLElement).getByRole('checkbox', { name: /^Select row/ }),
    ).not.toBeChecked()
    for (const cell of Array.from((row2 as HTMLElement).children) as HTMLElement[]) {
      expect(cell).toHaveClass('bg-row')
      expect(cell.className).not.toMatch(/(^|\s)bg-row-active(\s|$)/)
    }
    expect(screen.getByRole('checkbox', { name: 'Select all rows' })).not.toBeChecked()
  })

  it('unchecking a row returns it to the normal look', async () => {
    const user = userEvent.setup()
    const { container } = render(<DataTable />)
    const firstRow = dataRows(container)[0] as HTMLElement
    const box = within(firstRow).getByRole('checkbox', { name: /^Select row/ })
    await user.click(box)
    await user.click(box)
    expect(box).not.toBeChecked()
    for (const cell of Array.from(firstRow.children) as HTMLElement[]) {
      expect(cell).toHaveClass('bg-row', 'text-muted')
    }
  })

  it('wraps the table in a horizontal scroll container with a 900px min-width', () => {
    render(<DataTable />)
    const table = screen.getByRole('table')
    expect(table.parentElement).toHaveClass('overflow-x-auto')
    expect(table).toHaveClass('min-w-[900px]', 'border-collapse', 'w-full')
  })
})
