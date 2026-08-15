import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { footerColumns, socialLinks } from '../data'

describe('Footer', () => {
  it('renders the About Us blurb and Quick Links column', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 3, name: 'About Us' })).toBeInTheDocument()
    expect(
      screen.getByText(/Lorem ipsum dolor sit amet, consectetur adipisicing elit/),
    ).toBeInTheDocument()
    for (const column of footerColumns) {
      expect(screen.getByRole('heading', { level: 3, name: column.heading })).toBeInTheDocument()
      for (const link of column.links) {
        expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
      }
    }
  })

  it('shows a success state when the newsletter is submitted', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText('Email address'), 'hello@example.com')
    await user.click(screen.getByRole('button', { name: 'Send' }))
    expect(screen.getByRole('status')).toHaveTextContent('Thank you for subscribing!')
  })

  it('renders the Follow Us social icons', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 3, name: 'Follow Us' })).toBeInTheDocument()
    for (const name of socialLinks) {
      const link = screen.getByRole('link', { name })
      expect(link.querySelector('svg')).not.toBeNull()
    }
  })

  it('renders the copyright bar with the Component Dock credit link', () => {
    render(<Footer />)
    expect(screen.getByText('© 2026 Depot. All rights reserved.')).toBeInTheDocument()
    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
