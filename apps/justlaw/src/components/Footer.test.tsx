import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Justlaw' })).toBeInTheDocument()
  })

  it('renders company links', () => {
    render(<Footer />)
    expect(screen.getByText('Company')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About Us' })).toBeInTheDocument()
  })

  it('renders services links', () => {
    render(<Footer />)
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText("O'Connor Group")).toBeInTheDocument()
    expect(screen.getByText('Our Business Model')).toBeInTheDocument()
  })

  it('renders newsletter form and handles submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email Address')).toBeInTheDocument()
    const submitBtn = screen.getByRole('button', { name: /subscribe/i })
    expect(submitBtn).toBeInTheDocument()
    await user.click(submitBtn)
  })

  it('renders Component Dock attribution', () => {
    render(<Footer />)
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders social icons', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /website/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /email/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /share/i })).toBeInTheDocument()
  })
})
