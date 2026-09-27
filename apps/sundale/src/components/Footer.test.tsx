import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders About Us section', () => {
    render(<Footer />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
  })

  it('renders brand description', () => {
    render(<Footer />)
    expect(screen.getByText(/Sundial helps you find/)).toBeInTheDocument()
  })

  it('renders Useful Links section', () => {
    render(<Footer />)
    expect(screen.getByText('Useful Links')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Footer />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Properties')).toBeInTheDocument()
  })

  it('renders Newsletter section', () => {
    render(<Footer />)
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
  })

  it('renders email input', () => {
    render(<Footer />)
    expect(screen.getByPlaceholderText('Email Address')).toBeInTheDocument()
  })

  it('renders Contact heading', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders phone number', () => {
    render(<Footer />)
    expect(screen.getByText('+1 555 123 4567')).toBeInTheDocument()
  })

  it('renders email address', () => {
    render(<Footer />)
    expect(screen.getByText('contact@sundale.com')).toBeInTheDocument()
  })

  it('renders address', () => {
    render(<Footer />)
    expect(screen.getByText(/123 Main Street/)).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/Sundale\. Made with/)).toBeInTheDocument()
  })

  it('handles newsletter form submission', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByPlaceholderText('Email Address')
    await user.type(input, 'test@example.com')
    const submit = screen.getByLabelText('Subscribe')
    await user.click(submit)
    expect(input).toHaveValue('test@example.com')
  })
})
