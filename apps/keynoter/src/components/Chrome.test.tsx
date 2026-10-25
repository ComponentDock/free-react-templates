import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SOCIALS } from '../content'
import { SkipLink, SocialRail } from './Chrome'

describe('SkipLink', () => {
  it('jumps to the main landmark', () => {
    render(<SkipLink />)
    expect(screen.getByRole('link', { name: 'Skip to content' })).toHaveAttribute(
      'href',
      '#main-content',
    )
  })
})

describe('SocialRail', () => {
  it('renders five labelled brand glyphs pointing at the marketplace', () => {
    render(<SocialRail className="extra" />)
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(SOCIALS.length)
    for (const [index, link] of links.entries()) {
      expect(link).toHaveAccessibleName(`Keynoter on ${SOCIALS[index]!.label}`)
      expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
      expect(link.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
    }
    expect(links[0]?.parentElement?.parentElement?.className).toContain('extra')
  })

  it('sizes the glyphs from the size prop', () => {
    render(<SocialRail size={30} />)
    const svg = document.querySelector('svg') as SVGElement
    expect(svg.style.width).toBe('30px')
    expect(svg.style.height).toBe('30px')
  })
})
