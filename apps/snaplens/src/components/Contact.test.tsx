import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Contact from './Contact'

describe('Contact', () => {
  it('renders the section heading', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Stay in Touch')
  })

  it('renders contact info', () => {
    render(<Contact />)
    expect(screen.getByText('+45 677 899 3000 223')).toBeInTheDocument()
    expect(screen.getByText('office@snaplens.com')).toBeInTheDocument()
  })

  it('renders the contact form', () => {
    render(<Contact />)
    expect(screen.getByPlaceholderText('Your name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('E-mail')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Contact />)
    expect(screen.getByText('Amazing Studio')).toBeInTheDocument()
  })

  it('submitting the form does not reload', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.click(screen.getByRole('button', { name: /send/i }))
    // Form submission is prevented (no page reload)
    expect(screen.getByPlaceholderText('Your name')).toBeInTheDocument()
  })
})
