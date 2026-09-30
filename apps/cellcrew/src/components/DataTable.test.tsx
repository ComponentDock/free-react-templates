import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DataTable, tableRows } from './DataTable'

const blurb = 'Far far away, behind the word mountains'

function dataRows(container: HTMLElement): HTMLElement[] {
  return Array.from(container.querySelectorAll('tbody tr'))
}

describe('DataTable', () => {
  it('renders five header columns with the select-all control in the first cell', () => {
    render(<DataTable />)
    const headers = screen.getAllByRole('columnheader')
    expect(headers).toHaveLength(5)
    for (const col of ['Order', 'Sales', 'Description', 'Support']) {
      expect(screen.getByRole('columnheader', { name: col })).toBeInTheDocument()
    }
    expect(
      within(headers[0] as HTMLElement).getByRole('checkbox', { name: 'Select all rows' }),
    ).toBeInTheDocument()
  })

  it('header labels render dark ink in normal case, borderless', () => {
    render(<DataTable />)
    for (const col of ['Order', 'Sales', 'Description', 'Support']) {
      const th = screen.getByRole('columnheader', { name: col })
      expect(th).toHaveClass('text-header')
      expect(th.className).not.toMatch(/uppercase|tracking-/)
      expect(th.className).not.toMatch(/border-t|border-b/)
    }
  })

  it('renders six data rows with six cells each (headerless avatar column)', () => {
    const { container } = render(<DataTable />)
    const rows = dataRows(container)
    expect(rows).toHaveLength(tableRows.length)
    expect(screen.getAllByRole('rowheader')).toHaveLength(tableRows.length)
    // Five header labels vs six body cells — the source's unlabeled column.
    rows.forEach((tr) => {
      expect(within(tr).getAllByRole('cell')).toHaveLength(5)
      expect(within(tr).getAllByRole('rowheader')).toHaveLength(1)
    })
    expect(container.textContent).not.toMatch(/Details/)
  })

  it('demo data keeps the source shape (4-digit orders, +CC phones, pitch titles)', () => {
    const { container } = render(<DataTable />)
    const rows = dataRows(container)
    tableRows.forEach((row, index) => {
      const tr = rows[index] as HTMLElement
      expect(within(tr).getByText(row.order)).toBeInTheDocument()
      expect(within(tr).getByText(row.sales)).toBeInTheDocument()
      expect(within(tr).getByText(row.phone)).toBeInTheDocument()
      expect(row.order).toMatch(/^\d{4}$/)
      expect(row.phone).toMatch(/^\+\d+/)
    })
  })

  it('no spacer rows — rows are contiguous with 1px separators', () => {
    const { container } = render(<DataTable />)
    expect(container.querySelectorAll('tbody tr[aria-hidden]')).toHaveLength(0)
    const rows = dataRows(container)
    rows.forEach((tr) => {
      for (const cell of Array.from(tr.children) as HTMLElement[]) {
        expect(cell).toHaveClass('border-t', 'border-separator')
        expect(cell).toHaveClass('text-muted', 'font-light')
      }
    })
  })

  it('description cells include the faint block-level sub-blurb', () => {
    const { container } = render(<DataTable />)
    expect(screen.getAllByText(blurb, { selector: 'small' })).toHaveLength(tableRows.length)
    const firstRow = dataRows(container)[0] as HTMLElement
    const descCell = within(firstRow).getAllByRole('cell')[2] as HTMLElement
    expect(descCell.textContent).toContain(blurb)
    const small = within(descCell).getByText(blurb, { selector: 'small' })
    expect(small.tagName).toBe('SMALL')
    expect(small).toHaveClass('block', 'text-blurb', 'font-light')
  })

  it('avatar clusters render as overlapping circular picsum portraits (5/3/2)', () => {
    const { container } = render(<DataTable />)
    const rows = dataRows(container)
    const expected = [5, 3, 2, 5, 3, 2]
    rows.forEach((tr, index) => {
      const avatarCell = within(tr).getAllByRole('cell')[4] as HTMLElement
      const list = within(avatarCell).getByRole('list')
      expect(list).toHaveClass('list-none', 'p-0', 'm-0')
      const items = within(list).getAllByRole('listitem')
      expect(items).toHaveLength(expected[index] as number)
      for (const li of items) {
        expect(li).toHaveClass('-ml-[15px]', 'inline-block', 'list-none')
        const img = li.querySelector('img') as HTMLImageElement
        expect(img.getAttribute('src')).toMatch(
          /^https:\/\/picsum\.photos\/seed\/cellcrew-\d+\/72\/72$/,
        )
        expect(img).toHaveClass('w-9', 'rounded-full')
        expect(img).toHaveAttribute('alt', '')
      }
      const link = within(items[0] as HTMLElement).getByRole('link')
      expect(link).toHaveAttribute('href', '#')
      expect(link).toHaveClass('no-underline', 'w-9')
    })
  })

  it('rows carry hover classes giving the active treatment on hover', () => {
    const { container } = render(<DataTable />)
    const rows = dataRows(container)
    for (const tr of rows) {
      expect(tr).toHaveClass('group')
      for (const cell of Array.from(tr.children) as HTMLElement[]) {
        expect(cell).toHaveClass(
          'group-hover:bg-row-active',
          'group-hover:border-hairline',
          'group-hover:border-b',
        )
      }
    }
  })

  it('checkboxes start unchecked with the light #ccc indicator border', () => {
    const { container } = render(<DataTable />)
    const rows = dataRows(container)
    rows.forEach((tr) => {
      expect(within(tr).getByRole('checkbox', { name: /^Select row/ })).not.toBeChecked()
    })
    expect(container.querySelectorAll('span.border-checkbox-border').length).toBe(
      tableRows.length + 1,
    )
  })

  it('initial load has NO active highlight on any row', () => {
    const { container } = render(<DataTable />)
    const rows = dataRows(container)
    rows.forEach((tr) => {
      for (const cell of Array.from(tr.children) as HTMLElement[]) {
        expect(cell.className).not.toMatch(/(^|\s)bg-row-active(\s|$)/)
        expect(cell.className).not.toMatch(/(^|\s)border-hairline(\s|$)/)
      }
    })
  })

  it('header select-all checks every row checkbox AND tints every row', async () => {
    const user = userEvent.setup()
    const { container } = render(<DataTable />)
    await user.click(screen.getByRole('checkbox', { name: 'Select all rows' }))
    const rows = dataRows(container)
    rows.forEach((tr) => {
      expect(within(tr).getByRole('checkbox', { name: /^Select row/ })).toBeChecked()
      for (const cell of Array.from(tr.children) as HTMLElement[]) {
        expect(cell).toHaveClass('bg-row-active', 'border-hairline', 'border-b')
      }
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
        expect(cell).toHaveClass('border-separator')
        expect(cell.className).not.toMatch(/(^|\s)bg-row-active(\s|$)/)
      }
    })
  })

  it('checking a row tints ONLY that row and does not auto-check the header', async () => {
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
      expect(cell).toHaveClass('border-separator')
      expect(cell.className).not.toMatch(/(^|\s)bg-row-active(\s|$)/)
    }
  })

  it('wraps the table in a horizontal scroll container with a 900px min-width', () => {
    render(<DataTable />)
    const table = screen.getByRole('table')
    expect(table.parentElement).toHaveClass('overflow-x-auto')
    expect(table).toHaveClass('min-w-[900px]', 'border-collapse', 'w-full')
  })
})
