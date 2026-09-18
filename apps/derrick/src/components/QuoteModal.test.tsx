import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { QuoteModal } from './QuoteModal'

describe('QuoteModal', () => {
  it('renders when isOpen is true', () => {
    render(<QuoteModal isOpen={true} onClose={vi.fn()} />)
    expect(screen.getByText('Request a Quote')).toBeInTheDocument()
  })

  it('does not render when isOpen is false', () => {
    render(<QuoteModal isOpen={false} onClose={vi.fn()} />)
    expect(screen.queryByText('Request a Quote')).not.toBeInTheDocument()
  })

  it('renders all form fields', () => {
    render(<QuoteModal isOpen={true} onClose={vi.fn()} />)
    expect(screen.getByLabelText('Full Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Date')).toBeInTheDocument()
    expect(screen.getByLabelText('Time')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<QuoteModal isOpen={true} onClose={vi.fn()} />)
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('calls onClose when close button is clicked', async () => {
    const user = userEvent.setup()
    const handleClose = vi.fn()
    render(<QuoteModal isOpen={true} onClose={handleClose} />)
    await user.click(screen.getByRole('button', { name: /close/i }))
    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when form is submitted', async () => {
    const user = userEvent.setup()
    const handleClose = vi.fn()
    render(<QuoteModal isOpen={true} onClose={handleClose} />)
    await user.click(screen.getByRole('button', { name: /send message/i }))
    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  it('has accessible dialog attributes', () => {
    render(<QuoteModal isOpen={true} onClose={vi.fn()} />)
    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(dialog).toHaveAttribute('aria-labelledby', 'modal-title')
  })

  it('allows typing in form fields', async () => {
    const user = userEvent.setup()
    render(<QuoteModal isOpen={true} onClose={vi.fn()} />)
    await user.type(screen.getByLabelText('Full Name'), 'John Doe')
    expect(screen.getByLabelText('Full Name')).toHaveValue('John Doe')
  })
})
