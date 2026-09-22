import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders footer sections', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText('1525 Fitness Lane, Los Angeles, CA 90001')).toBeInTheDocument()
    expect(screen.getByText('+1 (603) 535-4592')).toBeInTheDocument()
    expect(screen.getByText('info@stallion.com')).toBeInTheDocument()
  })

  it('has a newsletter signup form', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const emailInput = screen.getByLabelText(/Email for newsletter/i)
    await user.type(emailInput, 'test@example.com')
    expect(emailInput).toHaveValue('test@example.com')
    await user.click(screen.getByRole('button', { name: /Subscribe/i }))
    expect(emailInput).toHaveValue('')
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('YouTube')).toBeInTheDocument()
  })

  it('displays copyright year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })
})
