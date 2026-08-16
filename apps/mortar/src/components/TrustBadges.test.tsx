import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TrustBadges } from './TrustBadges'
import { trust } from '../data'

describe('TrustBadges', () => {
  it('renders the kicker and heading', () => {
    render(<TrustBadges />)
    expect(screen.getByText(trust.kicker)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: trust.heading })).toBeInTheDocument()
  })

  it('renders the six client text logos', () => {
    render(<TrustBadges />)
    for (const client of trust.clients) {
      expect(screen.getByText(client)).toBeInTheDocument()
    }
  })
})
