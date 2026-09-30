import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FeatureCards } from './FeatureCards'

describe('FeatureCards', () => {
  it('renders three feature cards with headings, copy and CTAs', () => {
    render(<FeatureCards />)
    for (const card of ['Matchday Experience', 'Youth Academy', 'Club Heritage']) {
      expect(screen.getByRole('heading', { level: 3, name: card })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: /read more/i })).toHaveLength(3)
  })

  it('renders readable text content in every card (touch-safe reveal)', () => {
    render(<FeatureCards />)
    expect(screen.getByText(/Gates, chants and ninety minutes/i)).toBeInTheDocument()
    expect(screen.getByText(/how our academy shapes future captains/i)).toBeInTheDocument()
    expect(screen.getByText(/century of colors, crests and comebacks/i)).toBeInTheDocument()
  })
})
