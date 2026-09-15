import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CTABanner } from './CTABanner'

describe('CTABanner', () => {
  it('renders the headline and CTA button', () => {
    render(<CTABanner />)

    expect(screen.getByRole('heading', { name: /forget what you can get/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Become a Volunteer' })).toBeInTheDocument()
  })

  it('links the CTA to the contact section', () => {
    render(<CTABanner />)

    const cta = screen.getByRole('link', { name: 'Become a Volunteer' })
    expect(cta).toHaveAttribute('href', '#contact')
  })
})
