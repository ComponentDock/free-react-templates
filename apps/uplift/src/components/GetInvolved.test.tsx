import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { GetInvolved } from './GetInvolved'

describe('GetInvolved', () => {
  it('shows the section heading', () => {
    render(<GetInvolved />)

    expect(screen.getByRole('heading', { level: 2, name: 'Join Our Mission' })).toBeInTheDocument()
    expect(screen.getByText(/No matter where you are in your journey/)).toBeInTheDocument()
  })

  it('shows the three involvement cards with links', () => {
    render(<GetInvolved />)

    for (const title of ['Volunteer', 'Fundraise', 'Partner']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }

    expect(screen.getByRole('link', { name: 'Become a Volunteer' })).toHaveAttribute(
      'href',
      '#contact',
    )
    expect(screen.getByRole('link', { name: 'Start Fundraising' })).toHaveAttribute(
      'href',
      '#donate',
    )
    expect(screen.getByRole('link', { name: 'Become a Partner' })).toHaveAttribute(
      'href',
      '#contact',
    )
  })
})
