import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo', () => {
    render(<Footer />)

    expect(screen.getByText('Propwell')).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Footer />)

    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })

  it('renders contact info', () => {
    render(<Footer />)

    expect(screen.getByText('Contact Info')).toBeInTheDocument()
    expect(screen.getByText(/123 Real Estate Ave/)).toBeInTheDocument()
    expect(screen.getByText('+8880 4433 8899')).toBeInTheDocument()
    expect(screen.getByText('info@propwell.com')).toBeInTheDocument()
  })

  it('renders popular places', () => {
    render(<Footer />)

    expect(screen.getByText('Popular Places')).toBeInTheDocument()
    expect(screen.getByText('New York')).toBeInTheDocument()
    expect(screen.getByText('Florida')).toBeInTheDocument()
    expect(screen.getByText('San Jose')).toBeInTheDocument()
    expect(screen.getByText('St Louis')).toBeInTheDocument()
    expect(screen.getByText('Los Angeles')).toBeInTheDocument()
  })

  it('renders newsletter form', () => {
    render(<Footer />)

    expect(screen.getByText('Newsletter')).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByLabelText('Subscribe')).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)

    const link = screen.getByText('Component Dock')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders copyright with year', () => {
    render(<Footer />)

    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })

  it('renders footer navigation links', () => {
    render(<Footer />)

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Properties')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('allows typing in newsletter input', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText('Email address')
    await user.type(input, 'test@example.com')

    expect(input).toHaveValue('test@example.com')
  })

  it('submits newsletter form without errors', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const subscribeButton = screen.getByLabelText('Subscribe')
    await user.click(subscribeButton)
  })

  it('has contentinfo role', () => {
    render(<Footer />)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
