import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DataTable, tableRows } from './DataTable'

const sharedNote = 'Somewhere beyond the rolling hills, behind the old mill'

function rowCells(rowIndex: number) {
  const rows = screen.getAllByRole('row').slice(1)
  const row = rows[rowIndex]
  if (!row) throw new Error(`row ${rowIndex} not found`)
  return { th: row.querySelector('th'), tds: Array.from(row.querySelectorAll('td')) }
}

describe('DataTable', () => {
  it('renders six header columns with scope="col"; the first holds the select-all checkbox', () => {
    render(<DataTable />)
    const headers = screen.getAllByRole('columnheader')
    expect(headers).toHaveLength(6)
    for (const header of headers) {
      expect(header).toHaveAttribute('scope', 'col')
    }
    expect(screen.getByRole('checkbox', { name: 'Select all rows' })).toBeInTheDocument()
    for (const col of ['Order', 'Name', 'Occupation', 'Contact', 'Education']) {
      const header = screen.getByRole('columnheader', { name: col })
      expect(header).toHaveClass('font-bold', 'text-ink', 'p-3', 'align-bottom')
    }
  })

  it('wraps the table for horizontal scroll below the 900px min-width', () => {
    const { container } = render(<DataTable />)
    const wrapper = container.firstElementChild
    expect(wrapper).toHaveClass('overflow-x-auto', 'w-full')
    const table = screen.getByRole('table')
    expect(table).toHaveClass('w-full', 'min-w-[900px]', 'border-separate', 'border-spacing-0')
  })

  it('renders four body rows, each with a row-header checkbox cell and five data cells', () => {
    render(<DataTable />)
    const bodyRows = screen.getAllByRole('row').slice(1)
    expect(bodyRows).toHaveLength(4)
    for (const row of bodyRows) {
      const th = row.querySelector('th')
      expect(th).toHaveAttribute('scope', 'row')
      expect(th).toHaveClass('bg-surface', 'px-3', 'py-5', 'font-light', 'text-muted')
      const tds = row.querySelectorAll('td')
      expect(tds).toHaveLength(5)
      for (const td of tds) {
        expect(td).toHaveClass(
          'bg-surface',
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
    render(<DataTable />)
    const bodyRows = screen.getAllByRole('row').slice(1)
    for (const row of bodyRows) {
      expect(row).toHaveClass(
        'rounded-[7px]',
        'transition-[box-shadow]',
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

  it('renders transparent spacer rows between the data rows (gray page shows through)', () => {
    render(<DataTable />)
    const spacers = document.querySelectorAll('tbody tr[aria-hidden="true"]')
    expect(spacers).toHaveLength(3)
    for (const spacer of spacers) {
      const td = spacer.querySelector('td')
      expect(td).toHaveAttribute('colspan', '6')
      expect(td).toHaveClass('h-[10px]', 'p-0')
    }
  })

  it('renders same-kind demo data (4-digit orders, +CC phones, design occupations)', () => {
    render(<DataTable />)
    for (const row of tableRows) {
      expect(screen.getByText(row.order)).toBeInTheDocument()
      expect(row.order).toMatch(/^\d{4}$/)
      expect(screen.getByText(row.contact)).toBeInTheDocument()
      expect(row.contact).toMatch(/^\+\d+/)
      expect(screen.getByText(row.occupation)).toBeInTheDocument()
      expect(screen.getByText(row.education)).toBeInTheDocument()
    }
    for (const name of ['Elena Marsh', 'Theo Brandt', 'Priya Nair', 'Marcus Webb']) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })

  it('renders the shared sub-blurb under every occupation', () => {
    render(<DataTable />)
    const smalls = document.querySelectorAll('tbody small')
    expect(smalls).toHaveLength(4)
    for (const small of smalls) {
      expect(small).toHaveClass('block', 'text-subtle', 'text-[0.8em]', 'font-light')
      expect(small).toHaveTextContent(sharedNote)
    }
  })

  it('renders name cells as blue links with a hover-darken transition and no underline', () => {
    render(<DataTable />)
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

  it('starts with every checkbox unchecked', () => {
    render(<DataTable />)
    expect(screen.getByRole('checkbox', { name: 'Select all rows' })).not.toBeChecked()
    for (const row of tableRows) {
      expect(screen.getByRole('checkbox', { name: `Select row ${row.name}` })).not.toBeChecked()
    }
  })

  it('checking a row checkbox does NOT restyle the row card (source has no checked-row rule)', async () => {
    const user = userEvent.setup()
    render(<DataTable />)
    const before = rowCells(0)
    const beforeClasses = [before.th, ...before.tds].map((cell) => cell?.className)
    await user.click(screen.getByRole('checkbox', { name: 'Select row Elena Marsh' }))
    expect(screen.getByRole('checkbox', { name: 'Select row Elena Marsh' })).toBeChecked()
    const after = rowCells(0)
    const afterClasses = [after.th, ...after.tds].map((cell) => cell?.className)
    expect(afterClasses).toEqual(beforeClasses)
    for (const cell of [after.th, ...after.tds]) {
      expect(cell).toHaveClass('bg-surface')
    }
  })

  it('unchecking a row checkbox returns the checkbox to its empty state', async () => {
    const user = userEvent.setup()
    render(<DataTable />)
    const checkbox = screen.getByRole('checkbox', { name: 'Select row Theo Brandt' })
    await user.click(checkbox)
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('select-all checks every row', async () => {
    const user = userEvent.setup()
    render(<DataTable />)
    await user.click(screen.getByRole('checkbox', { name: 'Select all rows' }))
    expect(screen.getByRole('checkbox', { name: 'Select all rows' })).toBeChecked()
    for (const row of tableRows) {
      expect(screen.getByRole('checkbox', { name: `Select row ${row.name}` })).toBeChecked()
    }
  })

  it('select-all clears every row when all are checked', async () => {
    const user = userEvent.setup()
    render(<DataTable />)
    const selectAll = screen.getByRole('checkbox', { name: 'Select all rows' })
    await user.click(selectAll)
    await user.click(selectAll)
    expect(selectAll).not.toBeChecked()
    for (const row of tableRows) {
      expect(screen.getByRole('checkbox', { name: `Select row ${row.name}` })).not.toBeChecked()
    }
  })

  it('select-all completes a partial selection, and rows stay independently toggleable', async () => {
    const user = userEvent.setup()
    render(<DataTable />)
    await user.click(screen.getByRole('checkbox', { name: 'Select row Priya Nair' }))
    const selectAll = screen.getByRole('checkbox', { name: 'Select all rows' })
    expect(selectAll).not.toBeChecked()
    await user.click(selectAll)
    expect(selectAll).toBeChecked()
    await user.click(screen.getByRole('checkbox', { name: 'Select row Marcus Webb' }))
    expect(selectAll).not.toBeChecked()
    expect(screen.getByRole('checkbox', { name: 'Select row Marcus Webb' })).not.toBeChecked()
    expect(screen.getByRole('checkbox', { name: 'Select row Priya Nair' })).toBeChecked()
  })
})
