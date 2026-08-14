import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the dark footer with About Us, Quick Links, Follow Us and Newsletter', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveClass('bg-footer')

    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    for (const link of ['About Us', 'Services', 'Testimonials', 'Contact Us']) {
      expect(screen.getAllByRole('link', { name: link }).length).toBeGreaterThan(0)
    }

    expect(screen.getByRole('heading', { name: 'Follow Us' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Linkedin' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })

  it('renders a newsletter form with an email input and Send button', () => {
    render(<Footer />)
    expect(screen.getByPlaceholderText('Enter Email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send' })).toBeInTheDocument()
  })

  it('links the copyright bar to Component Dock', () => {
    render(<Footer />)
    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })

  it('submits the newsletter form without errors', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByPlaceholderText('Enter Email'), 'reader@example.com')
    await user.click(screen.getByRole('button', { name: 'Send' }))
    expect(screen.getByRole('status')).toHaveTextContent(/Subscribed/)
  })

  it('ignores an empty newsletter submission', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.click(screen.getByRole('button', { name: 'Send' }))
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter Email')).toBeInTheDocument()
  })
})
