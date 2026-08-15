import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Features } from './Features'
import { featureItems, featuresEyebrow, featuresLead, featuresTitle } from '../data'

describe('Features', () => {
  it('renders the eyebrow, heading, intro paragraph, and six feature cards with icons', () => {
    const { container } = render(<Features />)
    expect(screen.getByText(featuresEyebrow)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(featuresTitle)
    expect(screen.getByText(featuresLead)).toBeInTheDocument()
    for (const item of featureItems) {
      expect(screen.getByRole('heading', { level: 3, name: item.title })).toBeInTheDocument()
    }
    expect(container.querySelectorAll('svg').length).toBe(featureItems.length)
  })

  it('renders each card with a circular red icon, heading, and muted paragraph', () => {
    const { container } = render(<Features />)
    const circles = container.querySelectorAll('[class*="bg-brand"]')
    expect(circles.length).toBeGreaterThanOrEqual(featureItems.length)
    // All cards share the same muted paragraph text — assert the count.
    expect(screen.getAllByText(featureItems[0]!.text).length).toBe(featureItems.length)
  })
})
