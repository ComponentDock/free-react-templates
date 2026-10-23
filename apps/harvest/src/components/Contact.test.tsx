import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('shows the heading and the contact details', () => {
    render(<Contact />)

    expect(screen.getByRole('heading', { name: 'Get In Touch With Us' })).toBeInTheDocument()
    expect(screen.getByText('120 Raymond Rd, New York')).toBeInTheDocument()
    expect(screen.getByText('+84 223 9000')).toBeInTheDocument()
    expect(screen.getByText('info.deercreative@gmail.com')).toBeInTheDocument()
  })

  it('renders labeled fields and a submit button', () => {
    render(<Contact />)

    expect(screen.getByLabelText('Your Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Your Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('submits without a page reload and clears the fields', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    const name = screen.getByLabelText('Your Name')
    const email = screen.getByLabelText('Your Email')
    const subject = screen.getByLabelText('Subject')
    const message = screen.getByLabelText('Message')

    await user.type(name, 'Jane')
    await user.type(email, 'jane@example.com')
    await user.type(subject, 'Order')
    await user.type(message, 'Hello there')

    expect(name).toHaveValue('Jane')

    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(name).toHaveValue('')
    expect(email).toHaveValue('')
    expect(subject).toHaveValue('')
    expect(message).toHaveValue('')
  })
})
