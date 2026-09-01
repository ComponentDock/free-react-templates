import { describe, expect, it } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading, email input, and subscribe button', () => {
    render(<Newsletter />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Stay Updated')
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Subscribe/i })).toBeInTheDocument()
  })

  it('shows an error when submitting with an empty email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    await user.click(screen.getByRole('button', { name: /Subscribe/i }))

    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address')
  })

  it('shows an error when submitting an invalid email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    await user.type(screen.getByLabelText('Email address'), 'notanemail')
    await user.click(screen.getByRole('button', { name: /Subscribe/i }))

    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address')
  })

  it('clears the error when the user starts typing again', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    await user.click(screen.getByRole('button', { name: /Subscribe/i }))
    expect(screen.getByRole('alert')).toBeInTheDocument()

    await user.type(screen.getByLabelText('Email address'), 'a')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('shows loading state and then success after valid submission', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    await user.type(screen.getByLabelText('Email address'), 'test@example.com')
    await user.click(screen.getByRole('button', { name: /Subscribe/i }))

    expect(screen.getByText('Subscribing...')).toBeInTheDocument()

    await waitFor(
      () => {
        expect(screen.getByText('Subscribed!')).toBeInTheDocument()
      },
      { timeout: 5000 },
    )

    expect(screen.getByLabelText('Email address')).toHaveValue('')
  })

  it('disables the input and button while loading', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    await user.type(screen.getByLabelText('Email address'), 'test@example.com')
    await user.click(screen.getByRole('button', { name: /Subscribe/i }))

    expect(screen.getByLabelText('Email address')).toBeDisabled()
    expect(screen.getByRole('button', { name: /Subscribing/i })).toBeDisabled()
  })

  it('disables the input and button in success state', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    await user.type(screen.getByLabelText('Email address'), 'test@example.com')
    await user.click(screen.getByRole('button', { name: /Subscribe/i }))

    await waitFor(
      () => {
        expect(screen.getByLabelText('Email address')).toBeDisabled()
        expect(screen.getByRole('button', { name: /Subscribed!/i })).toBeDisabled()
      },
      { timeout: 5000 },
    )
  })

  it('links to the privacy policy', () => {
    render(<Newsletter />)
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toHaveAttribute('href', '#')
  })
})
