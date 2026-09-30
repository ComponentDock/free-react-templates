import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { EmployeeGrid } from './EmployeeGrid'
import { employees } from '../data/employees'

const headerLabels = ['Full Name', 'Age', 'Job Title', 'Location']

describe('EmployeeGrid', () => {
  it('renders one grid with a header band and eight body rows', () => {
    render(<EmployeeGrid />)
    expect(screen.getByRole('table')).toBeInTheDocument()
    const rows = screen.getAllByRole('row')
    // 1 header row + 8 body rows
    expect(rows).toHaveLength(9)
    expect(screen.getAllByRole('columnheader')).toHaveLength(4)
    expect(screen.getAllByRole('cell')).toHaveLength(32)
  })

  it('renders the four column labels in order', () => {
    render(<EmployeeGrid />)
    const headerCells = screen.getAllByRole('columnheader')
    expect(headerCells.map((cell) => cell.textContent)).toEqual(headerLabels)
  })

  it('renders the first employee row verbatim', () => {
    render(<EmployeeGrid />)
    const bodyCells = screen.getAllByRole('cell')
    const firstRow = bodyCells.slice(0, 4).map((cell) => cell.textContent)
    expect(firstRow).toEqual(['Vincent Williamson', '31', 'iOS Developer', 'Washington'])
  })

  it('repeats rows 1–2 as rows 7–8 (dataset invariant)', () => {
    render(<EmployeeGrid />)
    const bodyCells = screen.getAllByRole('cell')
    const rowValues = (from: number, to: number) =>
      bodyCells.slice(from * 4, to * 4).map((cell) => cell.textContent)
    expect(rowValues(6, 8)).toEqual(rowValues(0, 2))
  })

  it('styles the header band: periwinkle, white 18px regular labels, py 19px', () => {
    render(<EmployeeGrid />)
    const headerRow = screen.getAllByRole('row')[0] as HTMLElement
    expect(headerRow.className).toContain('bg-header-band')
    expect(headerRow.className).toContain('cursor-pointer')
    const headerCells = screen.getAllByRole('columnheader')
    for (const cell of headerCells) {
      expect(cell.className).toContain('font-poppins')
      expect(cell.className).toContain('font-normal')
      expect(cell.className).toContain('text-[18px]')
      expect(cell.className).toContain('text-white')
      expect(cell.className).toContain('leading-[1.2]')
      expect(cell.className).toContain('py-[19px]')
      expect(cell.className).toContain('text-left')
      expect(cell.className).toContain('border-b')
      expect(cell.className).toContain('border-row-line')
    }
  })

  it('applies the desktop column geometry to header and body cells', () => {
    render(<EmployeeGrid />)
    const headerCells = screen.getAllByRole('columnheader')
    expect(headerCells[0]?.className).toContain('w-[360px]')
    expect(headerCells[0]?.className).toContain('pl-10')
    expect(headerCells[1]?.className).toContain('w-[160px]')
    expect(headerCells[2]?.className).toContain('w-[250px]')
    expect(headerCells[3]?.className).toContain('w-[190px]')
    const bodyCells = screen.getAllByRole('cell')
    expect(bodyCells[0]?.className).toContain('w-[360px]')
    expect(bodyCells[0]?.className).toContain('pl-10')
    expect(bodyCells[1]?.className).toContain('w-[160px]')
    expect(bodyCells[2]?.className).toContain('w-[250px]')
    expect(bodyCells[3]?.className).toContain('w-[190px]')
    // ALL cells left-aligned — no right alignment anywhere
    for (const cell of [...headerCells, ...bodyCells]) {
      expect(cell.className).not.toContain('text-right')
    }
  })

  it('styles body cells: Poppins 400 15px gray, py 20px, thin bottom border', () => {
    render(<EmployeeGrid />)
    const bodyCells = screen.getAllByRole('cell')
    for (const cell of bodyCells) {
      expect(cell.className).toContain('font-poppins')
      expect(cell.className).toContain('text-[15px]')
      expect(cell.className).toContain('leading-[1.2]')
      expect(cell.className).toContain('text-cell-ink')
      expect(cell.className).toContain('py-5')
      expect(cell.className).toContain('border-b')
      expect(cell.className).toContain('border-row-line')
    }
  })

  it('has NO zebra striping anywhere in the grid', () => {
    const { container } = render(<EmployeeGrid />)
    expect(container.innerHTML).not.toContain('even:')
    expect(container.innerHTML).not.toContain('odd:')
  })

  it('carries the CSS-canonical hover tint on EVERY row including the header band', () => {
    render(<EmployeeGrid />)
    const rows = screen.getAllByRole('row')
    for (const row of rows) {
      expect(row.className).toContain('hover:bg-hover-tint')
      expect(row.className).toContain('cursor-pointer')
    }
  })

  it('gives every body cell its stacked-mode data-title attribute', () => {
    render(<EmployeeGrid />)
    const bodyCells = screen.getAllByRole('cell')
    for (let row = 0; row < 8; row += 1) {
      for (let col = 0; col < 4; col += 1) {
        expect(bodyCells[row * 4 + col]).toHaveAttribute('data-title', headerLabels[col])
      }
    }
  })

  it('carries the ≤768px stacked-mode class markup on the table', () => {
    render(<EmployeeGrid />)
    const table = screen.getByRole('table')
    expect(table.className).toContain('max-[768px]:block')
    const headerRow = screen.getAllByRole('row')[0] as HTMLElement
    expect(headerRow.className).toContain('max-[768px]:block')
    expect(headerRow.className).toContain('max-[768px]:h-0')
    expect(headerRow.className).toContain('max-[768px]:p-0')
    const headerCells = screen.getAllByRole('columnheader')
    for (const cell of headerCells) {
      expect(cell.className).toContain('max-[768px]:hidden')
    }
    const tbody = table.querySelector('tbody')
    expect(tbody?.className).toContain('max-[768px]:block')
  })

  it('carries the stacked-mode row classes (block, border, 30/15/18/0 padding)', () => {
    render(<EmployeeGrid />)
    const rows = screen.getAllByRole('row').slice(1)
    for (const row of rows) {
      expect(row.className).toContain('max-[768px]:block')
      expect(row.className).toContain('max-[768px]:border-b')
      expect(row.className).toContain('max-[768px]:border-row-line')
      expect(row.className).toContain('max-[768px]:pt-[30px]')
      expect(row.className).toContain('max-[768px]:pr-[15px]')
      expect(row.className).toContain('max-[768px]:pb-[18px]')
      expect(row.className).toContain('max-[768px]:pl-0')
    }
  })

  it('carries the stacked-mode cell classes (:before label injection, text grows)', () => {
    render(<EmployeeGrid />)
    const bodyCells = screen.getAllByRole('cell')
    for (const cell of bodyCells) {
      expect(cell.className).toContain('max-[768px]:block')
      expect(cell.className).toContain('max-[768px]:border-0')
      expect(cell.className).toContain('max-[768px]:pl-[30px]')
      expect(cell.className).toContain('max-[768px]:py-4')
      expect(cell.className).toContain('max-[768px]:text-[18px]')
      expect(cell.className).toContain('max-[768px]:text-stacked-ink')
      expect(cell.className).toContain('max-[768px]:w-full')
      expect(cell.className).toContain('max-[768px]:before:content-[attr(data-title)]')
      expect(cell.className).toContain('max-[768px]:before:block')
      expect(cell.className).toContain('max-[768px]:before:font-bold')
      expect(cell.className).toContain('max-[768px]:before:text-xs')
      expect(cell.className).toContain('max-[768px]:before:text-label-ink')
      expect(cell.className).toContain('max-[768px]:before:leading-[1.2]')
      expect(cell.className).toContain('max-[768px]:before:uppercase')
      expect(cell.className).toContain('max-[768px]:before:mb-[13px]')
      expect(cell.className).toContain('max-[768px]:before:min-w-[98px]')
    }
  })

  it('keeps the data module in sync with the rendered rows', () => {
    render(<EmployeeGrid />)
    const bodyCells = screen.getAllByRole('cell')
    employees.forEach((employee, index) => {
      const offset = index * 4
      expect(bodyCells[offset]?.textContent).toBe(employee.fullName)
      expect(bodyCells[offset + 1]?.textContent).toBe(employee.age)
      expect(bodyCells[offset + 2]?.textContent).toBe(employee.jobTitle)
      expect(bodyCells[offset + 3]?.textContent).toBe(employee.location)
    })
  })
})
