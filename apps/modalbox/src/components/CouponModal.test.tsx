import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CouponModal } from './CouponModal'

describe('CouponModal', () => {
  it('does not render when closed', () => {
    render(<CouponModal open={false} onClose={vi.fn()} />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('renders the modal content when open', () => {
    render(<CouponModal open={true} onClose={vi.fn()} />)

    expect(screen.getByRole('dialog', { name: /coupon modal/i })).toBeInTheDocument()
    expect(screen.getByText('60% off coupon')).toBeInTheDocument()
    expect(screen.getByText('SUMMER60')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /use a coupon/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /sorry, i don't want this/i })).toBeInTheDocument()
  })

  it('calls onClose when close button is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<CouponModal open={true} onClose={onClose} />)

    await user.click(screen.getByRole('button', { name: /close/i }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when cancel link is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<CouponModal open={true} onClose={onClose} />)

    await user.click(screen.getByRole('button', { name: /sorry, i don't want this/i }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when backdrop is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<CouponModal open={true} onClose={onClose} />)

    const dialog = screen.getByRole('dialog')
    await user.click(dialog)
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose on Escape key', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<CouponModal open={true} onClose={onClose} />)

    await user.keyboard('{Escape}')
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('displays the promotional image', () => {
    render(<CouponModal open={true} onClose={vi.fn()} />)

    const img = screen.getByRole('img', { name: /promotional offer/i })
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })

  it('has correct modal styling', () => {
    render(<CouponModal open={true} onClose={vi.fn()} />)

    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAttribute('aria-modal', 'true')

    const modalContent = dialog.querySelector('[class*="bg-cream"]')
    expect(modalContent).toBeInTheDocument()
  })

  it('has a dashed border coupon code box', () => {
    render(<CouponModal open={true} onClose={vi.fn()} />)

    const couponBox = screen.getByText('SUMMER60').closest('[class*="border-dashed"]')
    expect(couponBox).toBeInTheDocument()
    expect(couponBox).toHaveClass('border-dashed')
  })

  it('traps focus with Tab key on last element', async () => {
    const user = userEvent.setup()
    render(<CouponModal open={true} onClose={vi.fn()} />)

    // Focus the cancel link (last focusable element)
    const cancelLink = screen.getByRole('button', { name: /sorry, i don't want this/i })
    cancelLink.focus()

    // Tab should wrap to first focusable element (close button)
    await user.tab()

    const closeButton = screen.getByRole('button', { name: /close/i })
    expect(closeButton).toHaveFocus()
  })

  it('traps focus with Shift+Tab on first element', async () => {
    const user = userEvent.setup()
    render(<CouponModal open={true} onClose={vi.fn()} />)

    // Focus the close button (first focusable element)
    const closeButton = screen.getByRole('button', { name: /close/i })
    closeButton.focus()

    // Shift+Tab should wrap to last focusable element (cancel link)
    await user.tab({ shift: true })

    const cancelLink = screen.getByRole('button', { name: /sorry, i don't want this/i })
    expect(cancelLink).toHaveFocus()
  })

  it('returns focus to trigger button on close', async () => {
    const user = userEvent.setup()

    function TestWrapper() {
      return (
        <>
          <button type="button">Trigger</button>
          <CouponModal open={true} onClose={vi.fn()} />
        </>
      )
    }

    render(<TestWrapper />)

    // Focus the trigger, then open modal (simulating real flow)
    const trigger = screen.getByRole('button', { name: /trigger/i })
    trigger.focus()

    // Close via Escape
    await user.keyboard('{Escape}')

    // Focus should return to trigger
    expect(trigger).toHaveFocus()
  })

  it('does not close when clicking inside modal content', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<CouponModal open={true} onClose={onClose} />)

    // Click on the heading (inside modal content, not backdrop)
    await user.click(screen.getByText('60% off coupon'))
    expect(onClose).not.toHaveBeenCalled()
  })

  it('does not close on Tab key', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<CouponModal open={true} onClose={onClose} />)

    await user.tab()
    expect(onClose).not.toHaveBeenCalled()
  })
})
