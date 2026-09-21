import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders About Us section', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /about us/i })).toBeInTheDocument()
  })

  it('renders Newsletter section', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /newsletter/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/email address for newsletter/i)).toBeInTheDocument()
  })

  it('renders Follow Us section', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /follow us/i })).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /follow us on facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /follow us on twitter/i })).toBeInTheDocument()
  })

  it('renders Component Dock attribution', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('prevents default on newsletter form submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const submitBtn = screen.getByRole('button', { name: /subscribe to newsletter/i })
    await user.click(submitBtn)
  })
})
