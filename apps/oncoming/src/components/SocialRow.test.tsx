import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SocialRow } from './SocialRow'
import type { SocialLink } from './SocialIcon'

function StubIcon() {
  return <svg data-testid="stub-icon" />
}

describe('SocialRow', () => {
  it('centres three white-outlined 36×36 circles that invert on hover', () => {
    render(<SocialRow />)

    const row = screen.getByTestId('social-row')

    expect(row).toHaveClass('flex', 'flex-wrap', 'items-center', 'justify-center', 'pb-[35px]')
    expect(row.children).toHaveLength(3)

    for (const label of ['Facebook', 'Twitter', 'YouTube']) {
      const link = screen.getByRole('link', { name: label })

      expect(link).toHaveAttribute('href', '#')
      expect(link).toHaveClass(
        'mx-[3px]',
        'mb-[5px]',
        'flex',
        'size-9',
        'items-center',
        'justify-center',
        'rounded-full',
        'border',
        'border-white',
        'bg-transparent',
        'text-social-glyph',
        'transition-all',
        'duration-[400ms]',
        'hover:bg-white',
        'hover:text-social-glyph-hover',
      )
      expect(link.querySelector('svg')).toHaveClass('size-[18px]')
    }
  })

  it('accepts its own links and layout overrides', () => {
    const links: readonly SocialLink[] = [{ label: 'Mastodon', href: '#m', Icon: StubIcon }]

    render(<SocialRow links={links} className="pb-0" />)

    const row = screen.getByTestId('social-row')

    expect(row).toHaveClass('pb-0')
    expect(row.children).toHaveLength(1)
    expect(screen.getByRole('link', { name: 'Mastodon' })).toHaveAttribute('href', '#m')
    expect(screen.getByTestId('stub-icon')).toBeInTheDocument()
  })
})
