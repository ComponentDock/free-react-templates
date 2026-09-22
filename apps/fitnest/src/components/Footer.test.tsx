import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo, description, and hours', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Fitnest' })).toBeInTheDocument()
    expect(screen.getByText(/modern yoga and fitness studio/i)).toBeInTheDocument()
    expect(screen.getByText('Mon - Fri: 6.00 — 22.00')).toBeInTheDocument()
    expect(screen.getByText('Sat - Sun: 8.00 — 18.00')).toBeInTheDocument()
  })

  it('renders the email subscribe form', () => {
    render(<Footer />)
    expect(screen.getByPlaceholderText('Your email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('renders Inspiration and About Us links', () => {
    render(<Footer />)
    for (const label of ['Yoga Basics', 'Meditation Guide', 'Breathing Exercises']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'About Fitnest' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Our Instructors' })).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText(/123 Yoga Lane/)).toBeInTheDocument()
    expect(screen.getByText(/info@fitnest\.com/)).toBeInTheDocument()
  })

  it('renders the Component Dock copyright link', () => {
    render(<Footer />)
    const cdLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(cdLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(cdLink).toHaveAttribute('target', '_blank')
  })

  it('renders social icon links', () => {
    render(<Footer />)
    for (const label of ['Facebook', 'Twitter', 'Instagram', 'LinkedIn']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('allows typing into the email subscribe input', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByPlaceholderText('Your email'), 'user@test.com')
    expect(screen.getByPlaceholderText('Your email')).toHaveValue('user@test.com')
  })

  it('submits the subscribe form without navigating', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByPlaceholderText('Your email'), 'user@test.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
  })
})
