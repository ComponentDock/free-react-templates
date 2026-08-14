import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CaseStudies } from './CaseStudies'
import { caseStudies } from '../data'

describe('CaseStudies', () => {
  it('renders the subheading, heading and intro paragraph', () => {
    render(<CaseStudies />)
    expect(screen.getByText(caseStudies.subheading)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: caseStudies.heading })).toBeInTheDocument()
    expect(screen.getByText(caseStudies.intro)).toBeInTheDocument()
  })

  it('renders six gallery items with category tags, titles and hover CTAs', () => {
    render(<CaseStudies />)
    const items = screen.getAllByRole('article')
    expect(items).toHaveLength(6)
    for (const item of caseStudies.items) {
      expect(screen.getAllByText(item.category).length).toBeGreaterThanOrEqual(1)
    }
    expect(screen.getAllByText('Consultacy Solutions')).toHaveLength(6)
    expect(screen.getAllByRole('link', { name: 'Request Quote' })).toHaveLength(6)
  })

  it('hides the teal overlay until the item is hovered', () => {
    render(<CaseStudies />)
    const first = screen.getAllByRole('article')[0]!
    const overlay = first.querySelector('.bg-brand\\/85')
    expect(overlay).not.toBeNull()
    expect(overlay!.className).toContain('opacity-0')
  })
})
