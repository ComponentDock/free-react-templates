import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Contact } from '../components/Contact'
import { contact } from '../content'

describe('Contact', () => {
  it('closes the page with the problem, both CTAs and the four fields', () => {
    const { container } = render(<Contact />)

    const band = container.querySelector('#contact')!
    expect(band).toHaveClass('from-primary-600', 'to-primary-800')
    expect(screen.getByRole('heading', { level: 2, name: contact.title })).toBeInTheDocument()
    expect(screen.getByText(contact.lead)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: contact.primaryCta.label })).toHaveAttribute(
      'href',
      contact.primaryCta.href,
    )
    expect(screen.getByRole('link', { name: contact.secondaryCta.label })).toHaveAttribute(
      'href',
      '#deliverables',
    )

    expect(screen.getByLabelText(contact.fields.name)).toHaveAttribute('name', 'name')
    expect(screen.getByLabelText(contact.fields.email)).toHaveAttribute('type', 'email')
    expect(screen.getByLabelText(contact.fields.subject)).toHaveAttribute('type', 'text')
    expect(screen.getByLabelText(contact.fields.message)).toHaveAttribute('rows', '5')
  })

  it('announces what is missing and never posts anywhere', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.click(screen.getByRole('button', { name: contact.submit }))

    expect(screen.queryByRole('status')).toBeNull()
    expect(screen.getByText('Please give a name we can reply to.')).toBeInTheDocument()
    expect(screen.getByText('An e-mail address is required.')).toBeInTheDocument()
    expect(screen.getByText('Please say what the actual problem is.')).toBeInTheDocument()
    expect(screen.getByLabelText(contact.fields.name)).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByLabelText(contact.fields.name)).toHaveAttribute(
      'aria-describedby',
      'enquiry-name-error',
    )

    await user.type(screen.getByLabelText(contact.fields.email), 'not-an-address')
    await user.click(screen.getByRole('button', { name: contact.submit }))
    expect(
      screen.getByText('That address looks incomplete. Check it and send again.'),
    ).toBeInTheDocument()
    expect(screen.getByLabelText(contact.fields.email)).toHaveAttribute(
      'aria-describedby',
      'enquiry-email-error',
    )
  })

  it('confirms a complete enquiry and clears the fields', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByLabelText(contact.fields.name), 'Niamh Cassidy')
    await user.type(screen.getByLabelText(contact.fields.email), 'niamh@example.com')
    await user.type(screen.getByLabelText(contact.fields.subject), 'Reissue')
    await user.type(
      screen.getByLabelText(contact.fields.message),
      'The second impression is out of register',
    )
    await user.click(screen.getByRole('button', { name: contact.submit }))

    expect(screen.getByRole('status')).toHaveTextContent(contact.success)
    expect(screen.getByLabelText(contact.fields.name)).toHaveValue('')
    expect(screen.getByLabelText(contact.fields.message)).toHaveValue('')
    expect(screen.queryByText('Please give a name we can reply to.')).toBeNull()
  })
})
