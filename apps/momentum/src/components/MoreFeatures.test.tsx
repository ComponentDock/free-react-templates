import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MoreFeatures } from './MoreFeatures'
import { moreFeatures } from '../data'

describe('MoreFeatures', () => {
  it('renders the full-viewport dark section with three feature cards', () => {
    const { container } = render(<MoreFeatures />)

    const section = container.querySelector('section')!
    expect(section.className).toContain('min-h-screen')
    expect(section.getAttribute('style')).toContain('momentum-features')
    expect(section.querySelector('div[aria-hidden="true"]')).not.toBeNull()

    expect(screen.getByText(moreFeatures.kicker)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: moreFeatures.title })).toBeInTheDocument()
    expect(screen.getByText(moreFeatures.blurb)).toBeInTheDocument()

    for (const item of moreFeatures.items) {
      expect(screen.getByRole('heading', { name: item.title })).toBeInTheDocument()
      expect(screen.getByText(item.description)).toBeInTheDocument()
    }
  })
})
