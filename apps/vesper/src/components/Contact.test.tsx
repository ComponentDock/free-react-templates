import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the heading and four info columns', () => {
    render(<Contact />)

    expect(screen.getByRole('heading', { level: 2, name: 'Contact Me' })).toBeInTheDocument()

    for (const label of ['Address', 'Contact Number', 'Email Address', 'Website']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }

    expect(
      screen.getByText('198 West 21th Street, Suite 721 New York NY 10016'),
    ).toBeInTheDocument()
    expect(screen.getByText('+ 1235 2355 98')).toBeInTheDocument()
    expect(screen.getByText('info@yoursite.com')).toBeInTheDocument()
    expect(screen.getByText('yoursite.com')).toBeInTheDocument()
  })

  it('renders the contact form fields and submit button', () => {
    render(<Contact />)

    expect(screen.getByLabelText('Your Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Your Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('submits the form without navigating away', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByLabelText('Your Name'), 'Jane Doe')
    await user.type(screen.getByLabelText('Your Email'), 'jane@example.com')
    await user.type(screen.getByLabelText('Subject'), 'Hello')
    await user.type(screen.getByLabelText('Message'), 'A short message')

    const form = screen.getByRole('form', { name: 'Contact' })
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(form).toBeInTheDocument()
  })

  it('renders the static map placeholder with pin and address', () => {
    render(<Contact />)

    expect(screen.getByRole('region', { name: 'Map' })).toBeInTheDocument()
    expect(screen.getByText('Find us at 198 West 21th Street')).toBeInTheDocument()
  })
})
