import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DirectoryTable } from './DirectoryTable'
import { directory } from '../data/directory'

const headerLabels = ['#', 'First Name', 'Last Name', 'Email Address']

describe('DirectoryTable', () => {
  it('renders one table inside a horizontal-scroll wrapper', () => {
    render(<DirectoryTable />)
    const table = screen.getByRole('table')
    expect(table).toBeInTheDocument()
    expect(table.className).toContain('w-full')
    expect(table.className).toContain('min-w-[1000px]')
    expect(table.className).toContain('bg-white')
    const wrapper = table.parentElement as HTMLElement
    expect(wrapper.className).toContain('overflow-x-scroll')
  })

  it('renders the four header labels on a bright-blue band', () => {
    render(<DirectoryTable />)
    const headerCells = screen.getAllByRole('columnheader')
    expect(headerCells.map((cell) => cell.textContent)).toEqual(headerLabels)
    // the source scopes the blue band to the thead element (thead-primary)
    const table = screen.getByRole('table')
    const thead = table.querySelector('thead')
    expect(thead?.className).toContain('bg-header-blue')
  })

  it('styles header cells: bold white 14px, 20/30 padding, no borders', () => {
    render(<DirectoryTable />)
    const headerCells = screen.getAllByRole('columnheader')
    for (const cell of headerCells) {
      expect(cell.className).toContain('font-bold')
      expect(cell.className).toContain('text-white')
      expect(cell.className).toContain('text-[14px]')
      expect(cell.className).toContain('py-5')
      expect(cell.className).toContain('px-[30px]')
      expect(cell.className).toContain('border-none')
      // UA default th alignment is center — the snippet never overrides it
      expect(cell.className).toContain('text-center')
    }
  })

  it('renders five body rows with bold scope=row number cells', () => {
    render(<DirectoryTable />)
    const rows = screen.getAllByRole('row').slice(1)
    expect(rows).toHaveLength(5)
    const rowHeaders = screen.getAllByRole('rowheader')
    expect(rowHeaders.map((cell) => cell.textContent)).toEqual(['1', '2', '3', '4', '5'])
    for (const cell of rowHeaders) {
      expect(cell).toHaveAttribute('scope', 'row')
      expect(cell.className).toContain('font-bold')
      expect(cell.className).toContain('text-center')
      expect(cell.className).toContain('text-[14px]')
      expect(cell.className).toContain('py-5')
      expect(cell.className).toContain('px-[30px]')
      expect(cell.className).toContain('border-b-[3px]')
      expect(cell.className).toContain('border-page')
    }
  })

  it('styles body cells: left-aligned 14px ink with page-colored 3px dividers', () => {
    render(<DirectoryTable />)
    const cells = screen.getAllByRole('cell')
    expect(cells).toHaveLength(15)
    for (const cell of cells) {
      expect(cell.className).toContain('text-left')
      expect(cell.className).toContain('text-[14px]')
      expect(cell.className).toContain('text-body-ink')
      expect(cell.className).toContain('py-5')
      expect(cell.className).toContain('px-[30px]')
      expect(cell.className).toContain('border-b-[3px]')
      expect(cell.className).toContain('border-page')
      expect(cell.className).not.toContain('even:')
    }
  })

  it('keeps the data module in sync with the rendered rows', () => {
    render(<DirectoryTable />)
    const cells = screen.getAllByRole('cell')
    const rowHeaders = screen.getAllByRole('rowheader')
    directory.forEach((entry, index) => {
      const offset = index * 3
      expect(rowHeaders[index]?.textContent).toBe(entry.id)
      expect(cells[offset]?.textContent).toBe(entry.firstName)
      expect(cells[offset + 1]?.textContent).toBe(entry.lastName)
      expect(cells[offset + 2]?.textContent).toBe(entry.email)
    })
  })
})
