import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MoreCTA } from './MoreCTA'

describe('MoreCTA', () => {
  it('renders the heading', () => {
    render(<MoreCTA />)
    expect(
      screen.getByRole('heading', { name: /Want to build something great/i }),
    ).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<MoreCTA />)
    expect(screen.getByText(/discuss your next construction project/i)).toBeInTheDocument()
  })

  it('renders the Contact Us link', () => {
    render(<MoreCTA />)
    expect(screen.getByRole('link', { name: 'Contact Us' })).toHaveAttribute('href', '#contact')
  })

  it('has the CTA section landmark', () => {
    render(<MoreCTA />)
    expect(screen.getByRole('region', { name: /More projects CTA/i })).toBeInTheDocument()
  })
})
