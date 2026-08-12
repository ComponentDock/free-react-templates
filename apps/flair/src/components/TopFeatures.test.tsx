import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopFeatures } from './TopFeatures'
import { FEATURES } from '../data'

describe('TopFeatures', () => {
  it('renders the floating 3-card strip with icons, titles and text', () => {
    const { container } = render(<TopFeatures />)
    expect(screen.getByRole('region', { name: 'Top features' })).toBeInTheDocument()

    const card = Array.from(container.querySelectorAll('div')).find((el) =>
      el.className.includes('shadow-[2px_3px_10px_rgba(0,0,0,0.15)]'),
    )
    expect(card).toBeDefined()

    for (const feature of FEATURES) {
      expect(screen.getByRole('heading', { level: 3, name: feature.title })).toBeInTheDocument()
      expect(screen.getByText(feature.text)).toBeInTheDocument()
    }
    // One icon per card (lucide svgs render inside the cards).
    expect(container.querySelectorAll('svg')).toHaveLength(FEATURES.length)
  })
})
