import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PaneledTable, tableRows } from './PaneledTable'

const sharedNote = 'Far far away, behind the word mountains'

function bodyRows() {
  return screen.getAllByRole('row').slice(1)
}

describe('PaneledTable', () => {
  it('wraps the table in the gray rounded panel that doubles as the scroll wrapper', () => {
    const { container } = render(<PaneledTable />)
    const panel = container.firstElementChild
    expect(panel).toHaveClass('w-full', 'overflow-x-auto', 'rounded-[4px]', 'bg-panel', 'p-5')
    const table = screen.getByRole('table')
    expect(table).toHaveClass('w-full', 'min-w-[900px]', 'border-separate', 'border-spacing-0')
  })

  it('renders six header columns with scope="col"; the first holds the select-all checkbox', () => {
    render(<PaneledTable />)
    const headers = screen.getAllByRole('columnheader')
    expect(headers).toHaveLength(6)
    for (const header of headers) {
      expect(header).toHaveAttribute('scope', 'col')
    }
    expect(screen.getByRole('checkbox', { name: 'Select all rows' })).toBeInTheDocument()
    for (const col of ['Order', 'Name', 'Occupation', 'Contact', 'Education']) {
      const header = screen.getByRole('columnheader', { name: col })
      expect(header).toHaveClass(
        'p-3',
        'align-bottom',
        'text-xs',
        'font-bold',
        'uppercase',
        'tracking-[0.1rem]',
        'text-ink',
      )
    }
  })

  it('renders four body rows, each with a row-header checkbox cell and five data cells', () => {
    render(<PaneledTable />)
    const rows = bodyRows()
    expect(rows).toHaveLength(4)
    for (const row of rows) {
      const th = row.querySelector('th')
      expect(th).toHaveAttribute('scope', 'row')
      expect(th).toHaveClass(
        'bg-surface',
        'border-none',
        'px-3',
        'py-5',
        'align-top',
        'font-light',
        'text-muted',
      )
      const tds = row.querySelectorAll('td')
      expect(tds).toHaveLength(5)
      for (const td of tds) {
        expect(td).toHaveClass(
          'bg-surface',
          'border-none',
          'px-3',
          'py-5',
          'align-top',
          'font-light',
          'text-muted',
        )
      }
    }
  })

  it('renders each data row as a rounded card with hover shadow-lift classes', () => {
    render(<PaneledTable />)
    for (const row of bodyRows()) {
      expect(row).toHaveClass(
        'rounded-[7px]',
        'transition-all',
        'duration-300',
        'ease',
        'hover:shadow-[0_2px_10px_-5px_rgba(0,0,0,0.1)]',
      )
      const first = row.querySelector('th')
      const last = row.querySelector('td:last-child')
      expect(first).toHaveClass('first:rounded-l-[7px]')
      expect(last).toHaveClass('last:rounded-r-[7px]')
    }
  })

  it('renders transparent spacer rows between the data rows (gray panel shows through)', () => {
    render(<PaneledTable />)
    const spacers = document.querySelectorAll('tbody tr[aria-hidden="true"]')
    expect(spacers).toHaveLength(3)
    for (const spacer of spacers) {
      const td = spacer.querySelector('td')
      expect(td).toHaveAttribute('colspan', '6')
      expect(td).toHaveClass('h-[10px]', 'p-0')
    }
  })

  it('renders same-kind demo data (4-digit orders, +CC phones, design occupations)', () => {
    render(<PaneledTable />)
    for (const row of tableRows) {
      expect(screen.getByText(row.order)).toBeInTheDocument()
      expect(row.order).toMatch(/^\d{4}$/)
      expect(screen.getByText(row.contact)).toBeInTheDocument()
      expect(row.contact).toMatch(/^\+\d+/)
      expect(screen.getByText(row.occupation)).toBeInTheDocument()
      expect(screen.getByText(row.education)).toBeInTheDocument()
    }
    for (const name of ['James Yates', 'Matthew Wasil', 'Sampson Murphy', 'Gaspar Semenov']) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })

  it('renders the shared sub-blurb under every occupation', () => {
    render(<PaneledTable />)
    const smalls = document.querySelectorAll('tbody small')
    expect(smalls).toHaveLength(4)
    for (const small of smalls) {
      expect(small).toHaveClass('block', 'text-subtle', 'text-[0.8em]', 'font-light')
      expect(small).toHaveTextContent(sharedNote)
    }
  })

  it('renders name cells as blue links with a hover-darken transition and no underline', () => {
    render(<PaneledTable />)
    const links = document.querySelectorAll('tbody a')
    expect(links).toHaveLength(4)
    for (const link of links) {
      expect(link).toHaveAttribute('href', '#')
      expect(link).toHaveClass(
        'text-accent',
        'no-underline',
        'transition-colors',
        'duration-300',
        'ease',
        'hover:text-accent-dark',
      )
    }
  })

  it('ships row 2 (Matthew Wasil) checked + dimmed; others unchecked at full opacity', () => {
    render(<PaneledTable />)
    bodyRows().forEach((row, index) => {
      if (index === 1) {
        expect(row).toHaveClass('opacity-40')
        expect(screen.getByRole('checkbox', { name: 'Select row Matthew Wasil' })).toBeChecked()
      } else {
        expect(row).not.toHaveClass('opacity-40')
        const name = tableRows[index]?.name
        expect(name).toBeDefined()
        expect(screen.getByRole('checkbox', { name: `Select row ${name}` })).not.toBeChecked()
      }
    })
    // select-all reflects the partial initial state (not all rows checked)
    expect(screen.getByRole('checkbox', { name: 'Select all rows' })).not.toBeChecked()
  })

  it('checking a row dims it to 40% opacity; unchecking restores full opacity', async () => {
    const user = userEvent.setup()
    render(<PaneledTable />)
    const checkbox = screen.getByRole('checkbox', { name: 'Select row James Yates' })
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
    const afterCheck = bodyRows()
    expect(afterCheck[0]).toHaveClass('opacity-40')
    expect(afterCheck[1]).toHaveClass('opacity-40') // the initial row stays dimmed
    expect(afterCheck[2]).not.toHaveClass('opacity-40')
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
    const afterUncheck = bodyRows()
    expect(afterUncheck[0]).not.toHaveClass('opacity-40')
    expect(afterUncheck[1]).toHaveClass('opacity-40')
  })

  it('select-all checks and dims every row; toggling it off clears all', async () => {
    const user = userEvent.setup()
    render(<PaneledTable />)
    const selectAll = screen.getByRole('checkbox', { name: 'Select all rows' })
    await user.click(selectAll)
    expect(selectAll).toBeChecked()
    for (const row of tableRows) {
      expect(screen.getByRole('checkbox', { name: `Select row ${row.name}` })).toBeChecked()
    }
    for (const row of bodyRows()) {
      expect(row).toHaveClass('opacity-40')
    }
    await user.click(selectAll)
    expect(selectAll).not.toBeChecked()
    for (const row of tableRows) {
      expect(screen.getByRole('checkbox', { name: `Select row ${row.name}` })).not.toBeChecked()
    }
    for (const row of bodyRows()) {
      expect(row).not.toHaveClass('opacity-40')
    }
  })

  it('select-all completes a partial selection; rows stay independently toggleable', async () => {
    const user = userEvent.setup()
    render(<PaneledTable />)
    await user.click(screen.getByRole('checkbox', { name: 'Select row James Yates' }))
    const selectAll = screen.getByRole('checkbox', { name: 'Select all rows' })
    expect(selectAll).not.toBeChecked()
    await user.click(selectAll)
    expect(selectAll).toBeChecked()
    await user.click(screen.getByRole('checkbox', { name: 'Select row Sampson Murphy' }))
    expect(selectAll).not.toBeChecked()
    expect(screen.getByRole('checkbox', { name: 'Select row Sampson Murphy' })).not.toBeChecked()
    expect(screen.getByRole('checkbox', { name: 'Select row James Yates' })).toBeChecked()
    expect(screen.getByRole('checkbox', { name: 'Select row Matthew Wasil' })).toBeChecked()
    const rows = bodyRows()
    expect(rows[2]).not.toHaveClass('opacity-40')
    expect(rows[0]).toHaveClass('opacity-40')
    expect(rows[1]).toHaveClass('opacity-40')
  })
})
