import { describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TextModal } from './TextModal'

describe('TextModal', () => {
  it('does not render when closed', () => {
    render(<TextModal open={false} onClose={vi.fn()} />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('renders when open with correct attributes', () => {
    render(<TextModal open={true} onClose={vi.fn()} />)
    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(dialog).toHaveAttribute('aria-label', 'Text modal')
  })

  it('renders the close button', () => {
    render(<TextModal open={true} onClose={vi.fn()} />)
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument()
  })

  it('calls onClose when close button is clicked', async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()
    render(<TextModal open={true} onClose={onClose} />)

    await user.click(screen.getByRole('button', { name: /close/i }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when backdrop is clicked', async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()
    render(<TextModal open={true} onClose={onClose} />)

    const dialog = screen.getByRole('dialog')
    await user.click(dialog)
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('renders the modal heading', () => {
    render(<TextModal open={true} onClose={vi.fn()} />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Special Announcement')
  })

  it('renders the modal body text', () => {
    render(<TextModal open={true} onClose={vi.fn()} />)
    expect(screen.getByText(/important update/i)).toBeInTheDocument()
  })

  it('calls onClose on Escape key', () => {
    const onClose = vi.fn()
    render(<TextModal open={true} onClose={onClose} />)

    fireEvent.keyDown(document, { key: 'Escape' })
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('focus trap wraps Tab from last to first element', async () => {
    const user = userEvent.setup()
    render(<TextModal open={true} onClose={vi.fn()} />)

    const closeBtn = screen.getByRole('button', { name: /close/i })
    const gotItBtn = screen.getByRole('button', { name: /got it/i })

    // Tab from close button moves to Got It (no wrap)
    closeBtn.focus()
    await user.tab()
    expect(gotItBtn).toHaveFocus()

    // Tab from Got It wraps to close button
    await user.tab()
    expect(closeBtn).toHaveFocus()
  })

  it('focus trap wraps Shift+Tab from first to last element', async () => {
    const user = userEvent.setup()
    render(<TextModal open={true} onClose={vi.fn()} />)

    const closeBtn = screen.getByRole('button', { name: /close/i })
    const gotItBtn = screen.getByRole('button', { name: /got it/i })

    // Shift+Tab from Got It moves to close (no wrap)
    gotItBtn.focus()
    await user.tab({ shift: true })
    expect(closeBtn).toHaveFocus()

    // Shift+Tab from close wraps to Got It
    await user.tab({ shift: true })
    expect(gotItBtn).toHaveFocus()
  })

  it('restores focus when modal closes', () => {
    const { rerender } = render(<TextModal open={false} onClose={vi.fn()} />)

    rerender(<TextModal open={true} onClose={vi.fn()} />)
    rerender(<TextModal open={false} onClose={vi.fn()} />)
  })
})
