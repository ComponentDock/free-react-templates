import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SocialRail } from './SocialRail'
import { socials } from '../data'

describe('SocialRail', () => {
  it('renders five circular social links on the screen edge', () => {
    render(<SocialRail />)
    const rail = screen.getByRole('complementary', { name: 'Social links' })
    const links = within(rail).getAllByRole('link')
    expect(links).toHaveLength(socials.length)
    for (const social of socials) {
      expect(within(rail).getByRole('link', { name: social.label })).toHaveAttribute(
        'href',
        social.href,
      )
    }
    expect(rail.className).toContain('min-[992px]:flex')
    expect(rail.className).toContain('hidden')
  })
})
