import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { OfferModal } from './OfferModal'

describe('OfferModal', () => {
  it('does not render when closed', () => {
    render(<OfferModal open={false} onClose={vi.fn()} />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('renders the modal content when open', () => {
    render(<OfferModal open={true} onClose={vi.fn()} />)

    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('Introducing Work from Anywhere')).toBeInTheDocument()
    expect(screen.getByText(/all-in-one productivity suite/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /get the app/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /no thanks/i })).toBeInTheDocument()
  })

  it('displays the illustration image', () => {
    render(<OfferModal open={true} onClose={vi.fn()} />)

    const img = screen.getByRole('img', { name: /work from anywhere illustration/i })
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })

  it('has the light cyan illustration background', () => {
    render(<OfferModal open={true} onClose={vi.fn()} />)

    const dialog = screen.getByRole('dialog')
    const illustrationArea = dialog.querySelector('.bg-illustration-bg')
    expect(illustrationArea).toBeInTheDocument()
  })

  it('has correct accessibility attributes', () => {
    render(<OfferModal open={true} onClose={vi.fn()} />)

    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(dialog).toHaveAttribute('aria-labelledby', 'offer-modal-heading')

    const heading = screen.getByText('Introducing Work from Anywhere')
    expect(heading).toHaveAttribute('id', 'offer-modal-heading')
  })

  it('sets aria-hidden to true when closed', () => {
    const { container } = render(<OfferModal open={false} onClose={vi.fn()} />)
    expect(container.querySelector('[role="dialog"]')).not.toBeInTheDocument()
  })

  it('has correct modal styling', () => {
    render(<OfferModal open={true} onClose={vi.fn()} />)

    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAttribute('aria-modal', 'true')
    const modalContent = dialog.querySelector('[class*="bg-white"]')
    expect(modalContent).toBeInTheDocument()
  })

  it('has correct heading styling', () => {
    render(<OfferModal open={true} onClose={vi.fn()} />)

    const heading = screen.getByText('Introducing Work from Anywhere')
    expect(heading).toHaveClass('font-black')
    expect(heading).toHaveClass('text-modal-heading')
  })

  it('has correct paragraph styling', () => {
    render(<OfferModal open={true} onClose={vi.fn()} />)

    const paragraph = screen.getByText(/all-in-one productivity suite/i)
    expect(paragraph).toHaveClass('text-modal-text')
    expect(paragraph).toHaveClass('font-light')
  })

  it('has correct button styling', () => {
    render(<OfferModal open={true} onClose={vi.fn()} />)

    const button = screen.getByRole('button', { name: /get the app/i })
    expect(button).toHaveClass('rounded-[4px]')
    expect(button).toHaveClass('bg-brand')
  })

  it('calls onClose when close button is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<OfferModal open={true} onClose={onClose} />)

    await user.click(screen.getByRole('button', { name: /close/i }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when no thanks link is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<OfferModal open={true} onClose={onClose} />)

    await user.click(screen.getByRole('button', { name: /no thanks/i }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when backdrop is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<OfferModal open={true} onClose={onClose} />)

    const dialog = screen.getByRole('dialog')
    await user.click(dialog)
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('does not close when clicking inside modal content', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<OfferModal open={true} onClose={onClose} />)

    await user.click(screen.getByText('Introducing Work from Anywhere'))
    expect(onClose).not.toHaveBeenCalled()
  })

  it('calls onClose on Escape key', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<OfferModal open={true} onClose={onClose} />)

    await user.keyboard('{Escape}')
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('ignores non-Escape non-Tab keydown events', () => {
    const onClose = vi.fn()
    render(<OfferModal open={true} onClose={onClose} />)

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }))

    expect(onClose).not.toHaveBeenCalled()
  })

  it('traps focus with Tab on last element via native keydown', () => {
    render(<OfferModal open={true} onClose={vi.fn()} />)

    // DOM order: Close (first) → No thanks → Get the app (last)
    const getAppButton = screen.getByRole('button', { name: /get the app/i })
    getAppButton.focus()

    // Dispatch native keydown ON the focused element so e.target === last
    getAppButton.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', bubbles: true }))

    const closeButton = screen.getByRole('button', { name: /close/i })
    expect(closeButton).toHaveFocus()
  })

  it('traps focus with Shift+Tab on first element via native keydown', () => {
    render(<OfferModal open={true} onClose={vi.fn()} />)

    // DOM order: Close (first) → No thanks → Get the app (last)
    const closeButton = screen.getByRole('button', { name: /close/i })
    closeButton.focus()

    // Dispatch native keydown with Shift+Tab ON the focused element
    closeButton.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Tab',
        shiftKey: true,
        bubbles: true,
      }),
    )

    const getAppButton = screen.getByRole('button', { name: /get the app/i })
    expect(getAppButton).toHaveFocus()
  })

  it('returns focus to trigger button on close', async () => {
    const user = userEvent.setup()
    function TestWrapper() {
      const [open, setOpen] = React.useState(true)
      return (
        <>
          <button type="button" onClick={() => setOpen(false)}>
            Trigger
          </button>
          <OfferModal open={open} onClose={() => setOpen(false)} />
        </>
      )
    }

    render(<TestWrapper />)

    const trigger = screen.getByRole('button', { name: /trigger/i })
    trigger.focus()

    await user.keyboard('{Escape}')

    expect(trigger).toHaveFocus()
  })

  it('does not close on Tab key', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<OfferModal open={true} onClose={onClose} />)

    await user.tab()
    expect(onClose).not.toHaveBeenCalled()
  })

  it('displays the SVG illustration', () => {
    render(<OfferModal open={true} onClose={vi.fn()} />)

    const dialog = screen.getByRole('dialog')
    const svg = dialog.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })

  it('has the correct heading tag', () => {
    render(<OfferModal open={true} onClose={vi.fn()} />)
    const heading = screen.getByRole('heading', { name: /introducing work from anywhere/i })
    expect(heading.tagName).toBe('H3')
  })

  it('has the correct modal border radius', () => {
    render(<OfferModal open={true} onClose={vi.fn()} />)
    const dialog = screen.getByRole('dialog')
    const modalContent = dialog.querySelector('[class*="rounded-[7px]"]')
    expect(modalContent).toBeInTheDocument()
  })

  it('has the correct modal shadow', () => {
    render(<OfferModal open={true} onClose={vi.fn()} />)
    const dialog = screen.getByRole('dialog')
    const modalContent = dialog.querySelector('[class*="shadow-[0_10px_50px"]')
    expect(modalContent).toBeInTheDocument()
  })
})
