import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  const expectedFeatures = [
    { title: 'Refreshing Breakfast', description: 'Start your day with our freshly brewed coffee' },
    { title: 'Awesome Lunch', description: 'Midday meals crafted to refuel your energy' },
    { title: 'Soothing Dinner', description: 'Wind down your evening with elegant dishes' },
    { title: 'Rich Quality Buffet', description: 'An extensive spread of curated dishes' },
  ]

  it('shows all 4 features', () => {
    render(<Features />)
    for (const feat of expectedFeatures) {
      expect(screen.getByRole('heading', { level: 3, name: feat.title })).toBeInTheDocument()
    }
  })

  it('each feature has a description', () => {
    render(<Features />)
    for (const feat of expectedFeatures) {
      expect(screen.getByText(new RegExp(feat.description))).toBeInTheDocument()
    }
  })

  it('each feature has an icon (SVG with aria-hidden)', () => {
    render(<Features />)
    const hiddenSvgs = document.querySelectorAll('[aria-hidden="true"]')
    // 4 lucide icons, each rendered as SVG with aria-hidden="true"
    expect(hiddenSvgs.length).toBeGreaterThanOrEqual(4)
  })

  it('renders the correct number of feature cards', () => {
    render(<Features />)
    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings).toHaveLength(4)
  })
})
