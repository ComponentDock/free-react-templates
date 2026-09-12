import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders newsletter input', () => {
    render(<Footer />)
    expect(screen.getByLabelText(/email for newsletter/i)).toBeInTheDocument()
  })

  it('renders opening hours', () => {
    render(<Footer />)
    expect(screen.getByText(/Sunday/)).toBeInTheDocument()
  })

  it('renders contact info', () => {
    render(<Footer />)
    expect(screen.getByText('123 Restaurant Avenue, Food City')).toBeInTheDocument()
  })

  it('renders about section', () => {
    render(<Footer />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText(/authentic cuisine/)).toBeInTheDocument()
  })

  it('allows email input and form submission', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText(/email for newsletter/i)
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')

    // Submit the form to cover the onSubmit handler
    const submitBtn = screen.getByRole('button', { name: /subscribe/i })
    await user.click(submitBtn)
    expect(input).toHaveValue('')
  })
})
