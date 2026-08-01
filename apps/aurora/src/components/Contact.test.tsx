import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

async function fillValidForm(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText('Name'), 'Alex Morgan')
  await user.type(screen.getByLabelText('Email'), 'alex@example.com')
  await user.type(screen.getByLabelText('Message'), 'Hello there')
}

describe('Contact', () => {
  it('shows a validation error for each invalid field and does not submit', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.click(screen.getByRole('button', { name: /send message/i }))

    expect(screen.getByText('Name is required')).toBeInTheDocument()
    expect(screen.getByText('Enter a valid email')).toBeInTheDocument()
    expect(screen.getByText('Message is required')).toBeInTheDocument()
    expect(screen.getByLabelText('Name')).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByLabelText('Email')).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByLabelText('Message')).toHaveAttribute('aria-invalid', 'true')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('only reports the invalid email when the other fields are valid', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByLabelText('Name'), 'Alex Morgan')
    await user.type(screen.getByLabelText('Email'), 'not-an-email')
    await user.type(screen.getByLabelText('Message'), 'Hello there')
    await user.click(screen.getByRole('button', { name: /send message/i }))

    expect(screen.getByText('Enter a valid email')).toBeInTheDocument()
    expect(screen.queryByText('Name is required')).not.toBeInTheDocument()
    expect(screen.queryByText('Message is required')).not.toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByLabelText('Name')).not.toHaveAttribute('aria-invalid')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('shows a success message and clears the form on a valid submit', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await fillValidForm(user)
    await user.click(screen.getByRole('button', { name: /send message/i }))

    expect(screen.getByRole('status')).toHaveTextContent(/message has been sent/i)
    expect(screen.getByLabelText('Name')).toHaveValue('')
    expect(screen.getByLabelText('Email')).toHaveValue('')
    expect(screen.getByLabelText('Message')).toHaveValue('')
  })

  it('hides the success message when a later submission is invalid', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await fillValidForm(user)
    await user.click(screen.getByRole('button', { name: /send message/i }))
    expect(screen.getByRole('status')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /send message/i }))
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    expect(screen.getByText('Name is required')).toBeInTheDocument()
  })
})
