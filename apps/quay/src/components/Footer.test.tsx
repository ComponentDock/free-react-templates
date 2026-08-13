import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { featureLinks, socialLinks } from '../data'

describe('Footer', () => {
  it('renders the About Us column with the about paragraph', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByText(/Far far away/i)).toBeInTheDocument()
  })

  it('renders the Features column with all link items', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Features' })).toBeInTheDocument()
    for (const link of featureLinks) {
      expect(screen.getByRole('link', { name: link.label })).toBeInTheDocument()
    }
  })

  it('renders the subscribe form with an email input and Subscribe button', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Subscribe to Newsletter' })).toBeInTheDocument()
    expect(screen.getByLabelText('Enter Email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('blocks invalid emails with an inline error and no success state', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('Enter Email'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()

    await user.type(screen.getByLabelText('Enter Email'), 'x')
    expect(screen.queryByText('Please enter a valid email address.')).not.toBeInTheDocument()
  })

  it('shows a confirmation state after a valid email is submitted', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('Enter Email'), 'hello@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing!')
    expect(screen.queryByLabelText('Enter Email')).not.toBeInTheDocument()
  })

  it('renders the Follow Us social links', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Follow Us' })).toBeInTheDocument()
    for (const link of socialLinks) {
      expect(screen.getByRole('link', { name: link.label })).toBeInTheDocument()
    }
  })

  it('links to Component Dock in the bottom bar', () => {
    render(<Footer />)

    const dock = screen.getByRole('link', { name: /Component Dock/ })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })
})
