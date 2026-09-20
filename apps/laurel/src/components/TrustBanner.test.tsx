import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TrustBanner } from './TrustBanner'

describe('TrustBanner', () => {
  it('renders the heading', () => {
    render(<TrustBanner />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      /trusted by 50,000\+ students/i,
    )
  })

  it('renders the description', () => {
    render(<TrustBanner />)
    expect(screen.getByText(/Our platform has helped thousands/)).toBeInTheDocument()
  })
})
