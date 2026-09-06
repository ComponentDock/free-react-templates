import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { OfferModal } from './OfferModal'

describe('OfferModal', () => {
  it('does not render when isOpen is false', () => {
    render(<OfferModal isOpen={false} onClose={vi.fn()} />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('renders the dialog when isOpen is true', () => {
    render(<OfferModal isOpen={true} onClose={vi.fn()} />)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('renders the heading', () => {
    render(<OfferModal isOpen={true} onClose={vi.fn()} />)
    expect(screen.getByText('Get a free a Ebook')).toBeInTheDocument()
  })

  it('renders the quote paragraph', () => {
    render(<OfferModal isOpen={true} onClose={vi.fn()} />)
    expect(screen.getByText(/All their equipment and instruments are alive/)).toBeInTheDocument()
  })

  it('renders the email input', () => {
    render(<OfferModal isOpen={true} onClose={vi.fn()} />)
    expect(screen.getByPlaceholderText('Enter your email address')).toBeInTheDocument()
  })

  it('renders the subscribe button', () => {
    render(<OfferModal isOpen={true} onClose={vi.fn()} />)
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('renders the cancel link', () => {
    render(<OfferModal isOpen={true} onClose={vi.fn()} />)
    expect(screen.getByRole('button', { name: 'Maybe later' })).toBeInTheDocument()
  })

  it('calls onClose when the close button is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<OfferModal isOpen={true} onClose={onClose} />)
    await user.click(screen.getByRole('button', { name: 'Close' }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when the cancel link is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<OfferModal isOpen={true} onClose={onClose} />)
    await user.click(screen.getByRole('button', { name: 'Maybe later' }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when the backdrop is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<OfferModal isOpen={true} onClose={onClose} />)
    const dialog = screen.getByRole('dialog')
    await user.click(dialog)
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when Escape is pressed', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<OfferModal isOpen={true} onClose={onClose} />)
    await user.keyboard('{Escape}')
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when the form is submitted', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<OfferModal isOpen={true} onClose={onClose} />)
    const emailInput = screen.getByPlaceholderText('Enter your email address')
    await user.type(emailInput, 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('does not call onClose when clicking inside the dialog content', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<OfferModal isOpen={true} onClose={onClose} />)
    await user.click(screen.getByText('Get a free a Ebook'))
    expect(onClose).not.toHaveBeenCalled()
  })
})
