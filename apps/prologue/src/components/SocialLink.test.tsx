import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SOCIAL_BRANDS, SocialLink } from './SocialLink'

describe('SOCIAL_BRANDS', () => {
  it('ships the three marks the design rings, in order', () => {
    expect(SOCIAL_BRANDS.map(({ label }) => label)).toEqual(['Facebook', 'Twitter', 'YouTube'])
    expect(SOCIAL_BRANDS.every(({ href }) => href === '#')).toBe(true)
  })
})

describe('SocialLink', () => {
  it('is a hairline-ringed transparent circle with a 16px glyph', () => {
    const [brand] = SOCIAL_BRANDS

    render(<SocialLink label={brand!.label} href={brand!.href} Icon={brand!.Icon} />)

    const link = screen.getByRole('link', { name: 'Facebook' })

    expect(link).toHaveAttribute('href', '#')
    expect(link).toHaveClass(
      'my-[5px]',
      'mr-[15px]',
      'flex',
      'size-9',
      'items-center',
      'justify-center',
      'rounded-full',
      'border',
      'border-hairline',
      'bg-transparent',
      'text-glyph',
      'transition-all',
      'duration-[400ms]',
      'hover:bg-ink',
      'hover:text-white',
    )

    const glyph = link.querySelector('svg')

    expect(glyph).not.toBeNull()
    expect(glyph).toHaveClass('size-[16px]')
  })

  it('accepts layout overrides', () => {
    const [brand] = SOCIAL_BRANDS

    render(
      <SocialLink label={brand!.label} href={brand!.href} Icon={brand!.Icon} className="mr-0" />,
    )

    expect(screen.getByRole('link', { name: 'Facebook' })).toHaveClass('mr-0')
  })
})
