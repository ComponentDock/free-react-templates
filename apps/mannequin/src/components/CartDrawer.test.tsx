import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CartDrawer, type CartItem } from './CartDrawer'
import { products } from '../data'

/** Neutralize jsdom hash-navigation for in-page `href="#..."` anchors
 *  (native target listeners run before React's delegated handler, so the
 *  React onClick still fires; only navigation is neutralized). */
function guardAnchor(element: HTMLElement) {
  element.addEventListener(
    'click',
    (event) => {
      event.preventDefault()
    },
    { once: true },
  )
}

const items: CartItem[] = [
  { product: products[0]!, quantity: 2 },
  { product: products[1]!, quantity: 1 },
]

describe('CartDrawer', () => {
  it('renders item rows, quantities and the total', () => {
    render(<CartDrawer items={items} total={184.31} onClose={vi.fn()} />)
    expect(screen.getByRole('dialog', { name: 'Shopping cart' })).toBeInTheDocument()
    expect(screen.getByText(products[0]!.name)).toBeInTheDocument()
    expect(screen.getByText('2 × $75.00')).toBeInTheDocument()
    expect(screen.getByText('1 × $35.31')).toBeInTheDocument()
    expect(screen.getByText('$184.31')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'View Cart' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Check Out' })).toBeInTheDocument()
  })

  it('shows an empty message when there are no items', () => {
    render(<CartDrawer items={[]} total={0} onClose={vi.fn()} />)
    expect(screen.getByText('Your cart is empty.')).toBeInTheDocument()
  })

  it('closes on Escape and overlay click', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<CartDrawer items={items} total={184.31} onClose={onClose} />)

    await user.keyboard('{Escape}')
    expect(onClose).toHaveBeenCalledTimes(1)

    const dialog = screen.getByRole('dialog')
    await user.click(dialog)
    expect(onClose).toHaveBeenCalledTimes(2)

    await user.click(screen.getByRole('button', { name: 'Close cart' }))
    expect(onClose).toHaveBeenCalledTimes(3)

    guardAnchor(screen.getByRole('link', { name: 'View Cart' }))
    await user.click(screen.getByRole('link', { name: 'View Cart' }))
    expect(onClose).toHaveBeenCalledTimes(4)

    guardAnchor(screen.getByRole('link', { name: 'Check Out' }))
    await user.click(screen.getByRole('link', { name: 'Check Out' }))
    expect(onClose).toHaveBeenCalledTimes(5)
  })

  it('ignores non-Escape keys', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<CartDrawer items={items} total={184.31} onClose={onClose} />)

    await user.keyboard('{Enter}')
    expect(onClose).not.toHaveBeenCalled()
  })
})
