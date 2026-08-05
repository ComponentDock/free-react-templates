import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('renders the heading, company-size selector, and submit button', () => {
    render(<ContactForm />)

    expect(screen.getByRole('heading', { level: 2, name: 'Fill out the form' })).toBeInTheDocument()

    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Company size')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()

    expect(screen.getByRole('button', { name: 'Send message' })).toBeInTheDocument()
  })

  it('does not navigate and clears the fields on submit', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    const name = screen.getByLabelText('Name')
    const email = screen.getByLabelText('Email')
    await user.type(name, 'Ada Lovelace')
    await user.type(email, 'ada@example.com')
    expect(name).toHaveValue('Ada Lovelace')

    await user.click(screen.getByRole('button', { name: 'Send message' }))

    expect(name).toHaveValue('')
    expect(email).toHaveValue('')
    expect(screen.getByText(/Thanks, Ada Lovelace/)).toBeInTheDocument()
  })
})
