import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Owner } from './Owner'
import { OWNER } from '../content'

describe('Owner', () => {
  it('centres the testimony on a 112 px portrait', () => {
    const { container } = render(<Owner />)
    const image = screen.getByRole('img', { name: OWNER.imageAlt })
    expect(image).toHaveClass('h-28', 'w-28', 'rounded-full')
    expect(container.querySelector('section')).toHaveAttribute('id', 'owner')
    expect(screen.getByText(OWNER.kicker)).toHaveClass('text-primary-700')
  })

  it('sets the confession as the second headline and signs it', () => {
    render(<Owner />)
    expect(screen.getByText(OWNER.lede)).toHaveClass(
      'font-serif',
      'text-2xl',
      'leading-snug',
      'sm:text-3xl',
      'text-ink-800',
    )
    for (const paragraph of OWNER.paragraphs) {
      expect(screen.getByText(paragraph)).toHaveClass('text-lg', 'text-ink-600')
    }
    expect(screen.getByText(OWNER.signature)).toHaveClass('font-serif', 'text-xl')
    expect(screen.getByText(OWNER.role)).toHaveClass(
      'text-xs',
      'uppercase',
      'tracking-[0.18em]',
      'text-ink-400',
    )
  })

  it('links onward with a bronze rule rather than an underline', () => {
    render(<Owner />)
    const link = screen.getByRole('link', { name: OWNER.link })
    expect(link).toHaveAttribute('href', '#services')
    expect(link).toHaveClass('border-b-2', 'border-primary-600', 'pb-1')
    expect(link).not.toHaveClass('underline')
  })
})
