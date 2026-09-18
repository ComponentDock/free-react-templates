import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Structa brand link', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /Structa/ })).toBeInTheDocument()
  })

  it('renders the Navigation column', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Navigation' })).toBeInTheDocument()
    const links = ['Home', 'About', 'Services', 'Projects', 'Blog', 'Contact']
    for (const l of links) {
      expect(screen.getAllByText(l).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders the Services column', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Services' })).toBeInTheDocument()
    const services = [
      'General Contracting',
      'Project Planning',
      'Interior Design',
      'Renovation',
      'Consulting',
    ]
    for (const s of services) {
      expect(screen.getByText(s)).toBeInTheDocument()
    }
  })

  it('renders the Newsletter column', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('renders contact info', () => {
    render(<Footer />)
    expect(screen.getByText('info@structa.com')).toBeInTheDocument()
    expect(screen.getByText(/601-609 6780/)).toBeInTheDocument()
    expect(screen.getByText('78/A, Green Lane, New York')).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('renders the Component Dock link in copyright', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('rejects invalid email', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('Email Address'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i)
  })

  it('accepts valid email and shows success', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('Email Address'), 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByText(/Thanks for subscribing/)).toBeInTheDocument()
    expect(screen.queryByLabelText('Email Address')).not.toBeInTheDocument()
  })

  it('has the contentinfo landmark', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
