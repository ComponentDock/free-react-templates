import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows navigation links, recent news, and newsletter', () => {
    render(<Footer />)
    expect(screen.getByText('Navigation')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Recent News')).toBeInTheDocument()
    expect(screen.getByText('Subscribe Newsletter')).toBeInTheDocument()
  })

  it('links to componentdock.com', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('has a newsletter email input and send button', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Enter Email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send' })).toBeInTheDocument()
  })

  it('allows typing in newsletter email and submitting', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const emailInput = screen.getByLabelText('Enter Email')
    await user.type(emailInput, 'test@example.com')
    expect(emailInput).toHaveValue('test@example.com')

    await user.click(screen.getByRole('button', { name: 'Send' }))
    expect(emailInput).toHaveValue('')
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })

  it('shows recent news items', () => {
    render(<Footer />)
    expect(screen.getByText(/New advanced teeth whitening/)).toBeInTheDocument()
    expect(screen.getByText(/Tips for maintaining healthy gums/)).toBeInTheDocument()
    expect(screen.getByText(/Meet our newest orthodontic/)).toBeInTheDocument()
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })
})
