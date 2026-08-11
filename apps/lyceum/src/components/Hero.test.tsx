import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { heroCtaLabel, heroHeading, heroParagraph, heroSeed } from '../data'

describe('Hero', () => {
  it('renders the headline, paragraph and green CTA over the banner photo', () => {
    const { container } = render(<Hero />)

    const section = container.querySelector('section')!
    expect(section.getAttribute('style')).toContain(`picsum.photos/seed/${heroSeed}/1600/900`)

    expect(screen.getByRole('heading', { level: 1, name: heroHeading })).toBeInTheDocument()
    expect(screen.getByText(heroParagraph)).toBeInTheDocument()

    const cta = screen.getByRole('link', { name: heroCtaLabel })
    expect(cta).toHaveAttribute('href', '#')
    expect(cta.getAttribute('class')).toContain('bg-brand')
    expect(cta.getAttribute('class')).toContain('hover:bg-transparent')
    expect(cta.getAttribute('class')).toContain('hover:text-brand')
  })
})
