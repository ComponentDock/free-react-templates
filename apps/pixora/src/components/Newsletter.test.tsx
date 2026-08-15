import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading, no-spam note, email input and Get Started button', () => {
    render(<Newsletter />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent(/subscribe/i)
    expect(heading).toHaveTextContent(/for our newsletter/i)
    expect(screen.getByText(/we won.?t send any kind of spam/i)).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toHaveAttribute('placeholder', 'Email address')
    expect(screen.getByRole('button', { name: 'Get Started' })).toBeInTheDocument()
  })

  it('does not submit an empty or invalid email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByLabelText('Email address')

    await user.click(screen.getByRole('button', { name: 'Get Started' }))
    expect(screen.queryByRole('status')).not.toBeInTheDocument()

    await user.type(input, 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Get Started' }))
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
  })

  it('shows a success message after a valid submit', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.type(screen.getByLabelText('Email address'), 'hello@pixora.dev')
    await user.click(screen.getByRole('button', { name: 'Get Started' }))

    const status = screen.getByRole('status')
    expect(status).toHaveTextContent(/you.?re on the list/i)
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })
})
