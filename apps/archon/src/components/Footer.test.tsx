import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the about widget with a Learn more button', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 3, name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByText(/There live the blind texts/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Learn more' })).toBeInTheDocument()
  })

  it('renders two navigation columns of links', () => {
    render(<Footer />)

    const navigation = screen.getAllByRole('heading', { level: 3, name: 'Navigation' })
    expect(navigation).toHaveLength(1)
    expect(screen.getAllByRole('link', { name: 'Overview' })).toHaveLength(2)
    expect(screen.getAllByRole('link', { name: 'About Us' })).toHaveLength(2)
    expect(screen.getByRole('link', { name: 'Find Buyers' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Portfolio' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Gallery' })).toBeInTheDocument()
  })

  it('renders five social links', () => {
    render(<Footer />)

    for (const name of ['Facebook', 'Twitter', 'LinkedIn', 'Google', 'YouTube']) {
      expect(screen.getByRole('link', { name })).toBeInTheDocument()
    }
  })

  it('shows an error for an invalid email and a success message for a valid one', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByRole('textbox', { name: 'Email address' })
    await user.type(input, 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByText(/Please enter a valid email address/i)).toBeInTheDocument()
    expect(screen.queryByText(/Thanks for subscribing/i)).not.toBeInTheDocument()

    await user.clear(input)
    await user.type(input, 'hello@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByText(/Thanks for subscribing/i)).toBeInTheDocument()
    expect(screen.queryByText(/Please enter a valid email address/i)).not.toBeInTheDocument()
  })

  it('renders recent posts with dates', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 3, name: 'Recent Posts' })).toBeInTheDocument()
    expect(screen.getAllByText('May 3, 2020')).toHaveLength(4)
    expect(screen.getByRole('link', { name: 'Designing for the Human Scale' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Cities of Tomorrow' })).toBeInTheDocument()
  })

  it('renders the copyright line', () => {
    render(<Footer />)

    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument()
    expect(screen.getByText(/© 2026 Archon/i)).toBeInTheDocument()
  })
})
