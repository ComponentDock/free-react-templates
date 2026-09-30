import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { FixedColumnTable, employees, scrollColumns } from './FixedColumnTable'

describe('FixedColumnTable', () => {
  it('renders two tables: the fixed first column and the scrollable columns', () => {
    render(<FixedColumnTable />)
    expect(screen.getAllByRole('table')).toHaveLength(2)
  })

  it('renders the fixed first column absolutely positioned with white background and z-index', () => {
    render(<FixedColumnTable />)
    const firstTable = screen.getAllByRole('table')[0] as HTMLElement
    const fixed = firstTable.parentElement
    expect(fixed).toHaveClass('absolute', 'top-0', 'left-0', 'z-[1000]', 'w-[310px]', 'bg-card')
  })

  it('first-column header reads Employees with bold uppercase styling', () => {
    render(<FixedColumnTable />)
    const th = screen.getByRole('columnheader', { name: 'Employees' })
    expect(th).toHaveAttribute('scope', 'col')
    expect(th).toHaveClass(
      'w-full',
      'py-[21px]',
      'pl-10',
      'text-sm',
      'font-bold',
      'uppercase',
      'leading-[1.4]',
      'text-header',
    )
  })

  it('renders the seven source employee names in the first column', () => {
    render(<FixedColumnTable />)
    const firstTable = screen.getAllByRole('table')[0] as HTMLElement
    const body = within(firstTable).getAllByRole('rowgroup')[1] as HTMLElement
    const rows = within(body).getAllByRole('row')
    expect(rows).toHaveLength(7)
    rows.forEach((tr, index) => {
      expect(within(tr).getByText(employees[index]?.name ?? '')).toBeInTheDocument()
    })
  })

  it('first-column body cells use the darker gray, medium weight, 15px', () => {
    render(<FixedColumnTable />)
    const firstTable = screen.getAllByRole('table')[0] as HTMLElement
    const body = within(firstTable).getAllByRole('rowgroup')[1] as HTMLElement
    const firstCell = within(body).getAllByRole('cell')[0] as HTMLElement
    expect(firstCell).toHaveClass('py-4', 'pl-10', 'text-[15px]', 'font-medium', 'text-first-col')
    expect(firstCell.className).not.toMatch(/text-other-col/)
  })

  it('scrollable area is offset by the fixed column and scrolls horizontally', () => {
    render(<FixedColumnTable />)
    const secondTable = screen.getAllByRole('table')[1] as HTMLElement
    const scroller = secondTable.parentElement
    expect(scroller).toHaveClass('overflow-x-auto', 'pl-[310px]', 'pb-7', 'w-full')
  })

  it('second table uses table-layout fixed with the source column widths', () => {
    render(<FixedColumnTable />)
    const secondTable = screen.getAllByRole('table')[1] as HTMLElement
    expect(secondTable).toHaveClass('table-fixed', 'border-collapse')
    for (const col of scrollColumns) {
      const th = screen.getByRole('columnheader', { name: col.label })
      expect(th).toHaveClass(col.widthClass)
      expect(th).toHaveAttribute('scope', 'col')
    }
  })

  it('scrollable headers render bold uppercase 14px dark gray', () => {
    render(<FixedColumnTable />)
    for (const col of scrollColumns) {
      const th = screen.getByRole('columnheader', { name: col.label })
      expect(th).toHaveClass('py-[21px]', 'text-sm', 'font-bold', 'uppercase', 'leading-[1.4]')
      expect(th).toHaveClass('text-header')
    }
  })

  it('the Position column carries the source left-padding quirk', () => {
    render(<FixedColumnTable />)
    const th = screen.getByRole('columnheader', { name: 'Position' })
    expect(th).toHaveClass('pl-[55px]')
  })

  it('second table renders 7 rows of 7 cells with the lighter gray body styling', () => {
    render(<FixedColumnTable />)
    const secondTable = screen.getAllByRole('table')[1] as HTMLElement
    const body = within(secondTable).getAllByRole('rowgroup')[1] as HTMLElement
    const rows = within(body).getAllByRole('row')
    expect(rows).toHaveLength(7)
    rows.forEach((tr, index) => {
      const cells = within(tr).getAllByRole('cell')
      expect(cells).toHaveLength(7)
      const first = cells[0] as HTMLElement
      expect(first).toHaveClass('text-other-col', 'font-medium', 'text-[15px]', 'py-4')
      const employee = employees[index]
      expect(employee).toBeDefined()
      if (employee) {
        expect(within(tr).getByText(employee.position)).toBeInTheDocument()
        expect(within(tr).getByText(employee.contacts)).toBeInTheDocument()
        expect(within(tr).getByText(employee.cardNo)).toBeInTheDocument()
      }
    })
  })

  it('demo data matches the source shape (emails, ages, masked card numbers)', () => {
    for (const employee of employees) {
      expect(employee.contacts).toMatch(/@example\.com$/)
      expect(employee.age).toMatch(/^\d{2}$/)
      expect(employee.cardNo).toMatch(/^424242x+\d{4}$/)
      expect(employee.startDate).toMatch(/^\d{2} [A-Z][a-z]{2} \d{4}$/)
    }
  })

  it('every row in both tables carries only a thin light-gray bottom separator', () => {
    const { container } = render(<FixedColumnTable />)
    const rows = container.querySelectorAll('tr')
    expect(rows.length).toBe(16)
    rows.forEach((tr) => {
      expect(tr).toHaveClass('border-b', 'border-separator')
      expect(tr.className).not.toMatch(/border-t|border-x|border-l|border-r/)
    })
  })

  it('has no interactive elements — the source is purely presentational', () => {
    const { container } = render(<FixedColumnTable />)
    expect(container.querySelector('button')).toBeNull()
    expect(container.querySelector('a')).toBeNull()
    expect(container.querySelector('input')).toBeNull()
    expect(screen.queryByRole('link')).toBeNull()
  })
})
