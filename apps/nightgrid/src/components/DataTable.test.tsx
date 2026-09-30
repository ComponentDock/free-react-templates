import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DataTable, tableRows } from './DataTable'

describe('DataTable', () => {
  it('renders five labeled header columns plus an empty sixth Details cell', () => {
    render(<DataTable />)
    for (const col of ['Order', 'Name', 'Occupation', 'Contact', 'Education']) {
      const header = screen.getByRole('columnheader', { name: col })
      expect(header).toHaveAttribute('scope', 'col')
    }
    const headers = screen.getAllByRole('columnheader')
    expect(headers).toHaveLength(6)
    expect(headers[5]).toHaveAttribute('scope', 'col')
    expect(headers[5]).toHaveTextContent('')
  })

  it('renders seven body rows with six plain td cells each', () => {
    render(<DataTable />)
    const bodyRows = screen.getAllByRole('row').slice(1)
    expect(bodyRows).toHaveLength(7)
    for (const row of bodyRows) {
      expect(row.querySelectorAll('td')).toHaveLength(6)
      expect(row.querySelectorAll('th')).toHaveLength(0)
    }
  })

  it('keeps the source rhythm of 4 unique records duplicated into 7 rows', () => {
    expect(tableRows).toHaveLength(7)
    expect(tableRows.slice(4)).toEqual(tableRows.slice(1, 4))
  })

  it('renders the same-kind demo data in every row (4-digit orders, +CC phones)', () => {
    render(<DataTable />)
    const bodyRows = screen.getAllByRole('row').slice(1)
    const renderedRows = bodyRows.map((row) =>
      [...row.querySelectorAll('td')].map((cell) => cell.textContent?.trim() ?? ''),
    )
    expect(renderedRows).toEqual(
      tableRows.map((data) => [
        data.order,
        data.name,
        data.occupation + data.occupationNote,
        data.contact,
        data.education,
        'Details',
      ]),
    )
    for (const data of tableRows) {
      expect(data.order).toMatch(/^\d{4}$/)
      expect(data.contact).toMatch(/^\+\d+/)
    }
  })

  it('renders the faint block sub-blurb under every occupation', () => {
    render(<DataTable />)
    const bodyRows = screen.getAllByRole('row').slice(1)
    tableRows.forEach((data, index) => {
      const small = bodyRows[index]?.querySelector('small')
      expect(small).toBeInTheDocument()
      expect(small).toHaveClass('block', 'text-faint', 'text-[0.8em]', 'font-light')
      expect(small).toHaveTextContent(data.occupationNote)
    })
  })

  it('wraps the table in a horizontal scroll container with min-width 900px', () => {
    render(<DataTable />)
    const table = screen.getByRole('table')
    expect(table.parentElement).toHaveClass('overflow-x-auto')
    expect(table).toHaveClass('w-full', 'min-w-[900px]', 'border-collapse', 'mb-4', 'text-left')
  })

  it('header labels are borderless, bold, uppercase, letter-spaced white', () => {
    render(<DataTable />)
    for (const header of screen.getAllByRole('columnheader')) {
      expect(header).toHaveClass(
        'text-heading',
        'font-bold',
        'text-left',
        'text-[11px]',
        'uppercase',
        'tracking-[0.2rem]',
        'px-3',
        'pt-3',
        'pb-[30px]',
        'border-none',
      )
    }
  })

  it('body cells are borderless, muted, light-weight with 20px vertical padding', () => {
    render(<DataTable />)
    const cells = document.querySelectorAll('tbody td')
    expect(cells).toHaveLength(42)
    for (const cell of cells) {
      expect(cell).toHaveClass(
        'text-muted',
        'font-light',
        'px-3',
        'py-5',
        'align-top',
        'border-none',
      )
    }
  })

  it('odd rows carry the subtle stripe tint and every row carries the group hook', () => {
    render(<DataTable />)
    const bodyRows = screen.getAllByRole('row').slice(1)
    bodyRows.forEach((row, index) => {
      expect(row).toHaveClass('group', 'transition-colors', 'duration-300')
      if (index % 2 === 0) {
        expect(row).toHaveClass('bg-black/5')
      } else {
        expect(row.className).not.toContain('bg-black/5')
      }
    })
  })

  it('all links render faint with the yellow hover/focus treatment', () => {
    render(<DataTable />)
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(14)
    for (const link of links) {
      expect(link).toHaveAttribute('href', '#')
      expect(link).toHaveClass(
        'text-faint',
        'no-underline',
        'group-hover:text-highlight',
        'group-focus-within:text-highlight',
        'transition-colors',
        'duration-300',
      )
    }
    const details = links.filter((link) => link.textContent === 'Details')
    expect(details).toHaveLength(7)
    for (const link of details) {
      expect(link).toHaveClass('text-[11px]', 'font-black', 'uppercase', 'tracking-[0.2rem]')
    }
  })

  it('body cells take the white text treatment on row hover/focus', () => {
    render(<DataTable />)
    for (const cell of document.querySelectorAll('tbody td')) {
      expect(cell).toHaveClass('group-hover:text-heading', 'group-focus-within:text-heading')
    }
  })

  it('keyboard focus reaches the name links in document order', async () => {
    const user = userEvent.setup()
    render(<DataTable />)
    await user.tab()
    const firstLink = screen.getAllByRole('link')[0]
    expect(firstLink).toHaveFocus()
    expect(firstLink).toHaveTextContent('James Yates')
  })
})
