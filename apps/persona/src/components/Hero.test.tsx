import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { heroCtaHref, heroCtaLabel, heroHeadline } from '../data'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the full-bleed blurred background photo', () => {
    const { container } = render(<Hero />)
    const img = container.querySelector('img')
    expect(img).toBeInTheDocument()
    expect(img?.getAttribute('src')).toContain('picsum.photos/seed/persona-1')
    expect(img?.getAttribute('alt')).toBe('')
  })

  it('shows the three-line bold white headline', () => {
    render(<Hero />)
    const region = screen.getByRole('region', { name: 'Personal Website' })
    for (const line of heroHeadline) {
      expect(within(region).getByText(line)).toBeInTheDocument()
    }
  })

  it('shows a white pill CTA that links to the contact section', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: heroCtaLabel })
    expect(cta).toHaveAttribute('href', heroCtaHref)
    expect(cta).toHaveClass('rounded-full', 'bg-white')
  })
})
