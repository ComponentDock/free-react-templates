import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'
import { features, featureSectionCopy } from '../data'

describe('Features', () => {
  it('renders the kicker, heading and CTA', () => {
    render(<Features />)
    expect(screen.getByText(featureSectionCopy.kicker)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /creative digital agency/ }),
    ).toBeInTheDocument()
    const cta = screen.getByRole('link', { name: featureSectionCopy.cta })
    expect(cta).toHaveAttribute('href', '#services')
  })

  it('renders all three feature cards with icon, title and blurb', () => {
    render(<Features />)
    for (const feature of features) {
      expect(screen.getByRole('heading', { level: 3, name: feature.title })).toBeInTheDocument()
      expect(screen.getByText(feature.description)).toBeInTheDocument()
    }
    expect(screen.getAllByRole('article')).toHaveLength(3)
  })
})
