import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Speciality } from './Speciality'

describe('Speciality', () => {
  it('shows the section title and four cards with icons, headings and blurbs', () => {
    const { container } = render(<Speciality />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/Our Course Speciality/)

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(4)
    expect(within(cards[0]!).getByRole('heading', { name: 'Premium Quality' })).toBeInTheDocument()

    // Icon badges alternate purple and teal glyphs; four icon svgs total.
    expect(container.querySelectorAll('svg.lucide-palette')).toHaveLength(1)
    expect(container.querySelectorAll('svg.lucide-briefcase')).toHaveLength(1)
    expect(container.querySelectorAll('svg.lucide-award')).toHaveLength(1)
    expect(container.querySelectorAll('svg.lucide-crown')).toHaveLength(1)
    const badges = container.querySelectorAll('[data-icon-badge]')
    expect(badges).toHaveLength(4)
    expect(badges[0]?.getAttribute('data-icon-badge')).toBe('iris')
    expect(badges[1]?.getAttribute('data-icon-badge')).toBe('brand')
  })
})
