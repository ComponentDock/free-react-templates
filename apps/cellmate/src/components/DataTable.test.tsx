import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DataTable, tableRows } from './DataTable'

function bodyRows(): HTMLElement[] {
  return screen.getAllByRole('row').slice(1)
}

/** Initial strike-out arrangement from the live source DOM: rows 1/2/5/6 struck. */
const struckPattern = [true, true, false, false, true, true, false]

describe('DataTable', () => {
  it('renders seven header cells: checkbox, five labels, and the select-all switch', () => {
    render(<DataTable />)
    const headers = screen.getAllByRole('columnheader')
    expect(headers).toHaveLength(7)
    for (const col of ['Order', 'Name', 'Occupation', 'Contact', 'Education']) {
      expect(screen.getByRole('columnheader', { name: col })).toBeInTheDocument()
    }
    expect(
      within(headers[0] as HTMLElement).getByRole('checkbox', { name: 'Select all rows' }),
    ).toBeInTheDocument()
    // The seventh header cell holds the SELECT-ALL strike switch (no Details column).
    expect(
      within(headers[6] as HTMLElement).getByRole('checkbox', { name: 'Strike all rows' }),
    ).toBeInTheDocument()
  })

  it('every header cell carries scope="col"', () => {
    render(<DataTable />)
    screen.getAllByRole('columnheader').forEach((th) => {
      expect(th).toHaveAttribute('scope', 'col')
    })
  })

  it('header labels render black and in normal case (no uppercase, no letter-spacing)', () => {
    render(<DataTable />)
    for (const col of ['Order', 'Name', 'Occupation', 'Contact', 'Education']) {
      const th = screen.getByRole('columnheader', { name: col })
      expect(th).toHaveClass('text-header')
      expect(th.className).not.toMatch(/uppercase|tracking-/)
    }
  })

  it('header cells render borderless (no border utilities)', () => {
    render(<DataTable />)
    screen.getAllByRole('columnheader').forEach((th) => {
      expect(th.className).not.toMatch(/border-/)
    })
  })

  it('the header switch is nudged down in its cell (source offset quirk)', () => {
    render(<DataTable />)
    const headers = screen.getAllByRole('columnheader')
    const offset = (headers[6] as HTMLElement).querySelector('span')
    expect(offset).toHaveClass('relative', 'top-2.5')
  })

  it('renders seven data rows with seven cells each and same-kind demo data', () => {
    render(<DataTable />)
    const rows = bodyRows()
    expect(rows).toHaveLength(tableRows.length)
    tableRows.forEach((row, index) => {
      const tr = rows[index] as HTMLElement
      const cells = within(tr).getAllByRole('cell')
      expect(cells).toHaveLength(7)
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

  it('odd rows carry the subtle zebra tint and even rows do not', () => {
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

  it('rows 1/2/5/6 start struck (dimmed) and the rest start normal', () => {
    render(<DataTable />)
    const rows = bodyRows()
    rows.forEach((tr, index) => {
      if (struckPattern[index]) {
        expect(tr).toHaveClass('opacity-40')
      } else {
        expect(tr.className).not.toMatch(/opacity-40/)
      }
    })
  })

  it('struck rows show the red strike bar on the name link; normal rows do not', () => {
    render(<DataTable />)
    const rows = bodyRows()
    rows.forEach((tr, index) => {
      const link = within(tr).getByRole('link')
      if (struckPattern[index]) {
        expect(link).toHaveClass(
          'before:bg-strike',
          'before:opacity-100',
          "before:content-['']",
          'before:h-0.5',
        )
      } else {
        expect(link.className).not.toMatch(/before:bg-strike/)
      }
    })
  })

  it('body cells are faint gray, light weight, and borderless', () => {
    render(<DataTable />)
    const firstRow = bodyRows()[0] as HTMLElement
    const cells = within(firstRow).getAllByRole('cell')
    expect(cells).toHaveLength(7)
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

  it('name cells render a blue no-underline link in a flex wrapper with padding-left removed', () => {
    render(<DataTable />)
    const firstRow = bodyRows()[0] as HTMLElement
    const nameCell = within(firstRow).getAllByRole('cell')[2] as HTMLElement
    expect(nameCell).toHaveClass('pl-0')
    const wrapper = nameCell.firstElementChild as HTMLElement
    expect(wrapper).toHaveClass('flex', 'items-center')
    const link = within(firstRow).getByRole('link', { name: 'James Yates' })
    expect(wrapper.contains(link)).toBe(true)
    expect(link).toHaveClass('text-accent', 'no-underline')
    expect(link.className).not.toMatch(/uppercase/)
    // This variant keeps switches OUT of the name column (dedicated 7th column).
    expect(nameCell.querySelector('input')).toBeNull()
  })

  it('no Details links render anywhere (this variant has no Details column)', () => {
    render(<DataTable />)
    expect(screen.queryByRole('link', { name: 'Details' })).toBeNull()
  })

  it('switches start with the source mix: rows 1/2/5/6 ON, rows 3/4/7 OFF', () => {
    render(<DataTable />)
    const rows = bodyRows()
    rows.forEach((tr, index) => {
      const toggle = within(tr).getByRole('checkbox', { name: /^Toggle/ })
      if (struckPattern[index]) {
        expect(toggle).toBeChecked()
      } else {
        expect(toggle).not.toBeChecked()
      }
    })
  })

  it('header controls start unchecked and all row checkboxes start unchecked', () => {
    render(<DataTable />)
    expect(screen.getByRole('checkbox', { name: 'Select all rows' })).not.toBeChecked()
    expect(screen.getByRole('checkbox', { name: 'Strike all rows' })).not.toBeChecked()
    bodyRows().forEach((tr) => {
      expect(within(tr).getByRole('checkbox', { name: /^Select row/ })).not.toBeChecked()
    })
  })

  it('header checkbox select-all checks every row checkbox without touching switches or strike state', async () => {
    const user = userEvent.setup()
    render(<DataTable />)
    await user.click(screen.getByRole('checkbox', { name: 'Select all rows' }))
    const rows = bodyRows()
    rows.forEach((tr, index) => {
      expect(within(tr).getByRole('checkbox', { name: /^Select row/ })).toBeChecked()
      // Switches and row treatment are INDEPENDENT of the checkbox system.
      const toggle = within(tr).getByRole('checkbox', { name: /^Toggle/ })
      if (struckPattern[index]) {
        expect(toggle).toBeChecked()
      } else {
        expect(toggle).not.toBeChecked()
        expect(tr.className).not.toMatch(/opacity-40/)
      }
    })
  })

  it('header select-all unchecks every row checkbox on the second toggle', async () => {
    const user = userEvent.setup()
    render(<DataTable />)
    const header = screen.getByRole('checkbox', { name: 'Select all rows' })
    await user.click(header)
    await user.click(header)
    bodyRows().forEach((tr) => {
      expect(within(tr).getByRole('checkbox', { name: /^Select row/ })).not.toBeChecked()
    })
  })

  it('a row checkbox toggles only its own box — no strike, no switch, no header sync', async () => {
    const user = userEvent.setup()
    render(<DataTable />)
    const thirdRow = bodyRows()[2] as HTMLElement
    const box = within(thirdRow).getByRole('checkbox', { name: /^Select row/ })
    await user.click(box)
    expect(box).toBeChecked()
    expect(within(thirdRow).getByRole('checkbox', { name: /^Toggle/ })).not.toBeChecked()
    expect(thirdRow.className).not.toMatch(/opacity-40/)
    expect(screen.getByRole('checkbox', { name: 'Select all rows' })).not.toBeChecked()
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

  it('toggling an OFF row switch ON strikes only that row', async () => {
    const user = userEvent.setup()
    render(<DataTable />)
    const thirdRow = bodyRows()[2] as HTMLElement
    const toggle = within(thirdRow).getByRole('checkbox', { name: /^Toggle/ })
    await user.click(toggle)
    expect(toggle).toBeChecked()
    expect(thirdRow).toHaveClass('opacity-40')
    const link = within(thirdRow).getByRole('link')
    expect(link).toHaveClass('before:bg-strike')
    // Other rows unchanged; the header switch stays independent (source behavior).
    expect(bodyRows()[0]).toHaveClass('opacity-40')
    expect(bodyRows()[1]).toHaveClass('opacity-40')
    expect(bodyRows()[3]?.className).not.toMatch(/opacity-40/)
    expect(screen.getByRole('checkbox', { name: 'Strike all rows' })).not.toBeChecked()
  })

  it('toggling a struck row switch OFF restores the row to full opacity', async () => {
    const user = userEvent.setup()
    render(<DataTable />)
    const firstRow = bodyRows()[0] as HTMLElement
    const toggle = within(firstRow).getByRole('checkbox', { name: /^Toggle/ })
    await user.click(toggle)
    expect(toggle).not.toBeChecked()
    expect(firstRow.className).not.toMatch(/opacity-40/)
    expect(within(firstRow).getByRole('link').className).not.toMatch(/before:bg-strike/)
    // The neighbor row keeps its struck state.
    expect(bodyRows()[1]).toHaveClass('opacity-40')
  })

  it('switch toggling does not affect checkboxes', async () => {
    const user = userEvent.setup()
    render(<DataTable />)
    const firstRow = bodyRows()[0] as HTMLElement
    await user.click(within(firstRow).getByRole('checkbox', { name: /^Toggle/ }))
    expect(within(firstRow).getByRole('checkbox', { name: /^Select row/ })).not.toBeChecked()
    expect(screen.getByRole('checkbox', { name: 'Select all rows' })).not.toBeChecked()
  })

  it('checkbox toggling does not affect switches or strike state', async () => {
    const user = userEvent.setup()
    render(<DataTable />)
    const thirdRow = bodyRows()[2] as HTMLElement
    await user.click(within(thirdRow).getByRole('checkbox', { name: /^Select row/ }))
    expect(within(thirdRow).getByRole('checkbox', { name: /^Toggle/ })).not.toBeChecked()
    expect(thirdRow.className).not.toMatch(/opacity-40/)
  })

  it('header strike switch select-all strikes every row', async () => {
    const user = userEvent.setup()
    render(<DataTable />)
    await user.click(screen.getByRole('checkbox', { name: 'Strike all rows' }))
    expect(screen.getByRole('checkbox', { name: 'Strike all rows' })).toBeChecked()
    bodyRows().forEach((tr) => {
      expect(within(tr).getByRole('checkbox', { name: /^Toggle/ })).toBeChecked()
      expect(tr).toHaveClass('opacity-40')
      expect(within(tr).getByRole('link')).toHaveClass('before:bg-strike')
    })
  })

  it('header strike switch off restores every row (source behavior)', async () => {
    const user = userEvent.setup()
    render(<DataTable />)
    const header = screen.getByRole('checkbox', { name: 'Strike all rows' })
    await user.click(header)
    await user.click(header)
    expect(header).not.toBeChecked()
    bodyRows().forEach((tr) => {
      expect(within(tr).getByRole('checkbox', { name: /^Toggle/ })).not.toBeChecked()
      expect(tr.className).not.toMatch(/opacity-40/)
      expect(within(tr).getByRole('link').className).not.toMatch(/before:bg-strike/)
    })
  })

  it('switch toggling leaves the header strike switch alone (independent header state)', async () => {
    const user = userEvent.setup()
    render(<DataTable />)
    const thirdRow = bodyRows()[2] as HTMLElement
    await user.click(within(thirdRow).getByRole('checkbox', { name: /^Toggle/ }))
    expect(screen.getByRole('checkbox', { name: 'Strike all rows' })).not.toBeChecked()
  })

  it('wraps the table in a horizontal scroll container with a 900px min-width', () => {
    render(<DataTable />)
    const table = screen.getByRole('table')
    expect(table.parentElement).toHaveClass('overflow-x-auto')
    expect(table).toHaveClass('min-w-[900px]', 'border-collapse', 'w-full')
  })
})
