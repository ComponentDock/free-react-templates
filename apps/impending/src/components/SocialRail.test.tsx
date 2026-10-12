import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SocialRail } from './SocialRail'
import type { SocialLink } from './SocialIcon'

function StubIcon() {
  return <svg data-testid="stub-icon" />
}

describe('SocialRail', () => {
  it('stacks three bare 36×36 boxes down the left edge, dropped 470px', () => {
    render(<SocialRail />)

    const rail = screen.getByTestId('social-rail')

    expect(rail).toHaveClass(
      'flex',
      'flex-col',
      'flex-wrap',
      'pt-[470px]',
      'max-[992px]:flex-row',
      'max-[992px]:justify-center',
      'max-[992px]:pt-[100px]',
      'max-[992px]:pb-[30px]',
    )
    expect(rail.children).toHaveLength(3)

    for (const label of ['Facebook', 'Twitter', 'Pinterest']) {
      const link = screen.getByRole('link', { name: label })

      expect(link).toHaveAttribute('href', '#')
      expect(link).toHaveClass(
        'mx-[3px]',
        'mb-[5px]',
        'flex',
        'size-9',
        'items-center',
        'justify-center',
        'bg-transparent',
        'text-white',
        'transition-all',
        'duration-[400ms]',
        'hover:text-white/20',
      )
      // no border and no radius: the square look comes from the glyphs
      expect(link.className).not.toContain('border')
      expect(link.className).not.toContain('rounded')
      expect(link.querySelector('svg')).toHaveClass('size-[28px]')
    }
  })

  it('accepts its own links and layout overrides', () => {
    const links: readonly SocialLink[] = [{ label: 'Mastodon', href: '#m', Icon: StubIcon }]

    render(<SocialRail links={links} className="pt-0" />)

    const rail = screen.getByTestId('social-rail')

    expect(rail).toHaveClass('pt-0')
    expect(rail.children).toHaveLength(1)
    expect(screen.getByRole('link', { name: 'Mastodon' })).toHaveAttribute('href', '#m')
    expect(screen.getByTestId('stub-icon')).toBeInTheDocument()
  })
})
