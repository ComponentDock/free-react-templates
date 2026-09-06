import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CouponModal } from './CouponModal'

describe('CouponModal', () => {
  it('renders nothing when closed', () => {
    render(<CouponModal open={false} onClose={vi.fn()} />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('renders the modal with two-column layout when open', () => {
    render(<CouponModal open={true} onClose={vi.fn()} />)

    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(dialog).toHaveAttribute('aria-labelledby', 'coupon-title')

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/50.*Off/)
    expect(screen.getByText(/On all Brands/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter code')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /start shopping/i })).toBeInTheDocument()
  })

  it('shows the close button with teal background', () => {
    render(<CouponModal open={true} onClose={vi.fn()} />)

    const closeBtn = screen.getByRole('button', { name: /close/i })
    expect(closeBtn).toBeInTheDocument()
    expect(closeBtn.className).toContain('bg-teal-400')
  })

  it('calls onClose when the close button is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<CouponModal open={true} onClose={onClose} />)

    await user.click(screen.getByRole('button', { name: /close/i }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when the backdrop is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<CouponModal open={true} onClose={onClose} />)

    const dialog = screen.getByRole('dialog')
    await user.click(dialog)
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('closes on Escape key', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<CouponModal open={true} onClose={onClose} />)

    await user.keyboard('{Escape}')
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('has a background image on the left column', () => {
    render(<CouponModal open={true} onClose={vi.fn()} />)

    const leftCol = screen.getByTestId('modal-image')
    expect(leftCol).toHaveStyle({ backgroundImage: expect.stringContaining('picsum.photos') })
  })

  it('does not close when clicking inside the modal content', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<CouponModal open={true} onClose={onClose} />)

    await user.click(screen.getByRole('heading', { level: 2 }))
    expect(onClose).not.toHaveBeenCalled()
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<CouponModal open={true} onClose={vi.fn()} />)

    const input = screen.getByPlaceholderText('Enter code')
    await user.type(input, 'TESTCODE')
    await user.keyboard('{Enter}')
    // Form submission should be prevented (no page reload)
    expect(input).toHaveValue('TESTCODE')
  })
})
