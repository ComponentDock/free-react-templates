import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the near-black footer with About, Quick Menu, Free Templates, Stay up to date and Social Icons widgets', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer.className).toMatch(/bg-ink/)
    expect(screen.getByRole('heading', { level: 3, name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Quick Menu' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Free Templates' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Stay up to date' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Social Icons' })).toBeInTheDocument()
  })

  it('lists the Quick Menu and Free Templates links', () => {
    render(<Footer />)
    for (const label of ['Home', 'About', 'Blog', 'Contacts', 'Privacy']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    for (const label of ['HTML5 / CSS3', 'Clean Design', 'Responsive', 'Multi Purpose Template']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('shows an email input with placeholder and a Subscribe button', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Email address')).toHaveAttribute(
      'placeholder',
      'Enter your email',
    )
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('replaces the form with a success message on submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText('Email address'), 'ada@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
    expect(screen.getByText(/Thanks for subscribing/)).toBeInTheDocument()
  })

  it('renders brand icon links for Facebook, Twitter, Instagram and LinkedIn', () => {
    render(<Footer />)
    for (const label of ['Facebook', 'Twitter', 'Instagram', 'LinkedIn']) {
      const link = screen.getByRole('link', { name: label })
      expect(link.querySelector('svg')).not.toBeNull()
    }
  })

  it('links to Component Dock and shows a copyright line', () => {
    render(<Footer />)
    const dock = screen.getByRole('link', { name: /Component Dock/ })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })
})
