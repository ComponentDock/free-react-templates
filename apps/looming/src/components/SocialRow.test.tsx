import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SocialRow } from './SocialRow'
import type { SocialLink } from './SocialIcon'

describe('SocialRow', () => {
  it('left-aligns three 36×36 filled circles with white glyphs', () => {
    render(<SocialRow />)

    const row = screen.getByTestId('social-row')

    expect(row).toHaveClass('flex', 'flex-wrap')
    expect(row.className).not.toContain('justify-center')

    const links = screen.getAllByRole('link')

    expect(links.map((link) => link.getAttribute('aria-label'))).toEqual([
      'Facebook',
      'Twitter',
      'YouTube',
    ])

    for (const link of links) {
      expect(link).toHaveAttribute('href', '#')
      expect(link).toHaveClass(
        'mr-[15px]',
        'mb-[10px]',
        'flex',
        'size-9',
        'items-center',
        'justify-center',
        'rounded-full',
        'bg-social',
        'text-white',
        'transition-all',
        'duration-[400ms]',
        'hover:bg-social-hover',
      )
      expect(link.className).not.toContain('border')

      const glyph = link.querySelector('svg')

      expect(glyph).not.toBeNull()
      expect(glyph).toHaveClass('size-[22px]')
      expect(glyph).toHaveAttribute('aria-hidden', 'true')
    }
  })

  it('takes its own set of marks and layout overrides', () => {
    const links: readonly SocialLink[] = [
      {
        label: 'Instagram',
        href: 'https://example.com/ig',
        Icon: ({ className }: { className?: string }) => (
          <svg aria-hidden="true" className={className} />
        ),
      },
    ]

    render(<SocialRow links={links} className="mb-0" />)

    expect(screen.getByRole('link', { name: 'Instagram' })).toHaveAttribute(
      'href',
      'https://example.com/ig',
    )
    expect(screen.getByTestId('social-row')).toHaveClass('mb-0')
  })
})
