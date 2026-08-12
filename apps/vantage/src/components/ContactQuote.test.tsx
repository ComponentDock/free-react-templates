import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactQuote } from './ContactQuote'

describe('ContactQuote', () => {
  it('renders the gradient band with a photo and the quotation form', () => {
    const { container } = render(<ContactQuote />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Get a free Quotation' }),
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Your name')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone')).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByLabelText('Write message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument()

    expect(container.querySelector('img')).toHaveAttribute(
      'src',
      'https://picsum.photos/id/180/900/700',
    )
    expect(container.querySelector('section')).toHaveClass('bg-brand-gradient')
  })

  it('shows per-field validation errors when required fields are empty', async () => {
    const user = userEvent.setup()
    render(<ContactQuote />)

    await user.click(screen.getByRole('button', { name: 'Submit' }))

    expect(screen.getByText('Please enter your name')).toBeInTheDocument()
    expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument()
    expect(screen.getByText('Please write a message of at least 10 characters')).toBeInTheDocument()
    expect(screen.getByLabelText('Your name')).toHaveAttribute('aria-invalid', 'true')
  })

  it('flags an invalid email address', async () => {
    const user = userEvent.setup()
    render(<ContactQuote />)

    await user.type(screen.getByLabelText('Email address'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Submit' }))

    expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument()
  })

  it('clears a field error as soon as the user types a correction', async () => {
    const user = userEvent.setup()
    render(<ContactQuote />)

    await user.click(screen.getByRole('button', { name: 'Submit' }))
    expect(screen.getByText('Please enter your name')).toBeInTheDocument()

    await user.type(screen.getByLabelText('Your name'), 'A')
    expect(screen.queryByText('Please enter your name')).not.toBeInTheDocument()
  })

  it('submits a valid quotation and shows the confirmation', async () => {
    const user = userEvent.setup()
    render(<ContactQuote />)

    await user.type(screen.getByLabelText('Your name'), 'Ada Lovelace')
    await user.type(screen.getByLabelText('Phone'), '555-0100')
    await user.type(screen.getByLabelText('Email address'), 'ada@example.com')
    await user.type(screen.getByLabelText('Write message'), 'I would like a quote for our audit.')
    await user.click(screen.getByRole('button', { name: 'Submit' }))

    expect(
      screen.getByRole('heading', { level: 3, name: 'Quotation Request Received' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Thanks, Ada Lovelace! We will get back to you/)).toBeInTheDocument()
    // The form unmounts once the confirmation is shown.
    expect(screen.queryByLabelText('Your name')).not.toBeInTheDocument()
  })
})
