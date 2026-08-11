import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { HERO_ADDRESS, HERO_CTA, HERO_HEADLINE } from '../data'

describe('Hero', () => {
  it('renders a full-viewport hero with a cover photo and dark overlay', () => {
    const { container } = render(<Hero />)

    const section = container.querySelector('section') as HTMLElement
    expect(section.className).toMatch(/min-h-\[600px\]/)
    expect(section.className).toMatch(/h-screen/)
    expect(section.querySelector('img')).toHaveAttribute(
      'src',
      expect.stringContaining('dwell-hero'),
    )
    expect(container.querySelector('[aria-hidden="true"]')?.className).toMatch(/bg-black\/40/)
  })

  it('renders the centered headline, address line and Take a Tour CTA', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe(HERO_HEADLINE)
    expect(heading.className).toMatch(/font-heading/)
    expect(heading.className).toMatch(/uppercase/)

    expect(screen.getByText(HERO_ADDRESS)).toBeInTheDocument()

    const cta = screen.getByRole('link', { name: HERO_CTA })
    expect(cta).toHaveAttribute('href', '#home')
    expect(cta.className).toMatch(/bg-brand/)
    expect(cta.className).toMatch(/rounded-none/)
  })
})
