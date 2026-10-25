import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Contact, EMPTY_ENQUIRY, validateEnquiry } from '../components/Contact'
import { contact } from '../content'

const VALID = {
  name: 'Eleanor R.',
  email: 'eleanor@example.com',
  subject: 'Linden House, wet room',
  message: 'The room is 2.4 by 2.0 metres and the stack is on the party wall.',
}

describe('validateEnquiry', () => {
  it('names every empty field and rejects a malformed email', () => {
    expect(validateEnquiry(EMPTY_ENQUIRY)).toEqual({
      name: contact.errors.name,
      email: contact.errors.email,
      subject: contact.errors.subject,
      message: contact.errors.message,
    })

    expect(validateEnquiry({ ...VALID, email: 'not-an-email' })).toEqual({
      email: contact.errors.email,
    })
    expect(validateEnquiry({ ...VALID, email: ' a@b.co ' })).toEqual({})
  })
})

describe('Contact', () => {
  it('renders the closing band, two CTAs and the merged enquiry form', () => {
    render(<Contact />)

    expect(screen.getByRole('heading', { level: 2, name: contact.title })).toHaveClass('font-serif')
    expect(screen.getByText(contact.lead)).toHaveClass('text-ink-200', 'max-w-xl')

    expect(screen.getByRole('link', { name: contact.primary })).toHaveAttribute('href', '#enquiry')
    expect(screen.getByRole('link', { name: contact.secondary })).toHaveAttribute('href', '#portfolio')

    expect(screen.getByLabelText(contact.fields.name)).toHaveAttribute('name', 'name')
    expect(screen.getByLabelText(contact.fields.email)).toHaveAttribute('type', 'email')
    expect(screen.getByLabelText(contact.fields.subject)).toHaveAttribute('type', 'text')
    expect(screen.getByLabelText(contact.fields.message).tagName).toBe('TEXTAREA')
  })

  it('never mentions a workspace, a tour or a membership', () => {
    const { container } = render(<Contact />)
    const placeholders = Array.from(container.querySelectorAll('[placeholder]')).map((field) =>
      field.getAttribute('placeholder'),
    )

    placeholders.forEach((placeholder) => {
      expect(placeholder ?? '').not.toMatch(/workspace|tour|membership/i)
    })
  })

  it('shows a message per empty field and blocks the submit', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.click(screen.getByRole('button', { name: contact.submit }))

    expect(screen.getAllByRole('alert')).toHaveLength(4)
    expect(screen.getByText(contact.errors.name)).toBeInTheDocument()
    expect(screen.queryByTestId('enquiry-sent')).toBeNull()
    expect(screen.getByLabelText(contact.fields.name)).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByLabelText(contact.fields.name)).toHaveAttribute(
      'aria-describedby',
      'enquiry-name-error',
    )
  })

  it('clears a field error as soon as it is corrected', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.click(screen.getByRole('button', { name: contact.submit }))
    await user.type(screen.getByLabelText(contact.fields.name), VALID.name)

    expect(screen.queryByText(contact.errors.name)).toBeNull()
    expect(screen.getByLabelText(contact.fields.name)).not.toHaveAttribute('aria-invalid')
    expect(screen.queryByText(contact.errors.name)).not.toBeInTheDocument()
  })

  it('accepts a complete enquiry and shows a visible success state', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByLabelText(contact.fields.name), VALID.name)
    await user.type(screen.getByLabelText(contact.fields.email), VALID.email)
    await user.type(screen.getByLabelText(contact.fields.subject), VALID.subject)
    await user.type(screen.getByLabelText(contact.fields.message), VALID.message)
    await user.click(screen.getByRole('button', { name: contact.submit }))

    const sent = screen.getByTestId('enquiry-sent')
    expect(sent).toHaveAttribute('role', 'status')
    expect(screen.getByText(contact.success.title)).toBeInTheDocument()
    expect(screen.getByText(contact.success.body)).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: contact.submit })).toBeNull()

    await user.click(screen.getByRole('button', { name: contact.success.reset }))
    expect(screen.getByRole('button', { name: contact.submit })).toBeInTheDocument()
    expect(screen.getByLabelText(contact.fields.name)).toHaveValue('')
  })
})
