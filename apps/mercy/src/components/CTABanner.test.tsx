import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CTABanner } from './CTABanner'

describe('CTABanner', () => {
  it('renders the CTA heading', () => {
    render(<CTABanner />)
    expect(
      screen.getByRole('heading', { name: /Best Way to Make a Difference/i }),
    ).toBeInTheDocument()
  })

  it('renders the Become A Volunteer button', () => {
    render(<CTABanner />)
    expect(screen.getByRole('link', { name: /Become A Volunteer/i })).toHaveAttribute(
      'href',
      '#volunteer',
    )
  })
})
