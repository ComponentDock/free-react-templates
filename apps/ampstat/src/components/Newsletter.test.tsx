import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Newsletter from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading', () => {
    render(<Newsletter />)
    expect(screen.getByText('Subscribe & Follow')).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<Newsletter />)
    expect(screen.getByText(/Stay up to date/)).toBeInTheDocument()
  })

  it('renders email input', () => {
    render(<Newsletter />)
    expect(screen.getByTestId('newsletter-input')).toBeInTheDocument()
  })

  it('renders subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByTestId('newsletter-button')).toBeInTheDocument()
  })

  it('shows success message after submission', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.type(screen.getByTestId('newsletter-input'), 'test@example.com')
    await user.click(screen.getByTestId('newsletter-button'))
    expect(screen.getByTestId('subscribe-success')).toBeInTheDocument()
    expect(screen.getByText('Thanks for subscribing!')).toBeInTheDocument()
  })

  it('does not show success when submitted with empty email', () => {
    render(<Newsletter />)
    fireEvent.submit(screen.getByTestId('newsletter-form'))
    expect(screen.queryByTestId('subscribe-success')).not.toBeInTheDocument()
  })
})
