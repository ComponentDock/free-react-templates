import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'
import { CONTACT } from '../data'

const VALID_MESSAGE = 'This is a message long enough to pass validation.'

describe('Contact', () => {
  it('renders the heading, lead, fields and submit button', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { level: 2, name: /Contact/ })).toBeInTheDocument()
    expect(screen.getByText(CONTACT.lead)).toBeInTheDocument()

    for (const label of [
      CONTACT.nameLabel,
      CONTACT.emailLabel,
      CONTACT.subjectLabel,
      CONTACT.messageLabel,
    ]) {
      expect(screen.getByLabelText(label)).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: CONTACT.submitLabel })).toBeInTheDocument()
  })

  it('blocks submission and shows errors for empty fields', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.click(screen.getByRole('button', { name: CONTACT.submitLabel }))

    const alerts = screen.getAllByRole('alert')
    expect(alerts).toHaveLength(4)
    expect(screen.getByText('Please enter your name.')).toBeInTheDocument()
    expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('shows only the email error when other fields are valid', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText(CONTACT.nameLabel), 'Ada')
    await user.type(screen.getByLabelText(CONTACT.emailLabel), 'not-an-email')
    await user.type(screen.getByLabelText(CONTACT.subjectLabel), 'Hello')
    await user.type(screen.getByLabelText(CONTACT.messageLabel), VALID_MESSAGE)
    await user.click(screen.getByRole('button', { name: CONTACT.submitLabel }))

    const alerts = screen.getAllByRole('alert')
    expect(alerts).toHaveLength(1)
    expect(alerts[0]).toHaveTextContent('Please enter a valid email address.')
  })

  it('clears a field error as soon as the user types in that field', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.click(screen.getByRole('button', { name: CONTACT.submitLabel }))
    expect(screen.getAllByRole('alert')).toHaveLength(4)

    await user.type(screen.getByLabelText(CONTACT.nameLabel), 'A')
    expect(screen.queryByText('Please enter your name.')).not.toBeInTheDocument()
    expect(screen.getAllByRole('alert')).toHaveLength(3)
  })

  it('submits valid input, shows the success message and resets the form', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText(CONTACT.nameLabel), 'Ada Lovelace')
    await user.type(screen.getByLabelText(CONTACT.emailLabel), 'ada@example.com')
    await user.type(screen.getByLabelText(CONTACT.subjectLabel), 'Growth plan')
    await user.type(screen.getByLabelText(CONTACT.messageLabel), VALID_MESSAGE)
    await user.click(screen.getByRole('button', { name: CONTACT.submitLabel }))

    expect(screen.getByRole('status')).toHaveTextContent(CONTACT.successMessage)
    expect(screen.getByLabelText(CONTACT.nameLabel)).toHaveValue('')
    expect(screen.getByLabelText(CONTACT.messageLabel)).toHaveValue('')
  })
})
