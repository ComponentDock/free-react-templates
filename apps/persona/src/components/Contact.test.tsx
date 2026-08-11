import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import {
  contactEmail,
  contactEmailLabel,
  contactInvalidMessage,
  contactLocation,
  contactMessageLabel,
  contactNameLabel,
  contactPhone,
  contactSubmitLabel,
  contactSuccessMessage,
  contactTitle,
} from '../data'
import { Contact } from './Contact'

describe('Contact', () => {
  it('shows the heading, form fields and contact details', () => {
    render(<Contact />)
    expect(screen.getByRole('region', { name: contactTitle })).toBeInTheDocument()

    expect(screen.getByLabelText(contactNameLabel)).toBeInTheDocument()
    expect(screen.getByLabelText(contactEmailLabel)).toBeInTheDocument()
    expect(screen.getByLabelText(contactMessageLabel)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: contactSubmitLabel })).toBeInTheDocument()

    expect(screen.getByText(contactEmail)).toBeInTheDocument()
    expect(screen.getByText(contactPhone)).toBeInTheDocument()
    expect(screen.getByText(contactLocation)).toBeInTheDocument()
  })

  it('blocks submission and shows an error for invalid input', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.click(screen.getByRole('button', { name: contactSubmitLabel }))

    expect(screen.getByRole('alert')).toHaveTextContent(contactInvalidMessage)
    expect(screen.queryByText(contactSuccessMessage)).not.toBeInTheDocument()
  })

  it('shows an error when the email is malformed', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByLabelText(contactNameLabel), 'Jane Doe')
    await user.type(screen.getByLabelText(contactEmailLabel), 'not-an-email')
    await user.type(screen.getByLabelText(contactMessageLabel), 'Hello there!')
    await user.click(screen.getByRole('button', { name: contactSubmitLabel }))

    expect(screen.getByRole('alert')).toHaveTextContent(contactInvalidMessage)
  })

  it('shows a success state after a valid submission', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByLabelText(contactNameLabel), 'Jane Doe')
    await user.type(screen.getByLabelText(contactEmailLabel), 'jane@example.com')
    await user.type(screen.getByLabelText(contactMessageLabel), 'Hello there!')
    await user.click(screen.getByRole('button', { name: contactSubmitLabel }))

    expect(screen.getByRole('status')).toHaveTextContent(contactSuccessMessage)
    expect(screen.queryByLabelText(contactNameLabel)).not.toBeInTheDocument()
  })
})
