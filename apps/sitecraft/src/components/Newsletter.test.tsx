import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading and subtext', () => {
    render(<Newsletter />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Subscribe Newsletter' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Subscribe our newsletter and get latest update')).toBeInTheDocument()
  })

  it('renders an email input and subscribe button', () => {
    render(<Newsletter />)

    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe Now' })).toBeInTheDocument()
  })

  it('allows typing in the email input', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    const input = screen.getByLabelText('Email address')
    await user.type(input, 'test@example.com')

    expect(input).toHaveValue('test@example.com')
  })

  it('resets the form on submit', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    const input = screen.getByLabelText('Email address')
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe Now' }))

    expect(input).toHaveValue('')
  })
})
