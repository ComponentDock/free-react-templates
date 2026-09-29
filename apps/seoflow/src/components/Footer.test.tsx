import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the CTA banner', () => {
    render(<Footer />)
    expect(screen.getByText(/Let's Start your project/i)).toBeInTheDocument()
  })

  it('renders the phone number', () => {
    render(<Footer />)
    expect(screen.getByText('+10 673 563 629')).toBeInTheDocument()
  })

  it('renders the email link', () => {
    render(<Footer />)
    expect(screen.getByText('support@seoflow.com')).toBeInTheDocument()
  })

  it('renders service links', () => {
    render(<Footer />)
    expect(screen.getByText('Marketing & SEO')).toBeInTheDocument()
    expect(screen.getByText('Startup')).toBeInTheDocument()
  })

  it('renders useful links', () => {
    render(<Footer />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
  })

  it('renders the newsletter form', () => {
    render(<Footer />)
    expect(screen.getByLabelText(/email for newsletter/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('allows typing in the newsletter input', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText(/email for newsletter/i)
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('submits the newsletter form and clears the input', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText(/email for newsletter/i)
    const submitBtn = screen.getByRole('button', { name: /subscribe/i })
    await user.type(input, 'test@example.com')
    await user.click(submitBtn)
    expect(input).toHaveValue('')
  })

  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders the logo', () => {
    render(<Footer />)
    const logo = screen.getByRole('link', { name: 'SeoFlow' })
    expect(logo).toBeInTheDocument()
    expect(logo.textContent).toMatch(/Flow/)
  })
})
