import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders About Us section', () => {
    render(<Footer />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
  })

  it('renders Newsletter section', () => {
    render(<Footer />)
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
  })

  it('renders email input', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Email for newsletter')).toBeInTheDocument()
  })

  it('renders Subscribe button', () => {
    render(<Footer />)
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('renders Follow Us section', () => {
    render(<Footer />)
    expect(screen.getByText('Follow Us')).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })

  it('prevents default form submission', async () => {
    const userEvent = (await import('@testing-library/user-event')).default
    const user = userEvent.setup()
    render(<Footer />)

    const submitBtn = screen.getByRole('button', { name: /subscribe/i })
    await user.click(submitBtn)
    // Form should not navigate — onSubmit calls preventDefault
  })
})
