import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Contact } from './Contact'
import { contact } from '../data'

describe('Contact', () => {
  it('renders the heading, four info blocks and the form fields', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: contact.heading })).toBeInTheDocument()

    for (const info of contact.info) {
      expect(screen.getByRole('heading', { name: info.label })).toBeInTheDocument()
      expect(screen.getByText(info.value)).toBeInTheDocument()
    }

    expect(screen.getByLabelText(contact.nameLabel)).toBeInTheDocument()
    expect(screen.getByLabelText(contact.emailLabel)).toHaveAttribute('type', 'email')
    expect(screen.getByLabelText(contact.subjectLabel)).toBeInTheDocument()
    expect(screen.getByLabelText(contact.messageLabel)).toHaveAttribute('rows', '7')
    expect(screen.getByRole('button', { name: contact.sendLabel })).toBeInTheDocument()
  })

  it('rejects an empty form and an invalid email with an inline error', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.click(screen.getByRole('button', { name: contact.sendLabel }))
    expect(screen.getByRole('status')).toHaveTextContent(contact.error)

    await user.type(screen.getByLabelText(contact.nameLabel), 'Ada Lovelace')
    await user.type(screen.getByLabelText(contact.emailLabel), 'not-an-email')
    await user.type(screen.getByLabelText(contact.subjectLabel), 'Speaking')
    await user.type(screen.getByLabelText(contact.messageLabel), 'I would like to speak.')
    await user.click(screen.getByRole('button', { name: contact.sendLabel }))
    expect(screen.getByRole('status')).toHaveTextContent(contact.error)
  })

  it('swaps the form for a success message on a valid submit', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText(contact.nameLabel), 'Ada Lovelace')
    await user.type(screen.getByLabelText(contact.emailLabel), 'ada@example.com')
    await user.type(screen.getByLabelText(contact.subjectLabel), 'Speaking')
    await user.type(screen.getByLabelText(contact.messageLabel), 'I would like to speak.')
    await user.click(screen.getByRole('button', { name: contact.sendLabel }))

    expect(screen.getByRole('status')).toHaveTextContent(contact.success)
    // The form (and its labelled fields) are gone after the swap.
    expect(screen.queryByLabelText(contact.nameLabel)).not.toBeInTheDocument()
    expect(screen.queryByLabelText(contact.emailLabel)).not.toBeInTheDocument()
  })
})
