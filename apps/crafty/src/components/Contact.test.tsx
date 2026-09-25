import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders address, email, phone info and the contact form', () => {
    render(<Contact />)

    expect(screen.getByText('Address')).toBeInTheDocument()
    expect(screen.getByText('Email Address')).toBeInTheDocument()
    expect(screen.getByText('Phone Number')).toBeInTheDocument()

    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /message/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('submits the form and clears inputs', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    const name = screen.getByRole('textbox', { name: /name/i })
    const email = screen.getByRole('textbox', { name: /email/i })
    const message = screen.getByRole('textbox', { name: /message/i })

    await user.type(name, 'John')
    await user.type(email, 'john@test.com')
    await user.type(message, 'Hello')
    await user.click(screen.getByRole('button', { name: /send message/i }))

    expect(name).toHaveValue('')
    expect(email).toHaveValue('')
    expect(message).toHaveValue('')
  })
})
