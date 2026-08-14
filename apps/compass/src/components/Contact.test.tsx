import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'
import { contact } from '../data'

const valid = {
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'jane@example.com',
  subject: 'Project inquiry',
  message: 'Hello, we need help with a website.',
}

async function fill(user: ReturnType<typeof userEvent.setup>, fields: Partial<typeof valid>) {
  if (fields.firstName !== undefined) {
    await user.type(screen.getByLabelText('First Name'), fields.firstName)
  }
  if (fields.lastName !== undefined) {
    await user.type(screen.getByLabelText('Last Name'), fields.lastName)
  }
  if (fields.email !== undefined) {
    await user.type(screen.getByLabelText('Email'), fields.email)
  }
  if (fields.subject !== undefined) {
    await user.type(screen.getByLabelText('Subject'), fields.subject)
  }
  if (fields.message !== undefined) {
    await user.type(screen.getByLabelText('Message'), fields.message)
  }
}

describe('Contact', () => {
  it('renders the section header, form title, fields and contact details', () => {
    render(<Contact />)
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Get In Touch' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Contact Form' })).toBeInTheDocument()

    for (const label of Object.values(contact.labels)) {
      if (label !== 'Send Message') {
        expect(screen.getByLabelText(label)).toBeInTheDocument()
      }
    }
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()

    for (const item of contact.info) {
      expect(screen.getByText(item.label)).toBeInTheDocument()
      expect(screen.getByText(item.value)).toBeInTheDocument()
    }
  })

  it('shows an error when the form is submitted empty', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.getByRole('status')).toHaveTextContent(contact.error)
  })

  it('shows an error when only some fields are filled', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await fill(user, { firstName: 'Jane' })
    await user.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.getByRole('status')).toHaveTextContent(contact.error)
  })

  it('rejects an invalid email address', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await fill(user, { firstName: 'Jane', lastName: 'Doe', email: 'not-an-email' })
    await user.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.getByRole('status')).toHaveTextContent(contact.error)
  })

  it('requires subject and message', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await fill(user, { firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com' })
    await user.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.getByRole('status')).toHaveTextContent(contact.error)
  })

  it('swaps the form for a success message on a valid submit', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await fill(user, valid)
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(screen.getByRole('status')).toHaveTextContent(contact.success)
    expect(screen.queryByLabelText('First Name')).not.toBeInTheDocument()
  })
})
