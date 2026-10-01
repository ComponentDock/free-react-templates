import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { PeopleTable } from './PeopleTable'
import { people } from '../data/people'

describe('PeopleTable', () => {
  it('renders the table inside a horizontally scrollable wrapper', () => {
    const { container } = render(<PeopleTable />)
    const wrapper = container.firstElementChild as HTMLElement
    expect(wrapper.className).toContain('overflow-x-auto')
    expect(wrapper.querySelector('table')).not.toBeNull()
  })

  it('styles the table as a borderless dark panel', () => {
    const { container } = render(<PeopleTable />)
    const table = container.querySelector('table') as HTMLElement
    expect(table.className).toContain('w-full')
    expect(table.className).toContain('min-w-[1000px]')
    expect(table.className).toContain('border-collapse')
    expect(table.className).toContain('bg-panel')
    expect(table.className).toContain('text-ink')
  })

  it('renders the four header columns in order with scope="col"', () => {
    render(<PeopleTable />)
    const headerRow = screen.getAllByRole('row')[0] as HTMLElement
    const cells = within(headerRow).getAllByRole('columnheader')
    expect(cells.map((cell) => cell.textContent)).toEqual(['#', 'First Name', 'Last Name', 'Email'])
    cells.forEach((cell) => {
      expect(cell).toHaveAttribute('scope', 'col')
    })
  })

  it('styles the header band with bold white 14px labels and a 4px page-color gap', () => {
    render(<PeopleTable />)
    const headerRow = screen.getAllByRole('row')[0] as HTMLElement
    within(headerRow)
      .getAllByRole('columnheader')
      .forEach((cell) => {
        expect(cell.className).toContain('text-left')
        expect(cell.className).toContain('text-sm')
        expect(cell.className).toContain('font-bold')
        expect(cell.className).toContain('text-ink')
        expect(cell.className).toContain('px-[30px]')
        expect(cell.className).toContain('py-5')
        expect(cell.className).toContain('border-b-4')
        expect(cell.className).toContain('border-gap')
      })
  })

  it('renders five body rows with the canonical people data', () => {
    render(<PeopleTable />)
    const bodyRows = screen.getAllByRole('row').slice(1)
    expect(bodyRows).toHaveLength(5)
    people.forEach((person, index) => {
      const row = bodyRows[index] as HTMLElement
      expect(within(row).getByRole('rowheader')).toHaveTextContent(String(person.id))
      const cells = within(row).getAllByRole('cell')
      expect(cells[0]).toHaveTextContent(person.firstName)
      expect(cells[1]).toHaveTextContent(person.lastName)
      expect(cells[2]).toHaveTextContent(person.email)
    })
  })

  it('marks row-number cells as bold row headers with scope="row"', () => {
    render(<PeopleTable />)
    const bodyRows = screen.getAllByRole('row').slice(1)
    bodyRows.forEach((row) => {
      const rowHeader = within(row).getByRole('rowheader')
      expect(rowHeader).toHaveAttribute('scope', 'row')
      expect(rowHeader.className).toContain('font-bold')
      expect(rowHeader.className).toContain('text-sm')
      expect(rowHeader.className).toContain('text-ink')
      expect(rowHeader.className).toContain('px-[30px]')
      expect(rowHeader.className).toContain('py-5')
      expect(rowHeader.className).toContain('border-b-[3px]')
      expect(rowHeader.className).toContain('border-gap')
    })
  })

  it('styles body cells with 14px white text and 3px page-color bottom gaps', () => {
    render(<PeopleTable />)
    const firstRow = screen.getAllByRole('row')[1] as HTMLElement
    const dataCells = within(firstRow).getAllByRole('cell')
    expect(dataCells).toHaveLength(3)
    dataCells.forEach((cell) => {
      expect(cell.className).toContain('text-sm')
      expect(cell.className).toContain('text-ink')
      expect(cell.className).toContain('px-[30px]')
      expect(cell.className).toContain('py-5')
      expect(cell.className).toContain('border-b-[3px]')
      expect(cell.className).toContain('border-gap')
    })
  })

  it('wires the CSS-only row hover highlight through the tbody group', () => {
    render(<PeopleTable />)
    const rowGroups = screen.getAllByRole('rowgroup')
    const tbody = rowGroups[1] as HTMLElement
    expect(tbody.className).toContain('group')
    within(tbody)
      .getAllByRole('row')
      .forEach((row) => {
        expect(row.className).toContain('group-hover:bg-rowhover')
      })
  })
})
