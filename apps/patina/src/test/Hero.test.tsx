import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from '../components/Hero'
import { hero } from '../content'

describe('Hero', () => {
  it('is a full-bleed photograph under a 65 % ink wash', () => {
    const { container } = render(<Hero />)

    const image = screen.getByAltText(hero.imageAlt)
    expect(image).toHaveAttribute('src', hero.image)
    expect(image).toHaveClass('absolute', 'object-cover')
    expect(container.querySelector('.bg-ink-900\\/65')).not.toBeNull()
    expect(container.querySelector('section')).toHaveClass('min-h-[70vh]', 'lg:min-h-[88vh]')
  })

  it('carries the eyebrow, one h1, the lead and the square brass CTA', () => {
    render(<Hero />)

    expect(screen.getByText(hero.eyebrow)).toHaveClass('text-primary-400', 'uppercase')
    expect(screen.getByRole('heading', { level: 1, name: hero.headline })).toHaveClass('font-serif')
    expect(screen.getByText(hero.lead)).toHaveClass('text-ink-100', 'max-w-xl')

    const cta = screen.getByRole('link', { name: hero.cta })
    expect(cta).toHaveAttribute('href', '#contact')
    expect(cta).toHaveClass('border-primary-500', 'px-8', 'py-4')
    expect(cta).not.toHaveClass('rounded-lg')
  })
})
