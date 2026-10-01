import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { ScheduleTable } from './ScheduleTable'
import { DAYS, SCHEDULE, type TableVariant } from '../data/schedule'

const VARIANTS: readonly TableVariant[] = ['ver1', 'ver2', 'ver3', 'ver4', 'ver5', 'ver6']

const HEAD_BAND: Record<TableVariant, string> = {
  ver1: 'bg-ver1-head',
  ver2: 'bg-ver2-head',
  ver3: 'bg-ver3-head',
  ver4: 'bg-ver4-head',
  ver5: 'bg-ver5-head',
  ver6: 'bg-ver6-head',
}

/** Body-cell treatment while its column is hovered. */
const COL_BODY: Record<TableVariant, string> = {
  ver1: 'bg-ver1-row',
  ver2: 'bg-ver2-row',
  ver3: 'bg-ver3-row',
  ver4: 'bg-ver4-col',
  ver5: 'text-ver5-accent',
  ver6: 'bg-ver6-row',
}

/** Header-cell treatment while its column is hovered (ver1–5 distinct;
 *  ver6's header joins the PLAIN column treatment). */
const COL_HEAD: Record<TableVariant, string> = {
  ver1: 'bg-ver1-colhead',
  ver2: 'bg-ver2-colhead',
  ver3: 'bg-ver3-colhead',
  ver4: 'bg-ver4-colhead',
  ver5: 'bg-ver5-colhead',
  ver6: 'bg-ver6-row',
}

/** Exact class-token check (substring matching collides with the
 *  `group-hover:` prefixed twins of the same utilities). */
function has(el: Element, name: string) {
  return el.classList.contains(name)
}

/** Leave the table: React derives onMouseLeave from mouseout with the
 *  pointer moving outside the subtree. */
function leaveTable(wrapper: HTMLElement) {
  const cell = within(wrapper).getAllByRole('cell')[0] as HTMLElement
  fireEvent.mouseOut(cell, { relatedTarget: document.body })
}

