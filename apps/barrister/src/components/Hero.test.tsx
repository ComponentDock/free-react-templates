import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { HERO } from '../data'

describe('Hero', () => {
  it('renders the kicker, headline, CTA link, and gold accent rule', () => {
    const { container } = render(<Hero />)

    const section = screen.getByRole('region', { name: 'Hero' })
    expect(section).toHaveClass('bg-slate')

    expect(screen.getByText(HERO.kicker)).toHaveClass('text-brand')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(HERO.headline)
    expect(screen.getByRole('link', { name: HERO.button })).toHaveAttribute(
      'href',
      '#services-section',
    )

    const img = container.querySelector('img')!
    expect(img).toHaveAttribute('src', HERO.photo)
    expect(img).toHaveAttribute('alt', '')

    const rules = container.querySelectorAll('[aria-hidden="true"]')
    expect(rules.length).toBeGreaterThanOrEqual(2)
    expect(container.querySelector('.h-\\[100px\\]')).toBeInTheDocument()
  })
})