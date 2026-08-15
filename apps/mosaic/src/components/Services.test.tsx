import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading, blurb and four service cards', () => {
    render(<Services />)

    expect(screen.getByRole('heading', { level: 2, name: 'Our Services' })).toBeInTheDocument()
    expect(screen.getAllByText(/Far far away, behind the word mountains/).length).toBeGreaterThan(0)

    for (const title of ['Strategy', 'Design', 'Development', 'Help & Supports']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })

  it('renders each card with a tinted hexagon chip and a blurb', () => {
    render(<Services />)

    const section = screen.getByRole('region', { name: 'Our Services' })
    const chips = section.querySelectorAll('span')
    const hexagons = Array.from(chips).filter((chip) => chip.className.includes('clip-path'))
    expect(hexagons).toHaveLength(4)
    for (const chip of hexagons) {
      expect(chip.querySelector('svg')).not.toBeNull()
    }
    expect(section.querySelectorAll('article p')).toHaveLength(4)
  })
})
