import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders About section with brand description', () => {
    render(<Footer />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText(/trusted partner/)).toBeInTheDocument()
  })

  it('renders Newsletter section', () => {
    render(<Footer />)
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
  })

  it('renders email input', () => {
    render(<Footer />)
    expect(screen.getByPlaceholderText('Email Address')).toBeInTheDocument()
  })

  it('renders Instagram Feed section', () => {
    render(<Footer />)
    expect(screen.getByText('Instagram Feed')).toBeInTheDocument()
  })

  it('renders Follow Us section with social links', () => {
    render(<Footer />)
    expect(screen.getByText('Follow Us')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
    expect(screen.getByLabelText('Behance')).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders copyright paragraph', () => {
    render(<Footer />)
    expect(screen.getByText(/Dwellpoint\. Made with/)).toBeInTheDocument()
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
