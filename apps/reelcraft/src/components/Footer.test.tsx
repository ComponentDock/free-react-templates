import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the site name', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /ReelCraft/i })).toHaveAttribute('href', '#home')
  })

  it('renders the Component Dock link in copyright', () => {
    render(<Footer />)
    const cdLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(cdLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the about us section', () => {
    render(<Footer />)
    expect(screen.getByText('About us')).toBeInTheDocument()
    expect(screen.getByText(/Read more/)).toBeInTheDocument()
  })

  it('renders Who we are links', () => {
    render(<Footer />)
    expect(screen.getByText('Team')).toBeInTheDocument()
    expect(screen.getByText('Careers')).toBeInTheDocument()
    expect(screen.getByText('Contact us')).toBeInTheDocument()
    expect(screen.getByText('Locations')).toBeInTheDocument()
  })

  it('renders Our work links', () => {
    render(<Footer />)
    expect(screen.getByText('Feature')).toBeInTheDocument()
    expect(screen.getByText('Latest')).toBeInTheDocument()
    expect(screen.getByText('Browse Archive')).toBeInTheDocument()
    expect(screen.getByText('Video for web')).toBeInTheDocument()
  })

  it('renders the newsletter form', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send' })).toBeInTheDocument()
  })

  it('validates email on submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.click(screen.getByRole('button', { name: 'Send' }))
    expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i)
  })

  it('shows success message on valid email', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText('Email address'), 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'Send' }))
    expect(screen.getByText(/Thanks for subscribing!/i)).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('YouTube')).toBeInTheDocument()
  })

  it('has the footer landmark', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
