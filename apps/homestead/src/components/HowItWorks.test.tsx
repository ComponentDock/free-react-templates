import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HowItWorks } from './HowItWorks'
import { howItWorksImageAlt, steps } from '../data'

describe('HowItWorks', () => {
  it('renders the white heading variant and four numbered pink-circle steps', () => {
    const { container } = render(<HowItWorks />)
    expect(screen.getByText('Work flow')).toBeInTheDocument()
    const heading = screen.getByRole('heading', { level: 2, name: 'How it works' })
    expect(heading.closest('div')).toHaveClass('text-white')

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(steps.length)
    for (const step of steps) {
      expect(screen.getByRole('heading', { level: 3, name: step.title })).toBeInTheDocument()
    }

    // Pink circles with white numbers (scoped to rounded-full circles — the
    // SectionHeading flanking rules also use bg-brand).
    const circles = container.querySelectorAll('.rounded-full.bg-brand')
    expect(circles.length).toBe(steps.length)
    expect(circles[0]).toHaveTextContent('01')

    // Overlay + photo background + angled divider strips.
    const overlay = container.querySelector('.bg-black\\/40')
    expect(overlay).not.toBeNull()
    expect(container.querySelector('img')).toHaveAttribute('alt', howItWorksImageAlt)
    expect(
      container.querySelectorAll('[class*="skewY(4deg)"], [class*="skewY(-4deg)"]').length,
    ).toBe(2)
  })
})
