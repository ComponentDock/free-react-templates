import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BannerCTA } from './BannerCTA'

describe('BannerCTA', () => {
  it('renders heading, description, and register button', () => {
    render(<BannerCTA />)

    expect(screen.getByText('Join Our Community Now!')).toBeInTheDocument()
    expect(screen.getByText(/Be part of a thriving community/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Register Now' })).toBeInTheDocument()
  })

  it('register button links to register section', () => {
    render(<BannerCTA />)

    const link = screen.getByRole('link', { name: 'Register Now' })
    expect(link).toHaveAttribute('href', '#register')
  })
})
