import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { CartDropdown } from './CartDropdown'

describe('CartDropdown', () => {
  it('renders the cart trigger button', () => {
    render(<CartDropdown />)
    expect(screen.getByRole('button', { name: /Cart \(\d+\)/ })).toBeInTheDocument()
  })

  it('shows initial item count', () => {
    render(<CartDropdown />)
    expect(screen.getByRole('button', { name: 'Cart (4)' })).toBeInTheDocument()
  })

  it('does not show dropdown initially', () => {
    render(<CartDropdown />)
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('opens dropdown when cart button clicked', async () => {
    const user = userEvent.setup()
    render(<CartDropdown />)
    await user.click(screen.getByRole('button', { name: /Cart/ }))
    expect(screen.getByRole('menu')).toBeInTheDocument()
  })

  it('renders all three cart items when open', async () => {
    const user = userEvent.setup()
    render(<CartDropdown />)
    await user.click(screen.getByRole('button', { name: /Cart/ }))
    expect(screen.getByText('Wireless Headphones')).toBeInTheDocument()
    expect(screen.getByText('Smart Watch')).toBeInTheDocument()
    expect(screen.getByText('Leather Wallet')).toBeInTheDocument()
  })

  it('displays correct total price', async () => {
    const user = userEvent.setup()
    render(<CartDropdown />)
    await user.click(screen.getByRole('button', { name: /Cart/ }))
    // 49.99 + 89.50 + 29.95*2 = 49.99 + 89.50 + 59.90 = 199.39
    expect(screen.getByText('$199.39')).toBeInTheDocument()
  })

  it('increments quantity when + clicked', async () => {
    const user = userEvent.setup()
    render(<CartDropdown />)
    await user.click(screen.getByRole('button', { name: /Cart/ }))
    const increaseBtn = screen.getByRole('button', {
      name: 'Increase quantity of Wireless Headphones',
    })
    await user.click(increaseBtn)
    // After increment: 49.99*2 + 89.50 + 29.95*2 = 99.98 + 89.50 + 59.90 = 249.38
    expect(screen.getByText('$249.38')).toBeInTheDocument()
  })

  it('decrements quantity when - clicked', async () => {
    const user = userEvent.setup()
    render(<CartDropdown />)
    await user.click(screen.getByRole('button', { name: /Cart/ }))
    const decreaseBtn = screen.getByRole('button', {
      name: 'Decrease quantity of Leather Wallet',
    })
    // Leather Wallet starts at qty 2, decrease to 1
    await user.click(decreaseBtn)
    // After decrement: 49.99 + 89.50 + 29.95 = 169.44
    expect(screen.getByText('$169.44')).toBeInTheDocument()
  })

  it('removes item when X clicked', async () => {
    const user = userEvent.setup()
    render(<CartDropdown />)
    await user.click(screen.getByRole('button', { name: /Cart/ }))
    const removeBtn = screen.getByRole('button', {
      name: 'Remove Smart Watch from cart',
    })
    await user.click(removeBtn)
    expect(screen.queryByText('Smart Watch')).not.toBeInTheDocument()
  })

  it('closes dropdown when Continue Shopping clicked', async () => {
    const user = userEvent.setup()
    render(<CartDropdown />)
    await user.click(screen.getByRole('button', { name: /Cart/ }))
    expect(screen.getByRole('menu')).toBeInTheDocument()
    await user.click(screen.getByText('Continue Shopping'))
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('does not close on non-Escape key', async () => {
    const user = userEvent.setup()
    render(<CartDropdown />)
    await user.click(screen.getByRole('button', { name: /Cart/ }))
    expect(screen.getByRole('menu')).toBeInTheDocument()
    await user.keyboard('{ArrowDown}')
    expect(screen.getByRole('menu')).toBeInTheDocument()
  })

  it('closes dropdown on Escape key', async () => {
    const user = userEvent.setup()
    render(<CartDropdown />)
    await user.click(screen.getByRole('button', { name: /Cart/ }))
    expect(screen.getByRole('menu')).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('closes dropdown on outside click', async () => {
    const user = userEvent.setup()
    render(
      <div>
        <CartDropdown />
        <button>Outside</button>
      </div>,
    )
    await user.click(screen.getByRole('button', { name: /Cart/ }))
    expect(screen.getByRole('menu')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Outside' }))
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('sets aria-haspopup and aria-expanded on trigger', async () => {
    const user = userEvent.setup()
    render(<CartDropdown />)
    const trigger = screen.getByRole('button', { name: /Cart/ })
    expect(trigger).toHaveAttribute('aria-haspopup', 'menu')
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    await user.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
  })

  it('renders Checkout button', async () => {
    const user = userEvent.setup()
    render(<CartDropdown />)
    await user.click(screen.getByRole('button', { name: /Cart/ }))
    expect(screen.getByRole('menuitem', { name: 'Checkout' })).toBeInTheDocument()
  })

  it('renders product images', async () => {
    const user = userEvent.setup()
    render(<CartDropdown />)
    await user.click(screen.getByRole('button', { name: /Cart/ }))
    expect(screen.getByAltText('Wireless Headphones')).toBeInTheDocument()
    expect(screen.getByAltText('Smart Watch')).toBeInTheDocument()
    expect(screen.getByAltText('Leather Wallet')).toBeInTheDocument()
  })

  it('shows empty cart message when all items removed', async () => {
    const user = userEvent.setup()
    render(<CartDropdown />)
    await user.click(screen.getByRole('button', { name: /Cart/ }))
    // Remove all 3 items
    await user.click(screen.getByRole('button', { name: 'Remove Wireless Headphones from cart' }))
    await user.click(screen.getByRole('button', { name: 'Remove Smart Watch from cart' }))
    await user.click(screen.getByRole('button', { name: 'Remove Leather Wallet from cart' }))
    expect(screen.getByText('Your cart is empty')).toBeInTheDocument()
  })
})
