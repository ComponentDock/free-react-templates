import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders working hours', () => {
    render(<Footer />)
    expect(screen.getByText(/Working Hours/)).toBeInTheDocument()
    expect(screen.getByText(/Mon - Sat 8:00 - 18:00/)).toBeInTheDocument()
  })

  it('renders contact info', () => {
    render(<Footer />)
    expect(screen.getByText(/GET IN TOUCH/i)).toBeInTheDocument()
    expect(screen.getByText(/1265 North Avenue/)).toBeInTheDocument()
    expect(screen.getByText(/\+012 549 594/)).toBeInTheDocument()
  })

  it('renders services links', () => {
    render(<Footer />)
    expect(screen.getByText('Services')).toBeInTheDocument()
  })

  it('renders newsletter form', () => {
    render(<Footer />)
    expect(screen.getByText(/newsletter/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter Your Email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('prevents default on newsletter form submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByPlaceholderText('Enter Your Email')
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(input).toHaveValue('test@example.com')
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('has social media links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })
})
