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
    expect(screen.getByText('Exclusives offer from Instagram')).toBeInTheDocument()
  })

  it('renders the description paragraph', () => {
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

  it('renders the no-thanks button', () => {
    render(<OfferModal isOpen={true} onClose={vi.fn()} />)
    expect(screen.getByRole('button', { name: 'No, thanks' })).toBeInTheDocument()
  })

  it('renders the cancel text', () => {
    render(<OfferModal isOpen={true} onClose={vi.fn()} />)
    expect(screen.getByText('The sky was cloudless and of a deep dark blue.')).toBeInTheDocument()
  })

  it('calls onClose when the close button is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<OfferModal isOpen={true} onClose={onClose} />)
    await user.click(screen.getByRole('button', { name: 'Close' }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when the no-thanks button is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<OfferModal isOpen={true} onClose={onClose} />)
    await user.click(screen.getByRole('button', { name: 'No, thanks' }))
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
    await user.click(screen.getByText('Exclusives offer from Instagram'))
    expect(onClose).not.toHaveBeenCalled()
  })
})
