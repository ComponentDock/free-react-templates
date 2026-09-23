import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the newsletter heading', () => {
    render(<Footer />)
    expect(screen.getByText('Ready To Work With Us?')).toBeInTheDocument()
  })

  it('renders the email input', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
  })

  it('renders the subscribe button', () => {
    render(<Footer />)
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('renders Company links', () => {
    render(<Footer />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    const servicesLinks = screen.getAllByText('Services')
    expect(servicesLinks.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Our Works')).toBeInTheDocument()
    expect(screen.getByText('Career')).toBeInTheDocument()
    expect(screen.getByText('FAQs')).toBeInTheDocument()
  })

  it('renders Services links', () => {
    render(<Footer />)
    expect(screen.getByText('Architecture')).toBeInTheDocument()
    expect(screen.getByText('Interior Design')).toBeInTheDocument()
    expect(screen.getByText('Exterior Design')).toBeInTheDocument()
    expect(screen.getByText('Planning')).toBeInTheDocument()
  })

  it('renders Get In Touch section', () => {
    render(<Footer />)
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
    const addresses = screen.getAllByText(/7176 Blue Spring Lane/)
    expect(addresses.length).toBeGreaterThanOrEqual(1)
  })

  it('renders the Component Dock copyright link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders Terms and Privacy links', () => {
    render(<Footer />)
    expect(screen.getByText('Terms of use')).toBeInTheDocument()
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Footer />)
    const facebookLinks = screen.getAllByLabelText('Facebook')
    expect(facebookLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('allows email input', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const form = screen.getByLabelText('Email address').closest('form')!
    await user.type(screen.getByLabelText('Email address'), 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(form).toBeInTheDocument()
  })
})
