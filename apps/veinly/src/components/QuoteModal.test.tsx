import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { QuoteModal } from './QuoteModal'

describe('QuoteModal', () => {
  it('renders nothing when closed', () => {
    render(<QuoteModal open={false} onClose={vi.fn()} />)
    expect(screen.queryByTestId('quote-modal')).not.toBeInTheDocument()
  })

  it('renders the dialog with the quote form when open', () => {
    render(<QuoteModal open onClose={vi.fn()} />)

    const dialog = screen.getByRole('dialog', { name: 'Get A Quote' })
    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(screen.getByRole('heading', { name: 'Get A Quote' })).toBeInTheDocument()

    expect(screen.getByPlaceholderText('First name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Last name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Write your message.')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('closes via the close control', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<QuoteModal open onClose={onClose} />)

    await user.click(screen.getByRole('button', { name: 'Close modal' }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('closes via the Escape key', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<QuoteModal open onClose={onClose} />)

    await user.keyboard('{Escape}')
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('submits the form, clears fields and closes the modal', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<QuoteModal open onClose={onClose} />)

    await user.type(screen.getByPlaceholderText('First name'), 'Grace')
    await user.type(screen.getByPlaceholderText('Last name'), 'Hopper')
    await user.type(screen.getByPlaceholderText('Email address'), 'grace@example.com')
    await user.type(screen.getByPlaceholderText('Write your message.'), 'Quote please')

    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(onClose).toHaveBeenCalledTimes(1)
    expect(screen.getByPlaceholderText('First name')).toHaveValue('')
    expect(screen.getByPlaceholderText('Last name')).toHaveValue('')
    expect(screen.getByPlaceholderText('Email address')).toHaveValue('')
    expect(screen.getByPlaceholderText('Write your message.')).toHaveValue('')
  })
})
