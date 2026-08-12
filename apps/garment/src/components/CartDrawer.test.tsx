import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { CartDrawer } from './CartDrawer'

describe('CartDrawer', () => {
  it('renders nothing when closed', () => {
    render(<CartDrawer open={false} onClose={vi.fn()} />)
    expect(screen.queryByRole('dialog', { name: 'Cart' })).not.toBeInTheDocument()
  })

  it('shows the three line items with the totals summary and a check out button', () => {
    render(<CartDrawer open onClose={vi.fn()} />)

    const dialog = screen.getByRole('dialog', { name: 'Cart' })
    expect(screen.getByRole('heading', { name: 'Shopping Cart' })).toBeInTheDocument()
    expect(screen.getAllByText('Button Through Strap Mini Dress')).toHaveLength(3)
    expect(screen.getAllByText('Size: S · Color: Red')).toHaveLength(3)
    expect(screen.getAllByText('$45.00')).toHaveLength(3)

    expect(screen.getByText('Subtotal:')).toBeInTheDocument()
    expect(screen.getByText('$274.00')).toBeInTheDocument()
    expect(screen.getByText('Delivery:')).toBeInTheDocument()
    expect(screen.getByText('Free')).toBeInTheDocument()
    expect(screen.getByText('Discount:')).toBeInTheDocument()
    expect(screen.getByText('-15%')).toBeInTheDocument()
    expect(screen.getByText('Total:')).toBeInTheDocument()
    expect(screen.getByText('$232.00')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Check Out' })).toBeInTheDocument()
    expect(dialog).toBeInTheDocument()
  })

  it('closes via the close button', () => {
    const onClose = vi.fn()
    render(<CartDrawer open onClose={onClose} />)

    fireEvent.click(screen.getByRole('button', { name: 'Close cart' }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('closes when the backdrop overlay is clicked', () => {
    const onClose = vi.fn()
    const { container } = render(<CartDrawer open onClose={onClose} />)

    const overlay = container.querySelector('div[aria-hidden="true"]')
    expect(overlay).not.toBeNull()
    fireEvent.click(overlay!)
    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
