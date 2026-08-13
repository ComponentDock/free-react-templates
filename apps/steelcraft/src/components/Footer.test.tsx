import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { brand, footer } from '../data'
import { socialLinks } from './social-icons'

describe('Footer', () => {
  it('renders the brand, blurb and contact lines', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: new RegExp(brand.name) })).toBeInTheDocument()
    expect(screen.getByText(footer.blurb)).toBeInTheDocument()
    expect(screen.getByText(footer.phone)).toBeInTheDocument()
    expect(screen.getByText(footer.email)).toBeInTheDocument()
  })

  it('renders the Navigation and Services link columns', () => {
    render(<Footer />)
    expect(screen.getByRole('navigation', { name: 'Footer navigation' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Footer services' })).toBeInTheDocument()
    for (const link of footer.navigation) {
      expect(screen.getByRole('link', { name: link.label })).toBeInTheDocument()
    }
    for (const link of footer.servicesLinks) {
      expect(screen.getByRole('link', { name: link.label })).toBeInTheDocument()
    }
  })

  it('renders the newsletter form with the promise copy', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: footer.newsletter.heading })).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
    expect(screen.getByText(footer.newsletter.prompt)).toBeInTheDocument()
  })

  it('shows an error for an invalid email and clears it on typing', () => {
    render(<Footer />)
    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address')

    fireEvent.change(screen.getByLabelText('Email address'), {
      target: { value: 'not-an-email' },
    })
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('shows a success message after subscribing and unmounts the input', () => {
    render(<Footer />)
    fireEvent.change(screen.getByLabelText('Email address'), {
      target: { value: 'engineer@steelcraft.io' },
    })
    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('status')).toHaveTextContent(
      'Thanks for subscribing — we will be in touch.',
    )
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })

  it('renders the bottom bar with social links', () => {
    render(<Footer />)
    for (const link of socialLinks) {
      expect(screen.getAllByRole('link', { name: link.label }).length).toBeGreaterThan(0)
    }
  })

  it('links the credit to Component Dock', () => {
    render(<Footer />)
    const credit = screen.getByRole('link', { name: 'Component Dock' })
    expect(credit).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
