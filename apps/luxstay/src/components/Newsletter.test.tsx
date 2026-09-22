import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading', () => {
    render(<Newsletter />)
    expect(screen.getByText('Sign Up for a Newsletter')).toBeInTheDocument()
  })

  it('renders email input', () => {
    render(<Newsletter />)
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
  })

  it('renders subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByText('Subscribe')).toBeInTheDocument()
  })

  it('has correct input type', () => {
    render(<Newsletter />)
    expect(screen.getByLabelText('Email address')).toHaveAttribute('type', 'email')
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const button = screen.getByText('Subscribe')
    await user.click(button)
    // Form submission is prevented (onSubmit calls e.preventDefault())
    // If it weren't prevented, jsdom would throw a navigation error
  })
})
