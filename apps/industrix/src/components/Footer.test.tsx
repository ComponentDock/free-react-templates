import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand name', () => {
    render(<Footer />)
    expect(screen.getByText('Industrix')).toBeInTheDocument()
  })

  it('renders quick links', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
  })

  it('renders services list', () => {
    render(<Footer />)
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    expect(screen.getByText('Industrial Construction')).toBeInTheDocument()
    expect(screen.getByText('Mechanical Engineering')).toBeInTheDocument()
  })

  it('renders newsletter section', () => {
    render(<Footer />)
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('shows copyright', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`${year} Industrix`))).toBeInTheDocument()
  })

  it('validates email on subscribe', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText('Email address')
    const submitBtn = screen.getByRole('button', { name: /subscribe/i })
    await user.type(input, 'bad-email')
    await user.click(submitBtn)
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('subscribes with valid email', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText('Email address')
    const submitBtn = screen.getByRole('button', { name: /subscribe/i })
    await user.type(input, 'test@example.com')
    await user.click(submitBtn)
    expect(screen.getByText(/thanks for subscribing/i)).toBeInTheDocument()
  })
})
