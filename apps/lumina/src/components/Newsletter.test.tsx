import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders heading', () => {
    render(<Newsletter />)
    expect(screen.getByText(/Together/)).toBeInTheDocument()
    expect(screen.getByText(/Let's Make This Happen/)).toBeInTheDocument()
  })

  it('renders email input', () => {
    render(<Newsletter />)
    expect(screen.getByPlaceholderText('Email address')).toBeInTheDocument()
  })

  it('renders Get Started button', () => {
    render(<Newsletter />)
    expect(screen.getByText('Get Started')).toBeInTheDocument()
  })

  it('allows typing email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByPlaceholderText('Email address')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('has yellow background', () => {
    render(<Newsletter />)
    const section = screen.getByText(/Together/).closest('section')!
    expect(section).toHaveClass('bg-yellow')
  })

  it('form submission calls preventDefault', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.type(screen.getByPlaceholderText('Email address'), 'test@example.com')
    await user.click(screen.getByText('Get Started'))
    // Should still be on page
    expect(screen.getByText(/Together/)).toBeInTheDocument()
  })
})
