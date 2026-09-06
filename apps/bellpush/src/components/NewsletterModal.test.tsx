import { describe, expect, it, vi } from 'vitest'
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NewsletterModal } from './NewsletterModal'

describe('NewsletterModal', () => {
  it('does not render when closed', () => {
    render(<NewsletterModal open={false} onClose={vi.fn()} />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('renders when open', () => {
    render(<NewsletterModal open={true} onClose={vi.fn()} />)
    expect(screen.getByRole('dialog', { name: /newsletter modal/i })).toBeInTheDocument()
  })

  it('displays the Newsletter heading', () => {
    render(<NewsletterModal open={true} onClose={vi.fn()} />)
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
  })

  it('displays the subscribe subtext', () => {
    render(<NewsletterModal open={true} onClose={vi.fn()} />)
    expect(screen.getByText(/subscribe to our newsletter/i)).toBeInTheDocument()
  })

  it('displays the email input with placeholder', () => {
    render(<NewsletterModal open={true} onClose={vi.fn()} />)
    expect(screen.getByPlaceholderText(/enter email address/i)).toBeInTheDocument()
  })

  it('displays the Subscribe button', () => {
    render(<NewsletterModal open={true} onClose={vi.fn()} />)
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('allows typing an email address', async () => {
    const user = userEvent.setup()
    render(<NewsletterModal open={true} onClose={vi.fn()} />)
    const input = screen.getByPlaceholderText(/enter email address/i)
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<NewsletterModal open={true} onClose={vi.fn()} />)
    const submitBtn = screen.getByRole('button', { name: /subscribe/i })
    await user.click(submitBtn)
    // Form should not have caused a navigation
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('calls onClose when close button is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<NewsletterModal open={true} onClose={onClose} />)
    await user.click(screen.getByRole('button', { name: /close/i }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when backdrop is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<NewsletterModal open={true} onClose={onClose} />)
    const dialog = screen.getByRole('dialog', { name: /newsletter modal/i })
    await user.click(dialog)
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('does not call onClose when modal content is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<NewsletterModal open={true} onClose={onClose} />)
    const heading = screen.getByText('Newsletter')
    await user.click(heading)
    expect(onClose).not.toHaveBeenCalled()
  })

  it('calls onClose when Escape key is pressed', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<NewsletterModal open={true} onClose={onClose} />)
    await user.keyboard('{Escape}')
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('does not call onClose when a non-Escape key is pressed', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<NewsletterModal open={true} onClose={onClose} />)
    await user.keyboard('{Enter}')
    expect(onClose).not.toHaveBeenCalled()
  })

  it('restores focus to trigger element when modal closes', async () => {
    const user = userEvent.setup()
    function Wrapper() {
      const [open, setOpen] = React.useState(false)
      return (
        <>
          <button onClick={() => setOpen(true)}>Open</button>
          <NewsletterModal open={open} onClose={() => setOpen(false)} />
        </>
      )
    }
    render(<Wrapper />)
    const openButton = screen.getByRole('button', { name: /open/i })
    openButton.focus()
    await user.click(openButton)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(document.activeElement).toBe(openButton)
  })

  it('has correct aria attributes', () => {
    render(<NewsletterModal open={true} onClose={vi.fn()} />)
    const dialog = screen.getByRole('dialog', { name: /newsletter modal/i })
    expect(dialog).toHaveAttribute('aria-modal', 'true')
  })
})
