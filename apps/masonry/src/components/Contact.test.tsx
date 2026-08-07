import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the heading and contact details', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: /Send Us Messages/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /view contact info/i })).toBeInTheDocument()
    expect(screen.getAllByText(/info@masonry/i).length).toBeGreaterThanOrEqual(1)
  })

  it('submits the message form and clears the fields', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    const name = screen.getByLabelText(/your name/i)
    const email = screen.getByLabelText(/your email/i)
    const message = screen.getByLabelText(/your message/i)

    await user.type(name, 'Ada Lovelace')
    await user.type(email, 'ada@example.com')
    await user.type(message, 'I need a design consult.')
    await user.click(screen.getByRole('button', { name: /send message/i }))

    expect(name).toHaveValue('')
    expect(email).toHaveValue('')
    expect(message).toHaveValue('')
  })

  it('shows an error when submitting with an invalid email', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByLabelText(/your name/i), 'Ada')
    await user.type(screen.getByLabelText(/your email/i), 'not-an-email')
    await user.click(screen.getByRole('button', { name: /send message/i }))

    expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i)
  })
})
