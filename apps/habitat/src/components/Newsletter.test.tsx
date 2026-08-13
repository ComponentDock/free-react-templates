import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading, email input and subscribe button', () => {
    render(<Newsletter />)
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Join our mailing to get weekly updates on our exclusive deals.',
      }),
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe!' })).toBeInTheDocument()
  })

  it('rejects an invalid email with an error message', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.type(screen.getByLabelText('Email address'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe!' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Enter a valid email address')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('confirms a valid subscription and clears the field', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const emailInput = screen.getByLabelText('Email address')
    await user.type(emailInput, 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe!' }))
    expect(screen.getByRole('alert')).toBeInTheDocument()
    await user.clear(emailInput)
    await user.type(emailInput, 'jane@example.com')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Subscribe!' }))
    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing!')
    expect(emailInput).toHaveValue('')
  })
})
