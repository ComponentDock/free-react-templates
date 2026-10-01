import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CartRow } from './CartRow'
import type { CartItem } from '../data/products'

const item: CartItem = {
  id: '1',
  name: 'Sneakers Shoes 2020 For Men',
  blurb: 'Fugiat voluptates quasi nemo, ipsa perferendis',
  unitPrice: 44.99,
  quantity: 2,
  checked: true,
  thumbSeed: 'rowline-1',
}

describe('CartRow', () => {
  it('renders seven cells in the source order', () => {
    const { container } = render(
      <table>
        <tbody>
          <CartRow item={item} onToggle={vi.fn()} onQuantity={vi.fn()} onRemove={vi.fn()} />
        </tbody>
      </table>,
    )
    const row = container.querySelector('tr') as HTMLElement
    const cells = within(row).getAllByRole('cell')
    expect(cells).toHaveLength(7)
  })

  it('renders white band cells with the source tokens and the last-row separator rule', () => {
    const { container } = render(
      <table>
        <tbody>
          <CartRow item={item} onToggle={vi.fn()} onQuantity={vi.fn()} onRemove={vi.fn()} />
        </tbody>
      </table>,
    )
    const row = container.querySelector('tr') as HTMLElement
    expect(row.className).toContain('mb-[10px]')
    expect(row.className).toContain('border-b-4')
    expect(row.className).toContain('border-page')
    expect(row.className).toContain('last:border-b-0')
    const cells = within(row).getAllByRole('cell')
    for (const cell of cells) {
      expect(cell.className).toContain('bg-white')
      expect(cell.className).toContain('p-[30px]')
      expect(cell.className).toContain('text-[14px]')
      expect(cell.className).toContain('align-middle')
      expect(cell.className).toContain('border-none')
    }
    expect(cells[4]?.className).toContain('w-[10%]')
  })

  it('renders the checkbox cell with an accessible name for the product', () => {
    render(<CartRow item={item} onToggle={vi.fn()} onQuantity={vi.fn()} onRemove={vi.fn()} />)
    const checkbox = screen.getByRole('checkbox', { name: 'Select Sneakers Shoes 2020 For Men' })
    expect(checkbox).toBeChecked()
  })

  it('renders the 100×80 picsum thumbnail cell', () => {
    const { container } = render(
      <CartRow item={item} onToggle={vi.fn()} onQuantity={vi.fn()} onRemove={vi.fn()} />,
    )
    const thumb = container.querySelector('[aria-hidden="true"].bg-cover') as HTMLElement | null
    expect(thumb).toBeInTheDocument()
    expect(thumb?.className).toContain('h-[80px]')
    expect(thumb?.className).toContain('w-[100px]')
    expect(thumb?.className).toContain('bg-center')
    expect(thumb?.style.backgroundImage).toContain('picsum.photos/seed/rowline-1/200/160')
  })

  it('renders the product name and blurb stacked in the product cell', () => {
    render(<CartRow item={item} onToggle={vi.fn()} onQuantity={vi.fn()} onRemove={vi.fn()} />)
    expect(screen.getByText('Sneakers Shoes 2020 For Men')).toBeInTheDocument()
    const blurb = screen.getByText('Fugiat voluptates quasi nemo, ipsa perferendis')
    expect(blurb.className).toContain('text-[12px]')
    expect(blurb.className).toContain('text-subtext')
  })

  it('renders the unit price, quantity input, and line total', () => {
    render(<CartRow item={item} onToggle={vi.fn()} onQuantity={vi.fn()} onRemove={vi.fn()} />)
    expect(screen.getByText('$44.99')).toBeInTheDocument()
    expect(screen.getByText('$89.98')).toBeInTheDocument()
    const input = screen.getByRole('textbox')
    expect(input).toHaveValue('2')
  })

  it('calls onToggle with the item id when the checkbox changes', async () => {
    const user = userEvent.setup()
    const handleToggle = vi.fn()
    render(<CartRow item={item} onToggle={handleToggle} onQuantity={vi.fn()} onRemove={vi.fn()} />)
    await user.click(screen.getByRole('checkbox', { name: 'Select Sneakers Shoes 2020 For Men' }))
    expect(handleToggle).toHaveBeenCalledWith('1')
  })

  it('calls onQuantity with the item id and value when the quantity changes', () => {
    const handleQuantity = vi.fn()
    render(
      <CartRow item={item} onToggle={vi.fn()} onQuantity={handleQuantity} onRemove={vi.fn()} />,
    )
    fireEvent.change(screen.getByRole('textbox'), { target: { value: '4' } })
    expect(handleQuantity).toHaveBeenCalledWith('1', 4)
  })

  it('calls onRemove with the item id when the remove button is clicked', async () => {
    const user = userEvent.setup()
    const handleRemove = vi.fn()
    render(<CartRow item={item} onToggle={vi.fn()} onQuantity={vi.fn()} onRemove={handleRemove} />)
    await user.click(screen.getByRole('button', { name: 'Close' }))
    expect(handleRemove).toHaveBeenCalledWith('1')
  })
})
