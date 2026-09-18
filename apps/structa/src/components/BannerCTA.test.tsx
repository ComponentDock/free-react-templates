import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BannerCTA } from './BannerCTA'

describe('BannerCTA', () => {
  it('renders the heading', () => {
    render(<BannerCTA />)
    expect(screen.getByRole('heading', { name: /Any help needed/i })).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<BannerCTA />)
    expect(screen.getByText(/team is ready to assist/i)).toBeInTheDocument()
  })

  it('renders the Contact Us link', () => {
    render(<BannerCTA />)
    expect(screen.getByRole('link', { name: /Contact Us/i })).toHaveAttribute('href', '#contact')
  })

  it('has the CTA section landmark', () => {
    render(<BannerCTA />)
    expect(screen.getByRole('region', { name: /Call to action/i })).toBeInTheDocument()
  })
})
