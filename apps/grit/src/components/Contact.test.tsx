import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Contact } from './Contact'
import {
  contactEmailLabel,
  contactEyebrow,
  contactFirstNameLabel,
  contactLastNameLabel,
  contactLead,
  contactMessageLabel,
  contactSubjectLabel,
  contactSubmitLabel,
  contactSuccessMessage,
  contactTitle,
} from '../data'

describe('Contact', () => {
  it('renders the eyebrow, heading, intro, and all form fields plus the submit button', () => {
    render(<Contact />)
    expect(screen.getByText(contactEyebrow)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(contactTitle)
    expect(screen.getByText(contactLead)).toBeInTheDocument()
    expect(screen.getByLabelText(contactFirstNameLabel)).toBeInTheDocument()
    expect(screen.getByLabelText(contactLastNameLabel)).toBeInTheDocument()
    expect(screen.getByLabelText(contactSubjectLabel)).toBeInTheDocument()
    expect(screen.getByLabelText(contactEmailLabel)).toBeInTheDocument()
    expect(screen.getByLabelText(contactMessageLabel)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: contactSubmitLabel })).toBeInTheDocument()
  })

  it('shows a success message after submitting a valid form', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText(contactFirstNameLabel), 'Jane')
    await user.type(screen.getByLabelText(contactLastNameLabel), 'Doe')
    await user.type(screen.getByLabelText(contactSubjectLabel), 'Hello')
    await user.type(screen.getByLabelText(contactEmailLabel), 'jane@example.com')
    await user.type(screen.getByLabelText(contactMessageLabel), 'Hi there!')
    await user.click(screen.getByRole('button', { name: contactSubmitLabel }))
    expect(screen.getByText(contactSuccessMessage)).toBeInTheDocument()
    expect(screen.queryByLabelText(contactFirstNameLabel)).not.toBeInTheDocument()
  })

  it('keeps the form visible without a success message when required fields are empty', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.click(screen.getByRole('button', { name: contactSubmitLabel }))
    expect(screen.getByLabelText(contactFirstNameLabel)).toBeInTheDocument()
    expect(screen.queryByText(contactSuccessMessage)).not.toBeInTheDocument()
  })
})
