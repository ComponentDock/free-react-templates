import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('renders the three violet fields with the mint submit', () => {
    render(<ContactForm />)

    const name = screen.getByLabelText('Your name')
    expect(name).toHaveClass('h-[49px]', 'bg-plum-mid', 'rounded-[12px]', 'pl-[29px]')
    expect(name).toHaveAttribute('aria-invalid', 'false')

    expect(screen.getByLabelText('Your e-mail')).toHaveAttribute('type', 'email')
    expect(screen.getByLabelText('How can we help?')).toHaveClass('h-[142px]', 'pt-[15px]')
    expect(screen.getByRole('button', { name: 'Send' })).toHaveClass(
      'bg-mint',
      'w-[108px]',
      'rounded-[12px]',
    )
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('reports every missing or malformed field and never navigates', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByLabelText('Your e-mail'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Send' }))

    expect(screen.getByText('Tell us your name.')).toBeInTheDocument()
    expect(screen.getByText('Enter a valid e-mail address.')).toBeInTheDocument()
    expect(screen.getByText('Let us know what you need.')).toBeInTheDocument()
    expect(screen.getByLabelText('Your name')).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByLabelText('Your name')).toHaveAttribute(
      'aria-describedby',
      'contact-name-error',
    )
    expect(screen.getByLabelText('Your e-mail')).toHaveAttribute(
      'aria-describedby',
      'contact-email-error',
    )
    expect(screen.getByLabelText('How can we help?')).toHaveAttribute(
      'aria-describedby',
      'contact-message-error',
    )
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('confirms a valid enquiry in a polite live region', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByLabelText('Your name'), '  Ada  ')
    await user.type(screen.getByLabelText('Your e-mail'), 'ada@example.com')
    await user.type(screen.getByLabelText('How can we help?'), 'Move a store to you.')
    await user.click(screen.getByRole('button', { name: 'Send' }))

    expect(screen.getByRole('status')).toHaveTextContent(
      'Thanks Ada — we will reply to ada@example.com shortly.',
    )
    expect(screen.queryByText('Tell us your name.')).not.toBeInTheDocument()
    expect(screen.getByLabelText('Your name')).toHaveAttribute('aria-invalid', 'false')
  })

  it('drops an earlier confirmation when the next submit is invalid', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByLabelText('Your name'), 'Ada')
    await user.type(screen.getByLabelText('Your e-mail'), 'ada@example.com')
    await user.type(screen.getByLabelText('How can we help?'), 'Hello')
    await user.click(screen.getByRole('button', { name: 'Send' }))
    expect(screen.getByRole('status')).toBeInTheDocument()

    await user.clear(screen.getByLabelText('Your e-mail'))
    await user.click(screen.getByRole('button', { name: 'Send' }))

    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    expect(screen.getByText('Enter a valid e-mail address.')).toBeInTheDocument()
  })
})
