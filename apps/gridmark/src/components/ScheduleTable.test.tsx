import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { ScheduleTable } from './ScheduleTable'
import { days, scheduleRows } from '../data/schedule'

/** Expected cell pattern per row: 'x' = no-class mark, number = class card (image seed). */
const expectedPattern: ('x' | number)[][] = [
  ['x', 1, 'x', 2, 'x', 3, 'x'],
  [4, 'x', 5, 'x', 6, 'x', 7],
  ['x', 1, 'x', 2, 'x', 3, 'x'],
  [4, 'x', 5, 'x', 6, 'x', 7],
  [1, 'x', 2, 3, 'x', 4, 5],
]

describe('ScheduleTable', () => {
  it('renders one bordered table inside a horizontal-scroll wrapper', () => {
    render(<ScheduleTable />)
    const table = screen.getByRole('table')
    expect(table).toBeInTheDocument()
    expect(table.className).toContain('w-full')
    expect(table.className).toContain('min-w-[1000px]')
    expect(table.className).toContain('bg-surface')
    expect(table.className).toContain('text-center')
    expect(table.className).toContain('border-collapse')
    expect(table.className).toContain('border-line')
    expect(table.className).toContain('shadow-[0_5px_12px_-12px_rgba(0,0,0,0.29)]')
    expect(table.className).toContain('mb-4')
    const wrapper = table.parentElement as HTMLElement
    expect(wrapper.className).toContain('overflow-x-auto')
  })

  it('renders the seven borderless bold black day headers', () => {
    render(<ScheduleTable />)
    const table = screen.getByRole('table')
    const thead = table.querySelector('thead')
    const headerCells = within(thead as HTMLElement).getAllByRole('columnheader')
    expect(headerCells.map((cell) => cell.textContent)).toEqual([...days])
    for (const cell of headerCells) {
      expect(cell).toHaveAttribute('scope', 'col')
      expect(cell.className).toContain('font-bold')
      expect(cell.className).toContain('text-heading')
      expect(cell.className).toContain('text-[14px]')
      expect(cell.className).toContain('p-[30px]')
      expect(cell.className).toContain('text-center')
      expect(cell.className).toContain('align-bottom')
      expect(cell.className).toContain('border-none')
      // no colored header band — black labels on the white page
      expect(cell.className).not.toContain('bg-')
    }
    expect(thead?.className).not.toContain('bg-')
  })

  it('renders five body rows of seven bordered middle-aligned cells', () => {
    render(<ScheduleTable />)
    const table = screen.getByRole('table')
    const bodyRows = within(table.querySelector('tbody') as HTMLElement).getAllByRole('row')
    expect(bodyRows).toHaveLength(5)
    for (const row of bodyRows) {
      expect(row.className).toContain('mb-[10px]')
    }
    const cells = within(table.querySelector('tbody') as HTMLElement).getAllByRole('cell')
    expect(cells).toHaveLength(35)
    for (const cell of cells) {
      expect(cell.className).toContain('border-line')
      expect(cell.className).toContain('bg-surface')
      expect(cell.className).toContain('p-[30px]')
      expect(cell.className).toContain('text-[14px]')
      expect(cell.className).toContain('align-middle')
      expect(cell.className).toContain('text-center')
      expect(cell.className).toContain('hover:bg-hover')
      expect(cell.className).toContain('duration-500')
      expect(cell.className).toContain('motion-reduce:transition-none')
    }
  })

  it('follows the canonical X/class pattern row by row', () => {
    const { container } = render(<ScheduleTable />)
    const table = container.querySelector('table') as HTMLElement
    const body = table.querySelector('tbody') as HTMLElement
    const rows = Array.from(body.querySelectorAll('tr'))
    rows.forEach((row, rowIndex) => {
      const cells = Array.from(row.querySelectorAll('td'))
      expect(cells).toHaveLength(7)
      cells.forEach((cell, cellIndex) => {
        const expected = expectedPattern[rowIndex]?.[cellIndex]
        const isCard = cell.querySelector('a') !== null
        const isMark = cell.querySelector('svg') !== null
        if (expected === 'x') {
          expect(isMark).toBe(true)
          expect(isCard).toBe(false)
        } else {
          expect(isCard).toBe(true)
          expect(isMark).toBe(false)
          // the card's circular image carries the expected seed
          const img = cell.querySelector('div') as HTMLElement
          expect(img.style.backgroundImage).toContain(
            `picsum.photos/seed/gridmark-${expected}/180/180`,
          )
        }
      })
    })
  })

  it('renders 16 decorative × marks at 12px faint gray', () => {
    render(<ScheduleTable />)
    const table = screen.getByRole('table')
    const cells = within(table.querySelector('tbody') as HTMLElement).getAllByRole('cell')
    const markCells = cells.filter((cell) => cell.querySelector('svg') !== null)
    expect(markCells).toHaveLength(16)
    for (const cell of markCells) {
      expect(cell.children).toHaveLength(1)
      const icon = cell.querySelector('svg')
      expect(icon).toHaveAttribute('aria-hidden', 'true')
      expect(icon).toHaveAttribute('width', '12')
      expect(icon).toHaveAttribute('height', '12')
      expect(icon?.getAttribute('class')).toContain('text-mark')
    }
  })

  it('renders 19 class cards with circular images, bold labels, and salmon times', () => {
    render(<ScheduleTable />)
    const table = screen.getByRole('table')
    const cells = within(table.querySelector('tbody') as HTMLElement).getAllByRole('cell')
    const cardCells = cells.filter((cell) => cell.querySelector('a') !== null)
    expect(cardCells).toHaveLength(19)
    for (const cell of cardCells) {
      const img = cell.querySelector('div') as HTMLElement
      expect(img.className).toContain('h-[90px]')
      expect(img.className).toContain('w-[90px]')
      expect(img.className).toContain('rounded-full')
      expect(img.className).toContain('bg-cover')
      expect(img.className).toContain('bg-center')
      expect(img.className).toContain('mx-auto')
      expect(img.className).toContain('mb-2')
      expect(img.style.backgroundImage).toContain('https://picsum.photos/seed/gridmark-')
      const link = cell.querySelector('a') as HTMLElement
      expect(link).toHaveAttribute('href', '#')
      expect(link.className).toContain('block')
      expect(link.className).toContain('text-[12px]')
      expect(link.className).toContain('font-normal')
      expect(link.className).toContain('text-accent')
      expect(link.className).toContain('focus-visible:ring-2')
      expect(link.className).toContain('focus-visible:ring-accent/60')
      const label = link.querySelector('strong') as HTMLElement
      expect(label).toHaveTextContent('Yoga training')
      expect(label.className).toContain('font-semibold')
      expect(label.className).toContain('text-label')
      expect(link.textContent).toContain('7 am-6 am')
    }
  })

  it('cycles the seven image seeds across the 19 cards in source order', () => {
    const { container } = render(<ScheduleTable />)
    const imgs = Array.from(container.querySelectorAll<HTMLElement>('tbody div'))
    const seeds = imgs.map((img) => {
      const match = /gridmark-(\d+)/.exec(img.style.backgroundImage)
      return match?.[1]
    })
    expect(seeds).toEqual([
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '1',
      '2',
      '3',
      '4',
      '5',
    ])
  })

  it('renders the month-navigation footer row with September and November links', () => {
    render(<ScheduleTable />)
    const table = screen.getByRole('table')
    const footCells = Array.from(table.querySelectorAll('tfoot th'))
    expect(footCells).toHaveLength(7)
    for (const cell of footCells) {
      expect(cell.className).toContain('border-line')
      expect(cell.className).toContain('p-3')
      expect(cell.className).toContain('text-center')
      expect(cell.className).toContain('align-top')
      expect(cell.className).toContain('text-[16px]')
      expect(cell.className).toContain('font-bold')
    }
    // middle five cells are empty
    for (const cell of footCells.slice(1, 6)) {
      expect(cell.textContent).toBe('')
    }
    // first cell: left arrow + September link
    const september = screen.getByRole('link', { name: 'September' })
    expect(september).toHaveAttribute('href', '#')
    expect(september.className).toContain('inline')
    expect(september.className).toContain('text-[16px]')
    expect(september.className).toContain('font-normal')
    expect(september.className).toContain('text-heading')
    expect(september.className).toContain('hover:text-accent')
    expect(september.className).toContain('transition-colors')
    expect(september.className).toContain('duration-300')
    expect(september.className).toContain('focus-visible:ring-2')
    expect(september.className).toContain('focus-visible:ring-accent/60')
    const leftArrow = september.querySelector('svg')
    expect(leftArrow).toHaveAttribute('aria-hidden', 'true')
    expect(leftArrow).toHaveAttribute('width', '12')
    expect(september.firstElementChild).toBe(leftArrow)
    expect(september.textContent).toContain('September')
    // last cell: November link + right arrow
    const november = screen.getByRole('link', { name: 'November' })
    expect(november).toHaveAttribute('href', '#')
    expect(november.className).toContain('text-heading')
    expect(november.className).toContain('hover:text-accent')
    const rightArrow = november.querySelector('svg')
    expect(rightArrow).toHaveAttribute('aria-hidden', 'true')
    expect(rightArrow).toHaveAttribute('width', '12')
    expect(november.lastElementChild).toBe(rightArrow)
    expect(november.textContent).toContain('November')
  })

  it('keeps the schedule data module in sync with the rendered grid', () => {
    render(<ScheduleTable />)
    expect(scheduleRows).toHaveLength(5)
    const allCells = scheduleRows.flat()
    expect(allCells).toHaveLength(35)
    expect(allCells.filter((cell) => cell === null)).toHaveLength(16)
    expect(allCells.filter((cell) => cell !== null)).toHaveLength(19)
    const seeds = allCells.filter((cell) => cell !== null).map((cell) => cell?.seed)
    expect(seeds).toEqual([1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5])
    // row 5 intentionally has adjacent cards on Wednesday and Thursday
    expect(scheduleRows[4]?.[2]).not.toBeNull()
    expect(scheduleRows[4]?.[3]).not.toBeNull()
    expect(scheduleRows[4]?.[4]).toBeNull()
  })
})
