import { describe, expect, it, vi } from 'vitest'
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ConfirmationModal } from './ConfirmationModal'

describe('ConfirmationModal', () => {
  it('does not render when closed', () => {
    render(<ConfirmationModal open={false} onClose={vi.fn()} />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('renders when open', () => {
    render(<ConfirmationModal open={true} onClose={vi.fn()} />)
    expect(screen.getByRole('dialog', { name: /email confirmation modal/i })).toBeInTheDocument()
  })

  it('displays the confirmation heading', () => {
    render(<ConfirmationModal open={true} onClose={vi.fn()} />)
    expect(screen.getByText("You've Got Mail!")).toBeInTheDocument()
  })

  it('displays the confirmation text', () => {
    render(<ConfirmationModal open={true} onClose={vi.fn()} />)
    expect(screen.getByText(/we sent confirmation link to/i)).toBeInTheDocument()
  })

  it('displays the email address', () => {
    render(<ConfirmationModal open={true} onClose={vi.fn()} />)
    expect(screen.getByText('johndoe', { exact: false })).toBeInTheDocument()
    expect(screen.getByText('gmail.com', { exact: false })).toBeInTheDocument()
  })

  it('calls onClose when close button is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<ConfirmationModal open={true} onClose={onClose} />)
    await user.click(screen.getByRole('button', { name: /close/i }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when backdrop is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<ConfirmationModal open={true} onClose={onClose} />)
    const dialog = screen.getByRole('dialog', { name: /email confirmation modal/i })
    await user.click(dialog)
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('does not call onClose when modal content is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<ConfirmationModal open={true} onClose={onClose} />)
    const heading = screen.getByText("You've Got Mail!")
    await user.click(heading)
    expect(onClose).not.toHaveBeenCalled()
  })

  it('calls onClose when Escape key is pressed', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<ConfirmationModal open={true} onClose={onClose} />)
    await user.keyboard('{Escape}')
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('does not call onClose when a non-Escape key is pressed', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<ConfirmationModal open={true} onClose={onClose} />)
    await user.keyboard('{Enter}')
    expect(onClose).not.toHaveBeenCalled()
  })

  it('calls onClose when Go to inbox is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<ConfirmationModal open={true} onClose={onClose} />)
    await user.click(screen.getByRole('button', { name: /go to inbox/i }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('restores focus to trigger element when modal closes', async () => {
    const user = userEvent.setup()
    function Wrapper() {
      const [open, setOpen] = React.useState(false)
      return (
        <>
          <button onClick={() => setOpen(true)}>Open</button>
          <ConfirmationModal open={open} onClose={() => setOpen(false)} />
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
    render(<ConfirmationModal open={true} onClose={vi.fn()} />)
    const dialog = screen.getByRole('dialog', { name: /email confirmation modal/i })
    expect(dialog).toHaveAttribute('aria-modal', 'true')
  })
})
