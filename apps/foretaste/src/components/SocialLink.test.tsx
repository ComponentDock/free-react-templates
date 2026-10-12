import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SOCIAL_BRANDS, SocialLink } from './SocialLink'
import type { SocialBrand } from './SocialLink'

function brand(label: string): SocialBrand {
  const found = SOCIAL_BRANDS.find((candidate) => candidate.label === label)
  if (!found) {
    throw new Error(`no such brand: ${label}`)
  }
  return found
}

describe('SocialLink', () => {
  it('rings a 36x36 circle in white and inverts it on hover', () => {
    const facebook = brand('Facebook')
    render(<SocialLink {...facebook} />)

    const link = screen.getByRole('link', { name: facebook.label })

    expect(link).toHaveAttribute('href', facebook.href)
    expect(link).toHaveClass(
      'flex',
      'size-9',
      'items-center',
      'justify-center',
      'rounded-full',
      'border',
      'border-white',
      'bg-transparent',
      'text-white',
      'transition-all',
      'duration-[400ms]',
      'hover:bg-white',
      'hover:text-tile',
      'focus-visible:ring-2',
      'focus-visible:ring-white',
    )
  })

  it('paints the glyph at 18px and hides it from assistive tech', () => {
    render(<SocialLink {...brand('Twitter')} />)

    const glyph = screen.getByRole('link', { name: 'Twitter' }).querySelector('svg')

    expect(glyph).toHaveAttribute('aria-hidden', 'true')
    expect(glyph).toHaveClass('size-[18px]')
  })

  it('ships the three brand marks the design rings', () => {
    expect(SOCIAL_BRANDS.map((mark) => mark.label)).toEqual(['Facebook', 'Twitter', 'YouTube'])
    expect(SOCIAL_BRANDS.every((mark) => mark.href === '#')).toBe(true)
  })

  it('accepts layout overrides', () => {
    render(<SocialLink {...brand('YouTube')} className="opacity-60" />)

    expect(screen.getByRole('link', { name: 'YouTube' })).toHaveClass('opacity-60')
  })
})
