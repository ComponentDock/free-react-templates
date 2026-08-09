import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TrustRow } from './TrustRow'

describe('TrustRow', () => {
  it('renders all four trust items with blurbs', () => {
    render(<TrustRow />)

    expect(screen.getByRole('heading', { name: 'Fully Insured' })).toBeInTheDocument()
    expect(screen.getByText(/Up to \$2M liability coverage/)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Background Checked' })).toBeInTheDocument()
    expect(screen.getByText(/thorough background screening/)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Eco-Friendly' })).toBeInTheDocument()
    expect(screen.getByText(/safe for kids, pets, and the planet/)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Satisfaction Guaranteed' })).toBeInTheDocument()
    expect(screen.getByText(/re-clean for free within 24 hours/)).toBeInTheDocument()
  })
})
