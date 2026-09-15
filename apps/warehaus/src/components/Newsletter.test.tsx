import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Newsletter } from '../components/Newsletter'

describe('Newsletter', () => {
  it('renders heading', () => {
    render(<Newsletter />)
    expect(screen.getByText('Subscribe to our newsletter')).toBeInTheDocument()
  })

  it('renders email input', () => {
    render(<Newsletter />)
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
  })

  it('renders subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByText('Subscribe')).toBeInTheDocument()
  })

  it('form submission does not navigate', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'test@example.com')
    await user.click(screen.getByText('Subscribe'))
    // Page should still show the newsletter section
    expect(screen.getByText('Subscribe to our newsletter')).toBeInTheDocument()
  })
})
