import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the message form with labelled fields and contact info cards', () => {
    render(<Contact />)

    expect(
      screen.getByRole('heading', { level: 2, name: /Start a Conversation/ }),
    ).toBeInTheDocument()
    expect(screen.getByLabelText('First name')).toBeInTheDocument()
    expect(screen.getByLabelText('Last name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByText('Visit Us')).toBeInTheDocument()
    expect(screen.getByText('Call Us')).toBeInTheDocument()
    expect(screen.getByText('Email Us')).toBeInTheDocument()
    expect(screen.getByText('Follow Us')).toBeInTheDocument()
  })

  it('submits the form without navigating', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByLabelText('First name'), 'Ada')
    await user.type(screen.getByLabelText('Last name'), 'Lovelace')
    await user.type(screen.getByLabelText('Email address'), 'ada@example.com')
    await user.type(screen.getByLabelText('Message'), 'Hello from Launch!')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })
})
