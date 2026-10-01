import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ProductTable } from './ProductTable'
import { products } from '../data/products'

function getTbodyRows(container: HTMLElement): HTMLElement[] {
  return Array.from(container.querySelectorAll('tbody tr'))
}

describe('ProductTable', () => {
  it('renders a horizontally scrollable white table card with min-width and soft shadow', () => {
    const { container } = render(<ProductTable />)
    const wrapper = container.firstElementChild as HTMLElement
    expect(wrapper.className).toContain('overflow-x-auto')
    const table = screen.getByRole('table')
    expect(table.className).toContain('w-full')
    expect(table.className).toContain('min-w-[1000px]')
    expect(table.className).toContain('border-collapse')
    expect(table.className).toContain('shadow-[0_5px_12px_-12px_var(--color-cardshadow)]')
    expect(table.className).toContain('text-cell')
  })

  it('renders the six-column header row with scoped cells and the canonical labels', () => {
    render(<ProductTable />)
    const headerRow = screen.getAllByRole('row')[0] as HTMLElement
    const cells = within(headerRow).getAllByRole('columnheader')
    expect(cells).toHaveLength(6)
    expect(cells.map((cell) => cell.textContent)).toEqual([
      '#',
      'Product Name',
      'Price',
      'Quantity',
      'Total',
      '',
    ])
    expect(cells[5]).toHaveAttribute('aria-label', 'Details')
    for (const cell of cells) {
      expect(cell).toHaveAttribute('scope', 'col')
      expect(cell.className).toContain('font-bold')
      expect(cell.className).toContain('text-[14px]')
      expect(cell.className).toContain('text-heading')
      expect(cell.className).toContain('bg-white')
      expect(cell.className).toContain('border-b-2')
      expect(cell.className).toContain('border-rule')
      expect(cell.className).toContain('p-[30px]')
    }
  })

  it('renders the canonical product data in four keyboard-focusable trigger rows', () => {
    const { container } = render(<ProductTable />)
    const rows = getTbodyRows(container)
    expect(rows).toHaveLength(products.length * 2)
    products.forEach((product, index) => {
      const trigger = rows[index * 2] as HTMLElement
      const cells = trigger.querySelectorAll('th, td')
      expect(cells).toHaveLength(6)
      expect(cells[0]).toHaveTextContent(String(product.n))
      expect(cells[0]).toHaveAttribute('scope', 'row')
      expect(cells[0]?.className).toContain('font-bold')
      expect(cells[1]).toHaveTextContent(product.name)
      expect(cells[2]).toHaveTextContent(product.price)
      expect(cells[3]).toHaveTextContent(product.quantity)
      expect(cells[4]).toHaveTextContent(product.total)
      for (const cell of Array.from(cells)) {
        expect(cell.className).toContain('border-none')
        expect(cell.className).toContain('p-[30px]')
        expect(cell.className).toContain('text-[14px]')
      }
      expect(trigger).toHaveAttribute('tabindex', '0')
      expect(trigger.className).toContain('cursor-pointer')
      expect(trigger.className).toContain('border-b-2')
      expect(trigger.className).toContain('border-rule')
    })
  })

  it('opens row 1 initially with the up chevron, shaded band, and wired aria attributes', () => {
    const { container } = render(<ProductTable />)
    const rows = getTbodyRows(container)
    const first = rows[0] as HTMLElement
    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(first).toHaveAttribute('aria-controls', 'panel-1')
    expect(first.className).toContain('bg-openrow')
    const icon = first.querySelector('svg')
    expect(icon).toHaveAttribute('aria-hidden', 'true')
    expect(icon?.getAttribute('class')).toContain('lucide-chevron-up')
    expect(icon?.getAttribute('class')).toContain('h-3 w-3')
    expect(icon?.getAttribute('class')).toContain('text-accent')
    for (const index of [1, 2, 3]) {
      const row = rows[index * 2] as HTMLElement
      expect(row).toHaveAttribute('aria-expanded', 'false')
      expect(row).toHaveAttribute('aria-controls', `panel-${index + 1}`)
      expect(row.className).toContain('bg-white')
      expect(row.className).toContain('hover:bg-openrow')
      expect(row.className).toContain('transition-colors')
      const icon = row.querySelector('svg')
      expect(icon?.getAttribute('class')).toContain('lucide-chevron-down')
    }
  })

  it('keeps all four panels in the DOM with only the open one expanded', () => {
    const { container } = render(<ProductTable />)
    const rows = getTbodyRows(container)
    products.forEach((product, index) => {
      const panelRow = rows[index * 2 + 1] as HTMLElement
      const td = panelRow.querySelector('td') as HTMLElement
      expect(td).toHaveAttribute('colspan', '6')
      expect(td).toHaveAttribute('id', `panel-${product.id}`)
      expect(td.className).toContain('bg-panel')
      expect(td.className).toContain('border-none')
      expect(td.className).toContain('p-0')
      const animated = td.firstElementChild as HTMLElement
      if (index === 0) {
        expect(panelRow).not.toHaveAttribute('aria-hidden')
        expect(animated.className).toContain('grid-rows-[1fr]')
      } else {
        expect(panelRow).toHaveAttribute('aria-hidden', 'true')
        expect(animated.className).toContain('grid-rows-[0fr]')
      }
    })
  })

  it('animates panel height with grid rows and disables motion under reduced-motion', () => {
    const { container } = render(<ProductTable />)
    const rows = getTbodyRows(container)
    const panelRow = rows[1] as HTMLElement
    const animated = panelRow.querySelector('td')?.firstElementChild as HTMLElement
    expect(animated.className).toContain('grid')
    expect(animated.className).toContain('transition-[grid-template-rows]')
    expect(animated.className).toContain('duration-[350ms]')
    expect(animated.className).toContain('ease-out')
    expect(animated.className).toContain('motion-reduce:transition-none')
    const inner = animated.firstElementChild as HTMLElement
    expect(inner.className).toContain('overflow-hidden')
    expect(inner.className).toContain('min-h-0')
    expect(panelRow.querySelector('p')?.className).toContain('p-[30px]')
    expect(panelRow.querySelector('p')?.className).toContain('text-[14px]')
  })

  it('opens a clicked row and closes the previously open one (single-open accordion)', async () => {
    const user = userEvent.setup()
    const { container } = render(<ProductTable />)
    const rows = getTbodyRows(container)
    const third = rows[4] as HTMLElement
    const first = rows[0] as HTMLElement
    await user.click(third)
    expect(third).toHaveAttribute('aria-expanded', 'true')
    expect(third.className).toContain('bg-openrow')
    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(first.className).toContain('bg-white')
    expect(rows[1]).toHaveAttribute('aria-hidden', 'true')
    expect(rows[5]).not.toHaveAttribute('aria-hidden')
  })

  it('closes the open row when clicked again', async () => {
    const user = userEvent.setup()
    const { container } = render(<ProductTable />)
    const rows = getTbodyRows(container)
    const first = rows[0] as HTMLElement
    await user.click(first)
    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(rows[1]).toHaveAttribute('aria-hidden', 'true')
    for (let index = 0; index < products.length; index++) {
      const trigger = rows[index * 2] as HTMLElement
      expect(trigger).toHaveAttribute('aria-expanded', 'false')
      expect(trigger.className).toContain('bg-white')
    }
  })

  it('toggles rows with Enter and Space keys and ignores other keys', async () => {
    const user = userEvent.setup()
    const { container } = render(<ProductTable />)
    const rows = getTbodyRows(container)
    const second = rows[2] as HTMLElement
    second.focus()
    await user.keyboard('{Enter}')
    expect(second).toHaveAttribute('aria-expanded', 'true')
    await user.keyboard('{Enter}')
    expect(second).toHaveAttribute('aria-expanded', 'false')
    await user.keyboard(' ')
    expect(second).toHaveAttribute('aria-expanded', 'true')
    await user.keyboard('{Tab}')
    expect(second).toHaveAttribute('aria-expanded', 'true')
  })
})
