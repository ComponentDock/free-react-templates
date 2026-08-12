import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('shows the heading, description, email input and peach Sign Up button on the teal band', () => {
    render(<Newsletter />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/Subscribe Newsletter/)
    expect(screen.getByText(/Practical tips, new courses and early access/)).toBeInTheDocument()

    const input = screen.getByLabelText('Email address')
    expect(input).toHaveAttribute('type', 'email')

    const button = screen.getByRole('button', { name: 'Sign Up' })
    expect(button.className).toMatch(/bg-peach/)

    const section = screen.getByRole('region', { name: 'Newsletter' })
    expect(section.className).toMatch(/bg-brand/)
  })

  it('shows a success message after a valid email is submitted', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    await user.type(screen.getByLabelText('Email address'), 'student@example.com')
    await user.click(screen.getByRole('button', { name: 'Sign Up' }))

    expect(screen.getByRole('status')).toHaveTextContent(/Thanks for subscribing/)
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
    expect(screen.queryByText(/Please enter a valid email/)).not.toBeInTheDocument()
  })

  it('rejects an invalid email with a validation error and no success', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    await user.type(screen.getByLabelText('Email address'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Sign Up' }))

    expect(screen.getByText(/Please enter a valid email address/)).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()

    // Typing again clears the validation error.
    await user.type(screen.getByLabelText('Email address'), 'student@example.com')
    expect(screen.queryByText(/Please enter a valid email address/)).not.toBeInTheDocument()
  })
})
