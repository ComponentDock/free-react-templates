import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DataTable, tableRows } from './DataTable'

describe('DataTable', () => {
  it('renders the five header columns with scope="col"', () => {
    render(<DataTable />)
    for (const col of ['Order', 'Name', 'Occupation', 'Contact', 'Education']) {
      const header = screen.getByRole('columnheader', { name: col })
      expect(header).toHaveAttribute('scope', 'col')
    }
    expect(screen.getAllByRole('columnheader')).toHaveLength(5)
  })

  it('renders four body rows with five plain td cells each', () => {
    render(<DataTable />)
    const bodyRows = screen.getAllByRole('row').slice(1)
    expect(bodyRows).toHaveLength(4)
    for (const row of bodyRows) {
      expect(row.querySelectorAll('td')).toHaveLength(5)
      expect(row.querySelectorAll('th')).toHaveLength(0)
    }
  })

  it('renders the same-kind demo data (4-digit orders, +CC phones)', () => {
    render(<DataTable />)
    for (const row of tableRows) {
      expect(screen.getByText(row.order)).toBeInTheDocument()
      expect(screen.getByText(row.name)).toBeInTheDocument()
      expect(screen.getByText(row.occupation)).toBeInTheDocument()
      expect(screen.getByText(row.contact)).toBeInTheDocument()
      expect(screen.getByText(row.education)).toBeInTheDocument()
      expect(row.order).toMatch(/^\d{4}$/)
      expect(row.contact).toMatch(/^\+\d+/)
    }
  })

  it('renders a gray subtext line under every occupation', () => {
    render(<DataTable />)
    for (const row of tableRows) {
      const cell = screen.getByText(row.occupation).closest('td')
      expect(cell).not.toBeNull()
      const small = cell?.querySelector('small')
      expect(small).toBeInTheDocument()
      expect(small).toHaveClass('block', 'text-subtext', 'text-[0.8em]', 'font-light')
      expect(small).toHaveTextContent(row.occupationNote)
    }
  })

  it('wraps the table in a horizontal scroll container with min-width 900px', () => {
    render(<DataTable />)
    const table = screen.getByRole('table')
    expect(table.parentElement).toHaveClass('overflow-x-auto')
    expect(table).toHaveClass('w-full', 'min-w-[900px]', 'border-collapse', 'mb-4', 'text-left')
  })

  it('header row is borderless with bold ink labels', () => {
    render(<DataTable />)
    const headers = screen.getAllByRole('columnheader')
    for (const header of headers) {
      expect(header).toHaveClass('text-ink', 'font-bold', 'text-left', 'px-3', 'py-3')
      expect(header.className).not.toMatch(/border/)
    }
  })

  it('body cells are borderless, muted, light-weight with 20px vertical padding', () => {
    render(<DataTable />)
    const cells = document.querySelectorAll('tbody td')
    expect(cells).toHaveLength(20)
    for (const cell of cells) {
      expect(cell).toHaveClass('text-muted', 'font-light', 'px-3', 'py-5', 'align-top')
      expect(cell.className).not.toMatch(/border/)
    }
  })

  it('body rows are keyboard-focusable and carry the white-glow classes', async () => {
    const user = userEvent.setup()
    render(<DataTable />)
    const rows = screen.getAllByRole('row').slice(1)
    for (const row of rows) {
      expect(row).toHaveAttribute('tabindex', '0')
      expect(row).toHaveClass(
        'hover:bg-white',
        'focus:bg-white',
        'transition-colors',
        'duration-300',
      )
    }
    await user.tab()
    expect(rows[0]).toHaveFocus()
  })
})
