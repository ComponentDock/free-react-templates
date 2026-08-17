import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FeatureCards } from './FeatureCards'
import { FEATURES } from '../data'

describe('FeatureCards', () => {
  it('renders four pastel cards with title, distinct blurb, and icon', () => {
    render(<FeatureCards />)
    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(4)
    const blurbs = new Set<string>()
    for (const feature of FEATURES) {
      const title = screen.getByRole('heading', { name: feature.title })
      expect(title).toBeInTheDocument()
      expect(screen.getByText(feature.text)).toBeInTheDocument()
      blurbs.add(feature.text)
      expect(screen.getByLabelText(`${feature.title} icon`)).toBeInTheDocument()
    }
    expect(blurbs.size).toBe(4)
  })

  it('applies the pastel background and icon color classes', () => {
    const { container } = render(<FeatureCards />)
    const cards = container.querySelectorAll('article')
    FEATURES.forEach((feature, i) => {
      expect(cards[i]!.className).toContain(feature.bg)
      expect(cards[i]!.querySelector('span')!.className).toContain(feature.iconColor)
    })
  })
})
