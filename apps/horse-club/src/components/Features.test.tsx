import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

const featureNames = [
  'Expert Technicians',
  'Professional Service',
  'Great Support',
  'Technical Skills',
  'Highly Recomended',
  'Positive Reviews',
] as const

describe('Features', () => {
  it('shows the section heading and the six feature cards', () => {
    render(<Features />)

    expect(screen.getByRole('heading', { name: /Our Featured Services/ })).toBeInTheDocument()
    for (const name of featureNames) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
  })

  it('shows a copy paragraph inside every feature card', () => {
    const { container } = render(<Features />)

    for (const name of featureNames) {
      const card = container.querySelector(`[data-feature="${name}"]`)
      expect(card).not.toBeNull()
      expect(card?.querySelector('p')?.textContent?.length).toBeGreaterThan(10)
      expect(card?.querySelector('svg')?.getAttribute('aria-hidden')).toBe('true')
    }
  })
})
