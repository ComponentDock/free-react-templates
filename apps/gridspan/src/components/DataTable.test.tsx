import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DataTable, tableRows } from './DataTable'

const sharedNote = 'Far away beyond the rolling hills, behind the old mill'

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
      expect(header).toHaveClass('font-bold', 'text-ink')
    }
  })

  it('renders four body rows, each with a row-header checkbox cell and five data cells', () => {
    render(<DataTable />)
    const bodyRows = screen.getAllByRole('row').slice(1)
    expect(bodyRows).toHaveLength(4)
    for (const row of bodyRows) {
      const th = row.querySelector('th')
      expect(th).toHaveAttribute('scope', 'row')
      expect(th).toHaveClass('border-t', 'border-line', 'px-3', 'py-5', 'font-light', 'text-muted')
      expect(row.querySelectorAll('td')).toHaveLength(5)
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
    for (const name of ['James Yarrow', 'Marta Ellison', 'Darius Cole', 'Ivan Petrov']) {
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

  it('rows carry group hover hooks for the row-wide highlight', () => {
    render(<DataTable />)
    const bodyRows = screen.getAllByRole('row').slice(1)
    for (const row of bodyRows) {
      expect(row).toHaveClass('group')
      for (const cell of Array.from(row.querySelectorAll('th, td'))) {
        expect(cell).toHaveClass(
          'group-hover:bg-tint',
          'group-hover:border-accent',
          'group-hover:border-b',
        )
      }
    }
  })

  it('starts with no row active (transparent cells, gray separators only)', () => {
    render(<DataTable />)
    const { th, tds } = rowCells(0)
    for (const cell of [th, ...tds]) {
      expect(cell).not.toHaveClass('bg-tint')
      expect(cell).not.toHaveClass('border-accent')
    }
    expect(screen.getByRole('checkbox', { name: 'Select all rows' })).not.toBeChecked()
  })

  it('checking a row checkbox activates that row (tint + accent hairlines)', async () => {
    const user = userEvent.setup()
    render(<DataTable />)
    await user.click(screen.getByRole('checkbox', { name: 'Select row James Yarrow' }))
    const first = rowCells(0)
    for (const cell of [first.th, ...first.tds]) {
      expect(cell).toHaveClass('bg-tint', 'border-accent', 'border-b')
    }
    const second = rowCells(1)
    for (const cell of [second.th, ...second.tds]) {
      expect(cell).not.toHaveClass('bg-tint')
    }
    expect(screen.getByRole('checkbox', { name: 'Select row James Yarrow' })).toBeChecked()
  })

  it('unchecking a row removes the highlight', async () => {
    const user = userEvent.setup()
    render(<DataTable />)
    const checkbox = screen.getByRole('checkbox', { name: 'Select row Marta Ellison' })
    await user.click(checkbox)
    await user.click(checkbox)
    const { th, tds } = rowCells(1)
    for (const cell of [th, ...tds]) {
      expect(cell).not.toHaveClass('bg-tint')
      expect(cell).not.toHaveClass('border-accent')
    }
    expect(checkbox).not.toBeChecked()
  })

  it('select-all checks every row and activates every row', async () => {
    const user = userEvent.setup()
    render(<DataTable />)
    await user.click(screen.getByRole('checkbox', { name: 'Select all rows' }))
    expect(screen.getByRole('checkbox', { name: 'Select all rows' })).toBeChecked()
    const bodyRows = screen.getAllByRole('row').slice(1)
    for (const row of bodyRows) {
      expect(row.querySelector('th input')).toBeChecked()
      for (const cell of Array.from(row.querySelectorAll('th, td'))) {
        expect(cell).toHaveClass('bg-tint')
      }
    }
  })

  it('select-all clears every row when all are checked', async () => {
    const user = userEvent.setup()
    render(<DataTable />)
    const selectAll = screen.getByRole('checkbox', { name: 'Select all rows' })
    await user.click(selectAll)
    await user.click(selectAll)
    expect(selectAll).not.toBeChecked()
    const bodyRows = screen.getAllByRole('row').slice(1)
    for (const row of bodyRows) {
      expect(row.querySelector('th input')).not.toBeChecked()
      for (const cell of Array.from(row.querySelectorAll('th, td'))) {
        expect(cell).not.toHaveClass('bg-tint')
      }
    }
  })

  it('select-all completes a partial selection, and rows stay independently toggleable', async () => {
    const user = userEvent.setup()
    render(<DataTable />)
    await user.click(screen.getByRole('checkbox', { name: 'Select row Darius Cole' }))
    const selectAll = screen.getByRole('checkbox', { name: 'Select all rows' })
    expect(selectAll).not.toBeChecked()
    await user.click(selectAll)
    expect(selectAll).toBeChecked()
    await user.click(screen.getByRole('checkbox', { name: 'Select row Ivan Petrov' }))
    expect(selectAll).not.toBeChecked()
    const last = rowCells(3)
    for (const cell of [last.th, ...last.tds]) {
      expect(cell).not.toHaveClass('bg-tint')
    }
    const third = rowCells(2)
    expect(third.th).toHaveClass('bg-tint')
  })
})
