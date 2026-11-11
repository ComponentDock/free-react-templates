import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HEADLINE, TITLE_ID } from '../data/site'
import { RestaurantHero } from './RestaurantHero'

describe('RestaurantHero', () => {
  it('is one section labelled by its own headline', () => {
    const { container } = render(<RestaurantHero />)

    const sections = container.querySelectorAll('section')
    expect(sections).toHaveLength(1)
    expect(sections[0]).toHaveAttribute('aria-labelledby', TITLE_ID)
    expect(sections[0]).toHaveClass('tt-hero')
    expect(screen.getByRole('heading', { level: 1 })).toHaveAttribute('id', TITLE_ID)
  })

  it('pairs one copy column with one hours card, in that order', () => {
    const { container } = render(<RestaurantHero />)

    const children = container.querySelector('section')?.children ?? []
    expect(children).toHaveLength(2)
    expect(children[0]).toHaveClass('tt-copy')
    expect(children[1]).toHaveClass('tt-hours')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(HEADLINE.accent)
  })
})
