import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SOCIAL_BRANDS } from './SocialLink'
import { SocialBand } from './SocialBand'

describe('SocialBand', () => {
  it('puts an upper-case caption and three ringed circles on the bottom edge', () => {
    render(<SocialBand />)

    const band = screen.getByTestId('social-band')

    expect(band).toHaveClass('flex', 'flex-wrap', 'items-center')
    expect(screen.getByTestId('social-caption')).toHaveTextContent('Keep in touch')
    expect(screen.getByTestId('social-caption')).toHaveClass(
      'pr-[40px]',
      'text-[16px]',
      'leading-[1.2]',
      'text-subline',
      'uppercase',
    )

    const links = ['Facebook', 'Twitter', 'YouTube'].map((label) =>
      screen.getByRole('link', { name: label }),
    )

    expect(links).toHaveLength(3)
    expect(band.children[0]).toBe(screen.getByTestId('social-caption'))
    expect(band.children[1]).toBe(links[0])
  })

  it('takes its own marks and layout overrides', () => {
    const [brand] = SOCIAL_BRANDS

    render(<SocialBand brands={[brand!]} className="pr-0" />)

    expect(screen.getAllByRole('link')).toHaveLength(1)
    expect(screen.getByTestId('social-band')).toHaveClass('pr-0')
  })
})
