import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the GYMBOX logo', () => {
    render(<Footer />)
    expect(screen.getAllByText('GYMBOX').length).toBeGreaterThanOrEqual(1)
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders address section', () => {
    render(<Footer />)
    expect(screen.getByText(/123 Fitness Street/)).toBeInTheDocument()
  })

  it('renders useful links', () => {
    render(<Footer />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Pricing')).toBeInTheDocument()
    expect(screen.getByText('Gallery')).toBeInTheDocument()
    expect(screen.getByText('Trainers')).toBeInTheDocument()
  })

  it('renders newsletter form and handles submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByPlaceholderText('Email Address')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
    const submitButton = screen.getByRole('button', { name: /subscribe/i })
    await user.click(submitButton)
    expect(input).toHaveValue('')
  })

  it('renders copyright with Made with Component Dock', () => {
    render(<Footer />)
    expect(screen.getByText(/made with/i)).toBeInTheDocument()
    expect(screen.getByText(/component dock/i)).toBeInTheDocument()
  })
})
