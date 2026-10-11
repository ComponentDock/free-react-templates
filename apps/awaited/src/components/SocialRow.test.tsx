import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SocialRow } from './SocialRow'

describe('SocialRow', () => {
  it('renders three white-outlined circular discs in the built-in brand glyphs', () => {
    render(<SocialRow />)

    const row = screen.getByTestId('social-row')

    expect(row).toHaveClass('flex', 'flex-wrap', 'items-center', 'justify-center', 'pb-[35px]')

    for (const label of ['Facebook', 'Twitter', 'Youtube']) {
      const disc = screen.getByRole('link', { name: label })

      expect(disc).toHaveClass(
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
        'text-white',
        'transition-all',
        'duration-[400ms]',
      )
      expect(disc).toHaveAttribute('href', '#')
      expect(disc.querySelector('svg')).not.toBeNull()
    }

    expect(row.children).toHaveLength(3)
  })

  it('fills a disc white and darkens its glyph on hover', () => {
    render(<SocialRow />)

    expect(screen.getByRole('link', { name: 'Facebook' })).toHaveClass(
      'hover:bg-white',
      'hover:text-disc-hover',
    )
  })

  it('accepts its own links and layout overrides', () => {
    render(
      <SocialRow
        className="pb-0"
        links={[{ label: 'Mastodon', href: 'https://example.com/', Icon: () => <svg /> }]}
      />,
    )

    const disc = screen.getByRole('link', { name: 'Mastodon' })

    expect(disc).toHaveAttribute('href', 'https://example.com/')
    expect(screen.getByTestId('social-row')).toHaveClass('pb-0')
  })
})
