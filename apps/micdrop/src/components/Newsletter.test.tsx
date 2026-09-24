import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading', () => {
    render(<Newsletter />)
    expect(screen.getByText('Stay in the Loop')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<Newsletter />)
    expect(screen.getByText(/Get the latest episodes and exclusive content/)).toBeInTheDocument()
  })

  it('renders the email input', () => {
    render(<Newsletter />)
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
  })

  it('renders the Subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByRole('button', { name: /Subscribe/ })).toBeInTheDocument()
  })

  it('submits the form with a valid email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByLabelText('Email address')
    const button = screen.getByRole('button', { name: /Subscribe/ })
    await user.type(input, 'test@example.com')
    await user.click(button)
    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing!')
  })

  it('does not submit when email is empty', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const button = screen.getByRole('button', { name: /Subscribe/ })
    await user.click(button)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('has the correct aria-label', () => {
    render(<Newsletter />)
    expect(screen.getByLabelText('Newsletter signup')).toBeInTheDocument()
  })

  it('has correct form aria-label', () => {
    render(<Newsletter />)
    expect(screen.getByLabelText('Newsletter form')).toBeInTheDocument()
  })
})
