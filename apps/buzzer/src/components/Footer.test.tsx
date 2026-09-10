import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand name', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /Buzzer/i })).toBeInTheDocument()
  })

  it('renders About links', () => {
    render(<Footer />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Our Services')).toBeInTheDocument()
  })

  it('renders Services links', () => {
    render(<Footer />)
    expect(screen.getByText('Business Strategy')).toBeInTheDocument()
    expect(screen.getByText('Digital Marketing')).toBeInTheDocument()
  })

  it('renders the newsletter form', () => {
    render(<Footer />)
    expect(screen.getByLabelText(/Your Email Address/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send' })).toBeInTheDocument()
  })

  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('validates email on submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText(/Your Email Address/i)
    await user.type(input, 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Send' }))

    expect(screen.getByRole('alert')).toHaveTextContent('A valid email address is required.')
  })

  it('subscribes with a valid email', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText(/Your Email Address/i)
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'Send' }))

    expect(screen.getByText('Thanks for subscribing!')).toBeInTheDocument()
  })

  it('renders the copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`${year}`))).toBeInTheDocument()
  })
})