describe('ScheduleTable', () => {
  describe.each(VARIANTS)('%s structure', (variant) => {
    it('renders an 8-column header: hidden "Name" corner + seven uppercase day labels with scope="col"', () => {
      render(<ScheduleTable variant={variant} />)
      const table = screen.getByRole('table')
      const headers = within(table).getAllByRole('columnheader')
      expect(headers).toHaveLength(8)
      const corner = headers[0] as HTMLElement
      expect(corner).toHaveAttribute('scope', 'col')
      expect(corner.textContent).toBe('Name')
      const cornerLabel = corner.querySelector('span')
      expect(cornerLabel?.className).toContain('sr-only')
      for (const [i, day] of DAYS.entries()) {
        const cell = headers[i + 1] as HTMLElement
        expect(cell).toHaveAttribute('scope', 'col')
        expect(cell).toHaveTextContent(day)
        expect(has(cell, 'text-[12px]')).toBe(true)
        expect(has(cell, 'font-medium')).toBe(true)
        expect(has(cell, 'uppercase')).toBe(true)
        expect(has(cell, 'text-headtext')).toBe(true)
        expect(has(cell, 'pt-6')).toBe(true)
        expect(has(cell, 'pb-5')).toBe(true)
        expect(has(cell, 'pl-[25px]')).toBe(true)
        expect(has(cell, 'pr-2.5')).toBe(true)
        expect(has(cell, 'w-[130px]')).toBe(true)
      }
      expect(has(corner, 'w-[265px]')).toBe(true)
      expect(has(corner, 'pl-[42px]')).toBe(true)
    })

    it('renders the canonical 8×7 schedule: scope="row" name cells + seven muted time cells per row', () => {
      render(<ScheduleTable variant={variant} />)
      const table = screen.getByRole('table')
      const rows = within(table).getAllByRole('row').slice(1)
      expect(rows).toHaveLength(8)
      for (const [rowIndex, row] of rows.entries()) {
        const staff = SCHEDULE[rowIndex]
        expect(staff).toBeDefined()
        const rowHeader = within(row).getAllByRole('rowheader')
        expect(rowHeader).toHaveLength(1)
        const nameCell = rowHeader[0] as HTMLElement
        expect(nameCell).toHaveAttribute('scope', 'row')
        expect(nameCell).toHaveTextContent(staff?.name ?? '')
        expect(has(nameCell, 'font-normal')).toBe(true)
        expect(has(nameCell, 'w-[265px]')).toBe(true)
        expect(has(nameCell, 'pl-[42px]')).toBe(true)
        const cells = within(row).getAllByRole('cell')
        expect(cells).toHaveLength(7)
        for (const [dayIndex, cell] of cells.entries()) {
          expect(cell).toHaveTextContent(staff?.times[dayIndex] ?? '')
          expect(has(cell, 'text-[14px]')).toBe(true)
          expect(has(cell, 'font-normal')).toBe(true)
          expect(has(cell, 'pt-[18px]')).toBe(true)
          expect(has(cell, 'pb-3.5')).toBe(true)
          expect(has(cell, 'pl-[25px]')).toBe(true)
          expect(has(cell, 'pr-2.5')).toBe(true)
          expect(has(cell, 'w-[130px]')).toBe(true)
        }
      }
    })

    it('renders inside a 110px-margin horizontal-scroll wrapper with the version band on headers', () => {
      render(<ScheduleTable variant={variant} />)
      const table = screen.getByRole('table')
      const wrapper = table.parentElement as HTMLElement
      expect(has(wrapper, 'mb-[110px]')).toBe(true)
      expect(has(wrapper, 'overflow-x-auto')).toBe(true)
      expect(has(table, 'w-full')).toBe(true)
      expect(has(table, 'min-w-[1240px]')).toBe(true)
      expect(has(table, 'border-collapse')).toBe(true)
      for (const cell of within(table).getAllByRole('columnheader')) {
        expect(has(cell, HEAD_BAND[variant])).toBe(true)
      }
    })

    it('puts the exact-cell hover treatment on body cells only (header cells stay hover-free)', () => {
      render(<ScheduleTable variant={variant} />)
      const table = screen.getByRole('table')
      for (const cell of within(table).getAllByRole('cell')) {
        expect(cell.className).toContain('hover:')
      }
      for (const cell of within(table).getAllByRole('rowheader')) {
        expect(cell.className).toContain('hover:')
      }
      for (const cell of within(table).getAllByRole('columnheader')) {
        expect((cell as HTMLElement).className).not.toContain('hover:')
      }
    })

    it('never makes cells keyboard-focusable (pointer-only crosshair)', () => {
      render(<ScheduleTable variant={variant} />)
      const table = screen.getByRole('table')
      const allCells = [
        ...within(table).getAllByRole('columnheader'),
        ...within(table).getAllByRole('rowheader'),
        ...within(table).getAllByRole('cell'),
      ]
      for (const cell of allCells) {
        expect(cell).not.toHaveAttribute('tabindex')
      }
    })
  })

  it('stripes even body rows mint in ver2 and ice in ver5 only', () => {
    for (const [variant, stripe] of [
      ['ver2', 'bg-ver2-stripe'],
      ['ver5', 'bg-ver5-stripe'],
    ] as const) {
      const { unmount } = render(<ScheduleTable variant={variant} />)
      const rows = within(screen.getByRole('table')).getAllByRole('row').slice(1)
      for (const [rowIndex, row] of rows.entries()) {
        for (const cell of within(row).getAllByRole('cell')) {
          expect(has(cell, stripe)).toBe(rowIndex % 2 === 1)
        }
        const nameCell = within(row).getAllByRole('rowheader')[0] as HTMLElement
        expect(has(nameCell, stripe)).toBe(rowIndex % 2 === 1)
      }
      unmount()
    }
    for (const variant of ['ver1', 'ver3', 'ver4', 'ver6'] as const) {
      const { unmount } = render(<ScheduleTable variant={variant} />)
      const row = within(screen.getByRole('table')).getAllByRole('row')[2] as HTMLElement
      for (const cell of within(row).getAllByRole('cell')) {
        expect(cell.className).not.toContain('-stripe')
      }
      unmount()
    }
  })

  it('draws 1px row separators in ver3 only', () => {
    const { unmount } = render(<ScheduleTable variant="ver3" />)
    const rows = within(screen.getByRole('table')).getAllByRole('row').slice(1)
    for (const row of rows) {
      expect(has(row, 'border-b')).toBe(true)
      expect(has(row, 'border-ver3-border')).toBe(true)
    }
    unmount()
    for (const variant of ['ver1', 'ver2', 'ver4', 'ver5', 'ver6'] as const) {
      const { unmount: teardown } = render(<ScheduleTable variant={variant} />)
      const row = within(screen.getByRole('table')).getAllByRole('row')[1] as HTMLElement
      expect(has(row, 'border-b')).toBe(false)
      teardown()
    }
  })

  it('renders ver6 as a rounded gradient card with a transparent table and white cells', () => {
    render(<ScheduleTable variant="ver6" />)
    const table = screen.getByRole('table')
    const wrapper = table.parentElement as HTMLElement
    expect(has(wrapper, 'rounded-2xl')).toBe(true)
    expect(has(wrapper, 'bg-ver6-fallback')).toBe(true)
    expect(has(wrapper, 'bg-[linear-gradient(-68deg,#ac32e4,#4801ff)]')).toBe(true)
    expect(has(table, 'bg-transparent')).toBe(true)
    for (const cell of within(table).getAllByRole('cell')) {
      expect(has(cell, 'text-headtext')).toBe(true)
      expect(has(cell, 'text-celltext')).toBe(false)
    }
    for (const cell of within(table).getAllByRole('rowheader')) {
      expect(has(cell, 'text-headtext')).toBe(true)
    }
  })

  describe('crosshair hover behavior', () => {
    it('highlights the whole column, its header, and marks the exact cell on body-cell hover (ver1)', () => {
      render(<ScheduleTable variant="ver1" />)
      const table = screen.getByRole('table')
      // Tuesday is column index 2 → every row's third time cell.
      const rows = within(table).getAllByRole('row').slice(1)
      const tuesday = rows.map((row) => within(row).getAllByRole('cell')[2] as HTMLElement)
      expect(tuesday).toHaveLength(8)
      fireEvent.mouseOver(tuesday[3] as HTMLElement) // Beverly Reid × Tuesday
      for (const cell of tuesday) {
        expect(has(cell, COL_BODY.ver1)).toBe(true)
      }
      const headers = within(table).getAllByRole('columnheader')
      expect(has(headers[3] as Element, COL_HEAD.ver1)).toBe(true)
      // Other columns untouched.
      const monday = rows.map((row) => within(row).getAllByRole('cell')[1] as HTMLElement)
      for (const cell of monday) {
        expect(has(cell, COL_BODY.ver1)).toBe(false)
      }
      expect(has(headers[2] as Element, COL_HEAD.ver1)).toBe(false)
    })

    it('tracks the hovered column across cells and swaps when the pointer crosses columns', () => {
      render(<ScheduleTable variant="ver2" />)
      const table = screen.getByRole('table')
      const rows = within(table).getAllByRole('row').slice(1)
      const monday = rows.map((row) => within(row).getAllByRole('cell')[1] as HTMLElement)
      const friday = rows.map((row) => within(row).getAllByRole('cell')[5] as HTMLElement)
      fireEvent.mouseOver(monday[0] as HTMLElement)
      for (const cell of monday) {
        expect(has(cell, COL_BODY.ver2)).toBe(true)
      }
      fireEvent.mouseOver(friday[0] as HTMLElement)
      for (const cell of monday) {
        expect(has(cell, COL_BODY.ver2)).toBe(false)
      }
      for (const cell of friday) {
        expect(has(cell, COL_BODY.ver2)).toBe(true)
      }
      const headers = within(table).getAllByRole('columnheader')
      expect(has(headers[2] as Element, COL_HEAD.ver2)).toBe(false)
      expect(has(headers[6] as Element, COL_HEAD.ver2)).toBe(true)
    })

    it('clears the column highlight when the pointer leaves the table wrapper', () => {
      render(<ScheduleTable variant="ver3" />)
      const table = screen.getByRole('table')
      const wrapper = table.parentElement as HTMLElement
      const rows = within(table).getAllByRole('row').slice(1)
      const wednesday = rows.map((row) => within(row).getAllByRole('cell')[3] as HTMLElement)
      fireEvent.mouseOver(wednesday[0] as HTMLElement)
      for (const cell of wednesday) {
        expect(has(cell, COL_BODY.ver3)).toBe(true)
      }
      leaveTable(wrapper)
      for (const cell of wednesday) {
        expect(has(cell, COL_BODY.ver3)).toBe(false)
      }
      const headers = within(table).getAllByRole('columnheader')
      expect(has(headers[4] as Element, COL_HEAD.ver3)).toBe(false)
    })

    it('engages the column from a header-cell hover with the head treatment (ver4)', () => {
      render(<ScheduleTable variant="ver4" />)
      const table = screen.getByRole('table')
      const thursdayHeader = within(table).getAllByRole('columnheader')[5] as HTMLElement
      fireEvent.mouseOver(thursdayHeader)
      expect(has(thursdayHeader, COL_HEAD.ver4)).toBe(true)
      const rows = within(table).getAllByRole('row').slice(1)
      const thursday = rows.map((row) => within(row).getAllByRole('cell')[4] as HTMLElement)
      for (const cell of thursday) {
        expect(has(cell, COL_BODY.ver4)).toBe(true)
      }
    })

    it('highlights the name column from the corner cell hover (ver1)', () => {
      render(<ScheduleTable variant="ver1" />)
      const table = screen.getByRole('table')
      const corner = within(table).getAllByRole('columnheader')[0] as HTMLElement
      fireEvent.mouseOver(corner)
      expect(has(corner, COL_HEAD.ver1)).toBe(true)
      for (const cell of within(table).getAllByRole('rowheader')) {
        expect(has(cell, COL_BODY.ver1)).toBe(true)
      }
    })

    it("gives ver6's header cell the PLAIN column treatment (no distinct head rule)", () => {
      render(<ScheduleTable variant="ver6" />)
      const table = screen.getByRole('table')
      const rows = within(table).getAllByRole('row').slice(1)
      const saturday = rows.map((row) => within(row).getAllByRole('cell')[6] as HTMLElement)
      fireEvent.mouseOver(saturday[0] as HTMLElement)
      for (const cell of saturday) {
        expect(has(cell, 'bg-ver6-row')).toBe(true)
      }
      const saturdayHeader = within(table).getAllByRole('columnheader')[7] as HTMLElement
      expect(has(saturdayHeader, 'bg-ver6-row')).toBe(true)
      expect(has(saturdayHeader, 'bg-ver6-head')).toBe(false)
    })

    it('applies the ver5 border-overlay treatments on column and exact-cell hover', () => {
      render(<ScheduleTable variant="ver5" />)
      const table = screen.getByRole('table')
      const rows = within(table).getAllByRole('row').slice(1)
      const monday = rows.map((row) => within(row).getAllByRole('cell')[1] as HTMLElement)
      fireEvent.mouseOver(monday[1] as HTMLElement)
      for (const cell of monday) {
        expect(has(cell, 'border-x')).toBe(true)
        expect(has(cell, 'border-ver5-side')).toBe(true)
        expect(has(cell, 'text-ver5-accent')).toBe(true)
      }
      const mondayHeader = within(table).getAllByRole('columnheader')[2] as HTMLElement
      expect(has(mondayHeader, 'bg-ver5-colhead')).toBe(true)
      expect(has(mondayHeader, 'text-ver5-accent')).toBe(true)
      expect(has(mondayHeader, 'border-x')).toBe(true)
      // Exact-cell ring treatment (all ver5 body cells carry it statically).
      for (const cell of within(table).getAllByRole('cell')) {
        expect(cell.className).toContain('hover:ring-1')
        expect(cell.className).toContain('hover:ring-ver5-accent')
      }
    })
  })
})
