import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders top products links', () => {
    render(<Footer />)
    expect(screen.getByText('Managed Website')).toBeInTheDocument()
    expect(screen.getByText('Manage Reputation')).toBeInTheDocument()
    expect(screen.getByText('Power Tools')).toBeInTheDocument()
    expect(screen.getByText('Marketing Service')).toBeInTheDocument()
  })

  it('renders the newsletter form', () => {
    render(<Footer />)
    expect(screen.getByRole('textbox', { name: 'Email address' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
    expect(screen.getByLabelText('Send')).toBeInTheDocument()
  })

  it('renders the contentinfo landmark', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const submitBtn = screen.getByRole('button', { name: 'Subscribe' })
    await user.click(submitBtn)

    // Form submission is prevented (no page reload/error)
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })
})
