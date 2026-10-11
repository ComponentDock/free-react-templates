import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BadgeShowcase } from './BadgeShowcase'

describe('BadgeShowcase', () => {
  it('renders the notification counts, contextual variations, and pill badges', () => {
    const { container } = render(<BadgeShowcase />)

    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Badge')
    expect(
      screen.getByRole('heading', { level: 4, name: 'Contextual Variations' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: 'Pill badges' })).toBeInTheDocument()

    const badges = Array.from(container.querySelectorAll('span')).filter((span) =>
      span.className.includes('text-[10px]'),
    )
    expect(badges).toHaveLength(20)

    const tinted = badges.filter((badge) => badge.className.includes('bg-kit-primary/10'))
    expect(tinted).toHaveLength(2)
    tinted.forEach((badge) => expect(badge.textContent).toBe('Primary'))

    const warning = badges.filter((badge) => badge.className.includes('bg-kit-warning/50'))
    expect(warning).toHaveLength(2)

    expect(screen.getAllByText('4')).toHaveLength(4)
    expect(screen.getAllByText('Dark')).toHaveLength(2)
  })
})
