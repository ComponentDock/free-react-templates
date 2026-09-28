import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders newsletter form', () => {
    render(<Footer />)

    expect(screen.getByText('Subscribe Newsletter')).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('renders info columns', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Opening Hours' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Contact Info' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Quick Links' })).toBeInTheDocument()
  })

  it('renders social icons', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)

    const cdLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(cdLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(cdLink).toHaveAttribute('target', '_blank')
  })

  it('renders contact info', () => {
    render(<Footer />)

    expect(screen.getByText('+1 242 4942 290')).toBeInTheDocument()
    expect(screen.getByText('info@yourdomain.com')).toBeInTheDocument()
  })

  it('has contact section id', () => {
    const { container } = render(<Footer />)
    expect(container.querySelector('#contact')).toBeInTheDocument()
  })

  it('allows typing in email input and submitting form', async () => {
    const { user } = await renderWithUser()
    const input = screen.getByLabelText('Email address')

    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')

    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(input).toHaveValue('')
  })
})

async function renderWithUser() {
  const userEvent = await import('@testing-library/user-event')
  const user = userEvent.default.setup()
  render(<Footer />)
  return { user }
}
