import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MembershipBanner } from './MembershipBanner'

describe('MembershipBanner', () => {
  it('renders the heading and CTA', () => {
    render(<MembershipBanner />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      /Membership Offer Available Now/,
    )
    expect(screen.getByRole('link', { name: 'More Services' })).toHaveAttribute('href', '#contact')
  })
})
