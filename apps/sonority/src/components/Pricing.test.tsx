import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the section heading', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Listen free or subscribe/)
  })

  it('renders both pricing cards', () => {
    render(<Pricing />)
    expect(screen.getByText('Sonority Free')).toBeInTheDocument()
    expect(screen.getByText('Sonority Premium')).toBeInTheDocument()
  })

  it('renders the correct prices', () => {
    render(<Pricing />)
    expect(screen.getByText('$0.00')).toBeInTheDocument()
    expect(screen.getByText('$9.99')).toBeInTheDocument()
  })

  it('renders Free card features', () => {
    render(<Pricing />)
    expect(screen.getByText('Online listening')).toBeInTheDocument()
    expect(screen.getByText('Regular audio')).toBeInTheDocument()
    expect(screen.getByText('With advertising')).toBeInTheDocument()
    expect(screen.getByText('30 skips per day')).toBeInTheDocument()
  })

  it('renders Premium card features', () => {
    render(<Pricing />)
    expect(screen.getByText('Offline listening')).toBeInTheDocument()
    expect(screen.getByText('High quality audio')).toBeInTheDocument()
    expect(screen.getByText('No advertising')).toBeInTheDocument()
    expect(screen.getByText('Unlimited skips')).toBeInTheDocument()
  })

  it('renders the CTA buttons', () => {
    render(<Pricing />)
    expect(screen.getByText('Get Free')).toBeInTheDocument()
    expect(screen.getByText('Get Premium')).toBeInTheDocument()
  })

  it('has an id of pricing for navigation', () => {
    render(<Pricing />)
    const section = document.querySelector('#pricing')!
    expect(section).toBeInTheDocument()
  })
})
