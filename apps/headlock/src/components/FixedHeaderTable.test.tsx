import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { FixedHeaderTable, headerLabels, schedule, variants } from './FixedHeaderTable'

function blockParts(index: number) {
  const tables = screen.getAllByRole('table')
  const headerTable = tables[index * 2] as HTMLElement
  const bodyTable = tables[index * 2 + 1] as HTMLElement
  const headWrap = headerTable.parentElement as HTMLElement
  const bodyWrap = bodyTable.parentElement as HTMLElement
  const block = headWrap.parentElement as HTMLElement
  return { headerTable, bodyTable, headWrap, bodyWrap, block }
}

describe('FixedHeaderTable', () => {
  it('exposes the five variant configs in source order', () => {
    expect(variants.map((variant) => variant.id)).toEqual(['ver1', 'ver2', 'ver3', 'ver4', 'ver5'])
  })

  it('renders five variant blocks, each with a header table and a body table', () => {
    render(<FixedHeaderTable />)
    expect(screen.getAllByRole('table')).toHaveLength(10)
    expect(screen.getAllByRole('region')).toHaveLength(5)
  })

  it('SIGNATURE: the header table sits absolutely positioned OUTSIDE the scrollable body', () => {
    render(<FixedHeaderTable />)
    for (let index = 0; index < 5; index += 1) {
      const { headerTable, bodyTable, headWrap, bodyWrap, block } = blockParts(index)
      expect(headWrap).toHaveClass('absolute', 'top-0', 'left-0', 'w-full')
      expect(bodyWrap).toHaveClass('max-h-[585px]', 'overflow-auto')
      // The header lives OUTSIDE the scroll container — pure CSS, no JS.
      expect(bodyWrap.contains(headerTable)).toBe(false)
      expect(block.contains(headWrap)).toBe(true)
      expect(block.contains(bodyWrap)).toBe(true)
      expect(bodyTable.parentElement).toBe(bodyWrap)
    }
  })

  it('every block reserves 60px for the absolute header and stacks 110px apart', () => {
    render(<FixedHeaderTable />)
    for (let index = 0; index < 5; index += 1) {
      expect(blockParts(index).block).toHaveClass('relative', 'pt-[60px]', 'mb-[110px]')
    }
  })

  it('every variant shares the five header labels with scope=col', () => {
    render(<FixedHeaderTable />)
    for (let index = 0; index < 5; index += 1) {
      const { headerTable } = blockParts(index)
      const headers = within(headerTable).getAllByRole('columnheader')
      expect(headers).toHaveLength(5)
      headers.forEach((th, colIndex) => {
        expect(th).toHaveAttribute('scope', 'col')
        expect(th).toHaveTextContent(headerLabels[colIndex] ?? '')
      })
    }
  })

  it('columns use the source widths 33/13/22/19/13% in both tables', () => {
    render(<FixedHeaderTable />)
    const widths = ['w-[33%]', 'w-[13%]', 'w-[22%]', 'w-[19%]', 'w-[13%]']
    const { headerTable, bodyTable } = blockParts(0)
    const ths = within(headerTable).getAllByRole('columnheader')
    const tds = within(bodyTable).getAllByRole('cell')
    expect(tds).toHaveLength(110)
    ths.forEach((th, index) => expect(th).toHaveClass(widths[index] ?? ''))
    tds.forEach((td, index) => expect(td).toHaveClass(widths[index % 5] ?? ''))
  })

  it('column 1 carries a 40px indent (ver4 uses the 7px gutter variant)', () => {
    render(<FixedHeaderTable />)
    const { headerTable, bodyTable } = blockParts(0)
    expect(within(headerTable).getAllByRole('columnheader')[0]).toHaveClass('pl-10')
    expect(within(bodyTable).getAllByRole('cell')[0]).toHaveClass('pl-10')
    const ver4 = blockParts(3)
    expect(within(ver4.headerTable).getAllByRole('columnheader')[0]).toHaveClass('pl-[7px]')
    expect(within(ver4.bodyTable).getAllByRole('cell')[0]).toHaveClass('pl-[7px]')
  })

  it('renders 22 body rows in every variant (11-row schedule ×2)', () => {
    render(<FixedHeaderTable />)
    for (let index = 0; index < 5; index += 1) {
      const { bodyTable } = blockParts(index)
      expect(within(bodyTable).getAllByRole('row')).toHaveLength(22)
    }
  })

  it('body data matches the source fitness schedule, duplicated exactly twice', () => {
    render(<FixedHeaderTable />)
    const { bodyTable } = blockParts(0)
    const rows = within(bodyTable).getAllByRole('row')
    expect(rows).toHaveLength(22)
    rows.forEach((tr, rowIndex) => {
      const source = schedule[rowIndex % schedule.length]
      expect(source).toBeDefined()
      if (source) {
        const cells = within(tr).getAllByRole('cell')
        expect(cells[0]).toHaveTextContent(source.name)
        expect(cells[1]).toHaveTextContent(source.type)
        expect(cells[2]).toHaveTextContent(source.hours)
        expect(cells[3]).toHaveTextContent(source.trainer)
        expect(cells[4]).toHaveTextContent(source.spots)
      }
    })
    // Row 12 repeats row 1 — the source duplication pattern.
    expect(within(rows[11] as HTMLElement).getByText('Like a butterfly')).toBeInTheDocument()
  })

  it('all five variants share the same dataset', () => {
    render(<FixedHeaderTable />)
    for (let index = 0; index < 5; index += 1) {
      const { bodyTable } = blockParts(index)
      expect(within(bodyTable).getAllByText('Virtual Cycle')).toHaveLength(2)
      expect(within(bodyTable).getAllByText('Supple Spine and Shoulders')).toHaveLength(2)
    }
  })

  it('body cells share the Lato-regular 15px #808080 styling', () => {
    render(<FixedHeaderTable />)
    for (let index = 0; index < 5; index += 1) {
      const { bodyTable } = blockParts(index)
      const cell = within(bodyTable).getAllByRole('cell')[0] as HTMLElement
      expect(cell).toHaveClass('text-[15px]', 'font-normal', 'text-cell', 'leading-[1.4]')
    }
  })

  it('ver1 renders the periwinkle card: white bold header, lavender zebra, rounded shadowed card', () => {
    render(<FixedHeaderTable />)
    const { headerTable, bodyTable, block } = blockParts(0)
    const th = within(headerTable).getAllByRole('columnheader')[0] as HTMLElement
    expect(th).toHaveClass(
      'text-[18px]',
      'font-bold',
      'text-white',
      'bg-head-ver1',
      'py-[18px]',
      'leading-[1.4]',
    )
    const rows = within(bodyTable).getAllByRole('row')
    // The even: variant rides on every row — CSS paints the tint on nth-child(even).
    rows.forEach((tr) => expect(tr).toHaveClass('even:bg-zebra'))
    expect(block).toHaveClass('rounded-[10px]', 'overflow-hidden', 'bg-white')
    expect(block.className).toContain('shadow-[0_0_40px_0_rgba(0,0,0,0.15)]')
  })

  it('ver2 renders the red header with a floating head shadow and hairline rows', () => {
    render(<FixedHeaderTable />)
    const { headerTable, headWrap, block } = blockParts(1)
    const th = within(headerTable).getAllByRole('columnheader')[0] as HTMLElement
    expect(th).toHaveClass('text-[18px]', 'font-bold', 'text-accent-red', 'bg-transparent')
    expect(headWrap.className).toContain('shadow-[0_5px_20px_0_rgba(0,0,0,0.1)]')
    expect(block).toHaveClass('rounded-[10px]', 'overflow-hidden', 'bg-white')
    const { bodyTable } = blockParts(1)
    const row = within(bodyTable).getAllByRole('row')[0] as HTMLElement
    expect(row).toHaveClass('border-b', 'border-hairline')
  })

  it('ver3 renders the dark card with green uppercase header over dark rows', () => {
    render(<FixedHeaderTable />)
    const { headerTable, bodyTable, block } = blockParts(2)
    const th = within(headerTable).getAllByRole('columnheader')[0] as HTMLElement
    expect(th).toHaveClass(
      'text-[15px]',
      'font-bold',
      'uppercase',
      'text-accent-green',
      'bg-card-dark',
    )
    const cell = within(bodyTable).getAllByRole('cell')[0] as HTMLElement
    expect(cell).toHaveClass('bg-row-dark')
    expect(block).toHaveClass('bg-card-dark', 'rounded-[10px]', 'overflow-hidden')
    expect(block.className).toContain('shadow-[0_0_40px_0_rgba(0,0,0,0.15)]')
  })

  it('ver4 renders the blue hairline variant with the -20px scrollbar gutter', () => {
    render(<FixedHeaderTable />)
    const { headerTable, headWrap, bodyWrap, block } = blockParts(3)
    const th = within(headerTable).getAllByRole('columnheader')[0] as HTMLElement
    expect(th).toHaveClass(
      'text-[18px]',
      'font-bold',
      'text-accent-blue',
      'bg-transparent',
      'border-b-2',
      'border-hairline',
    )
    expect(block).toHaveClass('-mr-5', 'overflow-hidden', 'bg-white')
    expect(block.className).not.toMatch(/rounded|shadow/)
    expect(headWrap).toHaveClass('pr-5')
    expect(bodyWrap).toHaveClass('pr-5')
    const { bodyTable } = blockParts(3)
    const row = within(bodyTable).getAllByRole('row')[0] as HTMLElement
    expect(row).toHaveClass('border-b', 'border-hairline')
  })

  it('ver5 renders gray card-rows on white gutters with hover — the only hover variant', () => {
    render(<FixedHeaderTable />)
    const { headerTable, bodyTable, bodyWrap, block } = blockParts(4)
    const th = within(headerTable).getAllByRole('columnheader')[0] as HTMLElement
    expect(th).toHaveClass(
      'text-[14px]',
      'font-bold',
      'uppercase',
      'text-head-gray',
      'bg-transparent',
      'py-[25px]',
    )
    expect(block).toHaveClass('-mr-[30px]', 'overflow-hidden', 'bg-white')
    expect(bodyWrap).toHaveClass('pr-[30px]')
    const table = within(bodyTable).getAllByRole('row')[0]?.closest('table')
    expect(table).toHaveClass('border-separate', 'border-spacing-x-0', 'border-spacing-y-[10px]')
    const rows = within(bodyTable).getAllByRole('row')
    const firstRow = rows[0] as HTMLElement
    expect(firstRow).toHaveClass('rounded-[10px]', 'border-b-[10px]', 'border-white')
    const cells = within(firstRow).getAllByRole('cell')
    expect(cells[0]).toHaveClass(
      'py-[10px]',
      'bg-row-gray',
      'border-x',
      'border-transparent',
      'first:rounded-l-[10px]',
      'hover:bg-row-hover',
      'hover:cursor-pointer',
    )
    expect(cells[4]).toHaveClass('last:rounded-r-[10px]')
  })

  it('no variant other than ver5 has hover styling', () => {
    render(<FixedHeaderTable />)
    for (const index of [0, 1, 2, 3]) {
      const { bodyTable } = blockParts(index)
      const cell = within(bodyTable).getAllByRole('cell')[0] as HTMLElement
      expect(cell.className).not.toMatch(/hover:/)
    }
  })

  it('has no interactive elements or handlers — pure CSS fixed headers', () => {
    const { container } = render(<FixedHeaderTable />)
    expect(container.querySelector('button')).toBeNull()
    expect(container.querySelector('a')).toBeNull()
    expect(container.querySelector('input')).toBeNull()
    expect(container.querySelectorAll('[onclick]').length).toBe(0)
  })
})
